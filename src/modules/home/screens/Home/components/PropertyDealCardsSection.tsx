import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ImageSourcePropType } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const propertiesHero = require('@modules/home/assets/bed1.png');
const placeholderHero2 = require('@modules/home/assets/bed2.png');

const VerifiedBadge = ({ label, bgColor }: { label: string; bgColor: string }) => (
  <View className="px-2 py-[2px] rounded-[10px]" style={{ backgroundColor: bgColor }}>
    <Text className="text-sm font-[400] text-center text-white">{label}</Text>
  </View>
);

const HeartIcon = ({ size = 16, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_heart_pd)">
      <Path
        d="M1.33252 6.32931C1.33253 5.58793 1.55743 4.864 1.97752 4.25312C2.3976 3.64224 2.9931 3.17316 3.68537 2.90783C4.37764 2.6425 5.13411 2.5934 5.85487 2.76702C6.57563 2.94064 7.22678 3.32881 7.7223 3.88026C7.7572 3.91757 7.79939 3.94732 7.84627 3.96766C7.89314 3.988 7.94369 3.9985 7.99478 3.9985C8.04588 3.9985 8.09643 3.988 8.1433 3.96766C8.19017 3.94732 8.23237 3.91757 8.26727 3.88026C8.76124 3.32522 9.41253 2.93379 10.1345 2.75806C10.8564 2.58234 11.6147 2.63065 12.3085 2.89656C13.0023 3.16248 13.5987 3.63339 14.0182 4.24662C14.4378 4.85984 14.6606 5.5863 14.657 6.32931C14.657 7.85496 13.6577 8.99421 12.6584 9.99355L8.99945 13.5332C8.87531 13.6758 8.72226 13.7903 8.55045 13.8692C8.37864 13.9481 8.19202 13.9895 8.00297 13.9907C7.81393 13.9919 7.62679 13.9528 7.454 13.8761C7.28121 13.7994 7.12671 13.6869 7.00077 13.5459L3.3312 9.99355C2.33186 8.99421 1.33252 7.86163 1.33252 6.32931Z"
        stroke={color}
        strokeWidth="1.33245" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_heart_pd">
        <Rect width="15.9894" height="15.9894" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const SquareIcon = ({ size = 16, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <Path
      d="M12.6584 1.99854H3.33123C2.59534 1.99854 1.99878 2.59509 1.99878 3.33099V12.6582C1.99878 13.3941 2.59534 13.9906 3.33123 13.9906H12.6584C13.3943 13.9906 13.9909 13.3941 13.9909 12.6582V3.33099C13.9909 2.59509 13.3943 1.99854 12.6584 1.99854Z"
      stroke={color}
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BedIcon = ({ size = 16, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_bed_pd)">
      <Path d="M1.33252 2.66504V13.3247" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M1.33252 5.32959H13.3246C13.678 5.32959 14.0169 5.46997 14.2668 5.71986C14.5167 5.96974 14.657 6.30865 14.657 6.66204V13.3243"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M1.33252 11.3257H14.657" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M3.99731 5.32959V11.3256" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
    </G>
    <Defs>
      <ClipPath id="clip0_bed_pd">
        <Rect width="15.9894" height="15.9894" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const BathIcon = ({ size = 16, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_bath_pd)">
      <Path d="M6.66229 2.66504L5.32983 3.99749" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M11.3259 12.6582V13.9907" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M1.33252 7.99463H14.657" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M4.66357 12.6582V13.9907" stroke={color} strokeWidth="1.33245" strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M5.99593 3.33102L5.0772 2.41229C4.88454 2.21873 4.63991 2.08515 4.37292 2.02771C4.10593 1.97026 3.82801 1.99142 3.57279 2.08862C3.31757 2.18581 3.09598 2.35488 2.93484 2.57538C2.7737 2.79587 2.6799 3.05833 2.66479 3.33102V11.3257C2.66479 11.6791 2.80518 12.018 3.05506 12.2679C3.30494 12.5178 3.64386 12.6582 3.99725 12.6582H11.992C12.3454 12.6582 12.6843 12.5178 12.9342 12.2679C13.184 12.018 13.3244 11.6791 13.3244 11.3257V7.9946"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_bath_pd">
        <Rect width="15.9894" height="15.9894" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const LocationIcon = ({ size = 16, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <G clipPath="url(#clip0_loc_pd)">
      <Path
        d="M13.3244 6.66233C13.3244 9.9888 9.63419 13.4532 8.39501 14.5231C8.27957 14.6099 8.13904 14.6569 7.99461 14.6569C7.85017 14.6569 7.70965 14.6099 7.59421 14.5231C6.35502 13.4532 2.66479 9.9888 2.66479 6.66233C2.66479 5.24878 3.22633 3.89312 4.22586 2.89359C5.22539 1.89405 6.58105 1.33252 7.99461 1.33252C9.40816 1.33252 10.7638 1.89405 11.7634 2.89359C12.7629 3.89312 13.3244 5.24878 13.3244 6.66233Z"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99477 8.66093C9.09861 8.66093 9.99345 7.76609 9.99345 6.66225C9.99345 5.55841 9.09861 4.66357 7.99477 4.66357C6.89093 4.66357 5.99609 5.55841 5.99609 6.66225C5.99609 7.76609 6.89093 8.66093 7.99477 8.66093Z"
        stroke={color}
        strokeWidth="1.33245"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_loc_pd">
        <Rect width="15.9894" height="15.9894" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

const PhoneIcon = ({ size = 15, color = '#737373' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
    <Path
      d="M8.54905 10.3716C8.68665 10.4348 8.84166 10.4492 8.98856 10.4125C9.13545 10.3758 9.26547 10.2902 9.35718 10.1697L9.59369 9.85994C9.71781 9.69446 9.87875 9.56014 10.0638 9.46763C10.2488 9.37512 10.4528 9.32696 10.6597 9.32696H12.6583C13.0117 9.32696 13.3506 9.46734 13.6005 9.71723C13.8504 9.96711 13.9908 10.306 13.9908 10.6594V12.6581C13.9908 13.0115 13.8504 13.3504 13.6005 13.6003C13.3506 13.8502 13.0117 13.9905 12.6583 13.9905C9.47784 13.9905 6.42761 12.7271 4.17866 10.4781C1.92971 8.2292 0.66626 5.17897 0.66626 1.99847C0.66626 1.64508 0.806643 1.30617 1.05653 1.05628C1.30641 0.806399 1.64532 0.666016 1.99871 0.666016H3.99739C4.35078 0.666016 4.6897 0.806399 4.93958 1.05628C5.18946 1.30617 5.32985 1.64508 5.32985 1.99847V3.99715C5.32985 4.204 5.28168 4.40802 5.18917 4.59304C5.09667 4.77806 4.96235 4.939 4.79686 5.06311L4.48507 5.29696C4.36276 5.39035 4.27655 5.5232 4.24109 5.67294C4.20563 5.82269 4.2231 5.98009 4.29053 6.11841C5.20105 7.96777 6.69856 9.4634 8.54905 10.3716Z"
      stroke={color}
      strokeWidth="1.33245"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const EyeIcon = ({ size = 12, color = 'white' }: { size?: number; color?: string }) => (
  <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
    <G clipPath="url(#clip0_eye_pd)">
      <Path
        d="M1.03101 6.17369C0.989338 6.06143 0.989338 5.93795 1.03101 5.82569C1.43686 4.84162 2.12577 4.00021 3.01039 3.40814C3.89502 2.81607 4.93553 2.5 6.00001 2.5C7.06449 2.5 8.105 2.81607 8.98962 3.40814C9.87425 4.00021 10.5632 4.84162 10.969 5.82569C11.0107 5.93795 11.0107 6.06143 10.969 6.17369C10.5632 7.15776 9.87425 7.99917 8.98962 8.59124C8.105 9.18331 7.06449 9.49938 6.00001 9.49938C4.93553 9.49938 3.89502 9.18331 3.01039 8.59124C2.12577 7.99917 1.43686 7.15776 1.03101 6.17369Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 7.5C6.82843 7.5 7.5 6.82843 7.5 6C7.5 5.17157 6.82843 4.5 6 4.5C5.17157 4.5 4.5 5.17157 4.5 6C4.5 6.82843 5.17157 7.5 6 7.5Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_eye_pd">
        <Rect width="12" height="12" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

type PropertyDeal = {
  id: string;
  title: string;
  sqft: string;
  beds: string;
  baths: string;
  location: string;
  price: string;
  heroImage: ImageSourcePropType;
  badges: Array<{ label: string; color: string }>;
};

const PropertyDealCard = ({ deal, index }: { deal: PropertyDeal; index: number }) => {
  return (
    <View
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
      style={{
        width: 340,
        marginLeft: index === 0 ? 0 : 18,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.1,
        // shadowRadius: 3,
        // elevation: 2,
      }}
    >
      {/* Hero */}
      <View className="w-full overflow-hidden bg-gray-100" style={{ aspectRatio: 297.55 / 191.99 }}>
        <Image source={deal.heroImage} className="w-full h-full" resizeMode="cover" />

        {/* Badges */}
        <View className="absolute left-3 top-3 flex-row items-start" style={{ gap: 8 }}>
          {deal.badges.map((b) => (
            <VerifiedBadge key={`${deal.id}-${b.label}`} label={b.label} bgColor={b.color} />
          ))}
        </View>

        {/* Favorite */}
        <TouchableOpacity
          activeOpacity={0.7}
          className="absolute right-3 top-3 w-9 h-9 rounded-full bg-white/80 items-center justify-center"
        >
          <HeartIcon size={20} />
        </TouchableOpacity>
      </View>

      {/* Body */}
      <View className="px-4 py-4">
        <Text className="text-xl font-semibold text-left text-[#242424]" numberOfLines={2}>
          {deal.title}
        </Text>

        <View className="mt-3">
          <View className="flex-row items-center" style={{ gap: 12 }}>
            <View className="flex-row items-center" style={{ gap: 4 }}>
              <SquareIcon size={18} />
              <Text className="text-base text-neutral-500">{deal.sqft}</Text>
            </View>

            <View className="flex-row items-center" style={{ gap: 4 }}>
              <BedIcon size={18} />
              <Text className="text-base text-neutral-500">{deal.beds}</Text>
            </View>

            <View className="flex-row items-center" style={{ gap: 4 }}>
              <BathIcon size={18} />
              <Text className="text-base text-neutral-500">{deal.baths}</Text>
            </View>
          </View>

          <View className="flex-row items-center mt-3" style={{ gap: 4 }}>
            <LocationIcon size={18} />
            <Text className="text-base text-neutral-500" numberOfLines={1}>
              {deal.location}
            </Text>
          </View>
        </View>

        {/* Footer actions */}
        <View className="flex-row items-center mt-6" style={{ gap: 9 }}>
          <Text className="text-lg font-bold text-left text-[#242424]">{deal.price}</Text>

          <View className="flex-row items-center" style={{ gap: 7 }}>
            <TouchableOpacity activeOpacity={0.8} className="px-2.5 py-[11px] rounded-[32px] bg-gray-100">
              <PhoneIcon size={17} />
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.85} className="px-3 py-2 rounded-[24px] bg-[#00a551]">
              <View className="flex-row items-center" style={{ gap: 6 }}>
                <EyeIcon size={16} />
                <Text className="text-sm font-medium text-left text-white">View details</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default function PropertyDealCardsSection() {
  const deals: PropertyDeal[] = [
    {
      id: 'deal-1',
      title: '2BHK Modern Apartment in Dhanmondi',
      sqft: '850 sq ft',
      beds: '2',
      baths: '2',
      location: 'Dhanmondi, Dhaka',
      price: '৳25,000/month',
      heroImage: propertiesHero,
      badges: [
        { label: 'Verified', color: '#00a551' },
        { label: 'New', color: '#2b7fff' },
      ],
    },
    {
      id: 'deal-2',
      title: '3BHK Modern Apartment in Dhanmondi',
      sqft: '950 sq ft',
      beds: '2',
      baths: '2',
      location: 'Uttara, Dhaka',
      price: '৳35,000/month',
      heroImage: placeholderHero2,
      badges: [
        { label: 'Verified', color: '#00a551' },
        { label: 'New', color: '#2b7fff' },
      ],
    },
  ];

  return (
    <View className="px-6 mt-6">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 24 }}>
        {deals.map((deal, index) => (
          <PropertyDealCard key={deal.id} deal={deal} index={index} />
        ))}
      </ScrollView>
    </View>
  );
}


