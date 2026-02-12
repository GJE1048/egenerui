# Contributing to MyGradio

Thank you for your interest in contributing to MyGradio! We welcome all contributions, from bug fixes and feature requests to documentation improvements.

## 🛠️ Development Setup

MyGradio is a monorepo managed with `pnpm`.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-gradio.git
   cd my-gradio
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Build all packages:
   ```bash
   pnpm build
   ```

## 📂 Project Structure

- `packages/core`: Core logic, base component class, renderer, and event system.
- `packages/components/*`: Individual component implementations.
- `packages/my-gradio`: Main entry point that aggregates and exports all components.
- `packages/api`: Backend communication and API handling.
- `packages/state`: State management system.
- `packages/theme`: Theming system and default styles.

## 🚀 Adding a New Component

To add a new component, follow these steps:

1. Create a new package in `packages/components/`:
   ```bash
   mkdir -p packages/components/new-component/src
   ```

2. Create a `package.json` for the new component:
   ```json
   {
     "name": "@my-gradio/new-component",
     "version": "1.0.0",
     "main": "./dist/index.js",
     "module": "./dist/index.js",
     "types": "./dist/index.d.ts",
     "dependencies": {
       "@my-gradio/core": "workspace:^"
     }
   }
   ```

3. Implement the component by extending the `Component` base class.

4. Export the component from `packages/components/new-component/src/index.ts`.

5. Add the new component to `packages/my-gradio/package.json` and export it from `packages/my-gradio/src/components.ts`.

## 🧪 Testing

(To be implemented: Add testing guidelines once testing framework is set up)

## 📜 Coding Guidelines

- Use TypeScript for all new code.
- Follow the existing coding style and naming conventions.
- Ensure all exported symbols have proper type definitions.
- Keep components focused and modular.

## 📝 Submitting a Pull Request

1. Create a new branch for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them with descriptive messages.

3. Push your changes to your fork and submit a pull request.

4. Ensure all CI checks pass.

## ⚖️ License

By contributing to MyGradio, you agree that your contributions will be licensed under the MIT License.
