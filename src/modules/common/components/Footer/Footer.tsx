import React from 'react';
import { View, TouchableOpacity, useWindowDimensions } from "react-native";
import Svg, { Path, Rect, Defs, LinearGradient, Stop, ClipPath, G } from 'react-native-svg';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

export default function Footer() {
    const navigate = useCrossModuleNavigation();
    const { width } = useWindowDimensions();

    // SVG viewBox is "0 0 375 34", so we calculate positions based on screen width
    // Home icon: x: 25-41 (16px wide), Stats icon: x: 101-119 (~18px wide), Messages icon: x: 252-285 (33px wide), Profile icon: x: 330-343 (13px wide)
    const homeIconLeft = (25 / 375) * width;
    const homeIconWidth = (16 / 375) * width;
    const statsIconLeft = (101 / 375) * width;
    const statsIconWidth = (18 / 375) * width;
    const messagesIconLeft = (252 / 375) * width;
    const messagesIconWidth = (33 / 375) * width;
    const profileIconLeft = (330 / 375) * width;
    const profileIconWidth = (13 / 375) * width;

    return (
        <View className="w-full relative">
            {/* Handle bar */}
            <Svg
                viewBox="0 0 375 83"
                fill="none"
                className="absolute left-0 right-0 bottom-0 w-full aspect-[4.52] z-[0] "
                preserveAspectRatio="none"
            >
                <Path
                    d="M0 8C0 3.58172 3.58172 0 8 0H93.75H132C140.837 0 148.02 7.33379 151.067 15.6284C155.189 26.8491 164.851 40 187.5 40C210.734 40 220.639 26.8355 224.862 15.611C227.973 7.34034 235.163 0 244 0H279H367C371.418 0 375 3.58172 375 8V83H0V8Z"
                    fill="white"
                />
            </Svg>
            {/* Floating action button */}
            <View
                className="absolute top-[-111] self-center rounded-full border-0 border-white w-14 h-14 bg-[#07B556] rounded-full shadow-[rgba(0,0,0,0.18)_0px_14px_14.38px]"
            >
                <View className="flex-1 items-center justify-center">
                    <View className="w-[17px] h-[20px]">
                        <Svg
                            width={17}
                            height={20}
                            viewBox="0 0 17 20"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <G clipPath="url(#clip0_1_543)">
                                <Path
                                    d="M-3.05176e-05 3.02761C-3.05176e-05 2.02466 0.813688 1.21094 1.81664 1.21094H5.44999C6.45295 1.21094 7.26667 2.02466 7.26667 3.02761V6.66096C7.26667 7.66392 6.45295 8.47764 5.44999 8.47764H1.81664C0.813688 8.47764 -3.05176e-05 7.66392 -3.05176e-05 6.66096V3.02761ZM2.4222 3.63317V6.0554H4.84444V3.63317H2.4222ZM-3.05176e-05 12.7165C-3.05176e-05 11.7136 0.813688 10.8999 1.81664 10.8999H5.44999C6.45295 10.8999 7.26667 11.7136 7.26667 12.7165V16.3499C7.26667 17.3529 6.45295 18.1666 5.44999 18.1666H1.81664C0.813688 18.1666 -3.05176e-05 17.3529 -3.05176e-05 16.3499V12.7165ZM2.4222 13.3221V15.7443H4.84444V13.3221H2.4222ZM11.5056 1.21094H15.1389C16.1419 1.21094 16.9556 2.02466 16.9556 3.02761V6.66096C16.9556 7.66392 16.1419 8.47764 15.1389 8.47764H11.5056C10.5026 8.47764 9.6889 7.66392 9.6889 6.66096V3.02761C9.6889 2.02466 10.5026 1.21094 11.5056 1.21094ZM14.5334 3.63317H12.1111V6.0554H14.5334V3.63317ZM9.6889 11.5054C9.6889 11.1724 9.9614 10.8999 10.2945 10.8999H12.7167C13.0498 10.8999 13.3223 11.1724 13.3223 11.5054C13.3223 11.8385 13.5948 12.111 13.9278 12.111H15.1389C15.472 12.111 15.7445 11.8385 15.7445 11.5054C15.7445 11.1724 16.017 10.8999 16.35 10.8999C16.6831 10.8999 16.9556 11.1724 16.9556 11.5054V15.1388C16.9556 15.4718 16.6831 15.7443 16.35 15.7443H13.9278C13.5948 15.7443 13.3223 15.4718 13.3223 15.1388C13.3223 14.8057 13.0498 14.5332 12.7167 14.5332C12.3836 14.5332 12.1111 14.8057 12.1111 15.1388V17.561C12.1111 17.8941 11.8386 18.1666 11.5056 18.1666H10.2945C9.9614 18.1666 9.6889 17.8941 9.6889 17.561V11.5054ZM13.9278 18.1666C13.7672 18.1666 13.6132 18.1028 13.4996 17.9892C13.3861 17.8756 13.3223 17.7216 13.3223 17.561C13.3223 17.4004 13.3861 17.2464 13.4996 17.1328C13.6132 17.0193 13.7672 16.9555 13.9278 16.9555C14.0884 16.9555 14.2424 17.0193 14.356 17.1328C14.4696 17.2464 14.5334 17.4004 14.5334 17.561C14.5334 17.7216 14.4696 17.8756 14.356 17.9892C14.2424 18.1028 14.0884 18.1666 13.9278 18.1666ZM16.35 18.1666C16.1894 18.1666 16.0354 18.1028 15.9218 17.9892C15.8083 17.8756 15.7445 17.7216 15.7445 17.561C15.7445 17.4004 15.8083 17.2464 15.9218 17.1328C16.0354 17.0193 16.1894 16.9555 16.35 16.9555C16.5106 16.9555 16.6647 17.0193 16.7782 17.1328C16.8918 17.2464 16.9556 17.4004 16.9556 17.561C16.9556 17.7216 16.8918 17.8756 16.7782 17.9892C16.6647 18.1028 16.5106 18.1666 16.35 18.1666Z"
                                    fill="white"
                                />
                            </G>
                            <Defs>
                                <ClipPath id="clip0_1_543">
                                    <Path d="M0 0H16.9556V19.3779H0V0Z" fill="white" />
                                </ClipPath>
                            </Defs>
                        </Svg>
                    </View>
                </View>
            </View>
            {/* Icon row */}
            <Svg
                viewBox="0 0 375 34"
                fill="none"
                className="absolute left-0 right-0 bottom-9 w-full aspect-[375/34]"
                preserveAspectRatio="none"
                pointerEvents="none"
            >
                <Path
                    d="M268.615 23.1717C268.615 23.6134 268.439 24.037 268.127 24.3494C267.814 24.6617 267.391 24.8372 266.949 24.8372H255.98C255.538 24.8373 255.114 25.0129 254.802 25.3252L252.968 27.159C252.886 27.2417 252.78 27.298 252.666 27.3208C252.551 27.3436 252.432 27.3319 252.324 27.2872C252.216 27.2424 252.124 27.1666 252.059 27.0694C251.994 26.9722 251.959 26.8579 251.959 26.741V13.1783C251.959 12.7365 252.134 12.3129 252.447 12.0005C252.759 11.6882 253.183 11.5127 253.624 11.5127H266.949C267.391 11.5127 267.814 11.6882 268.127 12.0005C268.439 12.3129 268.615 12.7365 268.615 13.1783V23.1717Z"
                    stroke="#242424"
                    strokeWidth={1.66557}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Rect
                    x={276}
                    y={4.99878}
                    width={7.99472}
                    height={7.99472}
                    rx={3.99736}
                    fill="url(#paint0_linear_1_545)"
                />
                <Path
                    d="M104.333 20H101.667C101.298 20 101 20.1679 101 20.375V27.125C101 27.3321 101.298 27.5 101.667 27.5H104.333C104.702 27.5 105 27.3321 105 27.125V20.375C105 20.1679 104.702 20 104.333 20Z"
                    stroke="#242424"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M118.333 15.5H115.667C115.298 15.5 115 15.6679 115 15.875V27.125C115 27.3321 115.298 27.5 115.667 27.5H118.333C118.702 27.5 119 27.3321 119 27.125V15.875C119 15.6679 118.702 15.5 118.333 15.5Z"
                    stroke="#242424"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M111.333 6.5H108.667C108.298 6.5 108 6.66789 108 6.875V27.125C108 27.3321 108.298 27.5 108.667 27.5H111.333C111.702 27.5 112 27.3321 112 27.125V6.875C112 6.66789 111.702 6.5 111.333 6.5Z"
                    stroke="#242424"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M27 24H30V19C30 18.7167 30.096 18.4793 30.288 18.288C30.48 18.0967 30.7173 18.0007 31 18H35C35.2833 18 35.521 18.096 35.713 18.288C35.905 18.48 36.0007 18.7173 36 19V24H39V15L33 10.5L27 15V24ZM25 24V15C25 14.6833 25.071 14.3833 25.213 14.1C25.355 13.8167 25.5507 13.5833 25.8 13.4L31.8 8.9C32.15 8.63333 32.55 8.5 33 8.5C33.45 8.5 33.85 8.63333 34.2 8.9L40.2 13.4C40.45 13.5833 40.646 13.8167 40.788 14.1C40.93 14.3833 41.0007 14.6833 41 15V24C41 24.55 40.804 25.021 40.412 25.413C40.02 25.805 39.5493 26.0007 39 26H35C34.7167 26 34.4793 25.904 34.288 25.712C34.0967 25.52 34.0007 25.2827 34 25V20H32V25C32 25.2833 31.904 25.521 31.712 25.713C31.52 25.905 31.2827 26.0007 31 26H27C26.45 26 25.9793 25.8043 25.588 25.413C25.1967 25.0217 25.0007 24.5507 25 24Z"
                    fill="black"
                />
                <Path
                    d="M343.414 26.2515V24.4188C343.414 23.4467 343.028 22.5144 342.341 21.827C341.653 21.1396 340.721 20.7534 339.749 20.7534H334.251C333.279 20.7534 332.347 21.1396 331.659 21.827C330.972 22.5144 330.586 23.4467 330.586 24.4188V26.2515"
                    stroke="#242424"
                    strokeWidth={1.83268}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M337 17.0893C339.024 17.0893 340.665 15.4482 340.665 13.4239C340.665 11.3996 339.024 9.75854 337 9.75854C334.976 9.75854 333.335 11.3996 333.335 13.4239C333.335 15.4482 334.976 17.0893 337 17.0893Z"
                    stroke="#242424"
                    strokeWidth={1.83268}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Defs>
                    <LinearGradient
                        id="paint0_linear_1_545"
                        x1={278.827}
                        y1={7.82534}
                        x2={284.48}
                        y2={2.17222}
                        gradientUnits="userSpaceOnUse"
                    >
                        <Stop stopColor="#07B556" />
                        <Stop offset={1} stopColor="#36D97F" />
                    </LinearGradient>
                </Defs>
            </Svg>

            {/* Touchable Icon Areas - Positioned absolutely to match SVG coordinates */}
            {/* Home Icon - x: 25-41, y: 6.5-26 in viewBox (375x34) */}
            <TouchableOpacity
                onPress={() => navigate('Digital', 'Home')}
                className="absolute bottom-[36px] h-[34px]"
                style={{
                    left: homeIconLeft,
                    width: homeIconWidth,
                }}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            />

            {/* Stats Icon - x: 101-119 in viewBox (375x34) */}
            <TouchableOpacity
                onPress={() => navigate('UserLevel', 'GamifiedUserLevelSystem')}
                className="absolute bottom-[36px] h-[34px]"
                style={{
                    left: statsIconLeft,
                    width: statsIconWidth,
                }}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            />

            {/* Messages Icon - x: 252-285, y: 5-27 in viewBox (375x34) */}
            <TouchableOpacity
                onPress={() => navigate('Digital', 'Messages')}
                className="absolute bottom-[36px] h-[34px]"
                style={{
                    left: messagesIconLeft,
                    width: messagesIconWidth,
                }}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            />

            {/* Profile Icon - x: 330-343, y: 9-26 in viewBox (375x34) */}
            <TouchableOpacity
                onPress={() => navigate('Digital', 'Profile')}
                className="absolute bottom-[36px] h-[34px]"
                style={{
                    left: profileIconLeft,
                    width: profileIconWidth,
                }}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            />
        </View>
    );
}

