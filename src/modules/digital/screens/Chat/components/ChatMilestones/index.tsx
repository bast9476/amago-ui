import React from 'react';
import { ScrollView, View } from 'react-native';
import { MilestoneCard } from '../shared/MilestoneCard';
import { MilestoneNotice } from '../shared/MilestoneNotice';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

const milestones = [
    {
        id: 'milestone-1',
        title: 'Initial wireframes & user flow',
        amount: '৳8,000',
        dueDate: 'Nov 3',
        status: 'completed' as const,
        accentColor: '#07B556',
    },
    {
        id: 'milestone-2',
        title: 'High-fidelity designs (5 screens)',
        amount: '৳12,000',
        dueDate: 'Nov 10',
        status: 'inProgress' as const,
        accentColor: '#2B7FFF',
    },
    {
        id: 'milestone-3',
        title: 'Interactive prototype & final revisions',
        amount: '৳5,000',
        dueDate: 'Nov 17',
        status: 'pending' as const,
        accentColor: '#99A1AF',
    },
];

export function ChatMilestones() {
    const navigation = useCrossModuleNavigation();
    return (
        <ScrollView className="flex-1 bg-[#F1F3F7]" contentContainerStyle={{ paddingBottom: 32 }}>
            <View className="px-4 pt-7">
                {milestones.map((milestone) => (
                    <MilestoneCard key={milestone.id} {...milestone} />
                ))}
                <MilestoneNotice
                    title="Milestone Completed"
                    description='Sarah has marked "Initial wireframes & user flow" as complete. Review the work and release payment.'
                    secondaryCta="Request Changes"
                    primaryCta="Review & Release ৳8,000"
                    onPrimaryPress={() => navigation('Digital', 'CompletedProject')}
                />
            </View>
        </ScrollView>
    );
}

