import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useBookingConfirmation } from '../hooks/useBookingConfirmation';

const DownloadIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path d="M7.99475 9.99277V1.99805" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      d="M13.9907 9.99414V12.659C13.9907 13.0124 13.8504 13.3513 13.6005 13.6012C13.3506 13.8511 13.0117 13.9915 12.6583 13.9915H3.33111C2.97772 13.9915 2.63881 13.8511 2.38892 13.6012C2.13904 13.3513 1.99866 13.0124 1.99866 12.659V9.99414"
      stroke="#242424"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path d="M4.66357 6.66211L7.99471 9.99324L11.3258 6.66211" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const ShareIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path d="M11.9921 5.32939C13.0959 5.32939 13.9908 4.43455 13.9908 3.33071C13.9908 2.22687 13.0959 1.33203 11.9921 1.33203C10.8882 1.33203 9.99341 2.22687 9.99341 3.33071C9.99341 4.43455 10.8882 5.32939 11.9921 5.32939Z" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M3.99734 9.99345C5.10118 9.99345 5.99602 9.09861 5.99602 7.99477C5.99602 6.89093 5.10118 5.99609 3.99734 5.99609C2.8935 5.99609 1.99866 6.89093 1.99866 7.99477C1.99866 9.09861 2.8935 9.99345 3.99734 9.99345Z" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M11.9921 14.6575C13.0959 14.6575 13.9908 13.7627 13.9908 12.6588C13.9908 11.555 13.0959 10.6602 11.9921 10.6602C10.8882 10.6602 9.99341 11.555 9.99341 12.6588C9.99341 13.7627 10.8882 14.6575 11.9921 14.6575Z" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M5.7229 9L10.2732 11.6516" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M10.2666 4.33789L5.7229 6.98947" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const RepeatIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path d="M11.3258 1.33203L13.9907 3.99694L11.3258 6.66184" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M1.99866 7.32918V6.66295C1.99866 5.95618 2.27942 5.27835 2.77919 4.77858C3.27896 4.27881 3.95679 3.99805 4.66356 3.99805H13.9907" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M4.66356 14.6579L1.99866 11.993L4.66356 9.32812" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M13.9907 8.66016V9.32638C13.9907 10.0332 13.71 10.711 13.2102 11.2108C12.7104 11.7105 12.0326 11.9913 11.3258 11.9913H1.99866" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const FavoriteIcon = () => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M7.67831 1.5285C7.7075 1.46951 7.7526 1.41986 7.80852 1.38514C7.86444 1.35043 7.92895 1.33203 7.99476 1.33203C8.06058 1.33203 8.12509 1.35043 8.18101 1.38514C8.23692 1.41986 8.28202 1.46951 8.31122 1.5285L9.8502 4.64577C9.95159 4.85095 10.1012 5.02846 10.2863 5.16307C10.4714 5.29767 10.6864 5.38536 10.9128 5.41859L14.3546 5.92226C14.4198 5.93171 14.481 5.95922 14.5314 6.00168C14.5818 6.04413 14.6193 6.09984 14.6397 6.16251C14.6601 6.22517 14.6625 6.29229 14.6468 6.35627C14.631 6.42024 14.5976 6.47853 14.5504 6.52453L12.0614 8.94826C11.8973 9.10822 11.7744 9.30568 11.7035 9.52364C11.6326 9.74159 11.6157 9.97351 11.6543 10.1994L12.242 13.6238C12.2535 13.689 12.2464 13.7561 12.2216 13.8175C12.1968 13.8789 12.1553 13.932 12.1017 13.9709C12.0482 14.0098 11.9848 14.0329 11.9187 14.0375C11.8527 14.0421 11.7867 14.028 11.7283 13.9969L8.65166 12.3793C8.44894 12.2729 8.2234 12.2173 7.99443 12.2173C7.76546 12.2173 7.53992 12.2729 7.3372 12.3793L4.26123 13.9969C4.20282 14.0278 4.13691 14.0418 4.07099 14.0371C4.00507 14.0324 3.94179 14.0093 3.88834 13.9704C3.83489 13.9316 3.79343 13.8785 3.76866 13.8172C3.74389 13.7559 3.73681 13.6889 3.74824 13.6238L4.33518 10.2001C4.37395 9.97407 4.35716 9.742 4.28624 9.52391C4.21532 9.30582 4.09241 9.10826 3.92812 8.94826L1.43909 6.5252C1.39152 6.47925 1.35781 6.42086 1.3418 6.35669C1.32579 6.29252 1.32813 6.22514 1.34854 6.16223C1.36895 6.09932 1.40663 6.04341 1.45727 6.00086C1.50791 5.95832 1.56948 5.93085 1.63496 5.9216L5.07602 5.41859C5.30271 5.38562 5.51799 5.29805 5.70333 5.16342C5.88867 5.0288 6.03852 4.85115 6.13999 4.64577L7.67831 1.5285Z"
      stroke="#242424"
      strokeWidth={1.33245}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export type ActionKey = 'download' | 'share' | 'repeat' | 'favorite';

const iconMap: Record<ActionKey, React.ReactNode> = {
  download: <DownloadIcon />,
  share: <ShareIcon />,
  repeat: <RepeatIcon />,
  favorite: <FavoriteIcon />,
};

export interface ActionItem {
  key: ActionKey;
  label: string;
  onPress: () => void;
}

export default function ActionGrid() {
  const { handleDownloadPdf, handleShare, handleRepeat, handleFavorite } = useBookingConfirmation();

  const actions: ActionItem[] = useMemo(
    () => [
      { key: 'download' as ActionKey, label: 'Download PDF', onPress: handleDownloadPdf },
      { key: 'share' as ActionKey, label: 'Share', onPress: handleShare },
      { key: 'repeat' as ActionKey, label: 'Repeat', onPress: handleRepeat },
      { key: 'favorite' as ActionKey, label: 'Favorite', onPress: handleFavorite },
    ],
    [handleDownloadPdf, handleShare, handleRepeat, handleFavorite]
  );
  return (
    <View className="w-full flex-row flex-wrap gap-4 mt-8">
      {actions.map((action) => (
        <TouchableOpacity
          key={action.key}
          onPress={action.onPress}
          className="flex-1 min-w-[140px] h-[59px] rounded-[14px] bg-white border border-black/10 items-center justify-center"
          activeOpacity={0.8}
        >
          <View className="items-center gap-1">
            {iconMap[action.key]}
            <Text className="text-xs font-medium text-[#242424]">{action.label}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
