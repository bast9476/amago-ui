import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { EdgeInsets } from 'react-native-safe-area-context';

type ChatHeaderProps = {
    insets: EdgeInsets;
    designHeight: number;
    onBackPress: () => void;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ insets, designHeight, onBackPress }) => (
    <View className="w-full overflow-hidden border-b border-[#f3f4f7]" style={{ height: insets.top + designHeight }}>
        <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <Defs>
                <LinearGradient id="chatHeaderGradient" x1="0" y1="100" x2="100" y2="0" gradientUnits="userSpaceOnUse">
                    <Stop offset="0.5795" stopColor="#07B556" />
                    <Stop offset="1.2421" stopColor="#36D97F" />
                </LinearGradient>
            </Defs>
            <Rect width="100" height="100" fill="url(#chatHeaderGradient)" />
        </Svg>

        <View className="flex-row justify-between items-center mt-3 px-4 py-5 relative z-10" style={{ paddingTop: insets.top }}>
            <View className="flex-row items-center flex-1 space-x-3.5">
                <TouchableOpacity
                    onPress={onBackPress}
                    activeOpacity={0.7}
                    className="w-[30px] h-[30px] rounded-full bg-white items-center justify-center"
                    style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1.3 },
                        shadowOpacity: 0.1,
                        shadowRadius: 1.95,
                        elevation: 2,
                    }}
                >
                    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                        <Path d="M7.8 12.35L3.25 7.8L7.8 3.25" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                        <Path d="M12.35 7.80078H3.25" stroke="#242424" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                </TouchableOpacity>

                <View className="flex-row items-center space-x-4">
                    <View className="relative">
                        <Image source={require('@modules/digital/assets/img.png')} className="w-[50px] h-[50px] rounded-full" resizeMode="cover" />
                        <View className="absolute bottom-0 right-0 w-[13px] h-[13px] rounded-full bg-[#00a551] border-[1px] border-white" />
                    </View>

                    <View className="flex-col">
                        <Text className="text-[19px] font-[600] text-white">Sarah Ahmed</Text>
                        <Text className="text-[11px] font-medium text-white opacity-80">Active Now</Text>
                    </View>
                </View>
            </View>

            <View className="flex-row items-center space-x-4">
                <TouchableOpacity activeOpacity={0.7}>
                    <Svg width={17} height={24} viewBox="0 0 15 20" fill="none">
                        <Path
                            d="M2.71692 0.453196L3.84675 0.113374C4.46568 -0.073263 5.13138 -0.0283345 5.71962 0.239776C6.30786 0.507886 6.77845 0.980861 7.0436 1.57044L7.91687 3.51256C8.14484 4.01968 8.20832 4.58544 8.09841 5.13047C7.9885 5.67551 7.71071 6.17245 7.30403 6.55159L5.85761 7.90023C5.81533 7.93963 5.78854 7.99286 5.78209 8.05029C5.73949 8.43465 5.99993 9.18303 6.60018 10.2238C7.03682 10.9799 7.43279 11.5114 7.76874 11.8087C8.00304 12.0168 8.1318 12.0613 8.18699 12.0459L10.133 11.4504C10.6644 11.2879 11.2334 11.2957 11.7601 11.4728C12.2869 11.6499 12.745 11.9874 13.0703 12.438L14.3106 14.1574C14.6877 14.6803 14.8623 15.3223 14.8019 15.9641C14.7416 16.606 14.4504 17.2042 13.9823 17.6476L13.1246 18.4608C12.6693 18.892 12.1102 19.1978 11.5016 19.3487C10.893 19.4995 10.2557 19.4902 9.6518 19.3215C6.98551 18.577 4.59514 16.327 2.45358 12.618C0.309125 8.9042 -0.44313 5.70543 0.250067 3.02074C0.40611 2.41693 0.715058 1.86351 1.14713 1.4138C1.57921 0.964085 2.11984 0.633256 2.71692 0.453196ZM3.13613 1.84443C2.77799 1.95234 2.45366 2.15065 2.19439 2.42026C1.93512 2.68987 1.74964 3.0217 1.65583 3.38379C1.073 5.64153 1.74005 8.47725 3.71121 11.8919C5.67947 15.3018 7.79876 17.2962 10.0429 17.9235C10.4052 18.0244 10.7873 18.0298 11.1523 17.9392C11.5172 17.8486 11.8524 17.6651 12.1254 17.4065L12.9842 16.5933C13.197 16.3917 13.3294 16.1197 13.3568 15.8279C13.3842 15.536 13.3048 15.2442 13.1333 15.0065L11.894 13.288C11.7462 13.083 11.5378 12.9294 11.2982 12.8488C11.0585 12.7682 10.7997 12.7647 10.558 12.8388L8.60716 13.4361C7.47442 13.773 6.44625 12.862 5.34255 10.9499C4.59901 9.66227 4.25241 8.66507 4.33858 7.88958C4.38408 7.48683 4.57093 7.11506 4.86719 6.83816L6.31361 5.48953C6.49855 5.31721 6.62489 5.09131 6.67489 4.84353C6.7249 4.59575 6.69607 4.33853 6.59244 4.10797L5.71916 2.16586C5.59865 1.89807 5.38488 1.68325 5.11769 1.56141C4.85051 1.43957 4.54814 1.41904 4.26693 1.50364L3.13613 1.84443Z"
                            fill="white"
                        />
                    </Svg>
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} className="w-9 h-9 items-center justify-center">
                    <Svg width={22} height={22} viewBox="0 0 19 19" fill="none">
                        <Path
                            d="M9.50004 17.4154C13.8723 17.4154 17.4167 13.871 17.4167 9.4987C17.4167 5.12644 13.8723 1.58203 9.50004 1.58203C5.12779 1.58203 1.58337 5.12644 1.58337 9.4987C1.58337 13.871 5.12779 17.4154 9.50004 17.4154Z"
                            stroke="white"
                            strokeWidth="1.58333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Path
                            d="M7.19623 7.12203C7.38235 6.59294 7.74972 6.14678 8.23328 5.8626C8.71683 5.57841 9.28535 5.47453 9.83816 5.56935C10.391 5.66417 10.8924 5.95157 11.2536 6.38066C11.6148 6.80975 11.8125 7.35282 11.8116 7.9137C11.8116 9.49703 9.43664 10.2887 9.43664 10.2887"
                            stroke="white"
                            strokeWidth="1.58333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Path d="M9.5 13.4531H9.50792" stroke="white" strokeWidth="1.58333" strokeLinecap="round" strokeLinejoin="round" />
                    </Svg>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);

export default ChatHeader;

