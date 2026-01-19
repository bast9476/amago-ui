import React from 'react';
import { View, TextInput } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { selectPaymentSearchQuery, setSearchQuery } from '@modules/payment/store';

const SearchIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 21 21" fill="none">
    <Path d="M17.5352 17.5361L13.9113 13.9121" stroke="#979797" strokeWidth={1.67} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      d="M9.18511 15.866C12.8744 15.866 15.8652 12.8752 15.8652 9.18594C15.8652 5.49663 12.8744 2.50586 9.18511 2.50586C5.49581 2.50586 2.50504 5.49663 2.50504 9.18594C2.50504 12.8752 5.49581 15.866 9.18511 15.866Z"
      stroke="#979797"
      strokeWidth={1.67}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function PaymentSearchBar() {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectPaymentSearchQuery);

  return (
    <View
      className="rounded-[16px] bg-white border border-[#f3f4f7] px-[17px] py-[18px] mt-[18px]"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="relative">
        <TextInput
          placeholder="Search by name or number"
          placeholderTextColor="#8b8b8b"
          value={query}
          onChangeText={(text) => dispatch(setSearchQuery(text))}
          className="h-[52px] text-[18px] rounded-[14px] bg-[#f3f3f5] border border-[#f3f4f7] pl-10 pr-4 text-[#242424]"
        />
        <View className="absolute left-3 top-4">
          <SearchIcon />
        </View>
      </View>
    </View>
  );
}
