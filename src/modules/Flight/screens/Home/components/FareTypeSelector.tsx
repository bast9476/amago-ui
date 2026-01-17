import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectFareTypes, type FareType } from '@modules/Flight/store';

export default function FareTypeSelector() {
  const [selected, setSelected] = useState<FareType>('regular');
  const fareTypes = useAppSelector(selectFareTypes);

  const getIcon = (id: FareType) => {
    const color = selected === id ? '#00A551' : '#696969';

    if (id === 'regular') {
      return (
        <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
          <Path
            d="M14.0951 15.58V14.0963C14.0951 13.3093 13.7825 12.5545 13.226 11.998C12.6695 11.4415 11.9147 11.1289 11.1277 11.1289H6.67664C5.88964 11.1289 5.13487 11.4415 4.57837 11.998C4.02188 12.5545 3.70924 13.3093 3.70924 14.0963V15.58"
            stroke={color}
            strokeWidth={1.4837}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M8.90218 8.16135C10.541 8.16135 11.8696 6.8328 11.8696 5.19396C11.8696 3.55511 10.541 2.22656 8.90218 2.22656C7.26333 2.22656 5.93478 3.55511 5.93478 5.19396C5.93478 6.8328 7.26333 8.16135 8.90218 8.16135Z"
            stroke={color}
            strokeWidth={1.4837}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    }

    if (id === 'student') {
      return (
        <Svg width={21} height={15} viewBox="0 0 21 15" fill="none">
          <Path
            d="M18.6281 6.31509C18.7914 6.24304 18.93 6.12466 19.0267 5.97462C19.1234 5.82458 19.174 5.64946 19.1721 5.47097C19.1703 5.29247 19.1161 5.11844 19.0163 4.97043C18.9166 4.82242 18.7756 4.70693 18.6108 4.63827L10.7914 1.07665C10.5537 0.968221 10.2955 0.912109 10.0342 0.912109C9.77296 0.912109 9.51473 0.968221 9.27702 1.07665L1.4586 4.63463C1.29618 4.70576 1.15801 4.82268 1.06099 4.9711C0.963964 5.11951 0.912292 5.29298 0.912292 5.47029C0.912292 5.64761 0.963964 5.82108 1.06099 5.96949C1.15801 6.1179 1.29618 6.23483 1.4586 6.30596L9.27702 9.87124C9.51473 9.97966 9.77296 10.0358 10.0342 10.0358C10.2955 10.0358 10.5537 9.97966 10.7914 9.87124L18.6281 6.31509Z"
            stroke={color}
            strokeWidth={1.8246}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path d="M19.1573 5.47461V10.9484" stroke={color} strokeWidth={1.8246} strokeLinecap="round" strokeLinejoin="round" />
          <Path
          
            d="M4.56042 7.75391V10.947C4.56042 11.6728 5.13713 12.369 6.16367 12.8822C7.19021 13.3955 8.58249 13.6839 10.0342 13.6839C11.486 13.6839 12.8783 13.3955 13.9048 12.8822C14.9313 12.369 15.508 11.6728 15.508 10.947V7.75391"
            stroke={color}
            strokeWidth={1.8246}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      );
    }

    // business
    return (
      <Svg width={22} height={22} viewBox="0 0 22 22" fill="none">
        <Path
          d="M17.8147 6.23482H14.2518V4.45335L12.4703 2.67188H8.90735L7.12588 4.45335V6.23482H3.56294C2.58313 6.23482 1.78146 7.03648 1.78146 8.01629V12.47C1.78146 13.138 2.13776 13.6992 2.6722 14.0109V16.9237C2.6722 17.9124 3.46496 18.7051 4.45367 18.7051H16.924C17.9127 18.7051 18.7055 17.9124 18.7055 16.9237V14.002C19.231 13.6903 19.5962 13.1202 19.5962 12.47V8.01629C19.5962 7.03648 18.7945 6.23482 17.8147 6.23482ZM8.90735 4.45335H12.4703V6.23482H8.90735V4.45335ZM3.56294 8.01629H17.8147V12.47H13.361V9.79777H8.01662V12.47H3.56294V8.01629ZM11.5796 13.3607H9.79809V11.5792H11.5796V13.3607ZM16.924 16.9237H4.45367V14.2514H8.01662V15.1422H13.361V14.2514H16.924V16.9237Z"
          fill="#696969"
          stroke={color}
        />
      </Svg>
    );
  };

  return (
    <View className="w-full px-4 mb-[27px]">
      <Text className="text-[18px] font-semibold text-[#242424] mb-3">Fare Type</Text>
      <View className="flex-row items-center gap-3">
        {fareTypes.map((type) => {
          const isSelected = selected === type.id;
          return (
            <TouchableOpacity
              key={type.id}
              onPress={() => setSelected(type.id)}
              className={`flex-1 items-center justify-center rounded-xl py-[24px] ${
                isSelected ? 'bg-[#07b556]/5 border border-[#00a551]' : 'bg-white border border-[#f3f4f7]'
              }`}
            >
              <View className="items-center gap-1">
                {getIcon(type.id)}
                <Text
                  className={`text-[14px] ${isSelected ? 'font-semibold text-[#00a551]' : 'font-medium text-[#696969]'}`}
                >
                  {type.label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
