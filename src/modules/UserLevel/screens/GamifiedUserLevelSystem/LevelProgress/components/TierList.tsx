import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { cardShadow } from '../../components/cardShadow';

export type Tier = { title: string; color: string; requirements: string[] };

const CheckBadge = () => (
  <View
    className="items-center justify-center"
    style={{
      width: 16,
      height: 16,
      borderRadius: 8,
      backgroundColor: '#00bc7d',
    }}
  >
    <Svg width={10} height={10} viewBox="0 0 12 12" fill="none">
      <Path
        d="M9.993 3 4.497 8.496 2 5.998"
        stroke="white"
        strokeWidth={1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const BronzeBadge = () => (
  <View className="w-[56px] h-[56px] items-center justify-center" style={{ borderRadius: 28 }}>
    <Svg width={56} height={56} viewBox="0 0 56 56" className="absolute inset-0">
      <Defs>
        <LinearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="12%" stopColor="#e9d1a4" />
          <Stop offset="102%" stopColor="#c47647" />
        </LinearGradient>
      </Defs>
      <Rect width="56" height="56" rx="28" fill="url(#bronzeGrad)" />
    </Svg>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.205 14.99 2.658 7.135a2.17 2.17 0 0 1 .235-2.199L4.397 2.798A2.17 2.17 0 0 1 5.996 1.998h11.992c.687 0 1.333.32 1.734.872l1.6 2.138a2.17 2.17 0 0 1-.232 2.197L16.78 14.99"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.993 11.993 6.117 2.2"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m12.992 11.993 5.876-9.794"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M7.995 6.996h7.995" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M11.992 21.986a5 5 0 1 0 0-9.993 5 5 0 0 0 0 9.993Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M11.992 17.989v-1.999h-.5" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
    <View style={{ position: 'absolute', right: -1, top: -1 }}>
      <CheckBadge />
    </View>
  </View>
);

const SilverBadge = () => (
  <View className="w-[56px] h-[56px] items-center justify-center" style={{ borderRadius: 28 }}>
    <Svg width={56} height={56} viewBox="0 0 56 56" className="absolute inset-0">
      <Defs>
        <LinearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#4f586a" />
          <Stop offset="80%" stopColor="#afb8c9" />
        </LinearGradient>
      </Defs>
      <Rect width="56" height="56" rx="28" fill="url(#silverGrad)" />
    </Svg>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="m15.467 12.881 1.514 8.52a.5.5 0 0 1-.769.49l-3.578-2.686a1.16 1.16 0 0 0-1.4 0l-3.584 2.685a.5.5 0 0 1-.768-.49l1.514-8.52"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.992 13.99c3.312 0 5.996-2.684 5.996-5.996C17.988 4.683 15.304 2 11.992 2 8.68 2 5.996 4.683 5.996 7.994c0 3.312 2.684 5.996 5.996 5.996Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    <View style={{ position: 'absolute', right: -1, top: -1 }}>
      <CheckBadge />
    </View>
  </View>
);

const PlatinumBadge = () => (
  <View className="w-[56px] h-[56px] items-center justify-center" style={{ borderRadius: 28, backgroundColor: '#f3f4f6' }}>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.988 10.992H4.997A2 2 0 0 0 3 12.991v6.995c0 1.104.895 1.999 1.997 1.999h13.991a2 2 0 0 0 1.999-1.999v-6.995a2 2 0 0 0-1.999-1.999Z"
        stroke="#99A1AF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.995 10.992V6.995c0-1.325.526-2.596 1.463-3.533a4.99 4.99 0 0 1 7.067 0A4.99 4.99 0 0 1 16.989 6.995v3.997"
        stroke="#99A1AF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const DiamondBadge = () => (
  <View className="w-[56px] h-[56px] items-center justify-center" style={{ borderRadius: 28, backgroundColor: '#f3f4f6' }}>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M18.988 10.992H4.997A2 2 0 0 0 3 12.991v6.995c0 1.104.895 1.999 1.997 1.999h13.991a2 2 0 0 0 1.999-1.999v-6.995a2 2 0 0 0-1.999-1.999Z"
        stroke="#99A1AF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.995 10.992V6.995c0-1.325.526-2.596 1.463-3.533a4.99 4.99 0 0 1 7.067 0A4.99 4.99 0 0 1 16.989 6.995v3.997"
        stroke="#99A1AF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const GoldBadge = () => (
  <View className="w-[56px] h-[56px] items-center justify-center" style={{ borderRadius: 28, overflow: 'hidden' }}>
    <Svg width={56} height={56} viewBox="0 0 56 56" className="absolute inset-0">
      <Defs>
        <LinearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#fdc700" />
          <Stop offset="50%" stopColor="#ffb900" />
          <Stop offset="100%" stopColor="#d08700" />
        </LinearGradient>
      </Defs>
      <Rect width="56" height="56" rx="28" fill="url(#goldGrad)" />
    </Svg>
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M9.993 14.65v1.625c-.003.343-.094.679-.265.976-.17.297-.414.545-.708.72-.624.463-1.132 1.065-1.483 1.758-.351.694-.536 1.459-.539 2.236"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.991 14.65v1.625c.003.343.094.679.265.976.17.297.414.545.708.72.624.463 1.132 1.065 1.483 1.758.351.694.536 1.459.539 2.236"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.988 8.995h1.499c.663 0 1.298-.263 1.766-.731.469-.468.732-1.104.732-1.766 0-.663-.263-1.298-.732-1.767A2.498 2.498 0 0 0 19.487 3.0H17.988"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M3.997 21.986H19.987" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M5.996 8.993c0 1.59.632 3.115 1.756 4.239a6 6 0 0 0 8.48 0 5.99 5.99 0 0 0 1.756-4.239V2.997a1 1 0 0 0-1-1H6.996a1 1 0 0 0-1 1Z"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.996 8.995H4.497c-.663 0-1.298-.263-1.766-.731A2.498 2.498 0 0 1 2 6.497c0-.663.263-1.298.731-1.767A2.498 2.498 0 0 1 4.497 3.0H5.996"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </View>
);

const renderBadge = (title: string) => {
  if (title.toLowerCase().includes('bronze')) return <BronzeBadge />;
  if (title.toLowerCase().includes('silver')) return <SilverBadge />;
  if (title.toLowerCase().includes('platinum')) return <PlatinumBadge />;
  if (title.toLowerCase().includes('diamond')) return <DiamondBadge />;
  if (title.toLowerCase().includes('gold')) return <GoldBadge />;
  return <GoldBadge />;
};

export default function TierList({ tiers }: { tiers: Tier[] }) {
  const getBorderColor = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('bronze') || lower.includes('silver')) return '#5EE9B5';
    if (lower.includes('gold')) return '#8EC5FF';
    return '#f3f4f7';
  };

  const getTitleColor = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes('bronze') || lower.includes('silver') || lower.includes('gold')) return '#242424';
    return '#797979';
  };

  return (
    <View>
      {tiers.map((tier) => (
        <View
          key={tier.title}
          className="w-full rounded-[14px] bg-white border p-[25px] mb-3"
          style={[cardShadow, { borderColor: getBorderColor(tier.title) }]}
        >
          <View className="flex-row items-center">
            <View className='mr-4'>
              {renderBadge(tier.title)}
            </View>
            <View className="flex-1">
              <Text className="text-[18px] font-bold" style={{ color: getTitleColor(tier.title) }}>
                {tier.title}
              </Text>
              <View className="flex-row flex-wrap gap-2 mt-1">
                {tier.requirements.map((req) => (
                  <Text key={req} className="text-[16px] text-[#797979]">
                    {req}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
