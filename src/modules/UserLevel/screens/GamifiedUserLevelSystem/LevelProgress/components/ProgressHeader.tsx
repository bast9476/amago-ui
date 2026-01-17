import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { cardShadow } from '../../components/cardShadow';

type Props = {
  onBack: () => void;
  onSettings?: () => void;
};

const BackIcon = () => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <Path d="M11.992 19 5 12l6.992-7" stroke="#242424" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M19 12H5" stroke="#242424" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const SettingsIcon = () => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M8.054 3.444a2.167 2.167 0 0 1 4.292 0c.027.312.129.612.298.876.168.264.398.484.669.64.272.156.576.245.889.259.313.014.624-.048.908-.18a2.167 2.167 0 0 1 2.283.799 2.166 2.166 0 0 1-.687 3.24c-.256.18-.465.419-.61.697-.145.277-.22.586-.22.899s.075.621.22.899c.145.278.354.517.61.697a2.166 2.166 0 0 1 .687 3.24 2.166 2.166 0 0 1-2.283.799 2.167 2.167 0 0 0-1.797.079 2.167 2.167 0 0 0-.908.259c-.271.156-.501.376-.669.64a2.167 2.167 0 0 0-.298.876 2.167 2.167 0 0 1-4.292 0 2.167 2.167 0 0 0-.298-.877 2.167 2.167 0 0 0-.669-.639 2.167 2.167 0 0 0-.889-.259 2.167 2.167 0 0 0-.908.18 2.166 2.166 0 0 1-2.283-.799 2.166 2.166 0 0 1 .687-3.24c.256-.18.465-.419.61-.697.145-.278.22-.586.22-.899s-.075-.622-.22-.899a2.166 2.166 0 0 0-.61-.697 2.166 2.166 0 0 1-.687-3.24 2.166 2.166 0 0 1 2.283-.799c.284.132.595.194.908.18.313-.014.618-.103.889-.259.271-.156.501-.376.669-.64.169-.264.271-.564.298-.876Z"
      stroke="#737373"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 12.492a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      stroke="#737373"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function ProgressHeader({ onBack, onSettings }: Props) {
  return (
    <View className="flex-row items-center justify-between px-4 py-4 border-b border-[#f3f4f7] bg-white">
      <TouchableOpacity
        onPress={onBack}
        activeOpacity={0.8}
        className="w-10 h-10 rounded-full bg-white/90 items-center justify-center"
        style={cardShadow}
      >
        <BackIcon />
      </TouchableOpacity>

      <Text className="text-xl font-semibold text-[#242424]">Level Progress</Text>

      <TouchableOpacity
        onPress={onSettings}
        activeOpacity={0.8}
        className="w-10 h-10 items-center justify-center"
        hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
      >
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  );
}
