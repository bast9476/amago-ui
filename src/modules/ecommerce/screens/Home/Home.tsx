import React, { useEffect } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import Footer from '@modules/common/components/Footer';
import MainHeader from '@modules/common/components/MainHeader';
import { useEcommerceHeaderConfig } from '../../hooks/useEcommerceHeaderConfig';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EcommerceStackParamList } from '@src/navigation/types';
import {
  toggleProductFavorite,
  toggleFeaturedProductFavorite,
  selectProducts,
  selectFeaturedProducts,
  selectProductsLoading,
  selectFeaturedProductsLoading,
  bootstrapHomeData,
} from '@modules/ecommerce/store';
import { Banner, FeaturedProductsCarousel, ProductList, SectionHeader } from './components';

const discountImage = require('@modules/ecommerce/assets/discount_main.png');

export default function Home() {
  const headerProps = useEcommerceHeaderConfig();
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<EcommerceStackParamList>>();

  const products = useAppSelector(selectProducts);
  const featuredProducts = useAppSelector(selectFeaturedProducts);
  const isLoadingProducts = useAppSelector(selectProductsLoading);
  const isLoadingFeatured = useAppSelector(selectFeaturedProductsLoading);

  useEffect(() => {
    (dispatch as any)(bootstrapHomeData());
  }, [dispatch]);

  const handleToggleProductFavorite = (id: string) => {
    dispatch(toggleProductFavorite(id));
  };

  const handleToggleFeaturedFavorite = (id: string) => {
    dispatch(toggleFeaturedProductFavorite(id));
  };

  const handleProductPress = (id: string) => {
    navigation.navigate('ProductDetail', { productId: id });
  };

  if (isLoadingProducts || isLoadingFeatured || !products || !featuredProducts) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#00a551" />
      </View>
    );
  }

  return (
    <>
      <View className="flex-1 bg-white">
        <MainHeader {...headerProps} />
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <Banner source={discountImage} height={155} />

          <View className="px-4 pt-6 pb-4">
            <SectionHeader title="Featured" actionLabel="View all" />
            <FeaturedProductsCarousel
              products={featuredProducts}
              onToggleFavorite={handleToggleFeaturedFavorite}
              onPress={handleProductPress}
            />
          </View>

          <View className="px-4 pt-2 pb-4">
            <SectionHeader
              title="All"
              actionLabel="View all"
              titleClassName="text-[26px] font-semibold text-[#242424]"
            />
          </View>

          <ProductList
            products={products}
            onToggleFavorite={handleToggleProductFavorite}
            onPress={handleProductPress}
          />
        </ScrollView>
      </View>
      <Footer />
    </>
  );
}

