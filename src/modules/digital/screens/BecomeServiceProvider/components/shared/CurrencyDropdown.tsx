import React, { useState, useRef } from 'react'
import { View, Text, TouchableOpacity, Modal, Pressable, ScrollView, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

type CurrencyDropdownProps = {
    value: string
    options: string[]
    onChange: (value: string) => void
    containerStyle?: ViewStyle
    appearance?: 'default' | 'compact'
    textColor?: string
}

const ChevronIcon = ({ rotated }: { rotated?: boolean }) => (
    <Svg
        width={22}
        height={22}
        viewBox="0 0 16 16"
        fill="none"
        style={{ transform: [{ rotate: rotated ? '180deg' : '0deg' }] }}
    >
        <Path
            d="M4 6L8 10L12 6"
            stroke="#717182"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export function CurrencyDropdown({
    value,
    options,
    onChange,
    containerStyle,
    appearance = 'default',
    textColor,
}: CurrencyDropdownProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownLayout, setDropdownLayout] = useState({ x: 0, y: 0, width: 0 })
    const buttonRef = useRef<View>(null)

    const paddingClass = appearance === 'compact' ? 'py-2.5' : 'py-3.5'
    const textSizeClass = appearance === 'compact' ? 'text-base' : 'text-lg'
    const resolvedTextColor = textColor ?? '#242424'

    const handleOpen = () => {
        if (buttonRef.current) {
            buttonRef.current.measureInWindow((x, y, width, height) => {
                setDropdownLayout({ x, y: y + height + 4, width })
                setIsOpen(true)
            })
        }
    }

    const handleClose = () => setIsOpen(false)

    const handleSelect = (option: string) => {
        onChange(option)
        setIsOpen(false)
    }

    return (
        <>
            <View ref={buttonRef} collapsable={false} style={containerStyle}>
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={handleOpen}
                    className={`flex-row h-14 py-3.5 items-center justify-between px-3 ${paddingClass} rounded-xl bg-white border border-gray-300`}
                >
                    <Text
                        className={`${textSizeClass} flex-1 pr-2`}
                        style={{ color: resolvedTextColor }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {value}
                    </Text>
                    <ChevronIcon rotated={isOpen} />
                </TouchableOpacity>
            </View>

            <Modal transparent visible={isOpen} animationType="fade" onRequestClose={handleClose}>
                <Pressable style={{ flex: 1 }} onPress={handleClose}>
                    <Pressable
                        style={{
                            position: 'absolute',
                            top: dropdownLayout.y,
                            left: dropdownLayout.x,
                            width: dropdownLayout.width || 120,
                        }}
                        onPress={(e) => e.stopPropagation()}
                    >
                        <View
                            className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                            style={{
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.1,
                                shadowRadius: 8,
                                elevation: 5,
                            }}
                        >
                            <ScrollView style={{ maxHeight: 200 }}>
                                {options.map((option, index) => {
                                    const selected = option === value
                                    return (
                                        <TouchableOpacity
                                            key={option}
                                            activeOpacity={0.85}
                                            onPress={() => handleSelect(option)}
                                            className={`px-4 py-3 flex-row items-center justify-between ${index < options.length - 1 ? 'border-b border-gray-100' : ''
                                                }`}
                                        >
                                            <Text
                                                className={`text-base ${selected ? 'text-[#00A551] font-semibold' : 'text-[#242424] opacity-70'
                                                    }`}
                                            >
                                                {option}
                                            </Text>
                                            {selected && (
                                                <View className="w-2.5 h-2.5 rounded-full bg-[#00A551]" />
                                            )}
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    )
}

