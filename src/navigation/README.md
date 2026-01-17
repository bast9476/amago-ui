# Navigation

This app uses **nested navigation** where each module has its own navigator.

## Structure

```
Root Navigator
├── Ecommerce Navigator
│   ├── Home
│   ├── MyCart
│   ├── ProductDetail
│   └── ...
└── Digital Navigator
    ├── Home
    ├── Services
    └── ...
```

## Navigation Methods

### Navigate within the same module

```tsx
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EcommerceStackParamList } from '@src/navigation/types';

const navigation = useNavigation<NativeStackNavigationProp<EcommerceStackParamList>>();
navigation.navigate('MyCart');
```

### Navigate to another module

```tsx
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

const navigateToModule = useCrossModuleNavigation();
navigateToModule('Digital', 'Home');
```

### Navigate with parameters

```tsx
// Same module
navigation.navigate('ProductDetail', { productId: '123' });

// Cross-module
navigateToModule('Digital', 'ServiceDetail', { serviceId: '123' });
```

## Adding New Screens

1. Add screen type in `src/navigation/types.ts`
2. Create screen component in module's `screens/` folder
3. Register screen in module's navigator
4. Export from `screens/index.ts`
