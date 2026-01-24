# Tesouro dos Fiéis

<p align="center">
  <samp>
    <img width="50px" src="./assets/images/icon.png" />
  </samp>
</p>

<hr>

## Overview

Tesouro dos Fiéis is a universal Catholic liturgical application that provides:

- Traditional Roman Missal content
- Devotional prayers and novenas
- Sacramental rituals
- Faith documents (catechism)
- Complete liturgical calendar system
- Cross-platform support (iOS, Android, Web)

## Technology Stack

- **Expo SDK 54** - Universal React Native platform
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Strict type safety
- **NativeWind 5** - Tailwind CSS for React Native
- **Expo Router** - File-based routing
- **Vitest** - Testing framework
- **Biome + ESLint** - Code quality and formatting

## Getting Started

```bash
pnpm install
pnpm dev
```

### Platform-Specific Development

```bash
# Android
pnpm run dev:android

# iOS
pnpm run dev:ios

# Web
pnpm run build:web
```

## Build, Lint & Test Commands

### Core Development

```bash
pnpm check        # Type check entire project
pnpm lint         # Lint all code with Biome + ESLint
pnpm test         # Run complete test suite
pnpm dev          # Start development server
pnpm run prebuild # Build search index
```

### Testing

```bash
# Calendar tests (critical)
vitest lib/tests/calendar/

# Single test file
vitest lib/tests/calendar/2024.test.ts

# Coverage report
pnpm coverage

# Benchmarks
vitest lib/tests/bench/
```

### Deployment

```bash
# Build for all platforms
pnpm run deploy

# OTA updates via Expo
pnpm run update
```

## Code Style Guidelines

### Formatting (Biome)

- 2-space indentation, 80 character line width, LF line endings
- Auto-organize imports enabled
- JSON allows trailing commas

### Linting

- TypeScript recommended rules
- Expo configuration for React Native code
- Prettier integration
- Disabled: noUnusedVariables (warn), noForEach, noNonNullAssertion, noParameterAssign

### TypeScript

- Strict mode enabled
- `noUncheckedIndexedAccess: true`
- `strictNullChecks: true`
- Target ES2022, moduleResolution: "Bundler"

### Naming Conventions

- PascalCase for components and types
- camelCase for variables and functions
- Follow existing patterns in codebase

### Error Handling

- Use TypeScript strict null checks
- Prefer explicit error handling over assertions

### Imports

- Auto-organized by Biome
- Use `workspace:*` for internal packages

## Project Architecture

### Directory Structure

```
src/
├── app/                    # Expo Router pages
│   ├── missal/            # Roman Missal content
│   ├── devocionario/      # Devotional prayers
│   ├── ritual/            # Sacramental rituals
│   └── fe/                # Faith documents
├── components/            # Reusable UI components
├── providers/             # React Context providers
└── services/              # App services

lib/                       # Core liturgical logic
├── calendar.ts           # Liturgical calendar system
├── observances.ts        # Feast days and seasons
└── tests/                # Calendar calculation tests

.github/
└── workflows/
    └── ci.yml            # CI/CD pipeline

assets/
├── fonts/                # Cardo, DM Serif fonts
└── images/               # Icons, splash screens

tooling/
├── eslint/               # ESLint configuration
├── biome.json            # Biome configuration
├── tailwind/             # Tailwind CSS configuration
└── typescript/           # TypeScript configuration
```

## Development Guidelines

### Liturgical Content Standards

1. **Accuracy is Paramount** - All liturgical content must be verified against traditional Catholic sources
2. **Respect Traditional Rankings** - Follow proper liturgical precedence and classifications
3. **Authentic Sources** - Use only approved traditional Catholic texts
4. **Reverent Presentation** - Maintain dignified and respectful content presentation

### Calendar System (Critical)

The liturgical calendar in `lib/` is the heart of the application:

- **Always test calendar changes** with the comprehensive test suite
- Verify calculations against official liturgical calendars
- Handle edge cases (leap years, timezone changes, competing observances)
- Support years from 2024 onwards with accurate computations

### Cross-Platform Development

- Code must work identically on iOS, Android, and Web
- Use Expo Router for universal navigation
- Test responsive design on all screen sizes
- Ensure offline functionality for essential content
- Optimize performance for mobile devices

### Component Development

- Create reusable components in `src/components/`
- Use TypeScript interfaces for all props
- Follow NativeWind styling patterns
- Implement proper accessibility features
- Maintain consistent design language

## Testing Requirements

### Calendar Tests (Absolutely Critical)

- Test all liturgical date calculations
- Verify moveable feast calculations (Easter, Pentecost, etc.)
- Test liturgical season transitions
- Validate observance rankings and precedence
- Check timezone handling and edge cases

### Component Tests

- Test rendering on all platforms
- Verify responsive behavior
- Test user interactions
- Validate accessibility features

### Integration Tests

- Test navigation flows
- Verify provider interactions
- Test search functionality
- Validate offline capabilities

## Content Management

### Adding New Liturgical Content

1. Research traditional sources and verify authenticity
2. Create appropriate route in `src/app/` directory structure
3. Follow existing component patterns and styling
4. Add proper navigation and metadata
5. Test on all platforms
6. Verify offline availability if applicable

### Modifying Calendar Logic

1. Update core logic in `lib/calendar.ts` or related files
2. Add comprehensive test coverage for changes
3. Verify against multiple liturgical calendar sources
4. Test edge cases and boundary conditions
5. Update documentation and comments

## Android Development Setup (Arch Linux)

Add to `.bashrc`:

```bash
export ANDROID_HOME=/opt/android-sdk
export JAVA_HOME=/usr/lib/jvm/java-25-openjdk
export PATH="$ANDROID_HOME/cmdline-tools/latest/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator:$PATH"
export ANDROID_SDK_ROOT="$ANDROID_HOME"
export ANDROID_SDK_HOME="$HOME/.config/.android"
export ANDROID_AVD_HOME="$HOME/.config/.android/avd"
```

Install dependencies:

```bash
yay -Sy android-sdk android-sdk-cmdline-tools-latest android-sdk-platform-tools jdk-openjdk
```

Configure permissions:

```bash
sudo chmod -R 777 /opt/android-sdk
```

Install Android SDK:

```bash
yes | sdkmanager --licenses && sdkmanager \
  "platforms;android-35" \
  "build-tools;35.0.0" \
  "platform-tools" \
  "emulator" \
  "system-images;android-35;default;x86_64"
```

## Contributing

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
