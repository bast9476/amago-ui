import { useMemo } from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { MainHeaderProps } from '@modules/common/components/MainHeader';
import { ShareIcon } from '@modules/common/components/icons';

// Heart Icon Component for Product Detail Header
const ProductDetailHeartIcon = ({ filled = false, size = 24 }: { filled?: boolean; size?: number }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M1.99869 9.49371C1.99871 8.38165 2.33606 7.29575 2.96618 6.37943C3.59631 5.46312 4.48956 4.7595 5.52796 4.3615C6.56637 3.96351 7.70108 3.88986 8.78222 4.15029C9.86336 4.41071 10.8401 4.99297 11.5834 5.82014C11.6357 5.87612 11.699 5.92074 11.7693 5.95125C11.8396 5.98176 11.9154 5.99751 11.9921 5.99751C12.0687 5.99751 12.1446 5.98176 12.2149 5.95125C12.2852 5.92074 12.3485 5.87612 12.4008 5.82014C13.1418 4.98759 14.1187 4.40045 15.2016 4.13685C16.2845 3.87326 17.422 3.94572 18.4627 4.3446C19.5034 4.74347 20.3979 5.44984 21.0272 6.36968C21.6565 7.28952 21.9908 8.37921 21.9855 9.49371C21.9855 11.7822 20.4865 13.4911 18.9875 14.9901L13.4991 20.2996C13.3129 20.5134 13.0833 20.6852 12.8256 20.8035C12.5679 20.9219 12.2879 20.984 12.0044 20.9858C11.7208 20.9876 11.4401 20.929 11.1809 20.814C10.9217 20.6989 10.69 20.5301 10.5011 20.3186L4.99671 14.9901C3.4977 13.4911 1.99869 11.7922 1.99869 9.49371Z"
      stroke="#242424"
      strokeWidth={1.99868}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={filled ? '#F30000' : 'none'}
    />
  </Svg>
);

interface UseProductDetailHeaderConfigProps {
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
  onShare?: () => void;
}

export function useProductDetailHeaderConfig({
  isFavorite = false,
  onToggleFavorite,
  onShare,
}: UseProductDetailHeaderConfigProps = {}): MainHeaderProps {
  return useMemo(
    () => ({
      title: '', // Empty title as per design
      variant: 'white',
      showBorder: false,
      backButtonSize: 46,
      backButtonStyle: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 4,
      },
      backIconSize: 28,
      rightIcons: [
        {
          type: 'custom',
          icon: (
            <View
              className="w-[46px] h-[46px] rounded-full bg-white items-center justify-center"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <ShareIcon size={28} color="#242424" />
            </View>
          ),
          onPress: onShare,
          accessibilityLabel: 'Share product',
        },
        {
          type: 'custom',
          icon: (
            <View
              className="w-[46px] h-[46px] rounded-full bg-white items-center justify-center ml-2"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
                elevation: 4,
              }}
            >
              <ProductDetailHeartIcon filled={isFavorite} size={28} />
            </View>
          ),
          onPress: onToggleFavorite,
          accessibilityLabel: 'Toggle favorite',
        },
      ],
    }),
    [isFavorite, onToggleFavorite, onShare]
  );
}

