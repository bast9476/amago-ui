import React, { useEffect } from 'react';
import { ScrollView, View, Dimensions, Text } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { UserLevelStackParamList } from '@src/navigation/types';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
    bootstrapUserLevel,
    selectUserLevelLevel,
    selectUserLevelPoints,
    initialTasks,
    initialTiers,
} from '../../../store/exports';
import ProgressHeader from './components/ProgressHeader';
import LevelOverview from './components/LevelOverview';
import ProgressSummaryCard from './components/ProgressSummaryCard';
import TasksList from './components/TasksList';
import TierList, { Tier } from './components/TierList';

type Nav = NativeStackNavigationProp<UserLevelStackParamList, 'LevelProgress'>;

export default function LevelProgress() {
    const navigation = useNavigation<Nav>();
    const dispatch = useAppDispatch();
    const level = Number(useAppSelector(selectUserLevelLevel) ?? 0);
    const points = Number(useAppSelector(selectUserLevelPoints) ?? 0);
    const { width } = Dimensions.get('window');
    const sectionSpacing = Math.max(16, width * 0.04);

    useEffect(() => {
        dispatch(bootstrapUserLevel() as any);
    }, [dispatch]);

    const tiers: Tier[] = initialTiers;
    const tasks = initialTasks;
    const progressPercent = 63;
    const tierIndex = Math.min(Math.max(0, level ?? 2), tiers.length - 1);
    const badgeLabel = tiers[tierIndex]?.title?.replace(' Star', '') ?? 'Gold';
    const nextUnlock = "Flights at Platinum";

    return (
        <SafeAreaView className="flex-1 bg-white">
            <StatusBar style='dark' />
            <ProgressHeader onBack={() => navigation.goBack()} />
            <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>

                <View>
                    <LevelOverview
                        progressPercent={progressPercent}
                        badgeLabel={`${badgeLabel} Introducer`}
                        nextUnlock={nextUnlock}
                        sectionSpacing={sectionSpacing}
                    />
                </View>

                <View className="px-4" style={{ marginTop: sectionSpacing }}>
                    <TasksList tasks={tasks} />
                </View>

                <View className="px-4" style={{ marginTop: sectionSpacing }}>
                    <ProgressSummaryCard percent={progressPercent} />
                </View>


                <View className="px-4" style={{ marginTop: sectionSpacing }}>
                    <Text className="text-[19px] font-semibold text-center text-[#242424] mb-4">Tier Progression</Text>
                    <TierList tiers={tiers} />
                </View>

                <View className="px-4" style={{ marginTop: sectionSpacing }}>
                    <View className="rounded-lg overflow-hidden mt-[40px]">
                        <View
                            className="flex-row items-center justify-center relative"
                            style={{ paddingHorizontal: 20 }}
                        >
                            <Svg
                                width={600}
                                height={46}
                                viewBox="0 0 300 46"
                                preserveAspectRatio="none"
                            >
                                <Defs>
                                    <LinearGradient id="completeTasksBg" x1="0%" y1="100%" x2="100%" y2="0%">
                                        <Stop offset="57.95%" stopColor="#07B556" />
                                        <Stop offset="124.21%" stopColor="#36D97F" />
                                    </LinearGradient>
                                </Defs>
                                <Rect width={300} height={46} rx={12} fill="url(#completeTasksBg)" />
                            </Svg>
                            <Text className="text-[18px] font-semibold text-white text-center absolute inset-0">Complete Tasks to Unlock</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
