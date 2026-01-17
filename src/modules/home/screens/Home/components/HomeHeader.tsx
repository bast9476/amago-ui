import React from 'react';
import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { G, Path, Defs, ClipPath, Rect, Circle, LinearGradient, Stop, Mask } from 'react-native-svg';

const homeImage = require('@modules/home/assets/img-3.png');
const headerBackground = require('@modules/home/assets/header.png');
const shoppingImage = require('@modules/home/assets/logo.png');
const productsImage = require('@modules/home/assets/products.png');
const outletImage = require('@modules/home/assets/outlet.png');
const propertiesImage = require('@modules/home/assets/properties.png');

// Design height for the header content (excluding status bar)
const DESIGN_HEIGHT = 238;

// Messages Icon SVG Component
const MessagesIcon = ({ size = 30, color = 'white', opacity = 0.5 }: { size?: number; color?: string; opacity?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
        <Defs>
            <ClipPath id="clip0_messages_home">
                <Rect width="29.6687" height="29.6687" fill="white" />
            </ClipPath>
        </Defs>
        <G clipPath="url(#clip0_messages_home)">
            <Path
                d="M20.5399 0.215008C15.616 0.215008 11.6245 2.4162 11.6245 5.13545C11.6245 7.85471 15.6172 10.057 20.5399 10.057C25.4638 10.057 29.4554 7.85471 29.4554 5.13545C29.4554 2.4162 25.4626 0.215008 20.5399 0.215008ZM29.4554 6.59721C29.4531 9.31646 25.4638 11.5188 20.5399 11.5188C15.6297 11.5188 11.6473 9.34043 11.6245 6.63373V8.55877C11.6245 9.72041 12.3685 10.7839 13.5872 11.6261C14.8196 11.9615 15.9173 12.4271 16.8313 13.0159C17.9644 13.3035 19.2105 13.4792 20.5399 13.4792C25.4638 13.4792 29.4554 11.278 29.4554 8.55877V6.59721ZM29.4554 10.0205C29.4554 12.7398 25.4638 14.9421 20.5399 14.9421C19.9408 14.9421 19.3589 14.8976 18.7929 14.8348C19.2395 15.4363 19.5442 16.1311 19.6841 16.8672C19.9682 16.8831 20.2489 16.9025 20.5399 16.9025C25.4638 16.9025 29.4554 14.7013 29.4554 11.9821V10.0205ZM9.12886 12.766C4.205 12.766 0.213409 14.9684 0.213409 17.6876C0.213409 20.4069 4.20614 22.6092 9.12886 22.6092C14.0527 22.6092 18.0443 20.4069 18.0443 17.6876C18.0443 14.9684 14.0516 12.766 9.12886 12.766ZM29.4554 13.4438C29.4531 16.1631 25.4638 18.3654 20.5399 18.3654C20.2535 18.3654 19.9637 18.3449 19.6841 18.3289C19.6715 18.4145 19.6647 18.5286 19.6487 18.6142C19.7058 18.7865 19.7548 18.9565 19.7548 19.1505V20.2916C20.0139 20.3042 20.274 20.3258 20.5399 20.3258C25.4638 20.3258 29.4554 18.1247 29.4554 15.4054V13.4438ZM29.4554 16.8672C29.4531 19.5864 25.4638 21.7887 20.5399 21.7887C20.2535 21.7887 19.9637 21.7682 19.6841 21.7522C19.6715 21.8378 19.6647 21.9519 19.6487 22.0375C19.7058 22.2087 19.7548 22.3798 19.7548 22.5738V23.7149C20.0139 23.7275 20.274 23.7492 20.5399 23.7492C25.4638 23.7492 29.4554 21.548 29.4554 18.8287V16.8672ZM18.0443 19.1494C18.042 21.8686 14.0527 24.071 9.12886 24.071C4.21869 24.071 0.236232 21.8926 0.213409 19.1847V21.1109C0.213409 23.8302 4.20385 26.0325 9.12886 26.0325C14.0539 26.0325 18.0443 23.8302 18.0443 21.1109V19.1494ZM18.0443 22.5727C18.042 25.2919 14.0527 27.4943 9.12886 27.4943C4.21869 27.4943 0.236232 25.3159 0.213409 22.6081V24.5342C0.213409 27.2535 4.20385 29.4558 9.12886 29.4558C14.0539 29.4558 18.0443 27.2535 18.0443 24.5342V22.5727Z"
                fill={color}
                fillOpacity={opacity}
            />
        </G>
    </Svg>
);

// Bell Icon SVG Component
const BellIcon = ({ size = 12 }: { size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 12 13" fill="none">
        <Defs>
            <ClipPath id="clip0_bell_home">
                <Path d="M0 0H11.2328V12.8375H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
        <G clipPath="url(#clip0_bell_home)">
            <Path
                d="M5.61637 0C5.17258 0 4.81403 0.358546 4.81403 0.802341V1.25115C2.99623 1.53949 1.60467 3.11408 1.60467 5.01463V5.85207C1.60467 6.99039 1.21604 8.09612 0.506466 8.98371L0.132876 9.45258C-0.0125479 9.6331 -0.0401284 9.88133 0.0601642 10.0894C0.160457 10.2975 0.371071 10.4304 0.601744 10.4304H10.631C10.8617 10.4304 11.0723 10.2975 11.1726 10.0894C11.2729 9.88133 11.2453 9.6331 11.0999 9.45258L10.7263 8.98622C10.0167 8.09612 9.62808 6.99039 9.62808 5.85207V5.01463C9.62808 3.11408 8.23652 1.53949 6.41871 1.25115V0.802341C6.41871 0.358546 6.06017 0 5.61637 0ZM5.61637 2.40702H5.81696C7.25616 2.40702 8.42457 3.57543 8.42457 5.01463V5.85207C8.42457 7.05308 8.77308 8.22399 9.41997 9.22692H1.81278C2.45966 8.22399 2.80818 7.05308 2.80818 5.85207V5.01463C2.80818 3.57543 3.97659 2.40702 5.41579 2.40702H5.61637ZM7.22106 11.2328H5.61637H4.01169C4.01169 11.659 4.17968 12.0677 4.48056 12.3686C4.78144 12.6695 5.19013 12.8375 5.61637 12.8375C6.04262 12.8375 6.45131 12.6695 6.75219 12.3686C7.05306 12.0677 7.22106 11.659 7.22106 11.2328Z"
                fill="white"
            />
        </G>
    </Svg>
);

// Wallet Icon SVG Component
const WalletIcon = ({ size = 18 }: { size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
    <Defs>
      <ClipPath id="clip0_wallet_balance">
        <Path d="M0 0H17.952V17.952H0V0Z" fill="white" />
      </ClipPath>
    </Defs>
    <G clipPath="url(#clip0_wallet_balance)">
      <Path
        d="M2.244 1.12207C1.00629 1.12207 0 2.12836 0 3.36607V14.5861C0 15.8238 1.00629 16.8301 2.244 16.8301H15.708C16.9457 16.8301 17.952 15.8238 17.952 14.5861V6.73207C17.952 5.49436 16.9457 4.48807 15.708 4.48807H2.805C2.49645 4.48807 2.244 4.23562 2.244 3.92707C2.244 3.61852 2.49645 3.36607 2.805 3.36607H15.708C16.3286 3.36607 16.83 2.86468 16.83 2.24407C16.83 1.62346 16.3286 1.12207 15.708 1.12207H2.244ZM14.586 9.53707C14.8836 9.53707 15.169 9.65528 15.3794 9.8657C15.5898 10.0761 15.708 10.3615 15.708 10.6591C15.708 10.9566 15.5898 11.242 15.3794 11.4524C15.169 11.6629 14.8836 11.7811 14.586 11.7811C14.2884 11.7811 14.003 11.6629 13.7926 11.4524C13.5822 11.242 13.464 10.9566 13.464 10.6591C13.464 10.3615 13.5822 10.0761 13.7926 9.8657C14.003 9.65528 14.2884 9.53707 14.586 9.53707Z"
        fill="white"
      />
    </G>
  </Svg>
);

interface QuickActionButtonProps {
  imageSource: any;
  label: string;
  onPress?: () => void;
}

const QuickActionButton = ({ imageSource, label, onPress }: QuickActionButtonProps) => {
  const { width } = useWindowDimensions();
  
  return (
    <TouchableOpacity 
      activeOpacity={0.7}
      className="flex-col items-center"
      style={{ width: Math.min(61, width * 0.16) }}
      onPress={onPress}
    >
      <View 
        className="items-center justify-center rounded-full bg-[#d9f2e5] w-[65px] h-[65px]"
      >
        <Image
          source={imageSource}
          className="w-[24px] h-[24px]"
          resizeMode="contain"
        />
      </View>
      <Text className="text-xs font-bold text-center text-[#242424] mt-2.5">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function HomeHeader() {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();
    const topPad = insets?.top ?? 0;
    const totalHeight = topPad + DESIGN_HEIGHT;

    return (
        <View
            className="w-full  rounded-b-[23px]"
            style={{ height: totalHeight }}
        >
            {/* Background Image */}
            <Image
                source={headerBackground}
                className="absolute inset-0 w-full h-full"
                resizeMode="cover"
            />

            {/* User Info and Icons Row */}
            <View
                className={`flex-row justify-between items-center px-4 pb-6`}
                style={{ paddingTop: topPad + 10 }}
            >
                {/* User Info */}
                <View className="flex-1">
                    <View className="flex-row items-center gap-2">
                        {/* Profile Image with Golden Gradient Border and Online Status */}
                        <View className="relative w-16 h-16">
                            {/* Gradient Border using SVG */}
                            <Svg 
                                width={64} 
                                height={64} 
                                className="absolute top-0 left-0"
                            >
                                <Defs>
                                    <LinearGradient 
                                        id="avatarBorderGradient" 
                                        x1="0%" 
                                        y1="0%" 
                                        x2="100%" 
                                        y2="100%" 
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <Stop offset="0%" stopColor="#E8BD4C" />
                                        <Stop offset="50%" stopColor="#F7E881" />
                                        <Stop offset="100%" stopColor="#ECC351" />
                                    </LinearGradient>
                                    <Mask id="avatarMask">
                                        <Circle cx={32} cy={32} r={32} fill="white" />
                                        <Circle cx={32} cy={32} r={26} fill="black" />
                                    </Mask>
                                </Defs>
                                <Circle 
                                    cx={32} 
                                    cy={32} 
                                    r={32} 
                                    fill="url(#avatarBorderGradient)"
                                    mask="url(#avatarMask)"
                                />
                            </Svg>
                            
                            {/* Profile Image */}
                            <View 
                                className="w-[52px] h-[52px] rounded-[26px] overflow-hidden absolute top-1.5 left-1.5"
                            >
                                <Image
                                    source={homeImage}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                            </View>
                            
                            {/* Online Status Indicator */}
                            <View 
                                className="absolute w-4 h-4 bottom-[3px] right-[3px] rounded-full bg-[#36d97f] border-2 border-white"
                            />
                        </View>
                        <View className="flex-1">
                            <Text className="text-xl font-semibold text-white mb-1">
                                Sarah Johnson
                            </Text>
                            <Text className="text-sm font-medium text-white/80">
                                sarah.j@email.com
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Messages and Notification Icons */}
                <View className="flex-row items-center gap-2">
                    <TouchableOpacity activeOpacity={0.7}>
                        <MessagesIcon size={36} color="white" opacity={0.5} />
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} className="relative">
                        <View className="w-10 h-10 rounded-full bg-white/20 border border-white/20 items-center justify-center">
                            <BellIcon size={16} />
                        </View>
                        {/* Notification Badge */}
                        <View className="absolute -top-1 -right-1 w-[18px] h-[18px] rounded-full bg-red-500 opacity-80 items-center justify-center">
                            <Text className="text-xs font-bold text-white">3</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Balance Card Section */}
            <View className="relative bottom-0 left-0 right-0 items-center pb-5">
                <View 
                    className="flex-col items-start bg-white rounded-2xl border-0 px-6 py-4"
                    style={{
                        width: width * 0.91,
                        maxWidth: 375,
                        shadowColor: '#9c9c9c',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.1,
                        shadowRadius: 8,
                        elevation: 4,
                    }}
                >
                    <View className="flex-col items-center self-stretch">
                        {/* Balance Section */}
                        <View 
                            className="flex-col items-start self-stretch border-b border-[#e9e9e9] pb-3"
                        >
                            <View className="flex-row justify-between items-center self-stretch">
                                {/* Left: Balance Info */}
                                <View className="flex-col items-start space-y-2" 
                                // style={{ gap: cardGap * 0.8 }}
                                >
                                    <Text className="text-xl font-semibold text-left text-[#242424]">
                                        My Balance
                                    </Text>
                                    
                                    {/* Balance Button */}
                                    <TouchableOpacity 
                                        activeOpacity={0.8}
                                        className="flex-col px-4 py-1 items-center self-stretch rounded-2xl bg-[#00a551]"
                                    >
                                        <View className="flex-row items-center self-stretch justify-center space-x-2">
                                            {/* Currency Icon */}
                                            <View 
                                                className="items-center justify-center rounded-full bg-white w-6 h-6 p-[4.5px]"
                                            >
                                                <Text className="text-base leading-[20px] font-bold text-center text-[#00a551]">
                                                    ৳
                                                </Text>
                                            </View>
                                            
                                            <Text className="text-base font-bold text-left text-white">
                                                Tap for balance
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                
                                {/* Right: Wallet Icon */}
                                <View 
                                    className="items-center justify-center rounded-full w-12 h-12"
                                >
                                    <Svg width={52} height={52} viewBox="0 0 48 48">
                                        <Defs>
                                            <LinearGradient 
                                                id="walletGradient" 
                                                x1="0%" 
                                                y1="0%" 
                                                x2="100%" 
                                                y2="100%"
                                            >
                                                <Stop offset="57.95%" stopColor="#07b556" />
                                                <Stop offset="124.21%" stopColor="#36d97f" />
                                            </LinearGradient>
                                        </Defs>
                                        <Circle cx={24} cy={24} r={24} fill="url(#walletGradient)" />
                                    </Svg>
                                    <View className='absolute top-[14px] right-[12px]'>
                                        <WalletIcon size={22} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        
                        {/* Quick Actions */}
                        <View 
                            className="flex-row items-center self-stretch justify-between pt-5"
                        >
                            {[
                                { label: 'Shopping', imageSource: shoppingImage },
                                { label: 'Products', imageSource: productsImage },
                                { label: 'Outlet', imageSource: outletImage },
                                { label: 'Properties', imageSource: propertiesImage },
                            ].map((item, index) => (
                                <QuickActionButton 
                                    key={index}
                                    imageSource={item.imageSource}
                                    label={item.label}
                                    onPress={() => {}}
                                />
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

