## Home Module

This module powers the **Home** section of the app, structured the same way as the `digital` and `ecommerce` modules.

### Structure

- `assets/` – Images and icons used only by the Home module.
- `components/` – Reusable UI components shared across Home screens.
- `hooks/` – Home-specific hooks (e.g. header configuration).
- `navigation/` – Stack navigator for the Home module (`HomeNavigator`).
- `screens/` – All Home module screens (currently just `Home`).
- `services/` – Service layer for Home (API wrappers, helpers).
- `store/` – Redux Toolkit slices, selectors, bootstrap, and types for Home.

At the moment this module provides a single simple `Home` screen as an entry point, with a minimal Redux slice ready to expand later.


