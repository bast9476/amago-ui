import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { PostJobAttachment } from '@modules/digital/store';

export type Attachment = PostJobAttachment;

export interface AttachmentsProps {
    attachments: Attachment[];
    onAttachmentRemove: (id: string) => void;
    onAddAttachment: () => void;
}

// Close X Icon
const CloseIcon = ({ size = 16, color = '#242424' }: { size?: number; color?: string }) => (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <Path
            d="M11.992 3.99609L3.99731 11.9908"
            stroke={color}
            strokeWidth="1.33245"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M3.99731 3.99609L11.992 11.9908"
            stroke={color}
            strokeWidth="1.33245"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

// File/Link Icon (Paperclip icon)
const FileIcon = ({ size = 16, color = '#242424' }: { size?: number; color?: string }) => (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <Path
            d="M10.6596 3.99667L5.05395 9.71689C4.80402 9.96683 4.6636 10.3058 4.6636 10.6593C4.6636 11.0127 4.80402 11.3517 5.05395 11.6017C5.30388 11.8516 5.64287 11.992 5.99633 11.992C6.34979 11.992 6.68877 11.8516 6.9387 11.6017L12.5443 5.88143C13.0441 5.38165 13.3249 4.7038 13.3249 3.99701C13.3249 3.29021 13.0441 2.61236 12.5443 2.11258C12.0446 1.6128 11.3667 1.33203 10.6599 1.33203C9.95312 1.33203 9.27527 1.6128 8.77549 2.11258L3.19318 7.80949C2.81703 8.17956 2.51787 8.62045 2.31296 9.10672C2.10805 9.59299 2.00145 10.115 1.9993 10.6427C1.99715 11.1704 2.0995 11.6933 2.30044 12.1812C2.50138 12.6691 2.79694 13.1124 3.17007 13.4855C3.54319 13.8587 3.9865 14.1542 4.47443 14.3552C4.96235 14.5561 5.48523 14.6584 6.0129 14.6563C6.54058 14.6541 7.06261 14.5475 7.54888 14.3426C8.03515 14.1377 8.47604 13.8386 8.84611 13.4624L14.4284 7.76552"
            stroke={color}
            strokeWidth="1.33245"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default function Attachments({
    attachments,
    onAttachmentRemove,
    onAddAttachment,
}: AttachmentsProps) {
    return (
        <View className="flex-col items-start self-stretch space-y-3.5 px-4 pb-8">
            <Text className="w-full text-[18px] font-medium text-left text-[#242424]">
                Attachments
            </Text>
            <View className="flex-col items-start self-stretch space-y-2.5">
                {/* Attachment Items */}
                {attachments.map((attachment) => (
                    <View
                        key={attachment.id}
                        className="flex-row justify-start items-center self-stretch h-[48px] space-x-2 px-2 rounded-xl bg-white border border-black/10"
                    >
                        <View className="flex-row justify-between items-center flex-1">
                            <View className="flex-row items-center flex-1 space-x-2">
                                <View className="opacity-70">
                                    <FileIcon size={18} />
                                </View>
                                <Text className="text-[16px] font-medium text-left text-[#242424] flex-1 opacity-70" numberOfLines={1}>
                                    {attachment.name}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => onAttachmentRemove(attachment.id)}
                                hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                className="w-6 h-6 items-center justify-center rounded-[10px]"
                            >
                                <CloseIcon size={18} color="#242424" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
                {/* Add Attachment Button */}
                <TouchableOpacity
                    onPress={onAddAttachment}
                    className="self-stretch h-[38px] rounded-[10px] bg-white border border-black/10"
                    activeOpacity={0.7}
                >
                    <View className="flex-1 flex-row items-center justify-center opacity-70" style={{ gap: 14 }}>
                        <FileIcon size={18} />
                        <Text className="text-[16px] text-left text-[#242424]">
                            Add Files or Links
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

