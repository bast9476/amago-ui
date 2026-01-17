import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';

type CompleteProjectButtonProps = {
    onCompletePress: () => void;
};

const CompleteProjectButton: React.FC<CompleteProjectButtonProps> = ({ onCompletePress }) => (
    <View className="border-t border-black/10 bg-white px-4 py-4">
        <TouchableOpacity
            onPress={onCompletePress}
            activeOpacity={0.85}
            className="h-11 rounded-[10px] overflow-hidden items-center justify-center"
        >
            <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <Defs>
                    <LinearGradient id="completeGradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                        <Stop offset="0.58" stopColor="#07B556" />
                        <Stop offset="1.24" stopColor="#36D97F" />
                    </LinearGradient>
                </Defs>
                <Rect width="100" height="100" fill="url(#completeGradient)" />
            </Svg>
            <Text className="text-[16px] font-[400] text-white">Mark Project Complete &amp; Review</Text>
        </TouchableOpacity>
    </View>
);

export default CompleteProjectButton;

