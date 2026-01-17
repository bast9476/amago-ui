import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { EcommerceStackParamList } from '@src/navigation/types';
import MainHeader from '@modules/common/components/MainHeader';
import { useProductDetailHeaderConfig } from '../../hooks/useProductDetailHeaderConfig';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  toggleProductFavorite,
  toggleFeaturedProductFavorite,
  setSelectedImageIndex,
  incrementQuantity,
  decrementQuantity,
  bootstrapProductDetail,
  selectProductDetailData,
  selectSelectedImageIndex,
  selectQuantity,
  selectIsCurrentProductFavorite,
  selectProductDetailLoading,
} from '@modules/ecommerce/store';
import Svg, { Path } from 'react-native-svg';
import {
  ProductImageGallery,
  ProductDetailCard,
  ProductDetailsSection,
  KeyFeaturesSection,
  ReviewsSection,
  BottomActionBar,
  PointsDistributionModal,
} from './components';

type RoutePropType = RouteProp<EcommerceStackParamList, 'ProductDetail'>;

export default function ProductDetail() {
  const route = useRoute<RoutePropType>();
  const productId = route.params?.productId ?? 'unknown';
  const dispatch = useAppDispatch();

  // Redux state
  const productData = useAppSelector(selectProductDetailData);
  const isFavorite = useAppSelector(selectIsCurrentProductFavorite);
  const quantity = useAppSelector(selectQuantity);
  const selectedImageIndex = useAppSelector(selectSelectedImageIndex);
  const isLoading = useAppSelector(selectProductDetailLoading);

  // Local UI state (not needed in Redux)
  const [isProductDetailsExpanded, setIsProductDetailsExpanded] = useState(true);
  const [isKeyFeaturesExpanded, setIsKeyFeaturesExpanded] = useState(true);
  const [showPointsModal, setShowPointsModal] = useState(false);

  // Bootstrap product detail data on mount
  useEffect(() => {
    if (productId && productId !== 'unknown') {
      dispatch(bootstrapProductDetail(productId) as any);
    }
  }, [dispatch, productId]);

  // Handle image change
  const handleImageChange = (newIndex: number) => {
    dispatch(setSelectedImageIndex(newIndex));
  };

  const handleToggleProductDetails = () => {
    setIsProductDetailsExpanded((prev) => !prev);
  };

  const handleToggleKeyFeatures = () => {
    setIsKeyFeaturesExpanded((prev) => !prev);
  };

  const handleToggleFavorite = () => {
    if (!productData) return;
    // Check if it's a featured product or regular product
    // For now, try both - the action will handle it correctly
    dispatch(toggleProductFavorite(productId));
    dispatch(toggleFeaturedProductFavorite(productId));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decrementQuantity());
  };

  const handleIncreaseQuantity = () => {
    dispatch(incrementQuantity());
  };

  const handleShare = () => {
    // TODO: Implement share functionality using productDetailApi
  };

  const handleAddToCart = () => {
    // TODO: Implement add to cart using productDetailApi
  };

  // Key Features data
  const keyFeatures = [
    {
      icon: (
        <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
          <Path
            d="M2.49835 11.6592H4.9967C5.43843 11.6592 5.86208 11.8346 6.17443 12.147C6.48679 12.4593 6.66226 12.883 6.66226 13.3247V15.8231C6.66226 16.2648 6.48679 16.6884 6.17443 17.0008C5.86208 17.3132 5.43843 17.4886 4.9967 17.4886H4.16391C3.72218 17.4886 3.29854 17.3132 2.98618 17.0008C2.67383 16.6884 2.49835 16.2648 2.49835 15.8231V9.99358C2.49835 8.00577 3.288 6.09938 4.6936 4.69378C6.09919 3.28819 8.00559 2.49854 9.9934 2.49854C11.9812 2.49854 13.8876 3.28819 15.2932 4.69378C16.6988 6.09938 17.4884 8.00577 17.4884 9.99358V15.8231C17.4884 16.2648 17.313 16.6884 17.0006 17.0008C16.6883 17.3132 16.2646 17.4886 15.8229 17.4886H14.9901C14.5484 17.4886 14.1247 17.3132 13.8124 17.0008C13.5 16.6884 13.3245 16.2648 13.3245 15.8231V13.3247C13.3245 12.883 13.5 12.4593 13.8124 12.147C14.1247 11.8346 14.5484 11.6592 14.9901 11.6592H17.4884"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
      text: 'Active Noise Cancellation',
    },
    {
      icon: (
        <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
          <Path
            d="M18.3212 11.6588V8.32764"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M13.3245 4.99658H3.33113C2.41126 4.99658 1.66557 5.74228 1.66557 6.66215V13.3244C1.66557 14.2443 2.41126 14.99 3.33113 14.99H13.3245C14.2444 14.99 14.9901 14.2443 14.9901 13.3244V6.66215C14.9901 5.74228 14.2444 4.99658 13.3245 4.99658Z"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
      text: '20 hours battery life',
    },
    {
      icon: (
        <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
          <Path
            d="M9.16061 3.91585C9.16045 3.79986 9.12592 3.68651 9.0614 3.59012C8.99687 3.49372 8.90524 3.4186 8.79807 3.37423C8.69089 3.32987 8.57297 3.31824 8.4592 3.34082C8.34542 3.36341 8.24088 3.41919 8.15878 3.50113L5.34064 6.31843C5.23188 6.42784 5.10249 6.51458 4.95997 6.57362C4.81744 6.63266 4.66462 6.66282 4.51035 6.66237H2.49835C2.27748 6.66237 2.06566 6.75011 1.90948 6.90629C1.7533 7.06247 1.66557 7.27429 1.66557 7.49516V12.4919C1.66557 12.7127 1.7533 12.9245 1.90948 13.0807C2.06566 13.2369 2.27748 13.3246 2.49835 13.3246H4.51035C4.66462 13.3242 4.81744 13.3544 4.95997 13.4134C5.10249 13.4724 5.23188 13.5592 5.34064 13.6686L8.15794 16.4867C8.24006 16.569 8.34474 16.625 8.45874 16.6478C8.57273 16.6705 8.69091 16.6589 8.79829 16.6143C8.90567 16.5698 8.99743 16.4945 9.06193 16.3978C9.12643 16.3011 9.16078 16.1874 9.16061 16.0712V3.91585Z"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M13.3245 7.49512C13.8651 8.21588 14.1573 9.09252 14.1573 9.99347C14.1573 10.8944 13.8651 11.7711 13.3245 12.4918"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M16.126 15.293C16.822 14.597 17.3741 13.7708 17.7508 12.8614C18.1274 11.9521 18.3213 10.9775 18.3213 9.99319C18.3213 9.00892 18.1274 8.03429 17.7508 7.12494C17.3741 6.21559 16.822 5.38934 16.126 4.69336"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
      text: 'Spatial Audio support',
    },
    {
      icon: (
        <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
          <Path
            d="M5.82948 5.82944L14.1573 14.1573L9.9934 18.3212V1.66553L14.1573 5.82944L5.82948 14.1573"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
      text: 'Bluetooth 5.0 connectivity',
    },
    {
      icon: (
        <Svg width={24} height={24} viewBox="0 0 20 20" fill="none">
          <Path
            d="M16.6557 10.826C16.6557 14.9899 13.7409 17.0719 10.2765 18.2794C10.0951 18.3409 9.89807 18.338 9.71858 18.2711C6.24587 17.0719 3.33113 14.9899 3.33113 10.826V4.99655C3.33113 4.77568 3.41887 4.56386 3.57505 4.40768C3.73122 4.2515 3.94305 4.16376 4.16391 4.16376C5.82948 4.16376 7.91144 3.16442 9.36048 1.89859C9.53691 1.74786 9.76134 1.66504 9.9934 1.66504C10.2254 1.66504 10.4499 1.74786 10.6263 1.89859C12.0837 3.17275 14.1573 4.16376 15.8229 4.16376C16.0437 4.16376 16.2556 4.2515 16.4117 4.40768C16.5679 4.56386 16.6557 4.77568 16.6557 4.99655V10.826Z"
            stroke="#00A551"
            strokeWidth={1.66557}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      ),
      text: '2 year warranty included',
    },
  ];

  const headerProps = useProductDetailHeaderConfig({
    isFavorite,
    onToggleFavorite: handleToggleFavorite,
    onShare: handleShare,
  });

  // Placeholder image - will be replaced with actual product image from Redux
  const firstPlaceholderImage = require('@modules/ecommerce/assets/main-1.png');
  const secondPlaceholderImage = require('@modules/ecommerce/assets/main-2.png');
  const thirdPlaceholderImage = require('@modules/ecommerce/assets/main-3.png');
  const fourthPlaceholderImage = require('@modules/ecommerce/assets/main-4.png');

  // Product images array - for now using placeholder, but structured for easy replacement
  const productImages = [
    firstPlaceholderImage, // index 0
    secondPlaceholderImage, // index 1 (default selected)
    thirdPlaceholderImage, // index 2
    fourthPlaceholderImage, // index 3
  ];

  return (
    <View className="flex-1 bg-white">
      <MainHeader {...headerProps} />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Product Image Gallery */}
        <ProductImageGallery
          productImages={productImages}
          selectedImageIndex={selectedImageIndex}
          onImageChange={handleImageChange}
        />

        <View className="px-4 mt-12 pb-4 bg-gray-50">
          {/* Product Detail Card */}
          <ProductDetailCard
            quantity={quantity}
            onDecreaseQuantity={handleDecreaseQuantity}
            onIncreaseQuantity={handleIncreaseQuantity}
          />

          {/* Product Details Section */}
          <ProductDetailsSection
            isExpanded={isProductDetailsExpanded}
            onToggle={handleToggleProductDetails}
          />

          {/* Key Features Section */}
          <KeyFeaturesSection
            isExpanded={isKeyFeaturesExpanded}
            onToggle={handleToggleKeyFeatures}
            features={keyFeatures}
          />

          {/* Reviews & Ratings Section */}
          <ReviewsSection onViewAll={() => {
            // TODO: Navigate to reviews screen
          }} />
        </View>

        {/* Bottom Action Bar */}
        <BottomActionBar
          price={productData?.price ?? '৳1500'}
          points={`${productData?.points ?? 100} Points`}
          onShare={handleShare}
          onAddToCart={handleAddToCart}
          onPointsPress={() => setShowPointsModal(true)}
        />
      </ScrollView>

      {/* Points Distribution Modal */}
      <PointsDistributionModal
        visible={showPointsModal}
        onClose={() => setShowPointsModal(false)}
      />
    </View>
  );
}

