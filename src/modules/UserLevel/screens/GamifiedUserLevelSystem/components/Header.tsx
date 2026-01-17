import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Rect, Defs, ClipPath, LinearGradient, Stop } from 'react-native-svg';
import { cardShadow } from './cardShadow';

type Props = {
  onBack?: () => void;
  onSettings?: () => void;
  title?: string;
  tierLabel?: string;
};

export default function Header({
  onBack,
  onSettings,
  title = 'Gold User',
  tierLabel = 'Gold',
}: Props) {
  return (
    <View className="w-full bg-white border-b border-[#f3f4f7] px-4">
      <View className="flex-row items-center justify-between px-4 py-4">
        <TouchableOpacity
          onPress={onBack}
          activeOpacity={0.8}
          className="w-10 h-10 rounded-full bg-white/80 items-center justify-center"
          style={cardShadow}
        >
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M12 19L5 12L12 5"
              stroke="#242424"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M19 12H5"
              stroke="#242424"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>

        <View className="flex-1 flex-row items-center justify-center gap-2 pl-4 pr-3">
          <Text className="text-xl font-semibold text-[#242424]">{title}</Text>
          <View className="px-3 rounded-[11px] w-[58px] h-[33.21px] overflow-hidden justify-center items-center relative">
            <Svg
              width={100}
              height={34}
              viewBox="0 0 100 34"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full"
            >
              <Defs>
                <LinearGradient id="tierGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#fdc700" />
                  <Stop offset="60%" stopColor="#ffb900" />
                  <Stop offset="100%" stopColor="#d08700" />
                </LinearGradient>
              </Defs>
              <Rect width="100" height="34" rx="11" fill="url(#tierGradient)" />
            </Svg>
            <Text className="text-base font-semibold text-center text-white">{tierLabel}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={onSettings}
          activeOpacity={0.8}
          className="w-10 h-10 items-center justify-center"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <G clipPath="url(#clip0)">
              <Path
                d="M8.053 3.444c.046-.483.27-.931.629-1.258.359-.326.826-.507 1.311-.507.485 0 .952.181 1.311.507.359.327.583.775.629 1.258.027.312.129.612.298.876.168.264.398.484.669.64.272.156.576.245.889.259.313.014.624-.048.908-.18.441-.2.94-.229 1.401-.081.46.147.85.461 1.092.88.242.419.319.913.217 1.386-.102.473-.377.891-.77 1.173-.256.18-.465.419-.61.697-.145.277-.22.586-.22.899 0 .313.075.621.22.899.145.278.354.517.61.697.393.282.668.7.77 1.173.102.473.025.967-.217 1.386-.242.419-.632.733-1.092.881-.461.147-.96.118-1.401-.082-.284-.132-.595-.194-.908-.18-.313.014-.618.103-.889.259-.271.156-.501.376-.669.64-.169.264-.271.564-.298.876-.046.483-.27.931-.629 1.258-.359.327-.826.507-1.311.507-.485 0-.952-.18-1.311-.507-.359-.327-.583-.775-.629-1.258-.027-.312-.129-.613-.298-.877-.168-.264-.398-.483-.669-.639-.271-.156-.576-.245-.889-.259a2.053 2.053 0 0 0-.908.18c-.441.2-.94.229-1.401.081a1.708 1.708 0 0 1-.892-.88c-.242-.419-.319-.913-.217-1.386.102-.473.377-.891.771-1.173.256-.18.465-.419.609-.697.145-.278.22-.586.22-.899 0-.313-.075-.622-.22-.899-.144-.278-.353-.517-.609-.697-.393-.282-.669-.7-.771-1.173-.102-.473-.025-.967.217-1.386.242-.419.632-.733 1.092-.88.46-.148.959-.119 1.401.081.283.132.595.194.908.18.313-.014.618-.103.889-.259.271-.156.501-.376.669-.64.169-.264.271-.564.298-.876Z"
                stroke="#737373"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M10 12.492c1.38 0 2.5-1.119 2.5-2.499 0-1.38-1.12-2.499-2.5-2.499-1.381 0-2.5 1.119-2.5 2.499 0 1.38 1.119 2.499 2.5 2.499Z"
                stroke="#737373"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </G>
            <Defs>
              <ClipPath id="clip0">
                <Rect width={20} height={20} fill="white" />
              </ClipPath>
            </Defs>
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}