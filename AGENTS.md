# Agent Guidelines for Tesouro Fieis

## Build/Lint/Test Commands

### Workspace-wide
- `pnpm check` - Type check all packages
- `pnpm lint` - Lint all packages
- `pnpm test` - Run tests in all packages

### Apps
- **Expo**: `pnpm check` (tsc), `pnpm lint` (expo lint)
- **Astro**: `pnpm check` (astro check), `pnpm test` (vitest), `pnpm typecheck` (astro check)

### Packages
- **Cal**: `pnpm check` (tsc), `pnpm lint` (eslint), `pnpm test` (vitest), `pnpm coverage` (vitest --coverage)

### Running Single Tests
Use vitest directly: `vitest packages/cal/tests/calendar/2024.test.ts`

## Code Style Guidelines

### Formatting (Biome)
- 2-space indentation, 80 line width, LF line endings
- Auto-organize imports enabled
- JSON allows trailing commas

### Linting (Biome + ESLint)
- TypeScript recommended rules
- Expo config for React Native code
- Prettier integration
- Disabled: noUnusedVariables (warn), noForEach, noNonNullAssertion, noParameterAssign

### TypeScript
- Strict mode enabled
- `noUncheckedIndexedAccess: true`
- `strictNullChecks: true`
- Target ES2022, moduleResolution: "Bundler"

### Naming Conventions
- PascalCase for components and types
- camelCase for variables/functions
- Follow existing patterns in codebase

### Error Handling
- Use TypeScript strict null checks
- Prefer explicit error handling over assertions

### Imports
- Auto-organized by Biome
- Use workspace:* for internal packages</content>
<parameter name="filePath">/home/ofrades/code/tesourofieis/tesourofieis/AGENTS.md