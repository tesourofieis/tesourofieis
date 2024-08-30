# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./public/favicon.svg" />
  </samp>
</p>

<hr>

## ✨ Informação

Dev: [Astro](https://astro.build/) com [Starlight](https://starlight.astro.build/)

- Todas as páginas/rotas estão em `src/contente/docs`.
- As páginas estáticas são simples ficheiros `.md/.mdx` onde se pode adicionar html também e importar componentes ou outros ficheiros `.md/.mdx`.
- As páginas dinâmicas importam componentes de cliente (react, svelte, vue, solid) com `client:load` para enviar javascript para o browser.

### 📑 Missa do Dia

É gerado primeiro o calendário anual e depois os links para as rotas correctas.

## 🚀 Começar

```bash
npm install
npm run dev
```

## About

It uses [Turborepo](https://turborepo.org) and contains:

```text
.github
  └─ workflows
        └─ CI with pnpm cache setup
apps
  ├─ expo
  |   ├─ Expo SDK 51
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using NativeWind
  └─ astro
      ├─ Astro
      ├─ React 18
      ├─ Tailwind CSS
packages
  ├─ cal
  |   └─ Calendar app
  └─ ui
      └─ Start of a UI package for the webapp using shadcn-ui
tooling
  ├─ tailwind
  |   └─ shared tailwind configuration
  └─ typescript
      └─ shared tsconfig you can extend from
```

## Quick Start

To get it running, follow the steps below:

### 1. Setup dependencies

```bash
# Install dependencies
pnpm i
```

### 2. Configure Expo `dev`-script

#### Use iOS Simulator

1. Make sure you have XCode and XCommand Line Tools installed [as shown on expo docs](https://docs.expo.dev/workflow/ios-simulator).

   > **NOTE:** If you just installed XCode, or if you have updated it, you need to open the simulator manually once. Run `npx expo start` from `apps/expo`, and then enter `I` to launch Expo Go. After the manual launch, you can run `pnpm dev` in the root directory.

   ```diff
   +  "dev": "expo start --ios",
   ```

2. Run `pnpm dev` at the project root folder.

#### Use Android Emulator

1. Install Android Studio tools [as shown on expo docs](https://docs.expo.dev/workflow/android-studio-emulator).

2. Change the `dev` script at `apps/expo/package.json` to open the Android emulator.

   ```diff
   +  "dev": "expo start --android",
   ```

3. Run `pnpm dev` at the project root folder.

### 4a. When it's time to add a new UI component

Run the `ui-add` script to add a new UI component using the interactive `shadcn/ui` CLI:

```bash
pnpm ui-add
```

When the component(s) has been installed, you should be good to go and start using it in your app.

### 4b. When it's time to add a new package

To add a new package, simply run `pnpm turbo gen init` in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts`, as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.
