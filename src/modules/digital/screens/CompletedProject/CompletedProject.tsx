import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Rect, Defs, LinearGradient, Stop } from 'react-native-svg'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import CompletionHero from './components/CompletionHero'
import ProjectSummaryCard from './components/ProjectSummaryCard'
import ExperienceFeedbackCard from './components/ExperienceFeedbackCard'
import RehireBanner from './components/RehireBanner'
import PaymentReceiptCard from './components/PaymentReceiptCard'
import SubmitReviewButton from './components/SubmitReviewButton'

type CompletedProjectProps = {
    onBackPress?: () => void
}

const CompletedProject: React.FC<CompletedProjectProps> = ({ onBackPress }) => {
    const navigation = useNavigation()
    const handleBackPress = onBackPress ?? (() => navigation.goBack())

    return (
        <ScrollView>
            <View className="relative flex-1 bg-[#F1F3F7]">
                <CompletionHero onBackPress={handleBackPress} />
                <View className="relative -top-16 left-0 right-0 space-y-6">
                    <ProjectSummaryCard />
                    <ExperienceFeedbackCard />
                    <RehireBanner />
                    <PaymentReceiptCard />
                </View>
                <SubmitReviewButton />
            </View>
        </ScrollView>
    )
}

export default CompletedProject

