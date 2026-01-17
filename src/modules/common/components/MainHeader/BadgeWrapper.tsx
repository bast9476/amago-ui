import React from 'react';
import { View, Text } from 'react-native';
import { ICON_SIZES } from '../icons/iconSizes';

interface BadgeWrapperProps {
  icon: React.ReactNode;
  badge?: number;
  variant?: 'default' | 'ecommerce';
  badgeColor?: string;
}

export function BadgeWrapper({ icon, badge, variant = 'default', badgeColor }: BadgeWrapperProps) {
  if (!badge || badge <= 0) {
    return <>{icon}</>;
  }

  // Determine badge styling based on variant
  const isEcommerce = variant === 'ecommerce';
  const badgeSize = isEcommerce ? ICON_SIZES.BADGE_SIZE : ICON_SIZES.BADGE_SIZE_DEFAULT;
  const badgeTextSize = isEcommerce ? ICON_SIZES.BADGE_TEXT_SIZE : ICON_SIZES.BADGE_TEXT_SIZE_DEFAULT;
  const defaultBadgeColor = isEcommerce ? '#00a551' : '#ef4444'; // Green for ecommerce, red for default
  const finalBadgeColor = badgeColor || defaultBadgeColor;

  return (
    <View className="relative">
      {icon}
      <View
        className="absolute -top-1 -right-1 rounded-full items-center justify-center"
        style={{
          width: badgeSize,
          height: badgeSize,
          backgroundColor: finalBadgeColor,
        }}
      >
        <Text
          className="text-white font-semibold"
          style={{
            fontSize: badgeTextSize,
          }}
        >
          {badge}
        </Text>
      </View>
    </View>
  );
}

