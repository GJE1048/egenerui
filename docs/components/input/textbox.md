
# Textbox

Single or multi-line text input component.

## Import

```typescript
import gr from 'egenerui'
```

## Usage

### Basic Textbox

```typescript
const textbox = gr.Textbox({
  label: "Name",
  placeholder: "Enter your name"
})
```

### Multi-line Textbox

```typescript
const message = gr.Textbox({
  label: "Message",
  lines: 4,
  maxLines: 10,
  placeholder: "Write your message here..."
})
```

### Password Input

```typescript
const password = gr.Textbox({
  label: "Password",
  type: "password",
  placeholder: "Enter your password"
})
```

## Props

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text |
| `value` | `string` | `''` | Initial value |
| `placeholder` | `string` | - | Placeholder text |
| `lines` | `number` | `1` | Number of lines (multi-line when > 1) |
| `maxLines` | `number` | - | Maximum number of lines |
| `type` | `'text' \| 'password' \| 'email' \| 'number'` | `'text'` | Input type |
| `showLabel` | `boolean` | `true` | Show label |
| `interactive` | `boolean` | `true` | Enable interaction |
| `autofocus` | `boolean` | `false` | Auto focus on mount |
| `elemId` | `string` | - | Custom element ID |
| `elemClasses` | `string \| string[]` | - | Custom CSS classes |

## Methods

### focus()

Focus the input element.

```typescript
textbox.focus()
```

### select()

Select all text in the input.

```typescript
textbox.select()
```

### clear()

Clear the input value.

```typescript
textbox.clear()
```

### onInput()

Bind input event handler.

```typescript
textbox.onInput((value) => {
  console.log('Input changed:', value)
})
```

## Events

### change

Emitted when the value changes.

```typescript
textbox.change((value) => {
  console.log('Value changed:', value)
})
```

## Examples

### Form with Validation

```typescript
const email = gr.Textbox({
  label: "Email",
  type: "email",
  placeholder: "your.email@example.com"
})

const submit = gr.Button("Submit").primary()

submit.click(() => {
  const value = email.value
  if (!value.includes('@')) {
    alert('Please enter a valid email')
    return
  }
  console.log('Valid email:', value)
})
```

### Character Counter

```typescript
const text = gr.Textbox({
  label: "Text",
  lines: 3,
  maxLines: 5,
  placeholder: "Type something..."
})

const counter = gr.Label({ label: "Characters" })

text.change((value) => {
  counter.value = `${value.length} / 500 characters`
})
```

## Live Demo

You can try the Textbox component in the [Basic Form example](/examples/basic-form).

## Related Components

- [Button](/components/control/button) - For triggering actions
- [Slider](/components/input/slider) - For numeric input
- [Dropdown](/components/input/dropdown) - For selection from options
