import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { setSearchQuery, selectPaymentSearchQuery } from '@modules/payment/store';
import type { MainHeaderProps, SearchBehavior } from '@modules/common/components/MainHeader';

function createPaymentSearchBehavior(
  dispatch: ReturnType<typeof useAppDispatch>,
  searchQuery: string
): SearchBehavior {
  return {
    getValue: () => searchQuery,
    onChangeText: (text: string) => {
      dispatch(setSearchQuery(text));
    },
  };
}

export function usePaymentHeaderConfig(): MainHeaderProps {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectPaymentSearchQuery);

  return useMemo(
    () => ({
      title: 'Merchant',
      variant: 'white',
      rightIcon: {
        type: 'info',
        onPress: () => {
          console.log('Payment info pressed');
        },
      },
      searchConfig: {
        placeholder: 'Search by name or number',
        icons: [
          {
            type: 'scan',
            onPress: () => {
              console.log('Scan pressed');
            },
          },
        ],
        behavior: createPaymentSearchBehavior(dispatch, searchQuery),
      },
    }),
    [dispatch, searchQuery]
  );
}
