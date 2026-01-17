import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect, Ellipse } from 'react-native-svg';

const towerBackground = require('@modules/home/assets/tower.png');

// Prayer time data
const prayerTimes = [
  { name: 'Fajr', time: '4:30 AM', isActive: false, iconType: 'sunrise' },
  { name: 'Duhr', time: '12:15 PM', isActive: false, iconType: 'sun' },
  { name: 'Asr', time: '3:45 PM', isActive: true, iconType: 'sunset' },
  { name: 'Maghrib', time: '6:20 PM', isActive: false, iconType: 'sunset' },
  { name: 'Isha', time: '7:45 PM', isActive: false, iconType: 'moon' },
];

// Clock Icon Component
const ClockIcon = ({ size = 21 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <Defs>
      <ClipPath id="clip0_clock">
        <Rect width="15.3125" height="15.3125" x="2.42432" y="1.65918" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_clock)">
      <Path
        d="M10.0806 2.93506V8.03923"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.56982 8.63281L6.46943 9.53242"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.70044 13.1436H4.97648"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1848 13.1436H16.4609"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5913 8.63281L13.6917 9.53242"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.4609 15.6958H3.70044"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.52856 5.48714L10.0806 2.93506L12.6327 5.48714"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6327 13.1434C12.6327 12.4665 12.3639 11.8174 11.8852 11.3388C11.4066 10.8602 10.7575 10.5913 10.0806 10.5913C9.40379 10.5913 8.75466 10.8602 8.27605 11.3388C7.79744 11.8174 7.52856 12.4665 7.52856 13.1434"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

// Sun Icon Component
const SunIcon = ({ size = 21 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <G>
      <Path
        d="M10.0806 11.8674C11.4901 11.8674 12.6327 10.7247 12.6327 9.31527C12.6327 7.90579 11.4901 6.76318 10.0806 6.76318C8.67117 6.76318 7.52856 7.90579 7.52856 9.31527C7.52856 10.7247 8.67117 11.8674 10.0806 11.8674Z"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0806 2.93506V4.2111"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.0806 14.4194V15.6955"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.56982 4.80469L6.46943 5.7043"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6917 12.9268L14.5913 13.8264"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.70044 9.31543H4.97648"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1848 9.31543H16.4609"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.46943 12.9268L5.56982 13.8264"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5913 4.80469L13.6917 5.7043"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

// Sunset Icon Component
const SunsetIcon = ({ size = 21 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 21 21" fill="none">
    <G>
      <Path
        d="M10.0801 2.93506V4.2111"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.56934 4.80469L6.46895 5.7043"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1843 9.31543H16.4604"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5908 4.80469L13.6912 5.7043"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5984 9.72998C12.6769 9.25433 12.6191 8.76618 12.4317 8.32202C12.2442 7.87787 11.9348 7.49589 11.5393 7.22031C11.1437 6.94473 10.6782 6.78682 10.1966 6.76486C9.71506 6.7429 9.2371 6.85779 8.81812 7.09623"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.718 15.6956H6.88989C6.28631 15.6955 5.69514 15.5242 5.18505 15.2015C4.67497 14.8788 4.26689 14.418 4.00823 13.8726C3.74956 13.3273 3.65092 12.7198 3.72375 12.1206C3.79659 11.5214 4.03792 10.9552 4.41971 10.4877C4.8015 10.0202 5.30808 9.67059 5.88062 9.47951C6.45316 9.28843 7.06817 9.26369 7.65421 9.40818C8.24024 9.55267 8.77327 9.86045 9.19136 10.2958C9.60946 10.7311 9.89548 11.2761 10.0162 11.8675H10.718C11.2257 11.8675 11.7125 12.0692 12.0715 12.4281C12.4304 12.7871 12.6321 13.2739 12.6321 13.7816C12.6321 14.2892 12.4304 14.7761 12.0715 15.135C11.7125 15.494 11.2257 15.6956 10.718 15.6956Z"
        stroke="#4C4C4C"
        strokeWidth="1.27604"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

// Moon Icon Component
const MoonIcon = ({ size = 19 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 19 19" fill="none">
    <Path
      d="M15.1765 8.97886C15.1167 10.0866 14.7373 11.1532 14.0842 12.0499C13.4311 12.9466 12.5323 13.6349 11.4964 14.0317C10.4604 14.4284 9.33177 14.5166 8.24678 14.2856C7.16179 14.0546 6.16695 13.5142 5.3825 12.7299C4.59806 11.9455 4.05761 10.9507 3.82647 9.86577C3.59533 8.78081 3.68341 7.65212 4.08006 6.61615C4.4767 5.58017 5.16494 4.68127 6.06156 4.02809C6.95818 3.37492 8.02481 2.99544 9.1325 2.93552C9.39089 2.92149 9.52615 3.22901 9.38898 3.44785C8.93017 4.18193 8.73372 5.04984 8.83167 5.90994C8.92962 6.77005 9.3162 7.57156 9.92831 8.18368C10.5404 8.79579 11.3419 9.18237 12.202 9.28032C13.0621 9.37828 13.9301 9.18182 14.6641 8.72301C14.8836 8.58584 15.1905 8.72046 15.1765 8.97886Z"
      stroke="#4C4C4C"
      strokeWidth="1.27604"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

// Toggle Switch Component
const ToggleSwitch = ({ isActive }: { isActive: boolean }) => (
  <Svg className='relative' width={29} height={16} viewBox="0 0 29 16" fill="none">
    <Rect width="28.3281" height="15.3125" rx="7.52953" fill={isActive ? "#00A551" : "#979A99"} />
    <Ellipse
      cx={isActive ? 20.9781 : 7.9625}
      cy={7.86719}
      rx={5.66563}
      ry={5.74219}
      fill="white"
    />
  </Svg>
);

// Clock Icon for Next Prayer
const ClockIconSmall = ({ size = 16 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
    <G>
      <Path
        d="M11.333 6.33252V10.3325L13.9997 11.6659"
        stroke="#242424"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3334 16.9998C15.0153 16.9998 18.0001 14.0151 18.0001 10.3332C18.0001 6.65127 15.0153 3.6665 11.3334 3.6665C7.65152 3.6665 4.66675 6.65127 4.66675 10.3332C4.66675 14.0151 7.65152 16.9998 11.3334 16.9998Z"
        stroke="#242424"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

// Location Icon
const LocationIcon = ({ size = 20 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 16 18" fill="none">
    <G>
      <Path
        d="M11.7397 6.89046C11.7397 9.43897 8.91247 12.0931 7.96309 12.9129C7.87465 12.9794 7.76699 13.0153 7.65633 13.0153C7.54567 13.0153 7.43801 12.9794 7.34957 12.9129C6.4002 12.0931 3.573 9.43897 3.573 6.89046C3.573 5.80749 4.00321 4.76888 4.76898 4.00311C5.53475 3.23734 6.57336 2.80713 7.65633 2.80713C8.7393 2.80713 9.77791 3.23734 10.5437 4.00311C11.3095 4.76888 11.7397 5.80749 11.7397 6.89046Z"
        stroke="#242424"
        strokeWidth="1.02083"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.65625 8.42139C8.50194 8.42139 9.1875 7.73582 9.1875 6.89014C9.1875 6.04445 8.50194 5.35889 7.65625 5.35889C6.81056 5.35889 6.125 6.04445 6.125 6.89014C6.125 7.73582 6.81056 8.42139 7.65625 8.42139Z"
        stroke="#242424"
        strokeWidth="1.02083"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

// Prayer Card Component
interface PrayerCardProps {
  prayer: typeof prayerTimes[0];
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

const PrayerCard = ({ prayer, index, isActive, onSelect }: PrayerCardProps) => {
  const getIcon = () => {
    switch (prayer.iconType) {
      case 'sunrise':
        return <ClockIcon size={22} />;
      case 'sun':
        return <SunIcon size={22} />;
      case 'sunset':
        return <SunsetIcon size={22} />;
      case 'moon':
        return <MoonIcon size={22} />;
      default:
        return <ClockIcon size={22} />;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onSelect}
      className={`rounded-xl ${isActive ? 'bg-white/25' : 'bg-white/[0.15]'} border border-black/20  w-16 h-[120px]`}
      style={{
        padding: 6.89,
      }}
    >
      <View className="flex-col items-center flex-1">
         {isActive && (
           <View
             className="rounded-full bg-[#36d97f] opacity-80 w-2 h-2 mb-1"
           />
         )}
        <View className="flex-col items-center flex-1 justify-between">
          <Text
            className="text-[#242424] text-[11px] font-[500] mb-1"
          >
            {prayer.time}
          </Text>
          <View
            className={`items-center justify-center mb-1 rounded-full ${isActive ? 'bg-white/30' : 'bg-[#8e8e8e]/20'}`}
            style={{
              width: 30,
              height: 30,
              padding: 6,
            }}
          >
            {getIcon()}
          </View>
          <Text
            className="text-black text-[12px] font-[400]"
          >
            {prayer.name}
          </Text>
        </View>
        <View className="mt-1">
          <ToggleSwitch isActive={isActive} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function PrayerTimingsCard() {
  const [selectedPrayerIndex, setSelectedPrayerIndex] = useState<number | null>(null);

  const handleSelectPrayer = (index: number) => {
    setSelectedPrayerIndex(selectedPrayerIndex === index ? null : index);
  };

  return (
    <View className="px-6 mt-6">
      <View
        className="relative rounded-[18.38px] border border-black/10  overflow-hidden w-full h-[340px]"

      >
        {/* Background Image */}
        <Image
          source={towerBackground}
          className="absolute inset-0 w-full h-full"
          resizeMode="cover"
          style={{ opacity: 0.9 }}
        />

        {/* Content Container */}
        <View className="flex-1 items-center px-4 pb-4">
          {/* Location Badge */}
          <View
            className="flex-row items-center w-44 justify-center rounded-full border border-white/30 px-3 py-1.5  mt-4 border border-black/5"
          >
            <LocationIcon size={20} />
            <Text
              className="text-[#242424] ml-1 text-xs"
            >
              Dhaka, Bangladesh
            </Text>
          </View>
          {/* Header Section */}
          <View className="items-center mt-4 mb-4">
            <Text
              className="text-[#242424] text-lg font-bold text-center"
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.15)',
                textShadowOffset: { width: 0, height: 3.06 },
                textShadowRadius: 6.125,
              }}
            >
              Namaz Timings
            </Text>
            <Text
              className="text-[#717171]/80 text-sm text-center mt-2"
              style={{
                textShadowColor: 'rgba(0, 0, 0, 0.12)',
                textShadowOffset: { width: 0, height: 2.3 },
                textShadowRadius: 4.59,
              }}
            >
              01 Ramadan 1444 Hijri • 24th Mar, 2023 AD
            </Text>
          </View>

          {/* Prayer Times Row */}
          <View className="flex-row justify-between w-full items-start flex-1">
             {prayerTimes.map((prayer, index) => (
               <PrayerCard
                 key={prayer.name}
                 prayer={prayer}
                 index={index}
                 isActive={selectedPrayerIndex === index}
                 onSelect={() => handleSelectPrayer(index)}
               />
             ))}
          </View>

          {/* Next Prayer Section */}
          <View
            className="flex-row w-full items-center justify-center rounded-xl bg-[#bebebe]/[0.15] border border-[#bebebe]/20 px-3 py-2"
          >
            <ClockIconSmall size={24} />
            <Text
              className="text-[#242424] text-[15px] font-semibold ml-2"
            >
              Next Prayer: Maghrib in 5h 7m
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

