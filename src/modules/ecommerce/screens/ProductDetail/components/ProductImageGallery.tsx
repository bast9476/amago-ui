import React, { useRef } from 'react';
import { View, Image, ImageSourcePropType, TouchableOpacity, Animated } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect, Circle } from 'react-native-svg';

export interface ProductImageGalleryProps {
  productImages: ImageSourcePropType[];
  selectedImageIndex: number;
  onImageChange: (index: number) => void;
}

export function ProductImageGallery({
  productImages,
  selectedImageIndex,
  onImageChange,
}: ProductImageGalleryProps) {
  // Animation for image fade transition
  const imageFadeAnim = useRef(new Animated.Value(1)).current;

  // Animation for pagination indicators
  const paginationAnims = useRef(
    [0, 1, 2, 3].map((index) => ({
      opacity: new Animated.Value(index === selectedImageIndex ? 1 : 0.7),
    }))
  ).current;

  // Animation for thumbnail borders
  const thumbnailBorderAnims = useRef(
    [0, 1, 2, 3].map((index) => ({
      borderColor: new Animated.Value(index === selectedImageIndex ? 1 : 0),
    }))
  ).current;

  // Handle image change with animations
  const handleImageChange = (newIndex: number) => {
    if (newIndex === selectedImageIndex) return;

    // Fade out current image
    Animated.sequence([
      Animated.timing(imageFadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(imageFadeAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();

    // Animate pagination indicators
    paginationAnims.forEach((anim, index) => {
      const isActive = index === newIndex;
      Animated.timing(anim.opacity, {
        toValue: isActive ? 1 : 0.7,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    // Animate thumbnail borders
    thumbnailBorderAnims.forEach((anim, index) => {
      Animated.timing(anim.borderColor, {
        toValue: index === newIndex ? 1 : 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });

    onImageChange(newIndex);
  };

  return (
    <View className="px-4 pt-1">
      {/* Product Image Container */}
      <View
        className="w-full rounded-2xl overflow-hidden bg-[#F9FAFB]"
        style={{
          aspectRatio: 367 / 344, // Maintain original aspect ratio
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 4,
        }}
      >
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            opacity: imageFadeAnim,
          }}
        >
          <Image
            source={productImages[selectedImageIndex]}
            className="w-full h-full"
            resizeMode="cover"
          />
        </Animated.View>
      </View>

      {/* Pagination Indicator */}
      <View className="flex-row items-center justify-center mt-4 mb-4">
        {[0, 1, 2, 3].map((index) => {
          const isActive = index === selectedImageIndex;
          const gradientId = `pagination-gradient-${index}`;
          const anim = paginationAnims[index];

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageChange(index)}
              className="mx-1"
              activeOpacity={0.7}
            >
              <Animated.View
                style={{
                  opacity: anim.opacity,
                }}
              >
                {isActive ? (
                  // Active indicator - wider with gradient
                  <Svg width={28} height={10} viewBox="0 0 28 10" fill="none">
                    <Defs>
                      <LinearGradient
                        id={gradientId}
                        x1="0"
                        y1="0"
                        x2="24"
                        y2="0"
                        gradientUnits="userSpaceOnUse"
                      >
                        <Stop offset="0" stopColor="#07B556" />
                        <Stop offset="1" stopColor="#36D97F" />
                      </LinearGradient>
                    </Defs>
                    <Rect width={28} height={10} rx={5} fill={`url(#${gradientId})`} />
                  </Svg>
                ) : (
                  // Inactive indicator - circular dot
                  <Svg width={10} height={10} viewBox="0 0 10 10" fill="none">
                    <Circle cx={5} cy={5} r={5} fill="#D1D5DC" />
                  </Svg>
                )}
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Thumbnail Gallery */}
      <View className="flex-row items-center justify-start gap-3">
        {[0, 1, 2, 3].map((index) => {
          const anim = thumbnailBorderAnims[index];
          const borderColor = anim.borderColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['#f3f4f7', '#00bc7d'],
          });

          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleImageChange(index)}
              className="rounded-[10px] overflow-hidden"
              activeOpacity={0.7}
            >
              <Animated.View
                style={{
                  width: 76,
                  height: 76,
                  borderWidth: 1.22,
                  borderColor: borderColor,
                  padding: 1.22,
                  borderRadius: 10,
                }}
              >
                <View className="flex-1 rounded-[8px] overflow-hidden">
                  <Image
                    source={productImages[index]}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

