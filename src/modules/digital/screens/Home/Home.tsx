import React, { useMemo, useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Footer from '@modules/common/components/Footer';
import MainHeader from '@modules/common/components/MainHeader';
import { useSearchHeaderConfig } from '@modules/digital/hooks/useSearchHeaderConfig';
import { ScrollView } from 'react-native-gesture-handler';
import {
  PopularCategoryCard,
  FeaturedServiceCard,
  TopRatedProviderCard,
  RecentProjectCard,
  StepRow,
  CategoryFilterPill,
  NeedSomethingDoneCard,
} from './components';
import { clientSteps as clientStepsData, freelancerSteps as freelancerStepsData } from './data/howItWorksSteps';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
// Import all Redux Toolkit features from centralized exports
// This provides a clean API while maintaining lazy loading for Hermes compatibility
import {
  setSelectedCategory,
  setHowItWorksTab,
  setSearchQuery,
  selectSelectedCategory,
  selectHowItWorksTab,
  selectSearchQuery,
  selectCategories,
  selectFeaturedServices,
  selectTopRatedProviders,
  selectRecentProjects,
  selectIsDataLoaded,
} from '@modules/digital/store';
import type {
  Category,
  FeaturedService,
  TopRatedProvider,
  RecentProject,
} from '@modules/digital/store';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';
import { bootstrapHomeData } from '@modules/digital/store/bootstrap';

export default function DigitalHomeScreen() {
  // Header configuration
  const headerProps = useSearchHeaderConfig('home');
  const navigateToModule = useCrossModuleNavigation();
  // Redux hooks
  const dispatch = useAppDispatch();
  const selectedCategory = useAppSelector(selectSelectedCategory);
  const howItWorksTab = useAppSelector(selectHowItWorksTab);
  const searchQuery = useAppSelector(selectSearchQuery);
  const categories = useAppSelector(selectCategories);
  const featuredServices = useAppSelector(selectFeaturedServices);
  const topRatedProviders = useAppSelector(selectTopRatedProviders);
  const recentProjects = useAppSelector(selectRecentProjects);
  const isDataLoaded = useAppSelector(selectIsDataLoaded);

  useEffect(() => {
    (dispatch as any)(bootstrapHomeData());
  }, [dispatch]);

  const clientSteps = useMemo(() => clientStepsData, []);

  const freelancerSteps = useMemo(() => freelancerStepsData, []);

  const howItWorksSteps = howItWorksTab === 'clients' ? clientSteps : freelancerSteps;

  // Show loading state until data is loaded to prevent styling issues
  if (!isDataLoaded) {
    return (
      <View className="flex-1 bg-white items-center justify-center">
        <ActivityIndicator size="large" color="#07B556" />
      </View>
    );
  }

  return (
    <>
      <ScrollView className="bg-[#F1F3F7]">

        <View className="flex-1 bg-white">
          {/* Header */}
          <MainHeader {...headerProps} />
        </View>

        {/* Browse by Category */}
        <View className="px-4 py-4">
          <Text className="text-[19px] font-semibold text-black">Browse by Category</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-5" contentContainerStyle={{ columnGap: 8 }}>
            {['UI/UX Design', 'Development', 'Content Writing', 'Video Editing', 'Marketing'].map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <CategoryFilterPill
                  key={category}
                  label={category}
                  isSelected={isSelected}
                  onPress={() => dispatch(setSelectedCategory(category))}
                />
              );
            })}
          </ScrollView>
        </View>

        {/* Actions row */}
        <View className="px-4 py-4">
          <View className="flex-row items-stretch gap-3">
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigateToModule('Digital', 'PostJob')}
              className="flex-1 h-[55px] rounded-[14px] px-4 py-2 items-center justify-center bg-[#00a63e]"
            >
              <Text className="text-[16px] font-semibold text-white">Post a Job</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigateToModule('Digital', 'BecomeServiceProvider')}
              className="flex-1 h-[55px] rounded-[14px] px-4 py-2 items-center justify-center bg-white border border-[#00a63e]"
            >
              <Text className="text-[12px] font-medium text-[#00a63e]">Become a Service Provider</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Categories */}
        <View className="px-4 py-4">
          <View className="flex-row items-center justify-between mb-5">
            <Text className="text-[22px] font-semibold text-black">Popular Categories</Text>
            <TouchableOpacity>
              <Text className="text-[15px] font-medium text-[#00a63e]">View all</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap -mx-2">
            {categories.map((category: Category) => (
              <PopularCategoryCard key={category.id} title={category.title} jobs={category.jobs} color={category.color} icon={category.icon} />
            ))}
          </View>
        </View>

        {/* Featured Services */}
        <View className="px-4 py-4">
          <Text className="text-[22px] font-semibold text-black mb-4">Featured Services</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ columnGap: 15, paddingRight: 16 }}>
            {featuredServices.map((service: FeaturedService) => (
              <FeaturedServiceCard
                key={service.id}
                title={service.title}
                price={service.price}
                seller={service.seller}
                badge={service.badge}
                badgeType={service.badgeType}
                level={service.level}
                cardImage={service.cardImage}
                profileImage={service.profileImage}
              />
            ))}
          </ScrollView>
        </View>

        {/* Top Rated */}
        <View className="px-4 py-4">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-[22px] font-semibold text-black">Top Rated</Text>
            <TouchableOpacity>
              <Text className="text-[16px] font-medium text-[#00a63e]">View all</Text>
            </TouchableOpacity></View>
          <View className="flex-1">
            {topRatedProviders.map((provider: TopRatedProvider, idx: number) => (
              <TopRatedProviderCard
                key={provider.id}
                name={provider.name}
                title={provider.title}
                rating={provider.rating}
                reviews={provider.reviews}
                price={provider.price}
                profileImage={provider.profileImage}
                index={idx}
              />
            ))}
          </View>
        </View>

        {/* Recent Projects */}
        <View className="px-4 py-4">
          <Text className="text-[22px] font-semibold text-black mb-5">Recent Projects</Text>
          <View className="flex-1">
            {recentProjects.map((project: RecentProject, idx: number) => (
              <RecentProjectCard
                key={project.id}
                title={project.title}
                company={project.company}
                budget={project.budget}
                progress={project.progress}
                dueDate={project.dueDate}
                iconLetter={project.iconLetter}
                index={idx}
              />
            ))}
          </View>
        </View>

        {/* How it works */}
        <View className="px-4 pb-6 mt-2">
          <View
            className="rounded-2xl bg-white border border-neutral-200 px-5 py-7 shadow shadow-black/5"
          >
            <Text className="text-[19px] font-semibold text-black">How it works</Text>
            {/* Tabs */}
            <View className="mt-4">
              <View className="flex-row bg-neutral-100 rounded-[18px] p-1">
                <TouchableOpacity className="flex-1 h-9 rounded-[18px] items-center justify-center" activeOpacity={0.8} onPress={() => dispatch(setHowItWorksTab('clients'))}>
                  <View className={howItWorksTab === 'clients' ? 'w-full h-full rounded-[14px] bg-white items-center justify-center' : 'w-full h-full rounded-[14px] items-center justify-center'}>
                    <Text className={howItWorksTab === 'clients' ? 'text-[16px] font-[600] text-[#242424]' : 'text-[16px] text-[#242424] opacity-70'}>For Clients</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 h-9 rounded-[18px] items-center justify-center" activeOpacity={0.8} onPress={() => dispatch(setHowItWorksTab('freelancers'))}>
                  <View className={howItWorksTab === 'freelancers' ? 'w-full h-full rounded-[14px] bg-white items-center justify-center' : 'w-full h-full rounded-[14px] items-center justify-center'}>
                    <Text className={howItWorksTab === 'freelancers' ? 'text-[16px] font-[600] text-[#242424]' : 'text-[16px] text-[#242424] opacity-70'}>For Freelancers</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* Steps */}
            <View className="flex-1 mt-[30px]">
              {howItWorksSteps.map((s, idx) => (
                <StepRow key={`${s.title}_${idx}`} index={idx} title={s.title} description={s.description} cardIndex={0} />
              ))}
            </View>
          </View>
        </View>

        {/* CTA: Need something done */}
        <View className="px-4 pb-10 mb-[160]">
          <NeedSomethingDoneCard />
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}


