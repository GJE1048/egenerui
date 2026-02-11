
# Quick Start

Build your first MyGradio app in 5 minutes.

## Step 1: Create HTML File

Create `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First MyGradio App</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="/main.ts"></script>
</body>
</html>
```

## Step 2: Create TypeScript File

Create `main.ts`:

```typescript
import gr from 'my-gradio'

// Define handler function
function greet(name: string): string {
  if (!name.trim()) {
    return "Please enter your name"
  }
  return `Hello, ${name}! 👋 Welcome to MyGradio!`
}

// Create components
const nameInput = gr.Textbox({
  label: "What's your name?",
  placeholder: "Enter your name here...",
  value: "World"
})

const greetingOutput = gr.Textbox({
  label: "Greeting",
  interactive: false
})

const greetButton = gr.Button("Say Hello").primary()

// Bind event
greetButton.click(greet, {
  inputs: nameInput,
  outputs: greetingOutput,
  apiName: "greet"
})

// Layout
const interface = gr.Column([
  gr.Markdown("# 🎉 Welcome to MyGradio!"),
  gr.Row([nameInput]),
  gr.Row([greetButton]),
  gr.Row([greetingOutput])
])

// Launch app
gr.launch(interface, {
  target: "#app",
  title: "My First App",
  theme: "light"
})
```

## Step 3: Setup Vite

Install Vite:

```bash
npm install -D vite
```

Create `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000
  }
})
```

Add scripts to `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

## Step 4: Run Development Server

```bash
npm run dev
```

Open browser and visit `http://localhost:3000`. You should see:

1. A title "Welcome to MyGradio!"
2. A text input box
3. A "Say Hello" button
4. An output box

Type your name and click the button. The output box will display a greeting!

## Project Structure

A typical MyGradio project structure:

```
my-app/
├── index.html              # HTML entry file
├── main.ts                 # App entry
├── package.json            # Project config
├── vite.config.ts          # Vite config
├── tsconfig.json           # TypeScript config
└── public/                 # Static assets
```

## Next Steps

- [Components](/components/input/textbox) - Explore all available components
- [Theming](/guide/theming) - Customize the appearance
- [State Management](/guide/state-management) - Persist user data
