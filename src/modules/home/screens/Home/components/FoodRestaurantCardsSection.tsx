import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const hero1 = require('@modules/home/assets/product8.png');
const hero2 = require('@modules/home/assets/product9.png');

const StarIcon = ({ size = 12 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <G clipPath="url(#clip0_star_food)">
      <Path
        d="M5.75879 1.14686C5.78069 1.10262 5.81451 1.06538 5.85645 1.03934C5.89839 1.01331 5.94677 0.999512 5.99613 0.999512C6.0455 0.999512 6.09388 1.01331 6.13582 1.03934C6.17775 1.06538 6.21158 1.10262 6.23348 1.14686L7.38771 3.48482C7.46375 3.6387 7.576 3.77183 7.71481 3.87279C7.85362 3.97374 8.01486 4.03951 8.18469 4.06443L10.766 4.44218C10.8149 4.44927 10.8608 4.4699 10.8986 4.50174C10.9364 4.53359 10.9646 4.57537 10.9799 4.62237C10.9951 4.66937 10.997 4.7197 10.9851 4.76769C10.9733 4.81567 10.9483 4.85938 10.9129 4.89389L9.04612 6.71169C8.92301 6.83166 8.8309 6.97975 8.77771 7.14321C8.72453 7.30668 8.71187 7.48062 8.74082 7.65007L9.18153 10.2184C9.19016 10.2673 9.18488 10.3176 9.16629 10.3636C9.14769 10.4096 9.11654 10.4495 9.07637 10.4787C9.0362 10.5079 8.98865 10.5252 8.93912 10.5286C8.8896 10.5321 8.8401 10.5215 8.79628 10.4982L6.48881 9.28499C6.33677 9.20515 6.16761 9.16344 5.99588 9.16344C5.82416 9.16344 5.655 9.20515 5.50296 9.28499L3.19598 10.4982C3.15218 10.5214 3.10274 10.5318 3.0533 10.5283C3.00386 10.5248 2.9564 10.5075 2.91632 10.4783C2.87623 10.4492 2.84513 10.4093 2.82656 10.3634C2.80798 10.3174 2.80267 10.2672 2.81124 10.2184L3.25145 7.65057C3.28053 7.48104 3.26793 7.30699 3.21474 7.14342C3.16155 6.97986 3.06937 6.83168 2.94615 6.71169L1.07938 4.89439C1.0437 4.85992 1.01842 4.81614 1.00641 4.76801C0.994404 4.71988 0.996155 4.66934 1.01147 4.62216C1.02678 4.57498 1.05503 4.53305 1.09301 4.50114C1.13099 4.46923 1.17717 4.44863 1.22628 4.44168L3.80708 4.06443C3.9771 4.0397 4.13856 3.97402 4.27756 3.87305C4.41657 3.77209 4.52895 3.63885 4.60505 3.48482L5.75879 1.14686Z"
        fill="#FDC700"
        stroke="#FDC700"
        strokeWidth="0.99934"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_star_food">
        <Rect width="11.9921" height="11.9921" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const ClockIcon = ({ size = 12, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <G clipPath="url(#clip0_clock_food)">
      <Path
        d="M5.99609 2.99805V5.99607L7.99477 6.99541"
        stroke={color}
        strokeWidth="0.99934"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.99597 10.9929C8.75557 10.9929 10.9927 8.75581 10.9927 5.99621C10.9927 3.23661 8.75557 0.999512 5.99597 0.999512C3.23637 0.999512 0.999268 3.23661 0.999268 5.99621C0.999268 8.75581 3.23637 10.9929 5.99597 10.9929Z"
        stroke={color}
        strokeWidth="0.99934"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_clock_food">
        <Rect width="11.9921" height="11.9921" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const TruckIcon = ({ size = 16, color = '#00A551' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_truck_food)">
      <Path
        d="M9.32724 11.9922V3.99749C9.32724 3.6441 9.18686 3.30519 8.93697 3.05531C8.68709 2.80542 8.34817 2.66504 7.99479 2.66504H2.66497C2.31158 2.66504 1.97267 2.80542 1.72279 3.05531C1.4729 3.30519 1.33252 3.6441 1.33252 3.99749V11.326C1.33252 11.5027 1.40271 11.6721 1.52765 11.7971C1.65259 11.922 1.82205 11.9922 1.99875 11.9922H3.3312"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M9.99345 11.9922H5.99609" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M12.6583 11.9919H13.9907C14.1674 11.9919 14.3369 11.9217 14.4618 11.7967C14.5868 11.6718 14.657 11.5023 14.657 11.3256V8.8939C14.6567 8.74271 14.605 8.59611 14.5104 8.47818L12.1919 5.58009C12.1296 5.50206 12.0506 5.43904 11.9606 5.39568C11.8707 5.35232 11.7721 5.32973 11.6723 5.32959H9.32715"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3259 13.3246C12.0618 13.3246 12.6583 12.728 12.6583 11.9921C12.6583 11.2562 12.0618 10.6597 11.3259 10.6597C10.59 10.6597 9.99341 11.2562 9.99341 11.9921C9.99341 12.728 10.59 13.3246 11.3259 13.3246Z"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66351 13.3246C5.3994 13.3246 5.99596 12.728 5.99596 11.9921C5.99596 11.2562 5.3994 10.6597 4.66351 10.6597C3.92761 10.6597 3.33105 11.2562 3.33105 11.9921C3.33105 12.728 3.92761 13.3246 4.66351 13.3246Z"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_truck_food">
        <Rect width="15.9894" height="15.9894" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const PlusIcon = ({ size = 18, color = '#242424' }: { size?: number; color?: string }) => (
  <Svg width={size} height={(size * 18) / 19} viewBox="0 0 19 18" fill="none">
    <Path d="M3.86621 8.72119H14.6911" stroke={color} strokeWidth="1.45359" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M9.27856 3.63379V13.8089" stroke={color} strokeWidth="1.45359" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

type FoodCard = {
  id: string;
  heroImage: ImageSourcePropType;
  discountText: string;
  rating: string;
  eta: string;
  name: string;
  subtitle: string;
  deliveryLabel: string;
  popular: string;
  cta: string;
};

const FoodDealCard = ({ item, index }: { item: FoodCard; index: number }) => {
  return (
    <View
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
      style={{
        width: 340,
        marginLeft: index === 0 ? 0 : 21,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // elevation: 2,
      }}
    >
      {/* Hero */}
      <View className="w-full relative overflow-hidden" style={{ aspectRatio: 297.55 / 191.99 }}>
        <Image source={item.heroImage} className="w-full h-full" resizeMode="cover" />

        {/* Discount badge */}
        <View className="absolute left-3 top-3 px-3 py-1 rounded-[10px] bg-[#fb2c36]">
          <Text className="text-base font-medium text-white">{item.discountText}</Text>
        </View>

        {/* Rating pill */}
        <View className="absolute left-3 bottom-3 flex-row items-center bg-white/90 px-2 rounded-[10px]" style={{ height: 28, gap: 4 }}>
          <StarIcon size={16} />
          <Text className="text-base font-medium text-[#242424]">{item.rating}</Text>
        </View>

        {/* Time pill */}
        <View className="absolute right-3 bottom-3 flex-row items-center bg-white/90 px-2 py-1 rounded-[10px]" style={{ gap: 4 }}>
          <ClockIcon size={16} />
          <Text className="text-[15px] leading-[19px] font-medium text-[#242424]">{item.eta}</Text>
        </View>
      </View>

      {/* Content */}
      <View className="px-3.5 py-3.5">
        <Text className="text-xl font-semibold text-left text-[#242424]" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="text-base font-medium text-left text-[#707070] mt-2" numberOfLines={1}>
          {item.subtitle}
        </Text>

        <View className="flex-row items-center justify-between mt-3">
          <View className="flex-row items-center" style={{ gap: 6 }}>
            <TruckIcon size={20} />
            <Text className="text-base font-medium text-left text-[#00a551]">{item.deliveryLabel}</Text>
          </View>
          <Text className="text-sm font-medium text-left text-[#888]" numberOfLines={1}>
            {item.popular}
          </Text>
        </View>

        <View className="flex-row items-center justify-between mt-4">
          <TouchableOpacity activeOpacity={0.85} className="flex-1 h-10 rounded-full bg-[#00a551] items-center justify-center">
            <Text className="text-base font-semibold text-white">{item.cta}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} className="ml-3 w-10 h-10 rounded-full bg-gray-100 items-center justify-center">
            <PlusIcon size={22} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default function FoodRestaurantCardsSection() {
  const items: FoodCard[] = [
    {
      id: 'food-1',
      heroImage: hero1,
      discountText: 'Up to 40% off',
      rating: '4.5',
      eta: '35 min',
      name: 'Biryani Palace',
      subtitle: 'Bengali • Biryani • 2.1 km',
      deliveryLabel: 'Free',
      popular: 'Popular: Kacchi Biryani',
      cta: 'View menu',
    },
    {
      id: 'food-2',
      heroImage: hero2,
      discountText: 'Up to 40% off',
      rating: '4.5',
      eta: '35 min',
      name: 'Kabab Hut',
      subtitle: 'Bengali • kabab • 2.1 km',
      deliveryLabel: 'Free',
      popular: 'Popular: Kacchi Biryani',
      cta: 'View menu',
    },
  ];

  return (
    <View className="px-6 mt-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 24 }}>
        {items.map((item, index) => (
          <FoodDealCard key={item.id} item={item} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}


