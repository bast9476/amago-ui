import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const CalendarDayIcon = ({ selected }: { selected: boolean }) => (
    <Svg width={40} height={38} viewBox="0 0 33 32" fill="none">
        <Path
            d="M24.501 0C28.8902 0 32.4482 3.5581 32.4482 7.94727V23.8418C32.4482 28.231 28.8902 31.7891 24.501 31.7891H7.94727C3.5581 31.789 0 28.231 0 23.8418V7.94727C5.36011e-05 3.55814 3.55814 5.54066e-05 7.94727 0H24.501Z"
            fill={selected ? '#00A551' : '#F3F4F7'}
        />
        <Path
            d="M24.501 0C28.8902 0 32.4482 3.5581 32.4482 7.94727V23.8418C32.4482 28.231 28.8902 31.7891 24.501 31.7891H7.94727C3.5581 31.789 0 28.231 0 23.8418V7.94727C5.36011e-05 3.55814 3.55814 5.54066e-05 7.94727 0H24.501Z"
            stroke="#F3F4F7"
        />
        {selected ? (
            <Path
                d="M9.73096 15.8518L10.9188 14.6396L14.001 17.6792L20.5249 11.1797L21.731 12.3919L14.001 20.0914L9.73096 15.8518Z"
                fill="white"
            />
        ) : (
            <Path
                d="M13.4005 19.2926L12.5623 18.4502L17.854 13.1797L18.6964 14.0179L13.4005 19.2926ZM17.854 19.2926L12.5581 14.0179L13.4005 13.1797L18.6922 18.4502L17.854 19.2926Z"
                fill="#6B7280"
            />
        )}
    </Svg>
)

export type WeeklyCalendarDayProps = {
    index: number,
    label: string
    selected: boolean
    onPress?: () => void
}

export function WeeklyCalendarDay({ index, label, selected, onPress }: WeeklyCalendarDayProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            className={`${index === 0 ? '' : 'ml-2'} flex-col items-center space-y-1`}
        >
            <Text className="text-sm font-medium text-gray-500">{label}</Text>
            <CalendarDayIcon selected={selected} />
        </TouchableOpacity>
    )
}

