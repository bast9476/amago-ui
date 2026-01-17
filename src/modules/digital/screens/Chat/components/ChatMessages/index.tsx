import React from 'react';
import { View, ScrollView, ImageSourcePropType } from 'react-native';
import { ChatBubble } from '../shared/ChatBubble';
import type { ChatAttachment, ChatMessage } from '@modules/digital/store/types';
import type { ChatMessageDirection } from '@modules/digital/store/types';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';
import CompleteProjectButton from '../shared/CompleteProjectButton';
import MessageInput from '../shared/MessageInput';

type ChatMessagesProps = {
    messages: ChatMessage[];
};

export function ChatMessages({ messages }: ChatMessagesProps) {
    const navigation = useCrossModuleNavigation();
    const handleCompletePress = () => navigation('Digital', 'CompletedProject');

    return (
        <View className="flex-1">
            <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
                <View className="px-4 pt-12 pb-6 space-y-4">
                    {messages.map((message: ChatMessage, index: number) => (
                        <ChatBubble
                            key={index}
                            index={index}
                            direction={message.direction as ChatMessageDirection as 'incoming' | 'outgoing'}
                            message={message.message}
                            timestamp={message.timestamp}
                            attachment={message.attachment as ChatAttachment}
                            avatarSource={message.avatar as ImageSourcePropType}
                        />
                    ))}
                </View>
            </ScrollView>
            <MessageInput
                onAttachmentPress={() => { }}
                onSendPress={() => { }}
            />
            <CompleteProjectButton onCompletePress={handleCompletePress} />
        </View>
    );
}

