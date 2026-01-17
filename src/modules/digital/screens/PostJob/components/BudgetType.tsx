import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import TimelineDropdown from './shared/TimelineDropdown';

export type BudgetTypeOption = 'fixed' | 'hourly';
export type VisibilityOption = 'public' | 'invite-only';

export interface BudgetTypeProps {
    selectedType: BudgetTypeOption;
    onSelect: (type: BudgetTypeOption) => void;
    budget: string;
    onBudgetChange: (value: string) => void;
    maximum: string;
    onMaximumChange: (value: string) => void;
    timeline: string;
    onTimelineSelect: (value: string) => void;
    timelineOptions: string[];
    visibility: VisibilityOption;
    onVisibilitySelect: (type: VisibilityOption) => void;
}

// Radio Button Selected Icon (Green filled circle)
const RadioSelectedIcon = ({ size = 16 }: { size?: number }) => (
    <View
        className="items-center justify-center"
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: '#E6F6EE',
            borderWidth: 1,
            borderColor: '#07B556',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.05,
            shadowRadius: 2,
            elevation: 2,
        }}
    >
        <View
            style={{
                width: size / 2,
                height: size / 2,
                borderRadius: size / 4,
                backgroundColor: '#00A551',
            }}
        />
    </View>
);

// Radio Button Unselected Icon (Empty circle)
const RadioUnselectedIcon = ({ size = 16 }: { size?: number }) => (
    <View
        className="items-center justify-center bg-white"
        style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1.22,
            borderColor: 'rgba(0, 0, 0, 0.1)',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 1,
        }}
    />
);

export default function BudgetType({
    selectedType,
    onSelect,
    budget,
    onBudgetChange,
    maximum,
    onMaximumChange,
    timeline,
    onTimelineSelect,
    timelineOptions,
    visibility,
    onVisibilitySelect,
}: BudgetTypeProps) {
    return (
        <View className="flex-col items-start self-stretch space-y-2.5 px-4 pb-4">
            <Text className="w-full text-[18px] font-medium text-left text-[#242424]">
                Budget Type *
            </Text>
            <View className="flex-col items-start self-stretch space-y-2.5 mb-8">
                {/* Fixed Price Option */}
                <TouchableOpacity
                    onPress={() => onSelect('fixed')}
                    className="self-stretch h-[46px] rounded-[10px] bg-white border border-black/10 flex-row items-center px-2"
                    activeOpacity={0.7}
                >
                    <View className="flex-row items-center flex-1" style={{ gap: 8 }}>
                        {selectedType === 'fixed' ? (
                            <RadioSelectedIcon />
                        ) : (
                            <RadioUnselectedIcon />
                        )}
                        <View className="flex-row items-center flex-1" style={{ gap: 10 }}>
                            <Text className="text-[16px] font-medium text-left text-[#242424]">
                                Fixed Price
                            </Text>
                            <Text className="text-[14px] text-left text-[#717182] flex-1">
                                One-time payment for the entire project
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Hourly Rate Option */}
                <TouchableOpacity
                    onPress={() => onSelect('hourly')}
                    className="self-stretch h-[52px] rounded-xl bg-white border border-black/10 flex-row items-center px-2"
                    activeOpacity={0.7}
                >
                    <View className="flex-row items-center flex-1" style={{ gap: 8 }}>
                        {selectedType === 'hourly' ? (
                            <RadioSelectedIcon />
                        ) : (
                            <RadioUnselectedIcon />
                        )}
                        <View className="flex-row items-center flex-1" style={{ gap: 10 }}>
                            <Text className="text-[16px] font-medium text-left text-[#242424]">
                                Hourly Rate
                            </Text>
                            <Text className="text-[14px] text-left text-[#717182] flex-1">
                                Pay per hour worked
                            </Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Budget Input Fields */}
            <View className="flex-row justify-between items-start self-stretch" style={{ gap: 12 }}>
                {/* Budget Field */}
                <View className="flex-col items-start flex-1" style={{ gap: 7 }}>
                    <Text className="w-full text-[16px] font-medium text-left text-[#242424]">
                        Budget (৳) *
                    </Text>
                    <View className="flex-row items-center self-stretch h-[40px] px-3 py-1 rounded-[10px] bg-white border border-transparent">
                        <TextInput
                            className="flex-1 text-[16px] text-left text-[#242424]"
                            value={budget}
                            onChangeText={onBudgetChange}
                            placeholder="20000"
                            placeholderTextColor="rgba(36, 36, 36, 0.6)"
                            keyboardType="numeric"
                        />
                    </View>
                </View>

                {/* Maximum Field */}
                <View className="flex-col items-start flex-1 mb-6" style={{ gap: 7 }}>
                    <Text className="w-full text-[16px] font-medium text-left text-[#242424]">
                        Maximum
                    </Text>
                    <View className="flex-row items-center self-stretch h-[40px] px-3 py-1 rounded-[10px] bg-white border border-transparent">
                        <TextInput
                            className="flex-1 text-[16px] text-left text-[#242424]"
                            value={maximum}
                            onChangeText={onMaximumChange}
                            placeholder="30000"
                            placeholderTextColor="rgba(36, 36, 36, 0.6)"
                            keyboardType="numeric"
                        />
                    </View>
                </View>
            </View>

            {/* Project Timeline Field */}
            <View className="flex-col items-start self-stretch space-y-2.5 mb-7">
                <Text className="w-full text-[16px] font-medium text-left text-[#242424]">
                    Project Timeline *
                </Text>
                <TimelineDropdown
                    selectedValue={timeline}
                    options={timelineOptions}
                    onSelect={onTimelineSelect}
                    placeholder="1-2 weeks"
                />
            </View>

            {/* Visibility Field */}
            <View className="flex-col items-start self-stretch space-y-2.5">
                <Text className="w-full text-[16px] font-medium text-left text-[#242424]">
                    Visibility *
                </Text>
                <View className="flex-col items-start self-stretch space-y-2.5">
                    {/* Public Option */}
                    <TouchableOpacity
                        onPress={() => onVisibilitySelect('public')}
                        className="self-stretch h-[46px] rounded-xl bg-white border border-black/10 flex-row items-center px-3"
                        activeOpacity={0.7}
                    >
                        <View className="flex-row items-center flex-1" style={{ gap: 8 }}>
                            {visibility === 'public' ? (
                                <RadioSelectedIcon />
                            ) : (
                                <RadioUnselectedIcon />
                            )}
                            <View className="flex-row items-center flex-1" style={{ gap: 8 }}>
                                <Text className="text-[16px] text-left text-[#242424]">
                                    Public
                                </Text>
                                <Text className="text-[14px] text-left text-[#242424] opacity-60 flex-1">
                                    Anyone can see and bid
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Invite Only Option */}
                    <TouchableOpacity
                        onPress={() => onVisibilitySelect('invite-only')}
                        className="self-stretch h-[46px] rounded-xl bg-white border border-black/10 flex-row items-center px-3"
                        activeOpacity={0.7}
                    >
                        <View className="flex-row items-center flex-1" style={{ gap: 8 }}>
                            {visibility === 'invite-only' ? (
                                <RadioSelectedIcon />
                            ) : (
                                <RadioUnselectedIcon />
                            )}
                            <View className="flex-row items-center flex-1" style={{ gap: 8 }}>
                                <Text className="text-[16px] text-left text-[#242424]">
                                    Invite Only
                                </Text>
                                <Text className="text-[14px] text-left text-[#242424] opacity-60 flex-1">
                                    Only invited freelancers can see
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

