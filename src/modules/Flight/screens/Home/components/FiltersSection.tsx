import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectHomeFilters } from '@modules/Flight/store';

export default function FiltersSection() {
  const filters = useAppSelector(selectHomeFilters);

  return (
    <View className="w-full px-4 mb-[27px]">
      <Text className="text-[18px] font-semibold text-[#242424] mb-3">Filters</Text>
      <ScrollView
        // horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 8, paddingRight: 16 }}
      >
        <View className="flex-row items-center gap-[6px]">
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter}
              className="h-[29px] px-3 rounded-lg bg-white border border-[#e5e5e5] items-center justify-center"
              activeOpacity={0.7}
            >
              <Text className="text-[14px] font-medium text-[#242424]">{filter}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          className="h-[29px] px-3 rounded-lg bg-white border border-[#e5e5e5] flex-row items-center mt-[6px] w-[30%]"
          activeOpacity={0.7}
        >
          <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
            <G clipPath="url(#clip0_11_4720)">
              <Path
                d="M5.73673 2.45398C5.76942 2.11013 5.92913 1.79082 6.18465 1.55843C6.44018 1.32604 6.77317 1.19727 7.11857 1.19727C7.46397 1.19727 7.79696 1.32604 8.05249 1.55843C8.30802 1.79082 8.46772 2.11013 8.50041 2.45398C8.52005 2.67611 8.59292 2.89023 8.71285 3.07822C8.83278 3.26621 8.99623 3.42255 9.18938 3.53399C9.38252 3.64543 9.59967 3.7087 9.82245 3.71844C10.0452 3.72818 10.2671 3.6841 10.4692 3.58994C10.7831 3.44744 11.1387 3.42683 11.467 3.5321C11.7952 3.63737 12.0725 3.861 12.2449 4.15947C12.4174 4.45793 12.4726 4.80988 12.3998 5.14681C12.3271 5.48374 12.1316 5.78155 11.8513 5.98228C11.6689 6.11032 11.5199 6.28042 11.4171 6.4782C11.3142 6.67598 11.2605 6.89562 11.2605 7.11853C11.2605 7.34145 11.3142 7.56109 11.4171 7.75887C11.5199 7.95665 11.6689 8.12675 11.8513 8.25479C12.1316 8.45551 12.3271 8.75332 12.3998 9.09025C12.4726 9.42719 12.4174 9.77913 12.2449 10.0776C12.0725 10.3761 11.7952 10.5997 11.467 10.705C11.1387 10.8102 10.7831 10.7896 10.4692 10.6471C10.2671 10.553 10.0452 10.5089 9.82245 10.5186C9.59967 10.5284 9.38252 10.5916 9.18938 10.7031C8.99623 10.8145 8.83278 10.9708 8.71285 11.1588C8.59292 11.3468 8.52005 11.561 8.50041 11.7831C8.46772 12.1269 8.30802 12.4462 8.05249 12.6786C7.79696 12.911 7.46397 13.0398 7.11857 13.0398C6.77317 13.0398 6.44018 12.911 6.18465 12.6786C5.92913 12.4462 5.76942 12.1269 5.73673 11.7831C5.71713 11.5609 5.64425 11.3467 5.52429 11.1586C5.40433 10.9706 5.24081 10.8142 5.04759 10.7027C4.85436 10.5913 4.63712 10.528 4.41426 10.5183C4.19141 10.5087 3.9695 10.5528 3.76734 10.6471C3.45348 10.7896 3.09783 10.8102 2.7696 10.705C2.44137 10.5997 2.16405 10.3761 1.99162 10.0776C1.81918 9.77913 1.76397 9.42719 1.83672 9.09025C1.90947 8.75332 2.10499 8.45551 2.38521 8.25479C2.56769 8.12675 2.71664 7.95665 2.81948 7.75887C2.92231 7.56109 2.976 7.34145 2.976 7.11853C2.976 6.89562 2.92231 6.67598 2.81948 6.4782C2.71664 6.28042 2.56769 6.11032 2.38521 5.98228C2.10538 5.78145 1.91021 5.48376 1.83764 5.14705C1.76506 4.81035 1.82026 4.45869 1.99251 4.16042C2.16476 3.86215 2.44175 3.63857 2.76965 3.53314C3.09755 3.42771 3.45294 3.44795 3.76675 3.58994C3.96888 3.6841 4.19073 3.72818 4.41351 3.71844C4.63628 3.7087 4.85343 3.64543 5.04658 3.53399C5.23973 3.42255 5.40318 3.26621 5.52311 3.07822C5.64303 2.89023 5.7159 2.67611 5.73555 2.45398"
                stroke="#242424"
                strokeWidth={1.18638}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M7.11827 8.89703C8.1011 8.89703 8.89784 8.10029 8.89784 7.11746C8.89784 6.13463 8.1011 5.33789 7.11827 5.33789C6.13544 5.33789 5.3387 6.13463 5.3387 7.11746C5.3387 8.10029 6.13544 8.89703 7.11827 8.89703Z"
                stroke="#242424"
                strokeWidth={1.18638}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id="clip0_11_4720">
                <Rect width={14.2366} height={14.2366} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
          <Text className="text-[14px] font-medium text-[#242424]">More filters</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
