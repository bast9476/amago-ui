import { View } from 'react-native'
import React, { useState, useEffect } from 'react'
import MainHeader from '@modules/common/components/MainHeader'
import { useSearchHeaderConfig } from '@modules/digital/hooks/useSearchHeaderConfig'
import Footer from '@modules/common/components/Footer'
import { Active, Completed, Posted, Tab } from './components'
import { projectTabs, type ProjectTabId } from './tabs'
import { ScrollView } from 'react-native-gesture-handler'
import { useAppDispatch, useAppSelector } from '@src/store/hooks'
import { bootstrapProjectsPageData, selectProjectsPageInitialized } from '@modules/digital/store'

export default function Projects() {
    const headerProps = useSearchHeaderConfig('projects');
    const [activeTab, setActiveTab] = useState<ProjectTabId>('active');
    const dispatch = useAppDispatch();
    const initialized = useAppSelector(selectProjectsPageInitialized);

    useEffect(() => {
        if (!initialized) {
            dispatch(bootstrapProjectsPageData());
        }
    }, [dispatch, initialized]);

    return (
        <>
            <View className="flex-1 bg-[#F1F3F7]">
                <MainHeader {...headerProps} />
                <View className="px-4 py-4 bg-[#F1F3F7]">
                    {/* Tab Container - Fully Responsive */}
                    <View className="flex items-center justify-center w-full h-[54px] rounded-[15.16px] bg-white px-3 py-1.5">
                        <View className="flex-row justify-start items-center space-x-4 h-full">
                            {projectTabs.map((tab, index) => (
                                <Tab
                                    key={tab.id}
                                    tab={tab}
                                    isActive={activeTab === tab.id}
                                    onPress={() => setActiveTab(tab.id)}
                                    index={index}
                                />
                            ))}
                        </View>
                    </View>
                </View>
                <ScrollView className="flex-1">
                    {activeTab === 'active' && <Active />}
                    {activeTab === 'completed' && <Completed />}
                    {activeTab === 'posted' && <Posted />}
                </ScrollView>
            </View>
            <Footer />
        </>
    )
}