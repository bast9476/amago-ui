import { useMemo } from 'react';
import type { MainHeaderProps } from '@modules/common/components/MainHeader';

// Simple header configuration for the Home module.
// This mirrors the header config hooks used in other modules.
export function useHomeHeaderConfig(): MainHeaderProps {
  return useMemo(
    () => ({
      title: 'Home',
      variant: 'white',
    }),
    [],
  );
}


