import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import CategoryDropdown from './shared/CategoryDropdown';
import SkillDropdown from './shared/SkillDropdown';

export interface PostJobFormProps {
    jobTitle: string;
    onJobTitleChange: (text: string) => void;
    selectedCategory: string;
    onCategorySelect: (category: string) => void;
    categoryOptions: string[];
    skills: string[];
    onSkillRemove: (skill: string) => void;
    onSkillAdd: (skill: string) => void;
    availableSkills: string[];
    description: string;
    onDescriptionChange: (text: string) => void;
}

// Close X Icon
const CloseIcon = ({ size = 12, color = '#030213' }: { size?: number; color?: string }) => (
    <Svg width={size} height={size} viewBox="0 0 12 12" fill="none">
        <Path
            d="M8.97868 2.99219L2.99292 8.97795"
            stroke={color}
            strokeWidth="0.997627"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <Path
            d="M2.99292 2.99219L8.97868 8.97795"
            stroke={color}
            strokeWidth="0.997627"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);

export default function PostJobForm({
    jobTitle,
    onJobTitleChange,
    selectedCategory,
    onCategorySelect,
    categoryOptions,
    skills,
    onSkillRemove,
    onSkillAdd,
    availableSkills,
    description,
    onDescriptionChange,
}: PostJobFormProps) {
    return (
        <View className="flex-1 px-4 py-8">
            {/* Main Container - Responsive with padding */}
            <View className="w-full space-y-[18px]">
                {/* Job Title Field */}
                <View className="flex-col items-start self-stretch space-y-2.5">
                    <Text className="w-full text-[18px] font-medium text-left text-[#242424]">
                        Job Title  *
                    </Text>
                    <View className="flex-row items-center h-11 rounded-[10px] bg-white px-3">
                        <TextInput
                            className="flex-1 text-[17px] text-left text-[#717182]"
                            value={jobTitle}
                            onChangeText={onJobTitleChange}
                            placeholder="Modern UI/UX Design for Banking App"
                            placeholderTextColor="#717182"
                        />
                    </View>
                </View>

                {/* Category Field */}
                <View className="flex-col items-start self-stretch space-y-2.5">
                    <Text className="w-full text-[18px] font-medium text-left text-[#242424]">
                        Category *
                    </Text>
                    <CategoryDropdown
                        selectedValue={selectedCategory}
                        options={categoryOptions}
                        onSelect={onCategorySelect}
                        placeholder="Select a category"
                    />
                </View>

                {/* Required Skills Field */}
                <View className="flex-col items-start self-stretch space-y-2">
                    <Text className="w-full text-[18px] font-medium text-left text-[#242424]">
                        Required Skills *
                    </Text>
                    <View className="flex-row flex-wrap items-center self-stretch" style={{ gap: 8 }}>
                        {/* Skill Tags */}
                        {skills.map((skill, index) => (
                            <View
                                key={index}
                                className="flex-row items-center px-2.5 py-2 rounded-[10px] bg-white border border-transparent"
                                style={{ minHeight: 36 }}
                            >
                                <View
                                    className="justify-center"
                                    style={{
                                        height: 15,
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        className="text-[15px] text-[#030213]"
                                        style={{
                                            lineHeight: 15,
                                            includeFontPadding: false
                                        }}
                                    >
                                        {skill}
                                    </Text>
                                </View>
                                <View
                                    className="ml-1 justify-center"
                                    style={{
                                        width: 12,
                                        height: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() => onSkillRemove(skill)}
                                        hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
                                        style={{
                                            width: 12,
                                            height: 12,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <CloseIcon />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ))}
                        {/* Add Skill Dropdown */}
                        <SkillDropdown
                            availableSkills={availableSkills}
                            selectedSkills={skills}
                            onSelect={onSkillAdd}
                        />
                    </View>
                </View>

                {/* Description Field */}
                <View className="flex-col items-start self-stretch space-y-2.5">
                    <View className="flex-col items-start self-stretch space-y-2.5">
                        <Text className="w-full text-[18px] font-medium text-left text-[#242424]">
                            Description *
                        </Text>
                        <View className="flex-col items-start self-stretch min-h-[210px] rounded-[10px] bg-white border border-transparent px-3 py-2">
                            <TextInput
                                className="w-full text-[17px] text-left text-[#242424]"
                                value={description}
                                onChangeText={onDescriptionChange}
                                placeholder="Describe what you need in detail..."
                                placeholderTextColor="rgba(36, 36, 36, 0.6)"
                                multiline
                                textAlignVertical="top"
                                style={{ minHeight: 150 }}
                            />
                        </View>
                    </View>
                    <Text className="w-full text-[11.5px] text-left text-[#717182]">
                        Include goals, deliverables, and any specific requirements *
                    </Text>
                </View>
            </View>
        </View>
    );
}

