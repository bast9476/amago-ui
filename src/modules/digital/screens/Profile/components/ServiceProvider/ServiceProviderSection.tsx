import React from 'react'
import { View } from 'react-native'
import { StatsCard } from '../shared/StatsCard'
import { UpgradeCard } from '../shared/UpgradeCard'
import { RecentTransactionsList } from '../shared/RecentTransactionsList'
import { SettingsList, SettingsItem } from '../shared/SettingsList'
import { HelpSupportCard } from '../shared/HelpSupportCard'
import { SignOutButton } from '../shared/SignOutButton'

export const ServiceProviderSection = () => {
    const recentTransactions = [
        {
            id: '1',
            title: 'Banking App UI/UX - Milestone 1',
            date: 'Oct 25',
            amount: '৳8,000',
            type: 'out' as const,
        },
        {
            id: '2',
            title: 'Banking App UI/UX - Milestone 2',
            date: 'Oct 26',
            amount: '৳12,000',
            type: 'out' as const,
        },
        {
            id: '3',
            title: 'Refund - Cancelled Project',
            date: 'Oct 20',
            amount: '+৳5,000',
            type: 'in' as const,
        },
    ]

    const settingsItems: SettingsItem[] = [
        {
            id: 'notifications',
            type: 'notifications',
            title: 'Notifications',
            subtitle: 'Manage alerts & preferences',
        },
        {
            id: 'portfolio',
            type: 'portfolio',
            title: 'Portfolio & Services',
            subtitle: 'Password, 2FA, blocked users',
        },
        {
            id: 'availability',
            type: 'availability',
            title: 'Availability',
            subtitle: 'Password, 2FA, blocked users',
        },
        {
            id: 'skills',
            type: 'skills',
            title: 'Skills & Certifications',
            subtitle: 'Password, 2FA, blocked users',
        },
        {
            id: 'privacy',
            type: 'privacy',
            title: 'Privacy & Security',
            subtitle: 'Password, 2FA, blocked users',
        },
        {
            id: 'language',
            type: 'language',
            title: 'Language & Region',
            subtitle: 'English • Bangladesh (BDT)',
        },
    ]

    return (
        <View className="flex-1 mt-6 px-4">
            <View className="flex-row">
                <StatsCard label="Jobs Completed" value="47" isFirst={true} />
                <StatsCard label="Total Earned" value="৳428K" isFirst={false} />
            </View>
            <UpgradeCard />
            <RecentTransactionsList items={recentTransactions} />
            <SettingsList items={settingsItems} />
            <HelpSupportCard />
            <SignOutButton />
        </View>
    )
}

