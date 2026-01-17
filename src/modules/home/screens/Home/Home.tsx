import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import {
  HomeHeader,
  CategorySections,
  PrayerTimingsCard,
  PromotionalCard,
  NewDealsSection,
  HotSalesSection,
  PropertyDealsSection,
  PropertyDealCardsSection,
  FoodDeliverySection,
  FoodRestaurantCardsSection,
  RecentlyViewedSection,
  ForYouSection,
  CategorySeeAllModal,
} from './components';
import { Footer } from '@modules/common/components';
import type { HomeCategorySectionId } from './components/CategorySections';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { bootstrapHomeData, selectHomeSeeAllConfigs,selectIsDataLoaded } from '@modules/home/store';
import type { HomeSeeAllConfig } from '@modules/home/store/types';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

export default function Home() {
  const dispatch = useAppDispatch();
  const navigateToModule = useCrossModuleNavigation();
  const [activeSeeAll, setActiveSeeAll] = useState<HomeCategorySectionId | null>(null);
  const seeAllConfigs = useAppSelector(selectHomeSeeAllConfigs);
  const isDataLoaded = useAppSelector(selectIsDataLoaded);


  useEffect(() => {
    // TypeScript inference issue with lazy-loaded store - thunk is properly configured
    (dispatch as any)(bootstrapHomeData());
  }, [dispatch]);

  const openSeeAll = useCallback((sectionId: HomeCategorySectionId) => {
    setActiveSeeAll(sectionId);
  }, []);

  const closeSeeAll = useCallback(() => setActiveSeeAll(null), []);

  const handleItemPress = useCallback((itemId: string) => {
    // Navigate to Flight module when Flight button is pressed
    if (itemId === 'travel-flight') {
      navigateToModule('Flight', 'Home');
    }
    // Add other navigation handlers here as needed
  }, [navigateToModule]);

  const modalConfig = useMemo(() => {
    if (!activeSeeAll) {
      return null;
    }
    return seeAllConfigs.find((c: HomeSeeAllConfig) => c.id === activeSeeAll) ?? null;
  }, [activeSeeAll, seeAllConfigs]);

  if (!isDataLoaded) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#07B556" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <CategorySections onSeeAllSection={openSeeAll} onItemPress={handleItemPress} />
        <PrayerTimingsCard />
        <PromotionalCard />
        <NewDealsSection />
        <HotSalesSection />
        <PropertyDealsSection />
        <PropertyDealCardsSection />
        <FoodDeliverySection />
        <FoodRestaurantCardsSection />
        <RecentlyViewedSection />
        <ForYouSection />
      </ScrollView>

      <Footer />

      <CategorySeeAllModal
        visible={!!modalConfig}
        title={modalConfig?.title ?? ''}
        items={modalConfig?.items ?? []}
        onClose={closeSeeAll}
      />
    </View>
  );
}


