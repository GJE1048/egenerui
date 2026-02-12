
import { gr } from '../packages'

// State Manager
const stateManager = gr.getStateManager()

// Components
const themeToggle = gr.ThemeToggle()

const header = gr.Markdown({
  value: '# Data Analysis Dashboard\nUpload your data file and select analysis options.',
  showLabel: false
})

const fileInput = gr.File({
  label: 'Upload CSV/Excel',
  fileTypes: ['.csv', '.xlsx'],
  showDownloadButton: true
})

const analysisType = gr.Dropdown({
  label: 'Analysis Type',
  choices: ['Summary Statistics', 'Correlation', 'Regression', 'Clustering'],
  value: 'Summary Statistics'
})

const options = gr.Radio({
  label: 'Options',
  choices: ['Include Nulls', 'Normalize Data', 'Export Report'],
  type: 'checkbox',
  value: ['Normalize Data']
})

const runBtn = gr.Button('Run Analysis', { variant: 'primary' })

const output = gr.Markdown({
  label: 'Results',
  value: '*No results yet*'
})

// Logic
runBtn.click(() => {
  const file = fileInput.getValue()
  const type = analysisType.getValue()
  const opts = options.getValue()
  
  if (!file) {
    output.update('**Error:** Please upload a file first.')
    return
  }
  
  // Mock analysis result
  const fileName = Array.isArray(file) ? file[0].name : file.name
  
  setTimeout(() => {
    output.update(`
### Analysis Results
- **File:** ${fileName}
- **Type:** ${type}
- **Options:** ${Array.isArray(opts) ? opts.join(', ') : opts}

Processing complete.
    `)
    
    // Persist last run time
    stateManager.set('lastRun', new Date().toISOString(), { persist: true, storage: 'local' })
  }, 500)
  
  output.update('*Running analysis...*')
})

// Load last run time
const lastRun = stateManager.get('lastRun')
if (lastRun) {
  output.append(`\n\nLast run: ${lastRun}`)
}

// Layout
const layout = gr.Column([
  gr.Row([header, themeToggle]),
  gr.Row([
    gr.Column([fileInput, analysisType, options, runBtn], { scale: 1 }),
    gr.Column([output], { scale: 2 })
  ])
])

gr.launch(layout, { title: 'Egenerui Enhanced Example' })
