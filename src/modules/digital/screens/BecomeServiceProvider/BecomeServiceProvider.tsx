import React, { useEffect } from 'react'
import { View, ScrollView } from 'react-native'
import MainHeader from '@modules/common/components/MainHeader'
import { useSearchHeaderConfig } from '@modules/digital/hooks/useSearchHeaderConfig'
import { HeroCard } from './components/HeroCard'
import { BasicInfoCard } from './components/BasicInfoCard'
import { SkillsRolesCard } from './components/SkillsRolesCard'
import { RatesAvailabilityCard } from './components/RatesAvailabilityCard'
import { PortfolioProjectsCard } from './components/PortfolioProjectsCard'
import { ProgressFooter } from './components/ProgressFooter'
import { useAppDispatch, useAppSelector } from '@src/store/hooks'
import { bootstrapBecomeProviderData, selectBecomeProviderInitialized } from '@modules/digital/store'

export default function BecomeServiceProvider() {
    const headerProps = useSearchHeaderConfig('becomeServiceProvider')
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(selectBecomeProviderInitialized)

    useEffect(() => {
        if (!initialized) {
            dispatch(bootstrapBecomeProviderData())
        }
    }, [dispatch, initialized])

    return (
        <ScrollView className="flex-1 bg-[#F1F3F7]">
            <MainHeader {...headerProps} />
            <View className="flex-1 space-y-6 px-4 pb-10">
                <HeroCard />
                <BasicInfoCard />
                <SkillsRolesCard />
                <RatesAvailabilityCard />
                <PortfolioProjectsCard />
            </View>
            <ProgressFooter />
        </ScrollView >
    )
}
