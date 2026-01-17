import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';
import { cardShadow } from './cardShadow';

const UserPlusIcon = () => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
    preserveAspectRatio="none"
  >
    <Path
      d="M13.3332 17.5V15.8333C13.3332 14.9493 12.982 14.1014 12.3569 13.4763C11.7318 12.8512 10.884 12.5 9.9999 12.5H4.9999C4.11584 12.5 3.268 12.8512 2.64288 13.4763C2.01775 14.1014 1.66656 14.9493 1.66656 15.8333V17.5"
      stroke="#242424"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.3334 2.60547C14.0482 2.79078 14.6812 3.20819 15.1331 3.79219C15.585 4.37619 15.8302 5.09371 15.8302 5.83214C15.8302 6.57056 15.585 7.28808 15.1331 7.87208C14.6812 8.45608 14.0482 8.87349 13.3334 9.0588"
      stroke="#242424"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3333 17.4991V15.8324C18.3328 15.0939 18.087 14.3764 17.6345 13.7927C17.182 13.209 16.5484 12.7921 15.8333 12.6074"
      stroke="#242424"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.50002 9.16667C9.34097 9.16667 10.8334 7.67428 10.8334 5.83333C10.8334 3.99238 9.34097 2.5 7.50002 2.5C5.65907 2.5 4.16669 3.99238 4.16669 5.83333C4.16669 7.67428 5.65907 9.16667 7.50002 9.16667Z"
      stroke="#242424"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const BuildingIcon = () => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    className="flex-grow-0 flex-shrink-0 w-5 h-5 relative"
    preserveAspectRatio="none"
  >
    <G clipPath="url(#clip0_11_2369)">
      <Path
        d="M10 8.33203H10.0079"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></Path>
      <Path
        d="M10 11.666H10.0079"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 5H10.0079"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 8.33203H13.3413"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3333 11.666H13.3413"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></Path>
      <Path
        d="M13.3333 5H13.3413"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></Path>
      <Path
        d="M6.66666 8.33203H6.67457"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66666 11.666H6.67457"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66666 5H6.67457"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.5 18.3333V15.8333C7.5 15.6123 7.5878 15.4004 7.74408 15.2441C7.90036 15.0878 8.11232 15 8.33333 15H11.6667C11.8877 15 12.0996 15.0878 12.2559 15.2441C12.4122 15.4004 12.5 15.6123 12.5 15.8333V18.3333"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 1.66602H5.00001C4.07954 1.66602 3.33334 2.41221 3.33334 3.33268V16.666C3.33334 17.5865 4.07954 18.3327 5.00001 18.3327H15C15.9205 18.3327 16.6667 17.5865 16.6667 16.666V3.33268C16.6667 2.41221 15.9205 1.66602 15 1.66602Z"
        stroke="#242424"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_11_2369"><Rect width="20" height="20" fill="white" /></ClipPath>
    </Defs>
  </Svg>
);

export default function ActionsRow() {
  return (
    <View className="flex-row justify-between mb-[40px]">
      <TouchableOpacity
        className="flex-1 mr-2 rounded-lg border border-black/10 bg-white px-[10px] py-[15px] items-center"
        style={cardShadow}
        activeOpacity={0.8}
      >
        <View className="items-center">
          <View className="w-10 h-10 items-center justify-center">
            <UserPlusIcon />
          </View>
          <Text className="text-[15px] font-medium text-[#242424]">Add User</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="flex-1 ml-2 rounded-lg border border-black/10 bg-white px-[10px] py-[15px] items-center"
        style={cardShadow}
        activeOpacity={0.8}
      >
        <View className="items-center">
          <View className="w-10 h-10 items-center justify-center">
            <BuildingIcon />
          </View>
          <Text className="text-[15px] font-medium text-[#242424]">Add Property</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}