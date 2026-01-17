# Flight Module

Flight booking mini-app for flight search, booking, and management.

## Structure

- `screens/` - Screen components (Home, Search, Booking, MyBookings, etc.)
- `components/` - Module-specific components
- `hooks/` - Module-specific hooks
- `services/` - API services and business logic
- `store/` - State management (Redux Toolkit)
- `navigation/` - Navigation configuration
- `assets/` - Module-specific assets

## Navigation

The Flight module uses its own stack navigator. To navigate to Flight screens:

```tsx
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { FlightStackParamList } from '@src/navigation/types';

const navigation = useNavigation<NativeStackNavigationProp<FlightStackParamList>>();
navigation.navigate('Home');
```

## Store

The Flight module uses Redux Toolkit for state management. Access the store:

```tsx
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { selectFlightState, bootstrapFlight } from '@modules/Flight/store';

// In component
const dispatch = useAppDispatch();
const flightState = useAppSelector(selectFlightState);

// Bootstrap data
useEffect(() => {
  dispatch(bootstrapFlight() as any);
}, [dispatch]);
```

## Adding New Screens

1. Create screen component in `screens/` folder
2. Add screen type in `src/navigation/types.ts` under `FlightStackParamList`
3. Register screen in `navigation/FlightNavigator.tsx`
4. Export from `screens/index.ts`
