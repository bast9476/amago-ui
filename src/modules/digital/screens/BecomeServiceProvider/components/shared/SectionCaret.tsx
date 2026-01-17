import React from 'react'
import { View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type SectionCaretProps = {
    collapsed: boolean
}

export const SectionCaret = ({ collapsed }: SectionCaretProps) => (
    <View style={{ transform: [{ rotate: collapsed ? '180deg' : '0deg' }] }}>
        <Svg width={28} height={28} viewBox="0 0 20 20" fill="none">
            <Path
                d="M5.5 12.5L10 8L14.5 12.5"
                stroke="#A0AEC0"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    </View>
)

