import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect, G, ClipPath } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectCartTotal } from '@modules/ecommerce/store';

export interface CheckoutModalProps {
  visible: boolean;
  onClose: () => void;
  onGoToPayment?: () => void;
}

// Close Icon (X)
const CloseIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 15 15" fill="none">
    <Path
      d="M13.2104 0.0458984C13.3574 0.0459099 13.5178 0.0674185 13.6567 0.123047C13.7258 0.150726 13.7915 0.186581 13.854 0.227539L14.0327 0.363281L14.0347 0.365234H14.0337C14.1384 0.465876 14.2193 0.598062 14.2759 0.728516H14.2749C14.3444 0.863315 14.3677 1.00763 14.3677 1.15918C14.3677 1.30376 14.3329 1.4475 14.2759 1.5791C14.2179 1.71289 14.1254 1.83457 14.0122 1.94336L8.59814 7.14648L9.59814 8.09766H9.59912L14.0122 12.3506L14.0132 12.3516C14.2186 12.5602 14.3336 12.8354 14.3228 13.123C14.3228 13.411 14.2073 13.6766 13.9897 13.8857C13.7836 14.0839 13.4977 14.205 13.1997 14.2051C12.9036 14.2051 12.6163 14.1071 12.3979 13.9082V13.9072L6.16846 7.91992C6.06457 7.82007 5.98437 7.69817 5.92725 7.56641C5.87017 7.43474 5.83545 7.29115 5.83545 7.14648C5.83547 7.00174 5.86976 6.85802 5.92627 6.7168L5.92725 6.71582C5.98435 6.5842 6.06468 6.46304 6.16846 6.36328L12.3979 0.375977C12.5003 0.277564 12.6258 0.189233 12.7642 0.133789L12.7651 0.132812C12.9118 0.0785957 13.0607 0.0458984 13.2104 0.0458984Z"
      fill="#242424"
      stroke="#242424"
      strokeWidth="0.0905797"
    />
    <Path
      d="M1.20203 14.2056C1.05511 14.2056 0.894642 14.184 0.755737 14.1284C0.686706 14.1007 0.62099 14.0649 0.558472 14.0239L0.379761 13.8882L0.377808 13.8862L0.378784 13.8862C0.274075 13.7856 0.193149 13.6534 0.136597 13.5229L0.137573 13.5229C0.0680956 13.3881 0.0448057 13.2438 0.0447999 13.0923C0.0447999 12.9477 0.0795851 12.804 0.136597 12.6724C0.194596 12.5386 0.287083 12.4169 0.400269 12.3081L5.81433 7.10498L4.81433 6.15381L4.81336 6.15381L0.40027 1.90088L0.399293 1.8999C0.193845 1.69131 0.0788389 1.41608 0.0897228 1.12842C0.0897228 0.840484 0.205154 0.574846 0.422731 0.365722C0.628923 0.167581 0.914739 0.046489 1.21277 0.0463861C1.50887 0.0463861 1.79614 0.144406 2.01453 0.343261L2.01453 0.344238L8.24402 6.33154C8.3479 6.43139 8.42811 6.55329 8.48523 6.68506C8.5423 6.81672 8.57703 6.96031 8.57703 7.10498C8.57701 7.24973 8.54272 7.39344 8.48621 7.53467L8.48523 7.53564C8.42812 7.66727 8.3478 7.78843 8.24402 7.88818L2.01453 13.8755C1.91214 13.9739 1.78666 14.0622 1.64832 14.1177L1.64734 14.1187C1.50068 14.1729 1.35181 14.2056 1.20203 14.2056Z"
      fill="#242424"
      stroke="#242424"
      strokeWidth="0.0905797"
    />
  </Svg>
);

// Arrow Right Icon
const ArrowRightIcon = () => (
  <Svg width={8} height={13} viewBox="0 0 8 13" fill="none">
    <G clipPath="url(#clip0_1250_6296)">
      <Path
        d="M0.307523 1.60183C0.128962 1.42067 0.0297609 1.1823 0.039681 0.934402C0.0396811 0.6865 0.138882 0.457665 0.327363 0.276506C0.505925 0.104881 0.753926 6.59103e-08 1.01185 8.84586e-08C1.26977 1.11007e-07 1.51777 0.0858127 1.70625 0.257438L7.32102 5.65408C7.4103 5.73989 7.47974 5.84478 7.52934 5.95919C7.57894 6.07361 7.6087 6.19756 7.6087 6.32151C7.6087 6.44546 7.57894 6.56941 7.52934 6.69336C7.47974 6.80778 7.4103 6.91266 7.32102 6.99847L1.70625 12.3951C1.61697 12.4809 1.50785 12.5572 1.38881 12.6049C1.25985 12.6526 1.13089 12.6812 1.00193 12.6812C0.872967 12.6812 0.734085 12.6621 0.615044 12.6144C0.496004 12.5667 0.386883 12.4905 0.287682 12.4047C0.198401 12.3188 0.128961 12.2044 0.0793605 12.09C0.0198398 11.9756 7.25189e-08 11.8516 8.41886e-08 11.7182C9.50248e-08 11.5942 0.02976 11.4703 0.0793606 11.3558C0.128961 11.2414 0.208322 11.1365 0.307522 11.0412L5.21796 6.32151L4.28547 5.43478L0.307523 1.60183Z"
        fill="#242424"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1250_6296">
        <Rect
          width="7.6087"
          height="12.6812"
          fill="white"
          transform="translate(7.6087 12.6812) rotate(-180)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

// Divider Component
const Divider = () => (
  <View className="w-full h-[1px] overflow-hidden">
    <Svg width="100%" height={1} viewBox="0 0 330 1" fill="none" preserveAspectRatio="none">
      <Path
        d="M0 0.453125H329.698"
        stroke="#E2E2E2"
        strokeOpacity="0.7"
        strokeWidth="0.905797"
      />
    </Svg>
  </View>
);

// Drag Handle
const DragHandle = () => (
  <View className="w-full items-center pt-3 pb-4">
    <Svg width={78} height={8} viewBox="0 0 68 4" fill="none">
      <Path
        d="M2 2H66"
        stroke="#242424"
        strokeWidth={4}
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

export function CheckoutModal({
  visible,
  onClose,
  onGoToPayment,
}: CheckoutModalProps) {
  // Get total price from Redux
  const totalPrice = useAppSelector(selectCartTotal);
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.7)"
        barStyle="light-content"
        translucent
      />
      <View className="flex-1 justify-end">
        <Pressable
          style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0, 0, 0, 0.7)' }]}
          onPress={onClose}
        />
        <View className="w-full z-10">
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View
              className="bg-white rounded-t-3xl w-full"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -9 },
                shadowOpacity: 0.1,
                shadowRadius: 20,
                elevation: 20,
              }}
            >
            {/* Drag Handle */}
            <DragHandle />

            {/* Header */}
            <View className="flex-row justify-between items-center px-5 pb-6">
              <Text className="text-[26px] font-semibold text-left text-[#242424]">
                Checkout
              </Text>
              <TouchableOpacity
                onPress={onClose}
                className="w-6 h-6 items-center justify-center"
                activeOpacity={0.7}
              >
                <CloseIcon />
              </TouchableOpacity>
            </View>

            <View className="px-5">
                {/* Top Divider */}
                <Divider />

                {/* Delivery Section */}
                <View className="py-[19px]">
                  <View className="flex-row justify-between items-center w-full">
                    <Text className="text-lg font-medium text-left text-[#979a99]">
                      Delivery
                    </Text>
                    <TouchableOpacity
                      className="flex-row items-center"
                      activeOpacity={0.7}
                    >
                      <Text className="text-base font-medium text-right text-[#242424] mr-3">
                        Select Method
                      </Text>
                      <ArrowRightIcon />
                    </TouchableOpacity>
                  </View>
                </View>

                <Divider />

                {/* Payment Section */}
                <View className="py-[19px]">
                  <View className="flex-row justify-between items-center w-full">
                    <Text className="text-lg font-medium text-left text-[#979a99]">
                      Payment
                    </Text>
                    <TouchableOpacity
                      className="flex-row items-center"
                      activeOpacity={0.7}
                    >
                      <Image
                        source={require('@src/assets/logo.png')}
                        className="w-[13px] h-[15px] mr-3"
                        resizeMode="contain"
                      />
                      <ArrowRightIcon />
                    </TouchableOpacity>
                  </View>
                </View>

                <Divider />

                {/* Promo Code Section */}
                <View className="py-[19px]">
                  <View className="flex-row justify-between items-center w-full">
                    <Text className="text-lg font-medium text-left text-[#979a99]">
                      Promo Code
                    </Text>
                    <TouchableOpacity
                      className="flex-row items-center"
                      activeOpacity={0.7}
                    >
                      <Text className="text-base font-medium text-right text-[#242424] mr-3">
                        Pick discount
                      </Text>
                      <ArrowRightIcon />
                    </TouchableOpacity>
                  </View>
                </View>

                <Divider />

                {/* Total Cost Section */}
                <View className="py-[19px]">
                  <View className="flex-row justify-between items-center w-full">
                    <Text className="text-lg font-medium text-left text-[#979a99]">
                      Total Cost
                    </Text>
                    <TouchableOpacity
                      className="flex-row items-center"
                      activeOpacity={0.7}
                    >
                      <Text className="text-base font-medium text-right text-[#242424] mr-3">
                        ৳{totalPrice}
                      </Text>
                      <ArrowRightIcon />
                    </TouchableOpacity>
                  </View>
                </View>

                <Divider />

                {/* Terms and Conditions */}
                <View className="pt-4 pb-10">
                  <Text className="text-xs text-left">
                    <Text className="text-sm text-left text-[#979a99]">
                      By placing an order you agree to our{' '}
                    </Text>
                    <Text className="text-sm text-left text-[#242424]">Terms</Text>
                    <Text className="text-sm text-left text-[#979a99]"> And </Text>
                    <Text className="text-sm text-left text-[#242424]">Conditions</Text>
                  </Text>
                </View>
              </View>

            {/* Go to Payment Button */}
            <View className="px-4 pb-4 pt-2 mt-4">
              <TouchableOpacity
                onPress={onGoToPayment}
                activeOpacity={0.8}
                className="w-full h-[52px] rounded-lg overflow-hidden relative"
              >
                {/* Gradient Background */}
                <View style={StyleSheet.absoluteFill} pointerEvents="none">
                  <Svg
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      width: '100%',
                      height: '100%',
                    }}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <Defs>
                      <LinearGradient
                        id="paymentGradient"
                        x1="0%"
                        y1="100%"
                        x2="100%"
                        y2="0%"
                        gradientUnits="objectBoundingBox"
                      >
                        <Stop offset="57.95%" stopColor="#07b556" />
                        <Stop offset="124.21%" stopColor="#36d97f" />
                      </LinearGradient>
                    </Defs>
                    <Rect x="0" y="0" width="100" height="100" fill="url(#paymentGradient)" />
                  </Svg>
                </View>

                {/* Button Content */}
                <View className="flex-row items-center justify-center h-full px-2.5 py-3.5 relative" style={{ zIndex: 10 }}>
                  <Text className="text-lg font-medium text-white">
                    Go to Payment
                  </Text>

                  {/* Price Badge */}
                  <View className="absolute right-2.5 top-[17px] flex-col justify-center items-center overflow-hidden px-[5px] py-[1px] rounded bg-[#b0e3c9]">
                    <Text className="text-sm font-medium text-[#003a1c]">
                      ৳{totalPrice}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

