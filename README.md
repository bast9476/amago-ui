# Aamago React Native

Super app built with Expo, React Navigation, TypeScript, and NativeWind (Tailwind CSS).

## Project Structure

```
src/
  modules/
    common/          # Shared components, hooks, utilities, types, theme
    ecommerce/       # E-commerce module
    digital/         # Digital services module
  navigation/        # App navigation configuration
  store/             # Global state management
  api/               # Shared API configuration
  assets/            # App assets (images, icons, fonts)
  hooks/             # Cross-cutting React hooks
  services/          # Business/data layer
  utils/             # Pure utility functions
```

## Modules

The app is organized as a **super app** with domain-based modules:

- **Ecommerce**: Product listings, shopping cart, checkout, orders
- **Digital**: Digital services, solutions, subscriptions

Each module contains:
- `screens/` - Screen components
- `components/` - Module-specific components
- `hooks/` - Module-specific hooks
- `services/` - API services and business logic
- `store/` - State management
- `navigation/` - Navigation configuration
- `assets/` - Module-specific assets

## Navigation

The app uses nested navigation where each module has its own navigator. See `src/navigation/README.md` for details.

## Development

```bash
# Start development server
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios
```

## Conventions

- Use absolute imports: `@modules/*` for modules, `@src/*` for shared code
- Styling: Use NativeWind `className` utilities
- Type everything; avoid `any`
- Keep functions small and pure
- Module-specific code stays in modules; shared code goes in `common/`
