import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

export interface TimelineDropdownProps {
    selectedValue: string;
    options: string[];
    onSelect: (value: string) => void;
    placeholder?: string;
}

const ChevronDownIcon = ({ size = 16, color = '#717182' }: { size?: number; color?: string }) => (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <G opacity={0.5}>
            <Path
                d="M3.99731 5.99609L7.99467 9.99345L11.992 5.99609"
                stroke={color}
                strokeWidth="1.33245"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </G>
    </Svg>
);

export default function TimelineDropdown({
    selectedValue,
    options,
    onSelect,
    placeholder = 'Select timeline',
}: TimelineDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const buttonRef = useRef<View>(null);

    const handlePress = () => {
        if (buttonRef.current) {
            buttonRef.current.measureInWindow((x, y, width, height) => {
                setDropdownLayout({
                    x,
                    y: y + height + 4,
                    width,
                    height,
                });
                setIsOpen(true);
            });
        }
    };

    const handleSelect = (value: string) => {
        onSelect(value);
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <View ref={buttonRef} collapsable={false} className="w-full mt-3">
                <TouchableOpacity
                    onPress={handlePress}
                    className="flex-row justify-between items-center self-stretch h-11 rounded-[10px] bg-white border border-transparent px-3"
                    activeOpacity={0.7}
                >
                    <View className="flex-row justify-between items-center flex-1">
                        <Text className="opacity-70 text-[17px] text-left text-[#242424]">
                            {selectedValue || placeholder}
                        </Text>
                        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
                            <ChevronDownIcon />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <Modal visible={isOpen} transparent animationType="fade" onRequestClose={handleClose}>
                <Pressable style={{ flex: 1, backgroundColor: 'transparent' }} onPress={handleClose}>
                    <View style={{ flex: 1 }}>
                        <Pressable
                            onPress={(e) => e.stopPropagation()}
                            style={{
                                position: 'absolute',
                                top: dropdownLayout.y,
                                left: dropdownLayout.x,
                                width: dropdownLayout.width > 0 ? dropdownLayout.width : 280,
                                maxHeight: 260,
                            }}
                        >
                            <View
                                className="bg-white rounded-[10px] shadow-lg border border-gray-100 overflow-hidden"
                                style={{
                                    shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.1,
                                    shadowRadius: 8,
                                    elevation: 5,
                                }}
                            >
                                <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
                                    {options.map((option, index) => {
                                        const isSelected = selectedValue === option;
                                        return (
                                            <TouchableOpacity
                                                key={option}
                                                className={`px-3 py-3 ${isSelected ? 'bg-gray-50' : 'bg-white'
                                                    } ${index < options.length - 1 ? 'border-b border-gray-100' : ''}`}
                                                activeOpacity={0.7}
                                                onPress={() => handleSelect(option)}
                                            >
                                                <Text
                                                    className={`text-sm text-left ${isSelected ? 'text-[#242424] font-medium' : 'text-[#242424] opacity-60'
                                                        }`}
                                                >
                                                    {option}
                                                </Text>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </ScrollView>
                            </View>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
        </>
    );
}


