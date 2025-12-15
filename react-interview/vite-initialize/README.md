# React + TypeScript + Vite + Jest

A React application with TypeScript, Vite for development/building, and Jest for testing.

## Setup

```bash
yarn install
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production  
- `yarn preview` - Preview production build
- `yarn test` - Run tests with Jest
- `yarn lint` - Run ESLint

## Testing

Tests are configured with:
- **Jest** - Test runner
- **ts-jest** - TypeScript support for Jest
- **@testing-library/react** - React component testing utilities
- **@testing-library/jest-dom** - Custom Jest matchers

### TypeScript Configuration

The project uses different TypeScript configs:
- `tsconfig.app.json` - Main app configuration (used by Vite)
- `tsconfig.test.json` - Test configuration (used by Jest, extends app config with `verbatimModuleSyntax: false`)
- `tsconfig.node.json` - Node configuration

## Project Structure

```
src/
├── components/
│   ├── __tests__/     # Component tests
│   └── Accordion.tsx   # Example component
├── App.tsx
└── main.tsx
```