import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, Defs, ClipPath, G, Rect } from 'react-native-svg';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

export interface TopRatedProviderCardProps {
  name: string;
  title: string;
  rating: number;
  reviews: number;
  price: string;
  profileImage: any;
  index: number;
}

export default function TopRatedProviderCard({
  name,
  title,
  rating,
  reviews,
  price,
  profileImage,
  index,
}: TopRatedProviderCardProps) {
  const navigation = useCrossModuleNavigation();
  return (
    <View
      className={`rounded-2xl bg-white border border-neutral-100 px-4 py-[26px] shadow shadow-black/10 ${index === 0 ? '' : 'mt-4'}`}
    >
      {/* Header: Profile and Heart */}
      <View className="flex-row justify-between items-start mb-[15px]">
        <View className="flex-row items-center gap-3 flex-1">
          <Image
            source={profileImage}
            className="w-[52px] h-[52px] rounded-full bg-gray-300"
            resizeMode="cover"
          />
          <View className="flex-1 gap-1">
            <Text className="text-[18px] font-[600] text-black " numberOfLines={1}>{name}</Text>
            <Text className="text-[14px] opacity-60 text-[#242424]" numberOfLines={2}>{title}</Text>
          </View>
        </View>
        <TouchableOpacity className="w-9 h-9 items-center justify-center">
          <Svg width={23} height={23} viewBox="0 0 20 20" fill="none">
            <Path
              d="M1.66556 7.91017C1.66557 6.98345 1.9467 6.07853 2.4718 5.31493C2.99691 4.55134 3.74128 3.96499 4.60662 3.63332C5.47196 3.30166 6.41755 3.24029 7.3185 3.45731C8.21945 3.67433 9.03338 4.15954 9.65278 4.84886C9.69641 4.8955 9.74915 4.93269 9.80774 4.95812C9.86633 4.98354 9.92952 4.99666 9.99339 4.99666C10.0573 4.99666 10.1204 4.98354 10.179 4.95812C10.2376 4.93269 10.2904 4.8955 10.334 4.84886C10.9515 4.15506 11.7656 3.66578 12.668 3.44612C13.5704 3.22646 14.5183 3.28684 15.3856 3.61924C16.2528 3.95163 16.9982 4.54027 17.5227 5.3068C18.0471 6.07334 18.3256 6.98141 18.3212 7.91017C18.3212 9.81724 17.072 11.2413 15.8229 12.4905L11.2492 16.9151C11.0941 17.0933 10.9027 17.2364 10.688 17.335C10.4732 17.4336 10.2399 17.4854 10.0036 17.4869C9.76732 17.4884 9.5334 17.4396 9.31741 17.3437C9.10142 17.2478 8.9083 17.1071 8.75088 16.9309L4.16391 12.4905C2.91473 11.2413 1.66556 9.82557 1.66556 7.91017Z"
              stroke="#A1A1A1"
              strokeWidth={1.66557}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      {/* Rating and Badges */}
      <View className="flex-row items-center gap-3.5 mb-[15px]">
        <View className="flex-row items-center gap-1">
          <Svg width={19} height={19} viewBox="0 0 16 16" fill="none">
            <G clipPath={`url(#clip0_star_${index})`}>
              <Path
                d="M7.67824 1.5285C7.70744 1.46951 7.75254 1.41986 7.80846 1.38514C7.86438 1.35043 7.92888 1.33203 7.9947 1.33203C8.06052 1.33203 8.12503 1.35043 8.18094 1.38514C8.23686 1.41986 8.28196 1.46951 8.31116 1.5285L9.85014 4.64577C9.95153 4.85095 10.1012 5.02846 10.2863 5.16307C10.4714 5.29767 10.6863 5.38536 10.9128 5.41859L14.3545 5.92226C14.4197 5.93171 14.481 5.95922 14.5314 6.00168C14.5818 6.04413 14.6193 6.09984 14.6397 6.16251C14.66 6.22517 14.6625 6.29229 14.6467 6.35627C14.6309 6.42024 14.5976 6.47853 14.5504 6.52453L12.0613 8.94826C11.8972 9.10822 11.7744 9.30568 11.7035 9.52363C11.6326 9.74159 11.6157 9.97351 11.6543 10.1994L12.2419 13.6238C12.2534 13.689 12.2464 13.7561 12.2216 13.8175C12.1968 13.8789 12.1552 13.932 12.1017 13.9709C12.0481 14.0098 11.9847 14.0329 11.9187 14.0375C11.8527 14.0421 11.7867 14.028 11.7282 13.9969L8.6516 12.3793C8.44888 12.2729 8.22334 12.2173 7.99437 12.2173C7.7654 12.2173 7.53986 12.2729 7.33714 12.3793L4.26117 13.9969C4.20276 14.0278 4.13685 14.0418 4.07093 14.0371C4.00501 14.0324 3.94173 14.0093 3.88828 13.9704C3.83483 13.9316 3.79337 13.8785 3.7686 13.8172C3.74383 13.7559 3.73675 13.6889 3.74817 13.6238L4.33512 10.2001C4.37389 9.97407 4.35709 9.742 4.28618 9.52391C4.21526 9.30582 4.09235 9.10826 3.92806 8.94826L1.43903 6.5252C1.39146 6.47925 1.35775 6.42086 1.34174 6.35669C1.32573 6.29252 1.32806 6.22514 1.34848 6.16223C1.36889 6.09932 1.40657 6.04341 1.45721 6.00086C1.50785 5.95832 1.56942 5.93085 1.6349 5.9216L5.07596 5.41859C5.30265 5.38562 5.51793 5.29805 5.70327 5.16342C5.88861 5.0288 6.03846 4.85115 6.13993 4.64577L7.67824 1.5285Z"
                fill="#FFB900"
                stroke="#FFB900"
                strokeWidth={1.33245}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id={`clip0_star_${index}`}>
                <Rect width={15.9894} height={15.9894} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <View className="flex-row items-center">
            <Text className="text-[16px] font-medium text-[#242424]">{rating}</Text>
            <Text className="ml-[1] text-[16px] opacity-50 text-[#242424]">({reviews})</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="h-[28px] px-2 rounded-lg bg-green-50 border border-[#b9f8cf] items-center justify-center flex-row">
            <Svg width={15} height={15} viewBox="0 0 12 12" fill="none">
              <G clipPath={`url(#clip0_check_${index})`}>
                <Path
                  d="M10.8933 4.99516C11.1215 6.11506 10.9589 7.27936 10.4325 8.29387C9.90621 9.30839 9.04798 10.1118 8.00098 10.5701C6.95398 11.0285 5.7815 11.114 4.67907 10.8125C3.57663 10.511 2.61088 9.84065 1.94286 8.91328C1.27485 7.9859 0.944946 6.85754 1.00817 5.71637C1.0714 4.5752 1.52394 3.49019 2.29032 2.6423C3.0567 1.7944 4.0906 1.23486 5.21959 1.05698C6.34859 0.879113 7.50444 1.09366 8.4944 1.66486"
                  stroke="#008236"
                  strokeWidth={0.99934}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4.49704 5.49769L5.99605 6.9967L10.9927 2"
                  stroke="#008236"
                  strokeWidth={0.99934}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id={`clip0_check_${index}`}>
                  <Rect width={11.9921} height={11.9921} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text className="ml-1 text-[14px] font-medium text-[#008236]">Verified</Text>
          </View>
          <View className="h-[28px] px-2 rounded-lg bg-blue-50 border border-[#bedbff] items-center justify-center flex-row">
            <Svg width={15} height={15} viewBox="0 0 12 12" fill="none">
              <G clipPath={`url(#clip0_clock_${index})`}>
                <Path
                  d="M5.99603 2.99609V5.99411L7.99471 6.99345"
                  stroke="#1447E6"
                  strokeWidth={0.99934}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.99603 10.9934C8.75563 10.9934 10.9927 8.7563 10.9927 5.9967C10.9927 3.2371 8.75563 1 5.99603 1C3.23643 1 0.999329 3.2371 0.999329 5.9967C0.999329 8.7563 3.23643 10.9934 5.99603 10.9934Z"
                  stroke="#1447E6"
                  strokeWidth={0.99934}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </G>
              <Defs>
                <ClipPath id={`clip0_clock_${index}`}>
                  <Rect width={11.9921} height={11.9921} fill="white" />
                </ClipPath>
              </Defs>
            </Svg>
            <Text className="ml-1 text-[14px] font-medium text-[#1447e6]">24h</Text>
          </View>
        </View>
      </View>
      {/* Price and Actions */}
      <View className="flex-row justify-between items-center">
        <View className="gap-0.5">
          <Text className="opacity-70 text-[18px] text-[#242424]">From</Text>
          <Text className="text-[22px] font-semibold text-[#00a63e]">{price}</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity
            onPress={() => navigation('Digital', 'Chat')}
            activeOpacity={0.7}
            className="h-9 px-3 rounded-lg bg-white border border-neutral-200 items-center justify-center"
          >
            <Text className="text-[16px] font-medium text-[#242424]">Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            className="h-9 px-3 rounded-lg bg-[#00a63e] items-center justify-center"
          >
            <Text className="text-[16px] font-medium text-white">Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}



