import React, { useMemo } from 'react';
import { Text, View, Image } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectFavoriteMerchants, selectPaymentSearchQuery } from '@modules/payment/store';

const StarIcon = () => (
  <Svg width={23} height={21} viewBox="0 0 23 21" fill="none">
    <Path
      d="M10.554 0.295656C10.5979 0.206888 10.6658 0.132167 10.7499 0.0799248C10.8341 0.027683 10.9312 0 11.0302 0C11.1293 0 11.2263 0.027683 11.3105 0.0799248C11.3946 0.132167 11.4625 0.206888 11.5064 0.295656L13.8224 4.98674C13.975 5.29551 14.2002 5.56264 14.4787 5.7652C14.7573 5.96777 15.0808 6.09972 15.4215 6.14974L20.6009 6.90769C20.699 6.92191 20.7912 6.96331 20.8671 7.0272C20.9429 7.09109 20.9993 7.17493 21.03 7.26923C21.0607 7.36353 21.0643 7.46454 21.0406 7.56081C21.0169 7.65709 20.9666 7.7448 20.8956 7.81403L17.15 11.4614C16.903 11.7022 16.7181 11.9993 16.6114 12.3273C16.5047 12.6553 16.4793 13.0043 16.5374 13.3443L17.4217 18.4976C17.439 18.5956 17.4284 18.6966 17.3911 18.789C17.3538 18.8814 17.2913 18.9614 17.2107 19.0199C17.1301 19.0784 17.0347 19.1131 16.9353 19.1201C16.8359 19.127 16.7366 19.1058 16.6487 19.059L12.0188 16.6247C11.7137 16.4645 11.3743 16.3809 11.0297 16.3809C10.6851 16.3809 10.3457 16.4645 10.0407 16.6247L5.41174 19.059C5.32384 19.1055 5.22466 19.1265 5.12545 19.1194C5.02625 19.1124 4.93102 19.0776 4.85059 19.0191C4.77016 18.9606 4.70776 18.8807 4.67049 18.7885C4.63321 18.6963 4.62256 18.5955 4.63975 18.4976L5.52303 13.3453C5.58137 13.0051 5.5561 12.6559 5.44938 12.3277C5.34265 11.9995 5.15769 11.7022 4.91045 11.4614L1.1648 7.81503C1.09321 7.74589 1.04247 7.65802 1.01838 7.56145C0.994289 7.46488 0.997803 7.36349 1.02852 7.26882C1.05925 7.17414 1.11594 7.09 1.19214 7.02598C1.26835 6.96196 1.36101 6.92063 1.45956 6.90669L6.6379 6.14974C6.97904 6.10011 7.303 5.96833 7.58192 5.76574C7.86083 5.56315 8.08634 5.29581 8.23903 4.98674L10.554 0.295656Z"
      fill="#FDC700"
      stroke="#FDC700"
      strokeWidth={2.00517}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function FavoriteMerchantsSection() {
  const query = useAppSelector(selectPaymentSearchQuery);
  const favoriteMerchants = useAppSelector(selectFavoriteMerchants);

  const filteredMerchants = useMemo(() => {
    if (!query.trim()) return favoriteMerchants;
    const lowered = query.toLowerCase();
    return favoriteMerchants.filter((merchant) => merchant.name.toLowerCase().includes(lowered));
  }, [query, favoriteMerchants]);

  if (!filteredMerchants.length) {
    return null;
  }

  return (
    <View className="mt-6">
      <Text className="text-[20px] font-semibold text-[#242424] mb-[15px]">Favorites</Text>
      <View className="flex-row gap-3">
        {filteredMerchants.map((merchant) => (
          <View key={merchant.id} className="relative w-[115px] mr-[9px] h-[115px]">
            <View
              className="absolute top-[3px] left-0 w-[115px] h-[115px] rounded-[16px] bg-white border border-[#f3f4f7]"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 2,
              }}
            >
              <View className="flex-1 items-center justify-center gap-2">
                <Image source={merchant.logo} className="w-[48px] h-[48px] rounded-[14px]" resizeMode="cover" />
                <Text className="text-[16px] font-medium text-[#242424]">{merchant.name}</Text>
              </View>
            </View>
            <View className="absolute right-2 -top-1">
              <StarIcon />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
