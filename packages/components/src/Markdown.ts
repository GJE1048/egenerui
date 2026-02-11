import { Component, ComponentConfig } from '@my-gradio/core'

// 简单的 Markdown 解析器（实际项目建议使用 marked 或 markdown-it）
function simpleMarkdownToHTML(markdown: string): string {
  let html = markdown
  
  // 标题
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  // 加粗和斜体
  html = html.replace(/\*\*\*(.*?)\*\*\*/gim, '<strong><em>$1</em></strong>')
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>')
  
  // 链接
  html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2" target="_blank">$1</a>')
  
  // 图片
  html = html.replace(/\!\[(.*?)\]\((.*?)\)/gim, '<img src="$2" alt="$1" />')
  
  // 代码块
  html = html.replace(/```([\s\S]*?)```/gim, (match, code) => {
    return `<pre><code>${escapeHtml(code.trim())}</code></pre>`
  })
  
  // 行内代码
  html = html.replace(/`(.*?)`/gim, '<code>$1</code>')
  
  // 引用
  html = html.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
  
  // 无序列表
  html = html.replace(/^\s*[\-\*]\s+(.*$)/gim, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul>$1</ul>')
  
  // 有序列表
  html = html.replace(/^\s*\d+\.\s+(.*$)/gim, '<li>$1</li>')
  html = html.replace(/(<li>.*<\/li>)/gim, '<ol>$1</ol>')
  
  // 段落
  html = html.replace(/^\s*$/gim, '<br/>')
  html = html.replace(/^(?!<h|<ul|<ol|<li|<blockquote|<pre|<img|<br|<p)(.*$)/gim, '<p>$1</p>')
  
  return html
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, m => map[m])
}

export interface MarkdownConfig extends ComponentConfig {
  value?: string
  showLabel?: boolean
  latex?: boolean // 是否支持 LaTeX
  lineBreaks?: boolean
}

export class MarkdownComponent extends Component<string> {
  private _contentElement: HTMLElement | null = null
  
  constructor(config: MarkdownConfig = {}) {
    super('markdown', config)
    this._value = config.value ?? ''
  }
  
  protected getDefaultValue(): string {
    return ''
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-markdown-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-markdown-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Content
    this._contentElement = document.createElement('div')
    this._contentElement.className = 'gr-markdown-content'
    this._contentElement.innerHTML = this.renderMarkdown(this._value)
    
    container.appendChild(this._contentElement)
    return container
  }
  
  private renderMarkdown(markdown: string): string {
    let html = simpleMarkdownToHTML(markdown)
    
    // 处理换行
    if (this._config.lineBreaks) {
      html = html.replace(/\n/g, '<br/>')
    }
    
    // LaTeX 支持（需要引入 MathJax 或 KaTeX）
    if (this._config.latex) {
      // 标记 LaTeX 公式
      html = html.replace(/\$\$(.*?)\$\$/g, '<span class="math-display">$1</span>')
      html = html.replace(/\$(.*?)\$/g, '<span class="math-inline">$1</span>')
    }
    
    return html
  }
  
  protected updateElement(): void {
    if (this._contentElement) {
      this._contentElement.innerHTML = this.renderMarkdown(this._value)
      
      // 渲染 LaTeX（如果启用）
      if (this._config.latex && (window as any).MathJax) {
        ;(window as any).MathJax.typesetPromise([this._contentElement])
      }
    }
  }
  
  // 方法
  update(content: string): this {
    this.setValue(content)
    return this
  }
  
  append(content: string): this {
    this.setValue(this._value + '\n' + content)
    return this
  }
}

export type Markdown = MarkdownComponent
export function Markdown(config?: MarkdownConfig): MarkdownComponent {
  return new MarkdownComponent(config)
}
