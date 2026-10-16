# React + TypeScript starter powered by Vite+

A Create React App alternative using [Vite+](https://viteplus.dev/), with React, TypeScript, Tailwind CSS v4, React Router, and Axios.

## Getting started

Install [Vite+](https://viteplus.dev/guide/). For development including commit hooks, use Node.js 22.22.1+ (22.x) or 24.11+ and Git 2.32+. The package itself declares a lower Node.js minimum, but `vp staged` requires these newer versions.

```sh
vp install
vp run start
```

The development server runs at http://localhost:3000.

## Commands

| Command             | Purpose                                                |
| ------------------- | ------------------------------------------------------ |
| `vp run start`      | Start the development server on port 3000              |
| `vp run build`      | Run TypeScript checks and build into `build/`          |
| `vp preview`        | Preview the production build locally                   |
| `vp check`          | Check formatting, lint rules, and types                |
| `vp run lint`       | Fix lint issues where possible, suppressing warnings   |
| `vp run lint:check` | Report lint errors and warnings without changing files |
| `vp run format`     | Format files with Oxfmt                                |

Use `vp run build` for the package script that runs `tsc` before building. `vp build` invokes the built-in build command directly.

## Linting and formatting

Configuration lives in `vite.config.ts`:

- **Oxlint** checks JavaScript, TypeScript, React, and imports. Type-aware linting and type checking are enabled.
- **Oxfmt** handles formatting, including Tailwind class sorting. `fmt.ignorePatterns` excludes `build/`.
- **VS Code** settings use the Oxc extension for formatting and lint fixes. Install the recommended Vite Plus Extension Pack (`VoidZero.vite-plus-extension-pack`) to provide the configured `oxc.oxc-vscode` formatter.
- **Staged checks** run `vp check --fix` through Vite+ hooks configured by the `prepare` script.

ESLint and Prettier are no longer run separately.

### Migration notes

The eight unsupported ESLint rules reported during migration are omitted:

- `no-dupe-args` and `no-octal`: covered by strict mode in ES modules.
- `react-hooks/config` and `react-hooks/gating`: not applicable to Oxlint's fixed React Compiler options.
- `import/no-unresolved`: omitted in favor of TypeScript's module resolution checks.
- `no-extra-semi` and `semi`: formatting is handled by Oxfmt (`semi: false`).
- `react/no-deprecated`: replaced by the type-aware [`typescript/no-deprecated`](https://oxc.rs/docs/guide/usage/linter/rules/typescript/no-deprecated.html) rule, which warns about APIs marked `@deprecated`.

## Features

- Import SVGs as React components with SVGR using `?react`.
- Use `@/` imports for paths under `src/`.
- Style with Tailwind CSS v4.
- Use React Router for client-side routing.
- Make HTTP requests with Axios.
