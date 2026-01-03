# Windsurf AI Rules for Tesouro dos Fiéis

## Code Style and Standards

### TypeScript

- Use strict mode with `noUncheckedIndexedAccess: true`
- Always define proper interfaces for component props
- Prefer type assertions over any types
- Use const assertions for readonly data

### React/React Native

- Use functional components with hooks
- Implement proper error boundaries
- Follow React 19 patterns and concurrent features
- Use React.memo for performance optimization when needed

### Styling (NativeWind)

- Use Tailwind classes via className prop
- Follow mobile-first responsive design
- Maintain consistency with design system
- Use design tokens for colors and spacing

### File Organization

- Use PascalCase for component files
- Use camelCase for utility functions
- Group related functionality in directories
- Keep components small and focused

## Platform Considerations

### Cross-Platform Development

- Always test changes on both mobile and web
- Use Platform.select() when platform-specific logic needed
- Avoid platform-specific APIs without fallbacks
- Ensure responsive design works on all screen sizes

### Performance

- Lazy load heavy content (images, large text blocks)
- Use FlatList for long lists of content
- Optimize font loading with proper preloading
- Minimize bundle size with tree shaking

## Liturgical Content Guidelines

### Accuracy Requirements

- Verify all liturgical content against traditional sources
- Maintain proper Latin and Portuguese translations
- Respect liturgical rankings and precedence
- Follow traditional calendar calculations

### Content Structure

- Use consistent metadata for all prayers/texts
- Implement proper navigation hierarchies
- Maintain offline availability for core content
- Include proper attribution when required

## Calendar System Rules

### Date Calculations

- Always test calendar changes with comprehensive test suite
- Handle timezone considerations properly
- Support years from 2024 onwards
- Verify against official liturgical calendars

### Observance Management

- Follow traditional liturgical ranking system
- Handle competing observances correctly
- Support both universal and local calendar variations
- Maintain backward compatibility

## Component Development

### UI Components

- Create reusable components in `src/components/`
- Use proper TypeScript interfaces for props
- Implement accessibility features (screen readers, etc.)
- Follow consistent design patterns

### Page Components

- Place route components in `src/app/`
- Use Expo Router conventions
- Implement proper loading states
- Handle error conditions gracefully

## Testing Requirements

### Unit Tests (Required)

- Test all calendar calculation functions
- Test utility functions thoroughly
- Mock external dependencies properly
- Aim for high code coverage

### Integration Tests (Recommended)

- Test navigation flows
- Test provider interactions
- Test cross-platform rendering
- Test offline functionality

## Development Workflow

### Before Starting Work

1. Read existing code patterns
2. Check for similar implementations
3. Plan component architecture
4. Consider platform compatibility

### During Development

1. Write tests first for new logic
2. Use TypeScript strictly
3. Follow accessibility guidelines
4. Test on multiple devices/browsers

### Before Committing

1. Run type checking (`pnpm check`)
2. Run linting (`pnpm lint`)
3. Run test suite (`pnpm test`)
4. Verify cross-platform functionality

## Common Patterns

### Data Fetching

- Use React Query for remote data (if implemented)
- Implement proper loading and error states
- Cache expensive calculations
- Handle offline scenarios

### State Management

- Use React Context for app-wide state
- Keep local state minimal
- Use useReducer for complex state logic
- Implement proper state persistence

### Navigation

- Use Expo Router's typed routes
- Implement proper deep linking
- Handle navigation state properly
- Support both tab and stack navigation

## Error Handling

### User Experience

- Provide meaningful error messages
- Implement graceful degradation
- Show loading states during operations
- Allow retry mechanisms for failures

### Development

- Use TypeScript for compile-time error catching
- Implement proper error boundaries
- Log errors appropriately
- Handle edge cases explicitly

## Accessibility

### Screen Readers

- Use proper semantic HTML elements
- Implement ARIA labels where needed
- Provide text alternatives for images
- Ensure proper focus management

### Motor Accessibility

- Provide adequate touch targets
- Support keyboard navigation
- Allow customizable font sizes
- Implement proper contrast ratios

## Security Considerations

### Data Handling

- Sanitize user inputs
- Validate all external data
- Use secure storage for sensitive data
- Implement proper authentication if needed

### Content Security

- Verify liturgical content sources
- Protect against content manipulation
- Implement proper version control
- Maintain content integrity

Remember: This application serves the sacred traditions of the Catholic Church. Approach all development with reverence, accuracy, and attention to detail.
