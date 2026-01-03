# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./assets/images/favicon.svg" />
  </samp>
</p>

Espaço dedicado à oração, exposição e preservação das santas tradições da Igreja.

<hr>

## ✨ Aplicação

Uma aplicação universal construída com:

- **Mobile & Web**: [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/)
- **Router**: [Expo Router](https://expo.github.io/router/) para navegação universal
- **Styling**: [NativeWind](https://www.nativewind.dev/) (Tailwind CSS para React Native)
- **Fonts**: Google Fonts (Cardo, DM Serif Display/Text)

### 📑 Calendário Litúrgico

O sistema de calendário litúrgico é gerado dinamicamente:

1. Gera o calendário anual baseado nas regras litúrgicas tradicionais
2. Cria os links para as rotas e conteúdos correspondentes
3. Suporta cálculos complexos de datas móveis (Páscoa, Pentecostes, etc.)

## 🚀 Começar

```bash
pnpm i
pnpm run dev
```

Para desenvolvimento mobile:

```bash
# Android
pnpm run dev:android

# iOS
pnpm run dev:ios

# Web
pnpm run build:web
```

## 🧪 Testes e Qualidade

```bash
# Type checking
pnpm check

# Linting
pnpm lint

# Testes unitários
pnpm test

# Testes específicos
vitest lib/tests/calendar/2024.test.ts

# Coverage
pnpm coverage
```

## 🚀 Deploy

```bash
# Build para todas as plataformas
pnpm run deploy

# Update OTA
pnpm run update
```

## 📱 Setup para desenvolvimento Android (Arch Linux)

Adicionar ao .bashrc:

```bash
export ANDROID_HOME=/opt/android-sdk
export JAVA_HOME=/usr/lib/jvm/java-25-openjdk
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export ANDROID_SDK_HOME="$HOME/.config/.android"
export ANDROID_AVD_HOME="$HOME/.config/.android/avd"
```

Instalar dependências:

```bash
yay -Sy android-sdk android-sdk-cmdline-tools-latest android-sdk-platform-tools jdk-openjdk
```

Configurar permissões:

```bash
sudo chmod -R 777 /opt/android-sdk
```

Instalar Android SDK:

```bash
yes | sdkmanager --licenses && sdkmanager \
  "platforms;android-35" \
  "build-tools;35.0.0" \
  "platform-tools" \
  "emulator" \
  "system-images;android-35;default;x86_64"
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto segue as tradições da Igreja Católica e está disponível para uso na propagação da fé.

## 🙏 Agradecimentos

- Igreja Católica Romana pelas tradições preservadas
- Comunidade Expo/React Native
- Contribuidores e mantenedores do projeto

## 📦 Estrutura do Projeto

```text
.github/
  └─ workflows/
        └─ ci.yml                    # CI/CD pipeline
.well-known/                         # Apple/Android app verification
assets/
  ├─ fonts/                          # Cardo, DM Serif fonts
  └─ images/                         # Icons, splash screens, liturgical images
lib/
  ├─ tests/                          # Calendar system tests
  ├─ calendar.ts                     # Core liturgical calendar logic
  ├─ observances.ts                  # Feast days and observances
  └─ office.ts                       # Divine Office calculations
src/
  ├─ app/                           # Expo Router pages
  │   ├─ devocionario/              # Devotional prayers
  │   ├─ fe/                        # Faith documents (catechism, etc.)
  │   ├─ missal/                    # Missal content (masses, prayers)
  │   └─ ritual/                    # Sacramental rituals
  ├─ components/                    # Reusable React components
  ├─ providers/                     # Context providers (settings, fonts, etc.)
  └─ services/                      # App services (search, notifications)
tooling/
  ├─ eslint/                        # ESLint configuration
  ├─ prettier/                      # Prettier configuration
  ├─ tailwind/                      # Tailwind CSS configuration
  └─ typescript/                    # TypeScript configuration
```

## 🛠️ Tecnologias

- **Expo SDK 54** - Universal React Native platform
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **NativeWind 5** - Tailwind CSS for React Native
- **Expo Router** - File-based routing for universal apps
- **Vitest** - Fast unit testing framework
- **ESLint + Prettier** - Code quality and formatting

## 📚 Conteúdo

A aplicação inclui:

- **Missal Romano Tradicional** - Missas próprias e comuns
- **Devocionário** - Orações tradicionais, ladainhas, novenas
- **Ritual Romano** - Cerimônias sacramentais
- **Documentos da Fé** - Catecismo, verdades fundamentais
- **Calendário Litúrgico** - Sistema completo de festas e tempos
- **Ofício Divino** - Cálculos para as horas canônicas
