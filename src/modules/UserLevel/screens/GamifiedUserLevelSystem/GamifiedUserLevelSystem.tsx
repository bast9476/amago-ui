/* eslint-disable react-native/no-raw-text */
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { UserLevelStackParamList } from '@src/navigation/types';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  bootstrapUserLevel,
  selectUserLevelPoints,
  addPoints,
  initialActivities,
  initialFeatures,
  initialStats,
} from '../../store/exports';
import {
  Header,
  StatsRow,
  ProgressCard,
  ActivityList,
  FeaturesGrid,
  ActionsRow,
  DailyGoal,
  // Modal intentionally imported separately
} from './components';
import Modal from './components/Modal';

type Nav = NativeStackNavigationProp<UserLevelStackParamList, 'GamifiedUserLevelSystem'>;

export default function GamifiedUserLevelSystem() {
  const navigation = useNavigation<Nav>();
  const dispatch = useAppDispatch();
  // const level = useAppSelector(selectUserLevelLevel);
  const points = useAppSelector(selectUserLevelPoints);
  const [showLockedModal, setShowLockedModal] = useState(false);
  const [lockedTitle, setLockedTitle] = useState<string>('Unlock Flights at Platinum');
  const [lockedSubtitle, setLockedSubtitle] = useState<string>('To use flights, complete the steps below.');

  useEffect(() => {
    dispatch(bootstrapUserLevel() as any);
  }, [dispatch]);

  const progress = 0.63; // derived progress to next tier

  const handleFeaturePress = (feature: { label: string; locked?: boolean }) => {
    if (feature.locked) {
      const title = `Unlock ${feature.label} at Platinum`;
      const subtitle = `To use ${feature.label.toLowerCase()}, complete the steps below.`;
      setLockedTitle(title);
      setLockedSubtitle(subtitle);
      setShowLockedModal(true);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        <Header onBack={() => navigation.goBack()} />
        <View className="mt-[24px] px-4">
          <StatsRow
            stats={[
              ...initialStats,
            ]}
          />
        </View>
        <View className="mt-[24px] px-4">
          <ProgressCard progress={progress} />
        </View>
        <View className="px-4 mt-[40px]">
          <ActivityList activities={initialActivities} />
        </View>
        <View className="px-4">
          <FeaturesGrid features={initialFeatures} onPressFeature={handleFeaturePress} />
        </View>
        <View className="px-4">
          <ActionsRow />
        </View>
        <View className="px-4">
          <DailyGoal onAddPoints={() => dispatch(addPoints(10))} />
        </View>
      </ScrollView>
      <Modal
        visible={showLockedModal}
        onClose={() => setShowLockedModal(false)}
        onViewProgress={() => {
          setShowLockedModal(false);
          navigation.navigate('LevelProgress');
        }}
        onMaybeLater={() => setShowLockedModal(false)}
        title={lockedTitle}
        subtitle={lockedSubtitle}
      />
    </SafeAreaView>
  );
}
