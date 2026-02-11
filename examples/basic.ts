import gr from 'my-gradio'

// --- Greeting App ---
function greet(name: string): string {
  return `Hello, ${name}! 👋`
}

const name = gr.Textbox({ label: "Name", placeholder: "Enter your name" })
const output = gr.Textbox({ label: "Output", interactive: false })
const greetBtn = gr.Button("Greet").primary()

greetBtn.click(greet, { 
  inputs: name, 
  outputs: output
})

const greetingApp = gr.Column([
  gr.Row([name]),
  gr.Row([greetBtn]),
  gr.Row([output])
], { variant: 'panel' })


// --- Calculator ---
function add(a: number, b: number): number {
  return a + b
}

const num1 = gr.Slider({ label: "Number 1", minimum: 0, maximum: 100, value: 10 })
const num2 = gr.Slider({ label: "Number 2", minimum: 0, maximum: 100, value: 5 })
const calcResult = gr.Textbox({ label: "Result", interactive: false })

const addBtn = gr.Button("+").primary()
const subBtn = gr.Button("-")
const mulBtn = gr.Button("×")
const divBtn = gr.Button("÷")

addBtn.click(add, { inputs: [num1, num2], outputs: calcResult })
subBtn.click((a, b) => a - b, { inputs: [num1, num2], outputs: calcResult })
mulBtn.click((a, b) => a * b, { inputs: [num1, num2], outputs: calcResult })
divBtn.click((a, b) => b !== 0 ? a / b : Infinity, { inputs: [num1, num2], outputs: calcResult })

const calculatorApp = gr.Column([
  gr.Row([num1, num2]),
  gr.Row([addBtn, subBtn, mulBtn, divBtn]),
  gr.Row([calcResult])
], { variant: 'panel' })


// --- Main UI ---
const ui = gr.Column([
  greetingApp,
  calculatorApp
])

gr.launch(ui, { 
  title: "MyGradio Demo",
  target: '#app'
})
