import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { ChatAttachment, ChatMessageDirection } from '@modules/digital/store';

export interface ChatBubbleProps {
    index: number;
    direction: ChatMessageDirection;
    message?: string;
    timestamp: string;
    avatarSource?: ImageSourcePropType;
    attachment?: ChatAttachment;
}

const defaultAvatar = require('@modules/digital/assets/img.png');

export function ChatBubble({
    index,
    direction,
    message,
    timestamp,
    avatarSource = defaultAvatar,
    attachment,
}: ChatBubbleProps) {
    const isIncoming = direction === ('incoming' as ChatMessageDirection);

    const bubbleBaseClasses = isIncoming
        ? 'bg-white rounded-[24px] rounded-bl-sm border border-[#F1F3F7]'
        : 'bg-[#00a551] rounded-[24px] rounded-br-sm rounded-tl-[24px] rounded-bl-[24px]';

    return (
        <View className={`flex-row items-end space-x-3 ${isIncoming ? '' : 'justify-end'} ${index === 0 ? '' : 'mt-6'}`}>
            {isIncoming && (
                <Image source={avatarSource} className="w-10 h-10 rounded-full" resizeMode="cover" />
            )}

            <View className={`max-w-[250px] flex-1`}>
                <View
                    className={`${bubbleBaseClasses} ${attachment ? 'px-3 py-6' : 'px-7 py-3'} shadow shadow-black/5`}
                >
                    {attachment ? (
                        <>
                            <View className="flex-row items-center space-x-1">
                                <View className="w-9 h-9 rounded-full items-center justify-center">
                                    <Svg width={16} height={16} viewBox="0 0 12 12" fill="none">
                                        <Path
                                            d="M7.63597 2.72851L3.04644 7.41185C2.84181 7.61648 2.72686 7.89402 2.72686 8.18341C2.72686 8.4728 2.84181 8.75033 3.04644 8.95496C3.25107 9.15959 3.52861 9.27455 3.818 9.27455C4.10739 9.27455 4.38493 9.15959 4.58956 8.95496L9.17908 4.27162C9.58827 3.86244 9.81814 3.30746 9.81814 2.72878C9.81814 2.1501 9.58827 1.59513 9.17908 1.18594C8.76989 0.776754 8.21492 0.546875 7.63624 0.546875C7.05756 0.546875 6.50258 0.776754 6.0934 1.18594L1.52297 5.85019C1.215 6.15318 0.970068 6.51415 0.802302 6.91228C0.634537 7.31041 0.547257 7.73781 0.545498 8.16983C0.543739 8.60186 0.627535 9.02996 0.792053 9.42944C0.95657 9.82892 1.19855 10.1919 1.50404 10.4974C1.80954 10.8029 2.17249 11.0448 2.57197 11.2094C2.97145 11.3739 3.39955 11.4577 3.83157 11.4559C4.2636 11.4541 4.691 11.3669 5.08913 11.1991C5.48725 11.0313 5.84822 10.7864 6.15122 10.4784L10.7216 5.81419"
                                            stroke="#717182"
                                            strokeWidth={1.1}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </Svg>
                                </View>
                                <Text className="text-sm text-[#242424]" numberOfLines={1}>
                                    {attachment?.name ?? ''}
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                className="h-7 rounded-lg border border-black/10 items-center justify-center"
                                onPress={() => {
                                    console.log('download attachment', attachment);
                                }}
                            >
                                <Text className="text-sm font-[400] text-[#242424]">Download</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        <Text className={`text-[18px] leading-[25px] ${isIncoming ? 'text-black' : 'text-white'}`}>
                            {message}
                        </Text>
                    )}
                </View>
                <Text
                    className={`text-[14px] text-[#242424] opacity-40 mt-1 ${isIncoming ? '' : 'text-right'}`}
                >
                    {timestamp}
                </Text>
            </View>

            {!isIncoming && (
                <Image source={avatarSource} className="w-10 h-10 rounded-full" resizeMode="cover" />
            )}
        </View>
    );
}

export default ChatBubble;

