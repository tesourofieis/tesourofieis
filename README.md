# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./apps/astro/public/favicon.svg" />
  </samp>
</p>

<hr>

## ✨ Apps

Web: [Astro](https://astro.build/) com [Starlight](https://starlight.astro.build/)
Mobile: [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/)

### 📑 Calendário

É gerado primeiro o calendário anual e depois os links para as rotas correctas.

## 🚀 Começar

```bash
pnpm i
pnpm run dev
```

### Setup para arch linux

Adicionar ao .bashrc

```bash
export ANDROID_HOME=/opt/android-sdk
export JAVA_HOME=/usr/lib/jvm/java-25-openjdk
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"
```

Instalar

```bash
yay -Sy android-sdk android-sdk-cmdline-tools-latest android-sdk-platform-tools jdk-openjdk
```

Permissões necessárias

```bash
sudo chmod -R 777 /opt/android-sdk
```

E por fim instalar

```bash
yes | sdkmanager --licenses && sdkmanager \
  "platforms;android-35" \
  "build-tools;35.0.0" \
  "platform-tools" \
  "emulator" \
  "system-images;android-35;default;x86_64"
```

## Ficheiros

```text
.github
  └─ workflows
        └─ CI
apps
  ├─ expo
  |   ├─ Expo SDK 51
  |   ├─ React Native using React 18
  |   ├─ Navigation using Expo Router
  |   ├─ Tailwind using NativeWind
  └─ astro
      ├─ Astro 4
      ├─ React 18
      ├─ Tailwind CSS and Starlight for theming
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
