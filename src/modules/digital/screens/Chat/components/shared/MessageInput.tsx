import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';

type MessageInputProps = {
    onAttachmentPress?: () => void;
    onSendPress?: () => void;
    placeholder?: string;
    value?: string;
    onChangeText?: (text: string) => void;
};

export default function MessageInput({
    onAttachmentPress,
    onSendPress,
    placeholder = 'Type a message...',
    value,
    onChangeText,
}: MessageInputProps) {
    return (
        <View className="border-t border-black/10 bg-white px-4 py-4">
            <View className="flex-row items-center gap-3">
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={onAttachmentPress}
                    className="w-10 h-10 rounded-[10px] border border-black/10 items-center justify-center bg-white"
                >
                    <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
                        <Path
                            d="M10.1462 3.80191L4.81056 9.2466C4.57266 9.48449 4.43901 9.80714 4.43901 10.1436C4.43901 10.48 4.57266 10.8027 4.81056 11.0406C5.04845 11.2785 5.3711 11.4121 5.70754 11.4121C6.04397 11.4121 6.36663 11.2785 6.60452 11.0406L11.9401 5.59588C12.4158 5.12018 12.6831 4.47498 12.6831 3.80223C12.6831 3.12948 12.4158 2.48429 11.9401 2.00858C11.4644 1.53287 10.8192 1.26563 10.1465 1.26562C9.47373 1.26563 8.82854 1.53287 8.35283 2.00858L3.03942 7.43107C2.68138 7.78332 2.39664 8.20297 2.2016 8.66581C2.00656 9.12866 1.90509 9.62554 1.90305 10.1278C1.901 10.6301 1.99842 11.1278 2.18968 11.5922C2.38094 12.0566 2.66226 12.4785 3.01742 12.8337C3.37257 13.1889 3.79453 13.4702 4.25895 13.6614C4.72337 13.8527 5.22106 13.9501 5.72332 13.9481C6.22557 13.946 6.72246 13.8446 7.1853 13.6495C7.64815 13.4545 8.0678 13.1697 8.42005 12.8117L13.7335 7.38921"
                            stroke="#242424"
                            strokeWidth={1.2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </Svg>
                </TouchableOpacity>

                <View className="flex-1">
                    <TextInput
                        placeholder={placeholder}
                        placeholderTextColor="rgba(36,36,36,0.5)"
                        multiline
                        value={value}
                        onChangeText={onChangeText}
                        className="min-h-[40px] rounded-[10px] bg-[#F3F3F5] border border-transparent px-3 py-1 text-[17px] text-[#242424]"
                    />
                </View>

                <TouchableOpacity 
                    activeOpacity={0.8} 
                    onPress={onSendPress}
                    className="w-10 h-10 rounded-[10px] overflow-hidden relative"
                >
                    <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <Defs>
                            <LinearGradient id="chatSendGradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                                <Stop offset="0.58" stopColor="#07B556" />
                                <Stop offset="1.24" stopColor="#36D97F" />
                            </LinearGradient>
                        </Defs>
                        <Rect width="100" height="100" fill="url(#chatSendGradient)" />
                    </Svg>
                    <View className="flex-1 items-center justify-center">
                        <Svg width={18} height={18} viewBox="0 0 16 16" fill="none">
                            <Path
                                d="M9.21776 13.7508C9.24186 13.8108 9.28374 13.8621 9.33779 13.8976C9.39184 13.9332 9.45547 13.9513 9.52014 13.9497C9.58482 13.948 9.64744 13.9266 9.6996 13.8883C9.75176 13.8501 9.79096 13.7968 9.81195 13.7356L13.9338 1.68701C13.9541 1.63082 13.958 1.57001 13.945 1.5117C13.932 1.45339 13.9026 1.39999 13.8604 1.35775C13.8182 1.31551 13.7648 1.28617 13.7065 1.27316C13.6481 1.26016 13.5873 1.26404 13.5311 1.28433L1.48259 5.40621C1.42139 5.42719 1.36808 5.4664 1.3298 5.51856C1.29153 5.57072 1.27013 5.63334 1.26848 5.69801C1.26682 5.76268 1.28499 5.82632 1.32054 5.88037C1.35609 5.93442 1.40732 5.9763 1.46737 6.00039L6.49606 8.01694C6.65503 8.08059 6.79946 8.17577 6.92065 8.29674C7.04184 8.41771 7.13728 8.56198 7.20121 8.72083L9.21776 13.7508Z"
                                stroke="white"
                                strokeWidth={1.26827}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M13.8584 1.35938L6.92096 8.29618"
                                stroke="white"
                                strokeWidth={1.26827}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

