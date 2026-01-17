import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { cardShadow } from '../../components/cardShadow';
import { initialProgressTasks, initialEntityProgress } from '../../../../store/exports';

type Item = { label: string; current: number; total: number; icon: string };

const iconMap: Record<string, JSX.Element> = {
  clock: (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path d="M12 7v5l3 2" stroke="#6b7280" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <Path
        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  flame: (
    <Svg
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      preserveAspectRatio="none"
    >
      <Path
        d="M8.14098 13.8883C8.77601 13.8883 9.38504 13.636 9.83408 13.187C10.2831 12.7379 10.5354 12.1289 10.5354 11.4939C10.5354 10.1722 10.0565 9.57835 9.57762 8.62059C8.5509 6.56811 9.36308 4.73783 11.4931 2.87402C11.972 5.26842 13.4087 7.56705 15.3242 9.09947C17.2397 10.6319 18.1975 12.4516 18.1975 14.3671C18.1975 15.2476 18.0241 16.1194 17.6871 16.9328C17.3502 17.7462 16.8564 18.4853 16.2338 19.1078C15.6113 19.7304 14.8722 20.2242 14.0588 20.5611C13.2454 20.8981 12.3736 21.0715 11.4931 21.0715C10.6127 21.0715 9.74091 20.8981 8.92751 20.5611C8.1141 20.2242 7.37502 19.7304 6.75247 19.1078C6.12992 18.4853 5.63608 17.7462 5.29915 16.9328C4.96223 16.1194 4.78882 15.2476 4.78882 14.3671C4.78882 13.2629 5.20353 12.17 5.74658 11.4939C5.74658 12.1289 5.99885 12.7379 6.44788 13.187C6.89692 13.636 7.50595 13.8883 8.14098 13.8883Z"
        stroke="#99A1AF"
        strokeWidth="1.91552"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  pin: (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21s7-6.5 7-11.5A7 7 0 1 0 5 9.5C5 14.5 12 21 12 21Z"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  users: (
    <Svg width={22} height={22} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 21v-2a4 4 0 0 0-3-3.87"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3a4 4 0 0 1 0 8"
        stroke="#6b7280"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  building: (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
    >
      <Path
        d="M12.2222 10.1855H12.2324"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2222 14.2598H12.2324"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2222 6.11133H12.2324"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2963 10.1855H16.3065"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2963 14.2598H16.3065"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2963 6.11133H16.3065"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.14819 10.1855H8.15838"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.14819 14.2598H8.15838"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.14819 6.11133H8.15838"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.16663 22.4071V19.3515C9.16663 19.0814 9.27393 18.8223 9.46494 18.6313C9.65595 18.4403 9.91502 18.333 10.1851 18.333H14.2592C14.5293 18.333 14.7884 18.4403 14.9794 18.6313C15.1704 18.8223 15.2777 19.0814 15.2777 19.3515V22.4071"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.3334 2.03711H6.11113C4.98611 2.03711 4.0741 2.94912 4.0741 4.07415V20.3704C4.0741 21.4955 4.98611 22.4075 6.11113 22.4075H18.3334C19.4584 22.4075 20.3704 21.4955 20.3704 20.3704V4.07415C20.3704 2.94912 19.4584 2.03711 18.3334 2.03711Z"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  store: (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
    >
      <Path
        d="M15.2777 21.3894V16.2968C15.2777 16.0267 15.1704 15.7676 14.9794 15.5766C14.7884 15.3856 14.5293 15.2783 14.2592 15.2783H10.1851C9.91502 15.2783 9.65595 15.3856 9.46494 15.5766C9.27393 15.7676 9.16663 16.0267 9.16663 16.2968V21.3894"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1032 10.501C17.8909 10.2977 17.6083 10.1843 17.3143 10.1843C17.0204 10.1843 16.7378 10.2977 16.5255 10.501C16.0519 10.9527 15.4225 11.2047 14.7681 11.2047C14.1136 11.2047 13.4842 10.9527 13.0106 10.501C12.7983 10.298 12.516 10.1848 12.2223 10.1848C11.9286 10.1848 11.6462 10.298 11.4339 10.501C10.9603 10.953 10.3307 11.2052 9.67597 11.2052C9.02123 11.2052 8.39166 10.953 7.918 10.501C7.70568 10.2977 7.42309 10.1843 7.12916 10.1843C6.83523 10.1843 6.55264 10.2977 6.34032 10.501C5.88284 10.9376 5.2793 11.1883 4.64716 11.2043C4.01502 11.2204 3.39951 11.0007 2.92045 10.588C2.44138 10.1752 2.13302 9.59899 2.0554 8.97143C1.97777 8.34387 2.13644 7.70987 2.5005 7.19285L5.443 2.93137C5.62971 2.65587 5.88106 2.43031 6.17509 2.27442C6.46912 2.11853 6.79687 2.03705 7.12967 2.03711H17.3149C17.6467 2.03698 17.9735 2.11792 18.2669 2.27288C18.5604 2.42785 18.8115 2.65215 18.9985 2.92628L21.9471 7.19591C22.3112 7.71334 22.4697 8.34782 22.3916 8.9757C22.3135 9.60359 22.0044 10.1799 21.5246 10.5924C21.0447 11.0048 20.4285 11.2238 19.796 11.2067C19.1635 11.1897 18.5601 10.9377 18.1032 10.5"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.0741 11.1523V19.3514C4.0741 19.8917 4.28871 20.4098 4.67073 20.7918C5.05275 21.1738 5.57088 21.3885 6.11113 21.3885H18.3334C18.8736 21.3885 19.3917 21.1738 19.7738 20.7918C20.1558 20.4098 20.3704 19.8917 20.3704 19.3514V11.1523"
        stroke="#99A1AF"
        strokeWidth="2.03704"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};

const ProgressRow1 = ({ item }: { item: Item }) => {
  const percent = Math.min(100, Math.max(0, Math.round((item.current / item.total) * 100)));
  return (
    <View className="w-full rounded-[14px] bg-white border border-[#f3f4f7] px-4 py-4 mb-4" style={cardShadow}>
      <View className="flex-row items-center gap-3">
        <View className="w-11 h-11 rounded-full bg-gray-100 items-center justify-center">{iconMap[item.icon]}</View>
        <View className="flex-1">
          <Text className="text-[16px] font-semibold text-[#364153]">{item.label}</Text>
          <View className="mt-2">
            <View className="h-2 rounded-full bg-[#f3f4f7] overflow-hidden">
              <View className="h-full rounded-full" style={{ width: `${percent}%`, backgroundColor: '#07B556' }} />
            </View>
            <View className="flex-row justify-between mt-1">
              <Text className="text-[14px] text-[#6f7d90]">{item.current}</Text>
              <Text className="text-[14px] text-[#6f7d90]">{item.total}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const ProgressRow2 = ({ item }: { item: Item }) => {
  const percent = Math.min(100, Math.max(0, Math.round((item.current / item.total) * 100)));
  return (
    <View className="w-full rounded-[14px] bg-white border border-[#f3f4f7] px-4 py-4 mb-4" style={cardShadow}>
      <View className="flex-row items-center gap-3">
        <View className="w-11 h-11 rounded-full bg-gray-100 items-center justify-center">{iconMap[item.icon]}</View>
        <View className="flex-1">
          <Text className="text-[16px] font-semibold text-[#364153]">{item.label}</Text>
          <View className="flex-row justify-between items-center mt-2">
            <View className="mr-1 flex-row justify-between items-center">
              <Text className="text-[14px] text-[#6f7d90]">{item.current}</Text>
              <Text className="text-[14px] text-[#6f7d90]">/</Text>
              <Text className="text-[14px] text-[#6f7d90]">{item.total}</Text>
            </View>
            <View className="w-[90%] h-2 rounded-full bg-[#f3f4f7] overflow-hidden">
              <View className="h-full rounded-full" style={{ width: `${percent}%`, backgroundColor: '#07B556' }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

type Props = { percent: number };

export default function ProgressSummaryCard({ percent }: Props) {
  return (
    <View className="w-full">
      <View>
        {initialProgressTasks.map((item) => (
          <ProgressRow1 key={item.label} item={item} />
        ))}
      </View>

      <View>
        {initialEntityProgress.map((item) => (
          <ProgressRow2 key={item.label} item={item} />
        ))}
      </View>
    </View>
  );
}

