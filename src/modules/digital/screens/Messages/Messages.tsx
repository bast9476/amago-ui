import React, { useMemo, useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Footer from '@modules/common/components/Footer';
import MainHeader from '@modules/common/components/MainHeader';
import { useSearchHeaderConfig } from '@modules/digital/hooks/useSearchHeaderConfig';
import { ConversationCard } from './components';
import type { Conversation } from '@modules/digital/store';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { bootstrapMessagesData, selectConversations } from '@modules/digital/store';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';

export default function Messages() {
    const headerProps = useSearchHeaderConfig('messages');
    const dispatch = useAppDispatch();
    const conversations = useAppSelector(selectConversations);
    const navigation = useCrossModuleNavigation();

    useEffect(() => {
        if (!conversations || conversations.length === 0) {
            dispatch(bootstrapMessagesData());
        }
    }, [conversations, dispatch]);

    const data = useMemo(() => conversations, [conversations]);

    return (
        <>
            <ScrollView className="bg-[#F1F3F7]">
                <View className="flex-1 bg-white">
                    <MainHeader {...headerProps} />
                    {data.map((item: Conversation) => (
                        <ConversationCard
                            key={item.id}
                            conversation={item}
                            onPress={() => navigation('Digital', 'Chat', { conversation: item })}
                        />
                    ))}
                </View>
            </ScrollView>
            <Footer />
        </>
    );
}