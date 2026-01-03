# Tesouro dos Fiéis - Project Context

## Project Description

"Tesouro dos Fiéis" (Treasure of the Faithful) is a universal React Native application that serves the Catholic community by providing access to traditional liturgical content, prayers, and religious resources.

## Core Purpose

The application aims to:

- Preserve and share traditional Catholic liturgical texts
- Provide accurate liturgical calendar calculations
- Offer devotional content for daily prayer
- Support both Portuguese and Latin liturgical traditions
- Work reliably offline for essential prayers

## Technology Architecture

### Frontend

- **Expo SDK 54** with React Native for universal deployment
- **React 19** with concurrent features and React Compiler
- **TypeScript 5** with strict type checking
- **NativeWind 5** (Tailwind CSS for React Native)
- **Expo Router** for file-based routing across platforms

### Development Tools

- **Vitest** for unit testing
- **Biome** for formatting and linting
- **ESLint** with Expo configuration
- **pnpm** for package management

## Project Structure

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
```

## Key Features

### Liturgical Calendar System

- Calculates moveable feasts (Easter, Pentecost, etc.)
- Handles liturgical seasons and rankings
- Supports complex date calculations
- Timezone-aware computations

### Content Categories

- **Missal**: Complete Traditional Roman Missal
- **Devotional**: Rosary, novenas, traditional prayers
- **Ritual**: Baptism, confirmation, marriage, etc.
- **Faith**: Catechism, fundamental truths

### Universal Platform Support

- Native iOS and Android apps
- Progressive Web App (PWA)
- Responsive design for all screen sizes
- Offline functionality for core content

## Development Guidelines

### Code Quality

- Strict TypeScript with `noUncheckedIndexedAccess`
- 2-space indentation, 80-character lines
- Comprehensive testing for calendar logic
- Cross-platform component compatibility

### Content Standards

- Liturgical accuracy is paramount
- Traditional Catholic sources only
- Proper Latin and Portuguese translations
- Respectful and reverent presentation

### Performance Considerations

- Optimize for mobile devices
- Lazy load non-essential content
- Efficient font loading strategies
- Minimize bundle size

## Common Development Tasks

### Adding Liturgical Content

1. Research traditional sources
2. Create appropriate page in `src/app/`
3. Follow existing component patterns
4. Add proper navigation and metadata
5. Test across platforms

### Calendar System Changes

1. Modify logic in `lib/calendar.ts`
2. Add comprehensive tests
3. Verify against liturgical calendars
4. Handle edge cases and timezones

### UI Component Development

1. Use TypeScript interfaces
2. Follow NativeWind patterns
3. Ensure accessibility compliance
4. Test on multiple screen sizes

## Testing Strategy

- **Unit Tests**: Calendar calculations (critical)
- **Component Tests**: UI rendering and interaction
- **Integration Tests**: Navigation and data flow
- **Platform Tests**: iOS, Android, and web compatibility

## Deployment

- **EAS Build** for native apps
- **Expo Updates** for OTA updates
- **Static export** for web deployment
- **Automated CI/CD** via GitHub Actions

## Cultural and Religious Context

This application serves the global Catholic community, particularly those interested in traditional liturgical practices. The content must be accurate, reverent, and faithful to Church teaching. All liturgical calculations and feast day determinations follow traditional Catholic calendar systems.

The app aims to make these sacred traditions accessible in the digital age while maintaining their authenticity and spiritual value.
