import { Component, ComponentConfig } from '@my-gradio/core'

export interface FileConfig extends ComponentConfig {
  fileTypes?: string[] // ['.pdf', '.docx']
  fileCount?: number // 最多上传文件数
  showLabel?: boolean
  showDownloadButton?: boolean
  type?: 'file' | 'binary' | 'bytes'
}

export interface FileData {
  file: File
  name: string
  size: number
  type: string
  data?: string // base64
}

export class FileComponent extends Component<FileData | FileData[] | null> {
  private _dropZone: HTMLElement | null = null
  private _fileInput: HTMLInputElement | null = null
  private _fileList: HTMLElement | null = null
  private _uploadButton: HTMLButtonElement | null = null
  
  constructor(config: FileConfig = {}) {
    super('file', config)
    this._value = null
  }
  
  protected getDefaultValue(): FileData | FileData[] | null {
    return null
  }
  
  protected createElement(): HTMLElement {
    const container = super.createElement()
    container.className += ' gr-file-container'
    
    // Label
    if (this._config.label && this._config.showLabel !== false) {
      const label = document.createElement('label')
      label.className = 'gr-file-label'
      label.textContent = this._config.label
      container.appendChild(label)
    }
    
    // Drop zone
    this._dropZone = document.createElement('div')
    this._dropZone.className = 'gr-file-dropzone'
    
    // 上传按钮
    this._uploadButton = document.createElement('button')
    this._uploadButton.className = 'gr-file-upload-btn'
    this._uploadButton.type = 'button'
    this._uploadButton.innerHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 15V3M12 3L16 7M12 3L8 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 21H19C20.1046 21 21 20.1046 21 19V12C21 10.8954 20.1046 10 19 10H5C3.89543 10 3 10.8954 3 12V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" stroke-width="2"/>
      </svg>
      <span>Click to upload or drag and drop</span>
    `
    
    // File input
    this._fileInput = document.createElement('input')
    this._fileInput.type = 'file'
    this._fileInput.style.display = 'none'
    this._fileInput.multiple = (this._config.fileCount || 1) > 1
    
    if (this._config.fileTypes && this._config.fileTypes.length > 0) {
      this._fileInput.accept = this._config.fileTypes.join(',')
    }
    
    this._uploadButton.addEventListener('click', () => {
      this._fileInput!.click()
    })
    
    this._fileInput.addEventListener('change', (e) => {
      const files = (e.target as HTMLInputElement).files
      if (files && files.length > 0) {
        this.handleFiles(files)
      }
    })
    
    // 拖拽支持
    this._dropZone.addEventListener('dragover', (e) => {
      e.preventDefault()
      this._dropZone!.classList.add('drag-over')
    })
    
    this._dropZone.addEventListener('dragleave', () => {
      this._dropZone!.classList.remove('drag-over')
    })
    
    this._dropZone.addEventListener('drop', async (e) => {
      e.preventDefault()
      this._dropZone!.classList.remove('drag-over')
      
      const files = e.dataTransfer?.files
      if (files && files.length > 0) {
        this.handleFiles(files)
      }
    })
    
    this._dropZone.appendChild(this._uploadButton)
    container.appendChild(this._dropZone)
    
    // 文件列表
    this._fileList = document.createElement('div')
    this._fileList.className = 'gr-file-list'
    container.appendChild(this._fileList)
    
    return container
  }
  
  private async handleFiles(fileList: FileList): Promise<void> {
    const maxFiles = this._config.fileCount || 1
    const files = Array.from(fileList).slice(0, maxFiles)
    
    const fileData: FileData[] = []
    
    for (const file of files) {
      const reader = new FileReader()
      
      const data = await new Promise<string>((resolve) => {
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(file)
      })
      
      fileData.push({
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        data
      })
    }
    
    const newValue = fileData.length === 1 && maxFiles === 1 ? fileData[0] : fileData
    this.setValue(newValue)
    this.emitChange(newValue)
    
    this.updateFileList()
  }
  
  private updateFileList(): void {
    if (!this._fileList || !this._value) return
    
    this._fileList.innerHTML = ''
    
    const files = Array.isArray(this._value) ? this._value : [this._value]
    
    files.forEach((fileData, index) => {
      const fileItem = document.createElement('div')
      fileItem.className = 'gr-file-item'
      
      const fileInfo = document.createElement('div')
      fileInfo.className = 'gr-file-info'
      
      const fileName = document.createElement('div')
      fileName.className = 'gr-file-name'
      fileName.textContent = fileData.name
      
      const fileSize = document.createElement('div')
      fileSize.className = 'gr-file-size'
      fileSize.textContent = this.formatFileSize(fileData.size)
      
      fileInfo.appendChild(fileName)
      fileInfo.appendChild(fileSize)
      
      const fileActions = document.createElement('div')
      fileActions.className = 'gr-file-actions'
      
      // 预览按钮（如果是图片）
      if (fileData.type.startsWith('image/')) {
        const previewBtn = document.createElement('button')
        previewBtn.className = 'gr-file-btn'
        previewBtn.innerHTML = '👁️'
        previewBtn.title = 'Preview'
        previewBtn.addEventListener('click', () => this.previewFile(fileData))
        fileActions.appendChild(previewBtn)
      }
      
      // 下载按钮
      if (this._config.showDownloadButton) {
        const downloadBtn = document.createElement('button')
        downloadBtn.className = 'gr-file-btn'
        downloadBtn.innerHTML = '⬇️'
        downloadBtn.title = 'Download'
        downloadBtn.addEventListener('click', () => this.downloadFile(fileData))
        fileActions.appendChild(downloadBtn)
      }
      
      // 删除按钮
      const deleteBtn = document.createElement('button')
      deleteBtn.className = 'gr-file-btn'
      deleteBtn.innerHTML = '🗑️'
      deleteBtn.title = 'Remove'
      deleteBtn.addEventListener('click', () => this.removeFile(index))
      fileActions.appendChild(deleteBtn)
      
      fileItem.appendChild(fileInfo)
      fileItem.appendChild(fileActions)
      this._fileList!.appendChild(fileItem)
    })
  }
  
  private formatFileSize(bytes: number): string {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB'
  }
  
  private previewFile(fileData: FileData): void {
    const modal = document.createElement('div')
    modal.className = 'gr-file-preview-modal'
    modal.innerHTML = `
      <div class="gr-file-preview-content">
        <img src="${fileData.data}" alt="${fileData.name}" />
        <button class="gr-file-preview-close">&times;</button>
      </div>
    `
    
    document.body.appendChild(modal)
    
    modal.querySelector('.gr-file-preview-close')!.addEventListener('click', () => {
      modal.remove()
    })
  }
  
  private downloadFile(fileData: FileData): void {
    const link = document.createElement('a')
    link.href = fileData.data!
    link.download = fileData.name
    link.click()
  }
  
  private removeFile(index: number): void {
    if (!this._value) return
    
    let newValue: FileData | FileData[] | null
    
    if (Array.isArray(this._value)) {
      const updated = [...this._value]
      updated.splice(index, 1)
      newValue = updated.length === 0 ? null : updated
    } else {
      newValue = null
    }
    
    this.setValue(newValue)
    this.emitChange(newValue)
    this.updateFileList()
  }
  
  protected updateElement(): void {
    this.updateFileList()
  }
  
  protected updateInteractivity(): void {
    if (this._uploadButton) {
      this._uploadButton.disabled = this._config.interactive === false
    }
  }
  
  // 方法
  clear(): this {
    this.setValue(null)
    if (this._fileList) {
      this._fileList.innerHTML = ''
    }
    if (this._fileInput) {
      this._fileInput.value = ''
    }
    return this
  }
  
  getFiles(): FileData[] {
    if (!this._value) return []
    return Array.isArray(this._value) ? this._value : [this._value]
  }
}

export function File(config?: FileConfig): FileComponent {
  return new FileComponent(config)
}
