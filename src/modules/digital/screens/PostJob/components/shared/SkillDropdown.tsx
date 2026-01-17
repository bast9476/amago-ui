import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, ScrollView } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

export interface SkillDropdownProps {
    availableSkills: string[];
    selectedSkills: string[];
    onSelect: (skill: string) => void;
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

const PlusIcon = ({ size = 18, color = '#717182' }: { size?: number; color?: string }) => (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
        <Path
            d="M3.32544 7.98438H12.6366"
            stroke={color}
            strokeWidth="1.33017"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M7.98096 3.32812V12.6393"
            stroke={color}
            strokeWidth="1.33017"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default function SkillDropdown({
    availableSkills,
    selectedSkills,
    onSelect,
}: SkillDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownLayout, setDropdownLayout] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const buttonRef = useRef<View>(null);

    const unselectedSkills = availableSkills.filter(skill => !selectedSkills.includes(skill));

    const handlePress = () => {
        if (buttonRef.current) {
            buttonRef.current.measureInWindow((x, y, width, height) => {
                setDropdownLayout({
                    x,
                    y: y + height + 4,
                    width,
                    height
                });
                setIsOpen(true);
            });
        }
    };

    const handleSelect = (skill: string) => {
        onSelect(skill);
        setIsOpen(false);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            <View ref={buttonRef} collapsable={false}>
                <TouchableOpacity
                    onPress={handlePress}
                    className="flex-row justify-center items-center px-4 py-2 rounded-[10px] bg-white border border-transparent"
                    style={{ minHeight: 36 }}
                    activeOpacity={0.7}
                >
                    <View className="flex-row items-center" style={{ gap: 12 }}>
                        <PlusIcon />
                        <Text className="text-[15px] text-left text-[#717182]">
                            Add
                        </Text>
                        <View style={{ transform: [{ rotate: isOpen ? '180deg' : '0deg' }] }}>
                            <ChevronDownIcon />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <Modal
                visible={isOpen}
                transparent
                animationType="fade"
                onRequestClose={handleClose}
            >
                <Pressable
                    style={{ flex: 1, backgroundColor: 'transparent' }}
                    onPress={handleClose}
                >
                    <View style={{ flex: 1 }}>
                        <Pressable
                            onPress={(e) => e.stopPropagation()}
                            style={{
                                position: 'absolute',
                                top: dropdownLayout.y,
                                left: dropdownLayout.x,
                                width: dropdownLayout.width > 0 ? dropdownLayout.width : 300,
                                maxHeight: 300,
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
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    nestedScrollEnabled
                                    style={{ maxHeight: 300 }}
                                >
                                    {unselectedSkills.length > 0 ? (
                                        unselectedSkills.map((skill, index) => (
                                            <TouchableOpacity
                                                key={skill}
                                                className={`flex-row items-center justify-between px-3 py-3 bg-white ${index < unselectedSkills.length - 1 ? 'border-b border-gray-100' : ''
                                                    }`}
                                                activeOpacity={0.7}
                                                onPress={() => handleSelect(skill)}
                                            >
                                                <Text className="flex-1 text-sm text-left text-[#242424] opacity-60">
                                                    {skill}
                                                </Text>
                                            </TouchableOpacity>
                                        ))
                                    ) : (
                                        <View className="px-3 py-3">
                                            <Text className="text-sm text-left text-[#242424] opacity-60">
                                                No more skills available
                                            </Text>
                                        </View>
                                    )}
                                </ScrollView>
                            </View>
                        </Pressable>
                    </View>
                </Pressable>
            </Modal>
        </>
    );
}



















































