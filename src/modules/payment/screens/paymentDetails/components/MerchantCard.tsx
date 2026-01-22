import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectSelectedMerchant } from '@modules/payment/store';
import { merchantLogos } from '@modules/payment/store/initialData';
import type { PaymentStackParamList } from '@src/navigation/types';

// Checkmark Icon
const CheckmarkIcon = () => (
  <Svg width={8} height={8} viewBox="0 0 8 8" fill="none">
    <Path
      d="M6.81511 0.143079C6.68467 0.070583 6.54123 0.0244932 6.39298 0.00744156C6.24473 -0.00961005 6.09457 0.0027107 5.95108 0.0437002C5.80759 0.0846897 5.67358 0.153545 5.5567 0.246333C5.43983 0.339122 5.34238 0.454025 5.26992 0.584481L3.16062 4.38043L1.95343 3.17325C1.84863 3.06473 1.72326 2.97817 1.58464 2.91863C1.44602 2.85908 1.29693 2.82774 1.14607 2.82643C0.995214 2.82512 0.845603 2.85387 0.705972 2.91099C0.566341 2.96812 0.439485 3.05248 0.332807 3.15916C0.226129 3.26584 0.141765 3.3927 0.0846372 3.53233C0.0275096 3.67196 -0.00123752 3.82157 7.34156e-05 3.97243C0.00138435 4.12329 0.0327271 4.27238 0.0922726 4.411C0.151818 4.54961 0.238374 4.67498 0.34689 4.77979L2.61923 7.05213C2.83397 7.26744 3.12369 7.3856 3.4225 7.3856L3.57986 7.37424C3.75401 7.34987 3.92012 7.28543 4.06513 7.18596C4.21014 7.0865 4.33008 6.95473 4.41552 6.80104L7.25594 1.68827C7.32846 1.55787 7.37458 1.41446 7.39168 1.26623C7.40877 1.118 7.3965 0.967856 7.35556 0.824371C7.31463 0.680885 7.24583 0.546867 7.1531 0.429971C7.06037 0.313074 6.94552 0.215588 6.81511 0.143079Z"
      fill="#00A551"
    />
  </Svg>
);

type NavigationProp = NativeStackNavigationProp<PaymentStackParamList, 'Merchant'>;

export default function MerchantCard() {
  const navigation = useNavigation<NavigationProp>();
  const selectedMerchant = useAppSelector(selectSelectedMerchant);
  const fallbackLogo = merchantLogos.biman;

  // Default values if merchant is not selected
  const merchantName = selectedMerchant?.name || 'Biman Bangladesh Airlines';
  const merchantLogo = selectedMerchant?.logo || fallbackLogo;
  const accountNumber = '01••••••234'; // This could be stored in payment details state if needed
  const accountType = 'Flight'; // This could be stored in payment details state if needed

  const handleChange = () => {
    navigation.navigate('Merchant');
  };
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] p-7"
      style={styles.cardShadow}
    >
      <View className="flex-row items-center gap-3">
        <View className="mr-[10px] w-[56px] h-[51px] rounded-[8px] overflow-hidden" style={styles.logoShadow}>
          <Image
            source={merchantLogo}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex-1">
          <View className="mb-3 flex-row items-center gap-2">
            <Text className="flex-1 text-[17px] font-semibold text-[#242424]" numberOfLines={1}>
              {merchantName} Bangladesh Airlines
            </Text>
            <View className="w-6 h-6 items-center justify-center rounded-full bg-green-100 border border-[#b9f8cf]">
              <CheckmarkIcon />
            </View>
          </View>
          <View className="mb-3 flex-row items-center gap-2">
            <Text className="text-[19px] text-[#62748e]">{accountNumber}</Text>
            <Text className="text-[19px] text-[#62748e]">{accountType}</Text>
          </View>
          <TouchableOpacity onPress={handleChange}>
            <Text className="text-[17px] font-semibold text-[#00a551]">Change</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  logoShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.06,
    shadowRadius: 3.9,
    elevation: 2,
  },
});
