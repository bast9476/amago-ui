import React from 'react';
import { Modal as RNModal, View, Text, Pressable, TouchableOpacity } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Path } from 'react-native-svg';
import { cardShadow } from './cardShadow';

type Props = {
  visible: boolean;
  onClose: () => void;
  onViewProgress: () => void;
  onMaybeLater?: () => void;
  title?: string;
  subtitle?: string;
};

const LockIcon = () => (
  <Svg width={31} height={31} viewBox="0 0 31 31" fill="none">
    <Path
      d="M24.1891 14.0039H6.36556C4.95932 14.0039 3.81934 15.1439 3.81934 16.5501V25.4619C3.81934 26.8681 4.95932 28.0081 6.36556 28.0081H24.1891C25.5954 28.0081 26.7353 26.8681 26.7353 25.4619V16.5501C26.7353 15.1439 25.5954 14.0039 24.1891 14.0039Z"
      stroke="white"
      strokeWidth={2.54622}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.91174 14.0049V8.91243C8.91174 7.22418 9.5824 5.60508 10.7762 4.4113C11.9699 3.21753 13.589 2.54688 15.2773 2.54688C16.9655 2.54688 18.5847 3.21753 19.7784 4.4113C20.9722 5.60508 21.6429 7.22418 21.6429 8.91243V14.0049"
      stroke="white"
      strokeWidth={2.54622}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const CloseIcon = () => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
    <Path
      d="M13.471 4.49023L4.49023 13.471"
      stroke="#999999"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.49023 4.49023L13.471 13.471"
      stroke="#999999"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default function Modal({
  visible,
  onClose,
  onViewProgress,
  onMaybeLater,
  title = 'Unlock Flights at Platinum',
  subtitle = 'To use flights, complete the steps below.',
}: Props) {
  const handleMaybeLater = () => {
    if (onMaybeLater) onMaybeLater();
    else onClose();
  };

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <Pressable
        onPress={onClose}
        className="flex-1 items-center justify-center px-6"
        style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <Pressable onPress={(e) => e.stopPropagation()}>
          <View
            className="w-full rounded-[14px] bg-white border border-black/10 px-6 pt-8 pb-6"
            style={[cardShadow, { width: 375, maxWidth: 375, alignSelf: 'center' }]}
          >
            <TouchableOpacity
              onPress={onClose}
              hitSlop={10}
              className="absolute right-3 top-3 w-8 h-8 items-center justify-center"
            >
              <CloseIcon />
            </TouchableOpacity>

            <View className="items-center">
              <View className="w-[62px] h-[62px] rounded-full items-center justify-center mb-5 overflow-hidden">
                <Svg width="100%" height="100%" viewBox="0 0 62 62">
                  <Defs>
                    <LinearGradient id="lockCircle" x1="0%" y1="100%" x2="100%" y2="0%">
                      <Stop offset="0%" stopColor="#99a1af" />
                      <Stop offset="100%" stopColor="#6a7282" />
                    </LinearGradient>
                  </Defs>
                  <Rect width="100%" height="100%" rx={31} fill="url(#lockCircle)" />
                </Svg>
                <View className="absolute inset-0 items-center justify-center">
                  <LockIcon />
                </View>
              </View>

              <Text className="text-xl font-semibold text-[#242424] text-center">{title}</Text>
              <Text className="text-xs text-center text-[#738398] mt-2">{subtitle}</Text>
            </View>

            <View className="mt-6 space-y-3">
              <TouchableOpacity
                onPress={onViewProgress}
                activeOpacity={0.9}
                className="h-[44px] rounded-[7px] overflow-hidden"
              >
                <Svg width="100%" height="100%" viewBox="0 0 300 44" preserveAspectRatio="none" className="absolute inset-0">
                  <Defs>
                    <LinearGradient id="cta" x1="0%" y1="100%" x2="100%" y2="0%">
                      <Stop offset="57.95%" stopColor="#07B556" />
                      <Stop offset="124.21%" stopColor="#36D97F" />
                    </LinearGradient>
                  </Defs>
                  <Rect width="100%" height="100%" rx={7} fill="url(#cta)" />
                </Svg>
                <View className="flex-1 items-center justify-center">
                  <Text className="text-sm font-semibold text-white">View Level Progress</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={handleMaybeLater}
                activeOpacity={0.85}
                className="h-[44px] rounded-[7px] border border-black/10 bg-white items-center justify-center"
              >
                <Text className="text-sm font-medium text-[#242424]">Maybe Later</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </RNModal>
  );
}