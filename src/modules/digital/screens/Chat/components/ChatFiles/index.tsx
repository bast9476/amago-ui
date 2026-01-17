import React from 'react';
import { ScrollView, View } from 'react-native';
import { FileRow } from '../shared/FileRow';

const files = [
    { id: 'wireframes-v1', title: 'wireframes_v1.fig', version: 'v1.0', meta: 'Sarah Ahmed • Oct 25', iconType: 'figma' as const },
    { id: 'wireframes-v2', title: 'wireframes_v2.fig', version: 'v2.0', meta: 'Sarah Ahmed • Oct 26', iconType: 'figma' as const },
    { id: 'design-brief', title: 'design-brief.pdf', meta: 'You • Oct 24', iconType: 'document' as const },
    { id: 'brand-assets', title: 'brand-assets.zip', meta: 'You • Oct 24', iconType: 'document' as const },
];

export function ChatFiles() {
    return (
        <ScrollView className="flex-1 bg-[#F1F3F7]" contentContainerStyle={{ paddingBottom: 32 }}>
            <View className="px-4 pt-7">
                {files.map((file) => (
                    <FileRow
                        key={file.id}
                        title={file.title}
                        version={file.version}
                        meta={file.meta}
                        iconType={file.iconType}
                    />
                ))}
            </View>
        </ScrollView>
    );
}

