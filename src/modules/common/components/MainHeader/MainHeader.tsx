import React from 'react';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Svg, { Defs, Rect, LinearGradient, Stop } from 'react-native-svg';
import { HelpIcon, InfoIcon, BackIcon, BellIcon, CartIcon, FilterIcon, ICON_SIZES } from '../icons';
import MainHeaderSearch from './MainHeaderSearch';
import { BadgeWrapper } from './BadgeWrapper';
import type { HeaderVariant, MainHeaderProps } from './types';

const HEIGHT_MAP: Record<HeaderVariant, { withSearch: number; withoutSearch: number }> = {
  gradient: { withSearch: 205, withoutSearch: 130 },
  white: { withSearch: 205, withoutSearch: 130 },
};

export default function MainHeader({
  title,
  rightIcon,
  rightIcons,
  searchConfig,
  variant = 'gradient',
  showBorder = true,
  onBackPress,
  backButtonSize,
  backButtonStyle,
  backIconSize,
}: MainHeaderProps) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const topPad = (insets?.top ?? 0) + (searchConfig ? 5 : 15);
  const hasSearch = Boolean(searchConfig);
  const searchTop = topPad + 66;
  const iconsToRender = rightIcons ?? (rightIcon ? [rightIcon] : []);
  const iconColor = variant === 'white' ? '#242424' : 'white';
  const textColor = variant === 'white' ? '#242424' : 'white';
  const containerHeight = HEIGHT_MAP[variant][hasSearch ? 'withSearch' : 'withoutSearch'];

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else {
      navigation.goBack();
    }
  };

  const renderBackground = () => {
    if (variant === 'white') {
      return <View className="absolute inset-0 bg-white" />;
    }

    return (
      <Svg className="absolute inset-0 w-full h-full" viewBox="0 0 374 173" preserveAspectRatio="none">
        <Defs>
          <LinearGradient id="dg" x1="0" y1="173" x2="374" y2="0" gradientUnits="userSpaceOnUse">
            <Stop offset={0.58} stopColor="#07B556" />
            <Stop offset={1} stopColor="#36D97F" />
          </LinearGradient>
        </Defs>
        <Rect x={0} y={0} width={374} height={173} fill="url(#dg)" />
      </Svg>
    );
  };

  const renderRightIcons = () => {
    if (!iconsToRender.length) return null;

    return (
      <View className="flex-row justify-center items-center">
        {iconsToRender.map((icon, index) => {
          if (!icon || icon.type === 'none') return null;

          if (icon.type === 'custom' && icon.icon) {
            return (
              <TouchableOpacity
                key={icon.accessibilityLabel ?? `custom-${index}`}
                onPress={icon.onPress}
                activeOpacity={0.7}
                className="items-center justify-center"
              >
                {icon.badge && icon.badge > 0 ? (
                  <BadgeWrapper icon={icon.icon} badge={icon.badge} variant="default" />
                ) : (
                  icon.icon
                )}
              </TouchableOpacity>
            );
          }

          // Cart icon uses different sizing: 29.66px icon in 30.15px × 35px container
          const iconSize = icon.type === 'cart' ? 34 : ICON_SIZES.HEADER_RIGHT_ICON;
          const containerWidth = icon.type === 'cart' ? 30.15 : ICON_SIZES.HEADER_RIGHT_ICON_CONTAINER;
          const containerHeight = icon.type === 'cart' ? 35 : ICON_SIZES.HEADER_RIGHT_ICON_CONTAINER;

          return (
            <TouchableOpacity
              key={icon.accessibilityLabel ?? `${icon.type}-${index}`}
              onPress={icon.onPress}
              className="items-center justify-center"
              style={{ width: containerWidth, height: containerHeight }}
            >
              {icon.type === 'help' ? (
                <BadgeWrapper
                  icon={<HelpIcon size={iconSize} color={iconColor} />}
                  badge={icon.badge}
                  variant="default"
                />
              ) : icon.type === 'info' ? (
                <BadgeWrapper
                  icon={<InfoIcon size={iconSize} color={iconColor} />}
                  badge={icon.badge}
                  variant="default"
                />
              ) : icon.type === 'bell' ? (
                <BadgeWrapper
                  icon={<BellIcon size={iconSize} color={iconColor} />}
                  badge={icon.badge}
                  variant="default"
                />
              ) : icon.type === 'cart' ? (
                <BadgeWrapper
                  icon={<CartIcon size={iconSize} color="#242424" />}
                  badge={icon.badge}
                  variant="ecommerce"
                />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <View
      className={`w-full relative overflow-hidden ${showBorder ? 'border-b' : ''} ${variant === 'white' ? 'border-[#e4e6eb]' : 'border-[#f3f4f7]'
        }`}
      style={{ height: containerHeight }}
    >
      {renderBackground()}

      <View className="absolute left-0 right-0 top-0 px-4 flex-row items-center justify-between" style={{ paddingTop: topPad }}>
        <TouchableOpacity
          onPress={handleBack}
          className="rounded-full items-center justify-center bg-white"
          activeOpacity={0.7}
          style={{
            width: backButtonSize ?? 33,
            height: backButtonSize ?? 33,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 4,
            ...(backButtonStyle as ViewStyle),
          }}
        >
          <BackIcon size={backIconSize ?? ICON_SIZES.HEADER_BACK_ICON} color="#242424" />
        </TouchableOpacity>

        <View className="items-center">
          <Text className="text-[21px] font-[500]" style={{ color: textColor }}>
            {title}
          </Text>
        </View>

        {renderRightIcons()}
      </View>

      {hasSearch && searchConfig && (
        <View className="absolute left-0 right-0 px-4" style={{ top: searchTop }}>
          <View className="flex-row items-center gap-3">
            <View className="flex-1 flex-row items-center gap-3">
              <MainHeaderSearch config={searchConfig} />
            </View>
            {searchConfig.filterButton && (
              <TouchableOpacity
                onPress={searchConfig.filterButton.onPress}
                className="h-[54px] bg-[#FAFAFA] border border-[#E0E0E0] rounded-[8px]"
                activeOpacity={0.8}
                style={{
                  width: Math.round((39.65 / 46) * 58),
                  overflow: 'hidden',
                }}
              >
                <View
                  className='absolute top-[6px] left-0 right-0 bottom-0 items-center justify-center'
                >
                  <FilterIcon height={65} color="#242424" />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}

