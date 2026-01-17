import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { ProfileHeader } from './components/ProfileHeader'
import { ProfileWalletCard } from './components/ProfileWalletCard'
import { Footer } from '@modules/common/components'
import { BuyerSection } from './components/Buyer/BuyerSection'
import { ServiceProviderSection } from './components/ServiceProvider/ServiceProviderSection'

export default function Profile() {
    const [mode, setMode] = useState<'buyer' | 'provider'>('buyer')

    return (
        <>
            <ScrollView className="flex-1 bg-white  ">
                <View className="flex-1 bg-white mb-24">
                    <ProfileHeader mode={mode} onChangeMode={setMode} />
                    <View className="flex-1 relative -top-20">
                        <ProfileWalletCard />
                        {mode === 'buyer' ? <BuyerSection /> : <ServiceProviderSection />}
                    </View>
                </View>
            </ScrollView>
            <Footer />
        </>
    )
}