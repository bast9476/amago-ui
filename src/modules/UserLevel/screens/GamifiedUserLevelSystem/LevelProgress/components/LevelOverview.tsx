import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Rect, Stop, G, Path, ClipPath } from 'react-native-svg';

type Props = {
    progressPercent: number;
    badgeLabel: string;
    nextUnlock: string;
    sectionSpacing: number;
};

const CircularProgress = ({ percent }: { percent: number }) => {
    const size = 120;
    const stroke = 10;
    const radius = (size - stroke) / 2;
    const circumference = 2 * Math.PI * radius;
    const progress = Math.min(100, Math.max(0, Math.round(percent)));
    const offset = circumference - (progress / 100) * circumference;

    return (
        <View className="items-center justify-center">
            <Svg width={size} height={size}>
                <Defs>
                    <LinearGradient id="ringGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                        <Stop offset="0%" stopColor="#FDC700" />
                        <Stop offset="50%" stopColor="#FFB900" />
                        <Stop offset="63%" stopColor="#D08700" />
                    </LinearGradient>
                </Defs>
                <Circle cx={size / 2} cy={size / 2} r={radius} stroke="#e5e7eb" strokeWidth={stroke} fill="none" />
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="url(#ringGrad)"
                    strokeWidth={stroke}
                    fill="none"
                    strokeDasharray={`${circumference} ${circumference}`}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    rotation="-90"
                    origin={`${size / 2}, ${size / 2}`}
                />
            </Svg>
        </View>
    );
};

const GradientBadge = ({ percent }: { percent: number }) => (
    <View
        className="items-center justify-center overflow-hidden"
        style={{
            width: 65,
            height: 65,
            borderRadius: 65 / 2,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 6,
            elevation: 6,
        }}
    >
        <Svg width="65" height="65" viewBox="0 0 65 65" className="absolute inset-0">
            <Defs>
                <LinearGradient id="badgeGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <Stop offset="0%" stopColor="#fdc700" />
                    <Stop offset="50%" stopColor="#ffb900" />
                    <Stop offset="100%" stopColor="#d08700" />
                </LinearGradient>
            </Defs>
            <Rect width="65" height="65" rx="32.5" fill="url(#badgeGrad)" />
        </Svg>
        <View className="items-center justify-center" style={{ gap: 6 }}>
            <Svg
                width={14}
                height={14}
                viewBox="0 0 14 14"
                fill="none"
                className="flex-grow-0 flex-shrink-0 w-[13.32] h-[13.32] relative"
                preserveAspectRatio="none"
            >
                <G clipPath="url(#clip0_11_2644)">
                    <Path
                        d="M5.55208 8.13867V9.04143C5.54998 9.23165 5.49905 9.41815 5.40416 9.58304C5.30928 9.74792 5.17362 9.88566 5.0102 9.98305C4.66328 10.24 4.38107 10.5743 4.186 10.9595C3.99093 11.3446 3.88837 11.7699 3.88647 12.2016"
                        stroke="white"
                        strokeWidth="1.1104"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M7.77295 8.13867V9.04143C7.77505 9.23165 7.82598 9.41815 7.92087 9.58304C8.01575 9.74792 8.15141 9.88566 8.31483 9.98305C8.66175 10.24 8.94396 10.5743 9.13903 10.9595C9.3341 11.3446 9.43666 11.7699 9.43855 12.2016"
                        stroke="white"
                        strokeWidth="1.1104"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M9.99377 4.99671H10.8266C11.1947 4.99671 11.5477 4.85047 11.808 4.59017C12.0683 4.32987 12.2146 3.97683 12.2146 3.60871C12.2146 3.24059 12.0683 2.88754 11.808 2.62724C11.5477 2.36694 11.1947 2.2207 10.8266 2.2207H9.99377"
                        stroke="white"
                        strokeWidth="1.1104"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M2.22083 12.2139H11.104"
                        stroke="white"
                        strokeWidth="1.1104"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M3.3313 4.99676C3.3313 5.88025 3.68226 6.72756 4.30699 7.35228C4.93171 7.977 5.77902 8.32797 6.66251 8.32797C7.546 8.32797 8.3933 7.977 9.01803 7.35228C9.64275 6.72756 9.99372 5.88025 9.99372 4.99676V1.66555C9.99372 1.5183 9.93522 1.37709 9.8311 1.27297C9.72698 1.16885 9.58576 1.11035 9.43851 1.11035H3.8865C3.73925 1.11035 3.59803 1.16885 3.49391 1.27297C3.38979 1.37709 3.3313 1.5183 3.3313 1.66555V4.99676Z"
                        stroke="white"
                        strokeWidth="1.1104"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <Path
                        d="M3.33128 4.99671H2.49848C2.13036 4.99671 1.77731 4.85047 1.51701 4.59017C1.25671 4.32987 1.11047 3.97683 1.11047 3.60871C1.11047 3.24059 1.25671 2.88754 1.51701 2.62724C1.77731 2.36694 2.13036 2.2207 2.49848 2.2207H3.33128"
                        stroke="white"
                        strokeWidth="1.1104"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </G>
                <Defs>
                    <ClipPath id="clip0_11_2644">
                        <Rect width="13.3248" height="13.3248" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
            <Text className="text-sm font-semibold text-white">{`${percent}%`}</Text>
        </View>
    </View>
);

export default function LevelOverview({ progressPercent, badgeLabel, nextUnlock, sectionSpacing }: Props) {
    return (
        <View>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 450 }}>
                <Svg width="100%" height="100%" viewBox="0 0 375 450" preserveAspectRatio="none">
                    <Defs>
                        <LinearGradient id="levelProgressBg" x1="0%" y1="0%" x2="0%" y2="100%">
                            <Stop offset="0%" stopColor="#ECFDF5" />
                            <Stop offset="100%" stopColor="#FFFFFF" />
                        </LinearGradient>
                    </Defs>
                    <Rect width="100%" height="100%" fill="url(#levelProgressBg)" />
                </Svg>
            </View>
            <View className="items-center px-4" style={{ gap: 14, marginTop: sectionSpacing }}>
                <Text className="text-[19px] font-bold text-[#242424] mt-[10px]">Your Introducer Level</Text>
                <View className="items-center" style={{ gap: 16 }}>
                    <View className="relative items-center justify-center mt-[10px]">
                        <CircularProgress percent={progressPercent} />
                        <View className="absolute inset-0 items-center justify-center">
                            <GradientBadge percent={progressPercent} />
                        </View>
                    </View>
                    <View
                        className="relative overflow-hidden items-center justify-center"
                        style={{
                            paddingHorizontal: 20,
                            borderRadius: 6.45,
                        }}
                    >
                        <Svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 160 36"
                            preserveAspectRatio="none"
                            className="absolute inset-0"
                        >
                            <Defs>
                                <LinearGradient id="pillGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                                    <Stop offset="0%" stopColor="#fdc700" />
                                    <Stop offset="50%" stopColor="#ffb900" />
                                    <Stop offset="100%" stopColor="#d08700" />
                                </LinearGradient>
                            </Defs>
                            <Rect width="160" height="36" rx="12" fill="url(#pillGrad)" />
                        </Svg>
                        <Text className="text-[16px] font-semibold text-white px-4 py-2">
                            Gold Introducer
                        </Text>
                    </View>
                    <View className="flex-row items-center" style={{ gap: 6, marginTop: 5 }}>
                        <Text className="text-[19px] text-neutral-500">Next Unlock:</Text>
                        <Text className="text-lg font-bold text-[#00a551]">{nextUnlock}</Text>
                    </View>
                </View>
            </View>
        </View>

    );
}
