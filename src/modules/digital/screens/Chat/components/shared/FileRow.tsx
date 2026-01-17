import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

type FileRowIcon = 'document' | 'figma';

export interface FileRowProps {
    title: string;
    version?: string;
    meta: string;
    iconType?: FileRowIcon;
    accentColor?: string;
    onPress?: () => void;
    onPressMore?: () => void;
}

const ICON_BG = {
    document: '#E6F6EE',
    figma: '#E6F6EE',
};

export function FileRow({
    title,
    version,
    meta,
    iconType = 'document',
    accentColor = '#00A551',
    onPress,
    onPressMore,
}: FileRowProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            className="flex-row items-center bg-white border border-black/10 rounded-2xl px-4 py-4 mb-2"
            onPress={onPress}
        >
            <View
                className="w-11 h-11 rounded-xl items-center justify-center mr-3"
                style={{ backgroundColor: ICON_BG[iconType] }}
            >
                {iconType === 'figma' ? <FigmaIcon color={accentColor} /> : <DocumentIcon color={accentColor} />}
            </View>

            <View className="flex-1">
                <View className="flex-row items-center">
                    <Text className="text-[14px] font-medium text-[#242424]" numberOfLines={1}>
                        {title}
                    </Text>
                    {version ? (
                        <Text className="text-[13px] text-[#717182] ml-2" numberOfLines={1}>
                            {version}
                        </Text>
                    ) : null}
                </View>
                <Text className="text-[12px] font-[500] text-[#242424] opacity-60 mt-1" numberOfLines={1}>
                    {meta}
                </Text>
            </View>

            <TouchableOpacity
                accessibilityRole="button"
                accessibilityLabel="More options"
                className="w-9 h-9 items-center justify-center rounded-lg"
                activeOpacity={0.8}
                onPress={onPressMore}
            >
                <MoreIcon />
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

function DocumentIcon({ color = '#00A551' }: { color?: string }) {
    return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Path
                d="M12.1875 2.5H6.25c-.497 0-.974.197-1.325.547A1.873 1.873 0 0 0 4.375 4.375v11.25c0 .497.197.974.55 1.325.35.35.828.55 1.325.55h8.75c.497 0 .974-.2 1.325-.55.353-.35.55-.828.55-1.325V6.71875L12.1875 2.5Z"
                stroke={color}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M12.1875 2.5V6.25h3.75"
                stroke={color}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path d="M7.5 10h5" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.5 13.125h5" stroke={color} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    );
}

function FigmaIcon({ color = '#00A551' }: { color?: string }) {
    return (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
            <Rect x={5} y={2.5} width={5} height={5} rx={2.5} stroke={color} strokeWidth={1.4} />
            <Rect x={10} y={2.5} width={5} height={5} rx={2.5} stroke={color} strokeWidth={1.4} />
            <Rect x={5} y={7.5} width={5} height={5} rx={2.5} stroke={color} strokeWidth={1.4} />
            <Path
                d="M10 7.5h2.5a2.5 2.5 0 0 1 0 5H10V7.5Z"
                stroke={color}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10 12.5h-2.5a2.5 2.5 0 0 0 0 5H10v-5Z"
                stroke={color}
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

function MoreIcon() {
    return (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
            <Path
                d="M8 3.5a.937.937 0 1 1 0-1.875A.937.937 0 0 1 8 3.5Zm0 10.875a.937.937 0 1 1 0-1.875.937.937 0 0 1 0 1.875ZM8 8.75a.937.937 0 1 1 0-1.875A.937.937 0 0 1 8 8.75Z"
                stroke="#242424"
                strokeWidth={1.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}

