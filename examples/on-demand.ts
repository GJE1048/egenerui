import { Textbox } from '@my-gradio/components/Textbox'
import { Button } from '@my-gradio/components/Button'
import { Row, Column } from '@my-gradio/layout'
import { Renderer } from '@my-gradio/core'

// 仅引入需要的组件
const name = Textbox({ label: "Name", placeholder: "Enter your name" })
const output = Textbox({ label: "Output", interactive: false })
const greetBtn = Button("Greet").primary()

greetBtn.click((val: string) => `Hello, ${val}!`, { 
  inputs: name, 
  outputs: output
})

const app = Column([
  Row([name]),
  Row([greetBtn]),
  Row([output])
])

// 启动渲染器
Renderer.getInstance().launch(app)
