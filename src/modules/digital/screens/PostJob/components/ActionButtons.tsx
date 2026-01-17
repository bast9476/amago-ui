import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export interface ActionButtonsProps {
    onSaveDraft: () => void;
    onPostJob: () => void;
}

export default function ActionButtons({ onSaveDraft, onPostJob }: ActionButtonsProps) {
    return (
        <View className="mt-5 flex-row items-center px-4 py-6 bg-white border-t border-black/10 space-x-3">
            <TouchableOpacity
                onPress={onSaveDraft}
                className="px-6 h-12 rounded-[10px] border border-black/10 bg-white justify-center items-center"
                activeOpacity={0.8}
            >
                <Text className="text-[16px] font-medium text-[#242424]">
                    Save Draft
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={onPostJob}
                className="flex-1 h-12 rounded-[10px] justify-center items-center"
                activeOpacity={0.85}
                style={{ backgroundColor: '#07B556' }}
            >
                <Text className="text-[16px] font-medium text-white">
                    Post Job & Invite
                </Text>
            </TouchableOpacity>
        </View>
    );
}

