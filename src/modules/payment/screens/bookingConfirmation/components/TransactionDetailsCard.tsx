import React, { useMemo } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useBookingConfirmation } from '../hooks/useBookingConfirmation';

const CheckBadge = () => (
  <View className="w-[21px] h-[21px] items-center justify-center rounded-full bg-green-100 border border-[#b9f8cf]">
    <Svg width={7} height={7} viewBox="0 0 7 7" fill="none">
      <Path
        d="M6.08018 0.12765C5.9638 0.0629717 5.83583 0.021852 5.70357 0.0066391C5.5713 -0.00857376 5.43733 0.00241839 5.30932 0.0389878C5.1813 0.0755573 5.06174 0.136987 4.95747 0.21977C4.8532 0.302552 4.76626 0.405065 4.70161 0.521454L2.81976 3.90807L1.74276 2.83106C1.64925 2.73425 1.5374 2.65702 1.41373 2.6039C1.29006 2.55077 1.15705 2.52281 1.02246 2.52164C0.887868 2.52047 0.754391 2.54612 0.629816 2.59709C0.505242 2.64805 0.392066 2.72332 0.296892 2.8185C0.201717 2.91367 0.12645 3.02685 0.0754832 3.15142C0.0245159 3.27599 -0.0011313 3.40947 3.82722e-05 3.54406C0.00120784 3.67866 0.0291707 3.81167 0.0822952 3.93534C0.13542 4.05901 0.212642 4.17086 0.309456 4.26436L2.33676 6.29167C2.52834 6.48376 2.78682 6.58917 3.05341 6.58917L3.1938 6.57904C3.34917 6.5573 3.49737 6.4998 3.62674 6.41107C3.75611 6.32233 3.86312 6.20477 3.93934 6.06765L6.47347 1.50622C6.53817 1.38988 6.57932 1.26193 6.59457 1.12969C6.60982 0.997441 6.59887 0.863488 6.56235 0.735475C6.52583 0.607462 6.46445 0.487896 6.38172 0.383605C6.29899 0.279314 6.19652 0.19234 6.08018 0.12765Z"
        fill="#00A551"
      />
    </Svg>
  </View>
);

const CopyIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_copy)">
      <Path
        d="M13.3244 5.99609H7.32842C6.59253 5.99609 5.99597 6.59265 5.99597 7.32854V13.3246C5.99597 14.0605 6.59253 14.657 7.32842 14.657H13.3244C14.0603 14.657 14.6569 14.0605 14.6569 13.3246V7.32854C14.6569 6.59265 14.0603 5.99609 13.3244 5.99609Z"
        stroke="#00A551"
        strokeWidth={1.33245}
      />
      <Path
        d="M3.33107 9.99296H2.66485C2.31146 9.99296 1.97255 9.85257 1.72266 9.60269C1.47278 9.35281 1.3324 9.01389 1.3324 8.66051V2.66448C1.3324 2.31109 1.47278 1.97218 1.72266 1.7223C1.97255 1.47241 2.31146 1.33203 2.66485 1.33203H8.66087C9.01426 1.33203 9.35317 1.47241 9.60306 1.7223C9.85294 1.97218 9.99332 2.31109 9.99332 2.66448V3.33071"
        stroke="#00A551"
        strokeWidth={1.33245}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_copy">
        <Rect width={15.9894} height={15.9894} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default function TransactionDetailsCard() {
  const {
    bookingConfirmation,
    selectedMerchant,
    paymentMethod,
    handleCopyTransactionId,
  } = useBookingConfirmation();

  const merchantName = useMemo(() => {
    return selectedMerchant?.name ? `${selectedMerchant.name} Bangladesh Airlines` : 'Biman Bangladesh Airlines';
  }, [selectedMerchant]);

  const paymentMethodName = useMemo(() => {
    return paymentMethod?.name ? `${paymentMethod.name} Pay` : 'Amago Pay';
  }, [paymentMethod]);
  return (
    <View
      className="w-full rounded-2xl mt-11 bg-white border border-[#f3f4f7] px-4 py-5"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="gap-y-1">
        <View className='mt-7'>
          <Text className="text-[18px] font-semibold text-[#242424]">Transaction Details</Text>
          <View className="flex-row items-center mt-5 border-b border-[#f3f4f7] pb-4 gap-x-3">
            <View
              className="w-[44px] h-[40px] rounded-[7px] overflow-hidden items-center justify-center bg-white"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.06,
                shadowRadius: 3.5,
                elevation: 2,
              }}
            >
              {selectedMerchant?.logo ? (
                <Image source={selectedMerchant.logo} className="w-full h-full" resizeMode="cover" />
              ) : null}
            </View>
            <View className="flex-1 gap-y-2">
              <View className="flex-row items-center">
                <Text className="text-[16px] mr-2 font-semibold text-[#242424]" numberOfLines={1}>
                  {merchantName}
                </Text>
                <CheckBadge />
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-[18px] text-[#62748e]">{bookingConfirmation.maskedAccount}</Text>
                <Text className="text-[18px] text-[#62748e]">{bookingConfirmation.categoryLabel}</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="gap-5 mb-5">
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#686868]">Amount</Text>
            <Text className="text-[18px] font-medium text-[#242424]">{bookingConfirmation.amount}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#686868]">Fee</Text>
            <Text className="text-[18px] font-medium text-[#242424]">{bookingConfirmation.fee}</Text>
          </View>
        </View>

        <View className="flex-row justify-between items-center border-t border-b border-[#f3f4f7] pt-4 pb-5">
          <Text className="text-[18px] text-[#616161]">Total Paid</Text>
          <Text className="text-[18px] font-semibold text-[#242424]">{bookingConfirmation.totalPaid}</Text>
        </View>

        <View className="gap-4 mb-8">
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#7c7c7c]">Transaction ID</Text>
            <TouchableOpacity onPress={handleCopyTransactionId} className="flex-row items-center">
              <Text className="text-[17px] text-[#00a551] mr-2">{bookingConfirmation.transactionId}</Text>
              <CopyIcon />
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#7c7c7c]">Date & Time</Text>
            <Text className="text-[16px] font-medium text-[#707070]">{bookingConfirmation.dateTime}</Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#7c7c7c]">Payment Method</Text>
            <View className="flex-row items-center gap-2">
              {paymentMethod?.logo ? (
                <View className="w-[19px] h-[21px] items-center justify-center">
                  <Image source={paymentMethod.logo} className="w-full h-full" resizeMode="contain" />
                </View>
              ) : null}
              <Text className="text-[11px] font-semibold text-[#00a551]">{paymentMethodName}</Text>
            </View>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-[18px] text-[#7c7c7c]">Balance Left</Text>
            <Text className="text-[20px] font-semibold text-[#242424]">{bookingConfirmation.balanceLeft}</Text>
          </View>
        </View>

        <View className="flex-row items-center rounded-[14px] bg-[#d9f2e5] px-4 py-4 mt-5">
          <Text className="text-[24px]">💎</Text>
          <View className="ml-3">
            <Text className="text-[18px] font-semibold text-[#242424]">{bookingConfirmation.pointsTitle}</Text>
            <Text className="text-[18px] text-[#686868]">{bookingConfirmation.pointsSubtitle}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
