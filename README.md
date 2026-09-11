# Drop-in Replacement for [CRA](http://create-react-app.dev/) but powered by [Vite](https://vitejs.dev/)

### Things in CRA, supported here:
- Import SVG's directly as React Component via SVGR
- ESLint Rules & Prettier
- Tailwind
- Support for path aliases

---

### Tech Stack - Overview
- Vite
- React - Typscript
- pnpm

---

### Editor Config

- vscode settings & extension recommendations
  
---

### Lint and Formatting

Use Node.js 22.18+ (22.x) or 24.3+ for the TypeScript configuration files.
Run `pnpm lint` to fix lint errors, `pnpm lint:check` to see errors and warnings without changing files, and `pnpm format` to format files.

ESLint 10 uses `@eslint/compat` for the React and import plugins, which still declare ESLint 9 peer ranges. Their peer warnings remain until upstream adds ESLint 10 support. TypeScript stays on 6.x because typescript-eslint and the Prettier import organizer do not support the TypeScript 7 API.

- Eslint & Prettier Configured
- Lints
  - react
  - typescript

---

### Styling
- TailwindCSS v4

---

# Other Recommended Libraries:

### Forms
- React Hook Form
- Yup (for validations)

### Routing
- React-Router-Dom

### HTTP Client
- Axios

### Server State
- React Query
- SWR
- RTKQuery

<!-- ### Eslint Plugins
- [eslint-plugin-jest-dom](https://testing-library.com/docs/ecosystem-eslint-plugin-jest-dom)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) -->
