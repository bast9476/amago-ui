import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path, Circle, Rect } from 'react-native-svg';
import { cardShadow } from './cardShadow';

type Props = {
  progress: number; // 0-1; any NaN or out-of-range will be clamped
};

const TrophyIcon = () => (
  <Svg width={26} height={26} viewBox="0 0 22 22" fill="none">
    <Path
      d="M8.918 13.072v1.45c-.003.306-.085.605-.237.87-.153.265-.371.486-.634.643a4 4 0 0 0-1.324 1.568c-.313.619-.478 1.302-.481 1.996"
      stroke="#242424"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.485 13.072v1.45c.004.306.085.605.238.87.152.265.37.486.633.643.557.413 1.01.95 1.323 1.569.313.619.477 1.302.48 1.995"
      stroke="#242424"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.053 8.025h1.338c.591 0 1.158-.235 1.576-.653.418-.418.653-.985.653-1.576s-.235-1.158-.653-1.577c-.418-.418-.985-.653-1.576-.653h-1.338"
      stroke="#242424"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.567 19.619h14.269"
      stroke="#242424"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.351 8.026c0 1.419.563 2.78 1.566 3.783A5.337 5.337 0 0 0 10.702 13.377c1.42 0 2.781-.563 3.784-1.567a5.336 5.336 0 0 0 1.566-3.784V2.675a.873.873 0 0 0-.262-.631.873.873 0 0 0-.631-.261H6.243a.873.873 0 0 0-.631.261.873.873 0 0 0-.261.631z"
      stroke="#242424"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.351 8.025H4.013c-.591 0-1.158-.235-1.576-.653A2.229 2.229 0 0 1 1.783 5.796c0-.592.235-1.159.654-1.577.418-.418.985-.653 1.576-.653h1.338"
      stroke="#242424"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ChevronRight = () => (
  <Svg width={18} height={18} viewBox="0 0 19 19" fill="none">
    <Path
      d="m6.99 13.981 4.66-4.661L6.99 4.66"
      stroke="#99A1AF"
      strokeWidth={1.55}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Badge = ({ label }: { label: string }) => (
  <View className="h-[22px] px-2.5 rounded-[7.5px] overflow-hidden justify-center items-center self-start">
    <Svg width={70} height={22} viewBox="0 0 70 22" preserveAspectRatio="none" className="absolute inset-0">
      <Defs>
        <LinearGradient id="badgeGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <Stop offset="0%" stopColor="#fdc700" />
          <Stop offset="60%" stopColor="#ffb900" />
          <Stop offset="100%" stopColor="#d08700" />
        </LinearGradient>
      </Defs>
      <Rect width="70" height="22" rx="7.5" fill="url(#badgeGradient)" />
    </Svg>
    <Text className="text-[11px] font-semibold text-white">{label}</Text>
  </View>
);

export default function ProgressCard({ progress }: Props) {
  const safeProgress = Number.isFinite(progress) ? Math.min(1, Math.max(0, progress)) : 0;
  const percent = Math.round(safeProgress * 100);

  return (
    <View className="rounded-[14px] bg-white border border-[#f3f4f7] px-[23px] py-[28px]" style={cardShadow}>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4 flex-1">
          <View className="w-[54px] h-[54px] rounded-full items-center justify-center overflow-hidden">
            <Svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
              <Defs>
                <LinearGradient id="iconGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#fdc700" />
                  <Stop offset="60%" stopColor="#ffb900" />
                  <Stop offset="100%" stopColor="#d08700" />
                </LinearGradient>
              </Defs>
              <Circle cx="50" cy="50" r="50" fill="url(#iconGradient)" />
            </Svg>
            <TrophyIcon />
          </View>

          <View className="flex-1">
            <Badge label="Gold" />
            <View className="flex-row items-center justify-between mt-1">
              <Text className="text-[16px] font-bold text-[#242424]">Progress to Platinum</Text>
              <Text className="text-[16px] text-[#6b7280]">{percent}%</Text>
            </View>
            <View className="mt-2 h-[8px] rounded-full bg-[#030213]/10 overflow-hidden">
              <View
                className="h-full rounded-full"
                style={{ width: `${percent}%`, backgroundColor: '#07B556' }}
              />
            </View>
            <Text className="mt-2 text-[12px] font-medium text-[#9a9a9b]">
              Need 3 more users, 3 properties, 3 outlets
            </Text>
          </View>
        </View>
        <View className="pl-3">
          <ChevronRight />
        </View>
      </View>
    </View>
  );
}