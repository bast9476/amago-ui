import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { usePaymentDetails } from '../hooks/usePaymentDetails';

export default function PaymentMethodSection() {
  const { paymentMethods, selectedPaymentMethod, handlePaymentMethodSelect } = usePaymentDetails();
  return (
    <View
      className="w-full rounded-2xl bg-white border border-[#f3f4f7] px-5 py-5 mt-[35px] shadow-sm"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <Text className="text-[19px] font-semibold text-[#242424] mb-4">Payment Method</Text>
      <View className="flex-row flex-wrap gap-x-2 gap-y-6 mb-5">
        {paymentMethods.map((method) => {
          const isSelected = selectedPaymentMethod === method.id;
          return (
            <TouchableOpacity
              key={method.id}
              onPress={() => handlePaymentMethodSelect(method.id)}
              className={`w-[30%] h-[155px] rounded-[14px] items-center justify-center p-3 ${
                isSelected ? 'bg-green-50 border-2 border-[#00c950]' : 'bg-white border border-[#f3f4f7]'
              }`}
            >
              <View className="items-center justify-center flex-1 gap-1">
                <View className="w-[60px] h-[60px] items-center justify-center mb-1">
                  <Image
                    source={method.logo}
                    className="w-full h-full"
                    resizeMode="contain"
                  />
                </View>
                {method.fee && (
                  <Text className="text-xs font-medium text-[#fb2c36] text-center">{method.fee}</Text>
                )}
                {method.cashback && (
                  <Text className="text-xs font-medium text-[#00a551] text-center">{method.cashback}</Text>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
