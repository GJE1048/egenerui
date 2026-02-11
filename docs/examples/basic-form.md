
# Basic Form Example

A simple form with text inputs and validation.

## Full Code

```typescript
import gr from 'my-gradio'

// Handler function
function processForm(name: string, email: string, age: number): string {
  return `Name: ${name}\nEmail: ${email}\nAge: ${age}`
}

// Create components
const name = gr.Textbox({
  label: "Name",
  placeholder: "Enter your name",
  value: "John Doe"
})

const email = gr.Textbox({
  label: "Email",
  type: "email",
  placeholder: "your.email@example.com"
})

const age = gr.Slider({
  label: "Age",
  minimum: 0,
  maximum: 100,
  value: 25
})

const submit = gr.Button("Submit").primary()
const clear = gr.ClearButton([name, email, age], { label: "Clear" })
const result = gr.Textbox({
  label: "Result",
  lines: 5,
  interactive: false
})

// Bind event
submit.click(processForm, {
  inputs: [name, email, age],
  outputs: result,
  apiName: "process_form"
})

// Layout
const ui = gr.Column([
  gr.Markdown("# 📝 Registration Form"),
  gr.Row([name]),
  gr.Row([email]),
  gr.Row([age]),
  gr.Row([submit, clear]),
  gr.Row([result])
])

// Launch
gr.launch(ui, {
  title: "Registration Form",
  theme: "light"
})
```

## Features

- ✅ Text input with placeholder
- ✅ Email validation
- ✅ Age slider (0-100)
- ✅ Submit button
- ✅ Clear button to reset form
- ✅ Result display

## Try It

1. Clone the repository
2. Navigate to `examples/basic-form`
3. Run `npm install`
4. Run `npm run dev`
5. Open browser to `http://localhost:3000`

## Customization

### Add More Fields

```typescript
const phone = gr.Textbox({
  label: "Phone",
  placeholder: "Enter your phone number"
})

const address = gr.Textbox({
  label: "Address",
  lines: 3,
  placeholder: "Enter your address"
})
```

### Add Validation

```typescript
submit.click(() => {
  if (!name.value.trim()) {
    alert('Name is required')
    return
  }
  if (!email.value.includes('@')) {
    alert('Invalid email')
    return
  }
  // Process form...
})
```

## Next Steps

- [Calculator](/examples/calculator) - Learn about numeric inputs
- [Image Generator](/examples/image-generator) - Learn about file uploads
