import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChatFiles, ChatMessages, ChatMilestones, ChatTasks, Tab } from './components';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { bootstrapChatMessages, selectChatMessages, selectChatInitialized } from '@modules/digital/store';
import { chatTabs, type ChatTabId } from './tabs';
import ChatHeader from './components/shared/ChatHeader';

export default function Chat() {
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [activeTab, setActiveTab] = useState<ChatTabId>('Chat');
    const designHeight = 90;

    const dispatch = useAppDispatch();
    const chatMessages = useAppSelector(selectChatMessages);
    const chatInitialized = useAppSelector(selectChatInitialized);

    useEffect(() => {
        if (!chatInitialized) {
            dispatch(bootstrapChatMessages());
        }
    }, [chatInitialized, dispatch]);

    return (
        <View className="flex-1 bg-[#F1F3F7]">
            <ChatHeader insets={insets} designHeight={designHeight} onBackPress={() => navigation.goBack()} />

            <View className="w-full bg-white px-4 py-4">
                <View className="flex-row justify-center items-center space-x-2">
                    {chatTabs.map((tab) => (
                        <Tab
                            key={tab.id}
                            tab={tab}
                            isActive={activeTab === tab.id}
                            onPress={() => setActiveTab(tab.id)}
                        />
                    ))}
                </View>
            </View>
            <View className="flex-1">
                {activeTab === 'Chat' && <ChatMessages messages={chatMessages} />}
                {activeTab === 'Files' && <ChatFiles />}
                {activeTab === 'Milestones' && <ChatMilestones />}
                {activeTab === 'Tasks' && <ChatTasks />}
            </View>
        </View>
    );
}