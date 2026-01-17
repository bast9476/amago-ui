# Common Module

Shared resources used across all modules.

## Structure

- `components/` - Reusable UI components (Footer, Button, Input, etc.)
- `hooks/` - Shared React hooks (useCrossModuleNavigation, etc.)
- `utils/` - Utility functions
- `theme/` - Theme configuration (colors, typography, spacing)
- `types/` - Shared TypeScript types

## Usage

Import from common module using path alias:

```tsx
import Footer from '@modules/common/components/Footer';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';
```
