# AI Context for Tesouro dos Fiéis

## Project Overview

Tesouro dos Fiéis is a traditional Catholic liturgical application built with Expo/React Native. It serves the global Catholic community by providing authentic liturgical content, prayers, and religious resources in digital format.

## Technical Stack

- **Framework**: Expo SDK 54 with React Native
- **Language**: TypeScript 5 (strict mode)
- **Styling**: NativeWind 5 (Tailwind for React Native)
- **Routing**: Expo Router (file-based)
- **State**: React Context providers
- **Testing**: Vitest
- **Formatting**: Biome + ESLint

## Core Functionality

### Liturgical Calendar System (`lib/`)

- Calculates moveable feasts (Easter, Pentecost, etc.)
- Handles liturgical seasons and rankings
- Complex date computations with timezone support
- Comprehensive test coverage required

### Content Modules (`src/app/`)

- **Missal** (`/missal/`) - Traditional Roman Missal masses
- **Devotional** (`/devocionario/`) - Prayers, novenas, litanies
- **Ritual** (`/ritual/`) - Sacramental ceremonies
- **Faith** (`/fe/`) - Catechism and doctrinal content

### Component Architecture (`src/components/`)

- Universal components for mobile and web
- Typography system with traditional fonts
- Liturgical season theming
- Accessibility compliance

## Development Commands

```bash
# Core commands
pnpm check       # TypeScript checking
pnpm lint        # Code linting
pnpm test        # Run test suite
pnpm dev         # Development server

# Platform-specific
pnpm run dev:android    # Android development
pnpm run dev:ios        # iOS development
pnpm run build:web      # Web build

# Deployment
pnpm run deploy  # EAS build for all platforms
pnpm run update  # OTA updates
```

## Key Files and Directories

### Configuration

- `app.config.ts` - Expo app configuration
- `tsconfig.json` - TypeScript configuration
- `package.json` - Dependencies and scripts
- `bun test` - Test runner (no config file needed)

### Core Logic

- `lib/calendar.ts` - Main liturgical calendar logic
- `lib/observances.ts` - Feast days and observances
- `lib/office.ts` - Divine Office calculations
- `lib/utils.ts` - Utility functions

### UI and Components

- `src/components/` - Reusable UI components
- `src/providers/` - Context providers
- `src/services/` - App services (search, notifications)
- `src/constants/Colors.ts` - Theme colors

### Assets

- `assets/fonts/` - Traditional fonts (Cardo, DM Serif)
- `assets/images/` - Icons, liturgical images
- `assets/docs.json` - Search index

## Critical Development Guidelines

### Liturgical Accuracy

- All content must be verified against traditional Catholic sources
- Calendar calculations must follow authentic liturgical rules
- Respect traditional rankings and precedence
- Maintain reverent and appropriate presentation

### Code Quality

- Strict TypeScript with proper type definitions
- Comprehensive testing especially for calendar logic
- Cross-platform compatibility (mobile + web)
- Performance optimization for mobile devices

### Content Standards

- Portuguese and Latin liturgical content
- Offline availability for core prayers
- Proper attribution and sources
- Consistent formatting and structure

## Common Tasks

### Adding New Content

1. Identify appropriate directory (`missal/`, `devocionario/`, etc.)
2. Create new route file following naming conventions
3. Use existing component patterns
4. Add proper navigation and metadata
5. Test on both mobile and web

### Calendar System Updates

1. Modify core logic in `lib/calendar.ts`
2. Add comprehensive test coverage
3. Verify against official liturgical calendars
4. Handle edge cases and timezone issues
5. Update related observances if needed

### Component Development

1. Create reusable components in `src/components/`
2. Use TypeScript interfaces for props
3. Implement NativeWind styling
4. Ensure accessibility compliance
5. Test cross-platform rendering

## Testing Requirements

### Essential Tests

- Calendar calculations (absolutely critical)
- Component rendering across platforms
- Navigation and routing
- Offline functionality
- Font loading and typography

### Test Patterns

- Use Vitest for unit testing
- Mock external dependencies
- Test edge cases for date calculations
- Verify UI consistency across platforms

## Deployment and Distribution

### Native Apps

- Built with EAS Build
- Distributed via App Store and Google Play
- OTA updates via Expo Updates
- Version managed in `app.config.ts`

### Web App

- Static export for web deployment
- PWA capabilities
- Responsive design for all devices
- SEO optimized with sitemap

## AI Assistant Guidelines

When working on this project:

1. **Respect the Sacred**: This app serves Catholic liturgical traditions. Approach all work with reverence and accuracy.

2. **Verify Liturgical Content**: Always cross-reference liturgical information with traditional Catholic sources.

3. **Test Calendar Changes**: Any modifications to calendar logic require comprehensive testing.

4. **Cross-Platform First**: Consider both mobile and web platforms in all development decisions.

5. **Performance Matters**: Optimize for mobile devices and slower connections.

6. **Accessibility Required**: Implement proper accessibility features for all users.

7. **TypeScript Strict**: Use proper typing and avoid any types.

8. **Cultural Sensitivity**: Understand the religious and cultural significance of the content.

This application serves the global Catholic community and must maintain the highest standards of accuracy, reverence, and functionality.
