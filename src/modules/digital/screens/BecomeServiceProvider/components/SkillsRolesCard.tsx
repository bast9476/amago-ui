import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { WorkModeOption } from './shared/WorkModeOption'
import { PrimaryRoleOption } from './shared/PrimaryRoleOption'
import { SelectablePill } from './shared/SelectablePill'
import { ExperienceOption } from './shared/ExperienceOption'
import { SectionCaret } from './shared/SectionCaret'

const cardShadow = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
}

export function SkillsRolesCard() {
    const initialRoles = [
        'UI/UX Designer',
        'Mobile Dev',
        'Content Writer',
        'Web Developer',
        'Data Analyst',
        'Others',
    ]

    const [roles, setRoles] = useState(
        initialRoles.map((label) => ({
            label,
            selected: label === 'Web Developer',
        })),
    )

    const handleToggleRole = (label: string) => {
        setRoles((prev) =>
            prev.map((role) =>
                role.label === label
                    ? {
                        ...role,
                        selected: !role.selected,
                    }
                    : role,
            ),
        )
    }

    const initialTopSkillPills = [
        { label: 'React', highlighted: true },
        { label: 'Node.js', highlighted: true },
        { label: 'JavaScript', highlighted: false },
        { label: 'TypeScript', highlighted: false },
        { label: 'MongoDB', highlighted: false },
        { label: 'Express', highlighted: false },
        { label: 'HTML/CSS', highlighted: false },
    ]

    const initialToolPills = [
        { label: 'VS Code', highlighted: true },
        { label: 'GitHub', highlighted: true },
        { label: 'Figma', highlighted: false },
        { label: 'Postman', highlighted: false },
    ]

    const [topSkillPills, setTopSkillPills] = useState(initialTopSkillPills)
    const [toolPills, setToolPills] = useState(initialToolPills)
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleToggleTopSkill = (label: string) => {
        setTopSkillPills((prev) =>
            prev.map((pill) =>
                pill.label === label
                    ? { ...pill, highlighted: !pill.highlighted }
                    : pill,
            ),
        )
    }

    const handleToggleTool = (label: string) => {
        setToolPills((prev) =>
            prev.map((pill) =>
                pill.label === label
                    ? { ...pill, highlighted: !pill.highlighted }
                    : pill,
            ),
        )
    }

    const initialExperienceOptions = [
        {
            title: 'Rising (0-2 years)',
            description: 'Portfolio in progress; competitive pricing',
            selected: false,
        },
        {
            title: 'Intermediate (2-5 years)',
            description: 'Consistent delivery; standard market rates',
            selected: true,
        },
        {
            title: 'Expert (5+ years)',
            description: 'Complex scopes; premium rates',
            selected: false,
        },
    ]

    const [experienceOptions, setExperienceOptions] = useState(initialExperienceOptions)

    const handleSelectExperience = (title: string) => {
        setExperienceOptions((prev) =>
            prev.map((option) => ({
                ...option,
                selected: option.title === title,
            })),
        )
    }

    const [workMode, setWorkMode] = useState<'remote' | 'hybrid'>('remote')

    const initialWorkDistances = [
        { label: '5km', highlighted: false },
        { label: '10km', highlighted: false },
        { label: '25km', highlighted: true },
    ]

    const [workDistances, setWorkDistances] = useState(initialWorkDistances)

    const handleToggleDistance = (label: string) => {
        setWorkDistances((prev) =>
            prev.map((dist) =>
                dist.label === label
                    ? { ...dist, highlighted: !dist.highlighted }
                    : dist,
            ),
        )
    }

    const workModeOptions = [
        {
            label: 'Remote only',
            selected: workMode === 'remote',
            onPress: () => setWorkMode('remote'),
        },
        {
            label: 'Hybrid',
            selected: workMode === 'hybrid',
            onPress: () => setWorkMode('hybrid'),
            distances: workDistances,
            onToggleDistance: handleToggleDistance,
        },
    ]

    return (
        <View className="rounded-2xl border border-[#F3F4F7] bg-white px-5 py-9 mt-8" style={cardShadow}>
            <TouchableOpacity
                activeOpacity={0.85}
                onPress={() => setIsCollapsed((prev) => !prev)}
                className="flex-row items-center justify-between"
            >
                <Text className="text-[22px] font-semibold text-gray-900">Skills & Roles</Text>
                <SectionCaret collapsed={isCollapsed} />
            </TouchableOpacity>

            {!isCollapsed && (
                <View className="space-y-8 mt-8">
                    <View className="space-y-2">
                        <Text className="text-base font-semibold text-[#242424]">Primary Roles</Text>
                        <View className="border border-[#F3F4F7] rounded-2xl px-2 py-3">
                            <View className="flex-row flex-wrap">
                                {roles.map((role, index) => (
                                    <PrimaryRoleOption
                                        key={role.label}
                                        index={index}
                                        label={role.label}
                                        selected={role.selected}
                                        onPress={() => handleToggleRole(role.label)}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>

                    <View className="space-y-3">
                        <Text className="text-base font-semibold text-[#242424]">Top Skills</Text>
                        <View className="flex-row flex-wrap -mr-3 -mb-3">
                            {topSkillPills.map((pill) => (
                                <SelectablePill
                                    key={pill.label}
                                    label={pill.label}
                                    highlighted={pill.highlighted}
                                    onPress={() => handleToggleTopSkill(pill.label)}
                                />
                            ))}
                        </View>
                    </View>

                    <View className="space-y-3">
                        <Text className="text-base font-semibold text-[#242424]">Tools</Text>
                        <View className="flex-row flex-wrap -mr-3 -mb-3">
                            {toolPills.map((pill) => (
                                <SelectablePill
                                    key={pill.label}
                                    label={pill.label}
                                    highlighted={pill.highlighted}
                                    onPress={() => handleToggleTool(pill.label)}
                                />
                            ))}
                        </View>
                    </View>

                    <View className="space-y-3">
                        <Text className="text-base font-semibold text-[#242424] mb-4">Experience Level</Text>
                        <View className="space-y-3">
                            {experienceOptions.map((option, index) => (
                                <ExperienceOption
                                    index={index}
                                    key={option.title}
                                    title={option.title}
                                    description={option.description}
                                    selected={option.selected}
                                    onPress={() => handleSelectExperience(option.title)}
                                />
                            ))}
                        </View>
                    </View>

                    <View className="space-y-3">
                        <Text className="text-base font-semibold text-[#242424] mb-4">Work Mode</Text>
                        <View className="space-y-3">
                            {workModeOptions.map((option, index) => (
                                <WorkModeOption
                                    index={index}
                                    key={option.label}
                                    label={option.label}
                                    selected={option.selected}
                                    onPress={option.onPress}
                                    distances={option.distances}
                                    onToggleDistance={option.onToggleDistance}
                                />
                            ))}
                        </View>
                    </View>

                    <View className="rounded-2xl border-2 border-[#00A551] bg-[#E6F6EE] px-4 py-4 space-y-2">
                        <Text className="text-lg font-medium text-[#242424]">Live Preview</Text>
                        <View className="space-y-1">
                            <Text className="text-base text-gray-600">Intermediate Web Developer</Text>
                            <Text className="text-sm text-gray-600">React • Node.js • 2-5 years experience</Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

