import React, { useRef, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, Pressable, ScrollView } from 'react-native'
import Svg, { Path, G, ClipPath, Defs, Rect, LinearGradient, Stop } from 'react-native-svg'
import { ImportPlatformOption } from './shared/ImportPlatformOption'
import { ProjectImageTile } from './shared/ProjectImageTile'
import { SectionCaret } from './shared/SectionCaret'

const BehanceIcon = () => (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 18 16" fill="none">
        <Path
            d="M7.25 7.41172C8.24375 6.93672 8.7625 6.21797 8.7625 5.09922C8.7625 2.89297 7.11875 2.35547 5.22188 2.35547H0V13.4305H5.36875C7.38125 13.4305 9.27188 12.4648 9.27188 10.2148C9.27188 8.82422 8.6125 7.79609 7.25 7.41172ZM2.43438 4.24609H4.71875C5.59688 4.24609 6.3875 4.49297 6.3875 5.51172C6.3875 6.45234 5.77187 6.83047 4.90312 6.83047H2.43438V4.24609ZM5.0375 11.5492H2.43438V8.49922H5.0875C6.15938 8.49922 6.8375 8.94609 6.8375 10.0805C6.8375 11.1992 6.02812 11.5492 5.0375 11.5492ZM16.2406 4.02734H11.75V2.93672H16.2406V4.02734ZM18 9.53672C18 7.16484 16.6125 5.18672 14.0969 5.18672C11.6531 5.18672 9.99375 7.02422 9.99375 9.43047C9.99375 11.9273 11.5656 13.6398 14.0969 13.6398C16.0125 13.6398 17.2531 12.7773 17.85 10.943H15.9062C15.6969 11.6273 14.8344 11.9898 14.1656 11.9898C12.875 11.9898 12.1969 11.2336 12.1969 9.94922H17.9813C17.9906 9.81797 18 9.67734 18 9.53672ZM12.2 8.56172C12.2719 7.50859 12.9719 6.84922 14.0281 6.84922C15.1344 6.84922 15.6906 7.49922 15.7844 8.56172H12.2Z"
            fill="#2563EB"
        />
    </Svg>
)

const DribbbleIcon = () => (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_dribbble)">
            <Path
                d="M8 0.25C3.72662 0.25 0.25 3.72662 0.25 8C0.25 12.2734 3.72662 15.75 8 15.75C12.2734 15.75 15.75 12.2734 15.75 8C15.75 3.72662 12.2734 0.25 8 0.25ZM13.1241 3.82394C14.046 4.95038 14.6043 6.38509 14.6189 7.94753C14.4007 7.90137 12.2121 7.45747 10.0095 7.73447C9.82972 7.29569 9.66006 6.90969 9.42769 6.43403C11.8752 5.43475 12.9845 4.01272 13.1241 3.82394ZM12.3882 3.05844C12.2691 3.22803 11.2726 4.56738 8.91875 5.44966C7.834 3.45666 6.63172 1.81941 6.44875 1.57441C8.548 1.06837 10.7602 1.61409 12.3882 3.05844ZM5.18566 2.01938C5.36019 2.25872 6.54309 3.898 7.63994 5.84778C4.54347 6.67006 1.81619 6.65822 1.52013 6.65431C1.94938 4.60016 3.33369 2.89291 5.18566 2.01938ZM1.38031 8.01009C1.38031 7.94241 1.38166 7.87503 1.38369 7.80781C1.67331 7.81375 4.88119 7.85509 8.187 6.86575C8.3765 7.23662 8.55753 7.61309 8.72369 7.98916C6.32997 8.66337 4.15513 10.5994 3.08209 12.4362C2.02481 11.2627 1.38031 9.71031 1.38031 8.01009ZM3.93678 13.2324C4.62825 11.8188 6.50484 9.99419 9.17362 9.08375C10.103 11.4988 10.4873 13.5229 10.5858 14.1037C8.45728 15.0103 5.89781 14.7616 3.93678 13.2324ZM11.6987 13.4977C11.6308 13.095 11.2785 11.1571 10.4127 8.77787C12.487 8.44581 14.3095 8.98938 14.536 9.06084C14.2409 10.9028 13.1837 12.4935 11.6987 13.4977Z"
                fill="#EC4899"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_dribbble">
                <Path d="M0 0H16V16H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const GitHubIcon = () => (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 16 16" fill="none">
        <G clipPath="url(#clip0_github)">
            <Path
                d="M5.18437 12.4187C5.18437 12.4812 5.1125 12.5312 5.02187 12.5312C4.91875 12.5406 4.84688 12.4906 4.84688 12.4187C4.84688 12.3562 4.91875 12.3062 5.00938 12.3062C5.10313 12.2969 5.18437 12.3469 5.18437 12.4187ZM4.2125 12.2781C4.19063 12.3406 4.25313 12.4125 4.34688 12.4312C4.42813 12.4625 4.52187 12.4312 4.54063 12.3687C4.55938 12.3062 4.5 12.2344 4.40625 12.2063C4.325 12.1844 4.23438 12.2156 4.2125 12.2781ZM5.59375 12.225C5.50313 12.2469 5.44062 12.3063 5.45 12.3781C5.45937 12.4406 5.54063 12.4813 5.63438 12.4594C5.725 12.4375 5.7875 12.3781 5.77812 12.3156C5.76875 12.2563 5.68437 12.2156 5.59375 12.225ZM7.65 0.25C3.31563 0.25 0 3.54063 0 7.875C0 11.3406 2.18125 14.3063 5.29688 15.35C5.69688 15.4219 5.8375 15.175 5.8375 14.9719C5.8375 14.7781 5.82812 13.7094 5.82812 13.0531C5.82812 13.0531 3.64062 13.5219 3.18125 12.1219C3.18125 12.1219 2.825 11.2125 2.3125 10.9781C2.3125 10.9781 1.59687 10.4875 2.3625 10.4969C2.3625 10.4969 3.14062 10.5594 3.56875 11.3031C4.25312 12.5094 5.4 12.1625 5.84688 11.9563C5.91875 11.4563 6.12188 11.1094 6.34688 10.9031C4.6 10.7094 2.8375 10.4562 2.8375 7.45C2.8375 6.59062 3.075 6.15938 3.575 5.60938C3.49375 5.40625 3.22813 4.56875 3.65625 3.4875C4.30937 3.28437 5.8125 4.33125 5.8125 4.33125C6.4375 4.15625 7.10938 4.06563 7.775 4.06563C8.44063 4.06563 9.1125 4.15625 9.7375 4.33125C9.7375 4.33125 11.2406 3.28125 11.8938 3.4875C12.3219 4.57188 12.0563 5.40625 11.975 5.60938C12.475 6.1625 12.7812 6.59375 12.7812 7.45C12.7812 10.4656 10.9406 10.7063 9.19375 10.9031C9.48125 11.15 9.725 11.6187 9.725 12.3531C9.725 13.4062 9.71562 14.7094 9.71562 14.9656C9.71562 15.1687 9.85938 15.4156 10.2563 15.3438C13.3813 14.3062 15.5 11.3406 15.5 7.875C15.5 3.54063 11.9844 0.25 7.65 0.25Z"
                fill="#242424"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_github">
                <Path d="M0 0H15.5V16H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const FigmaIcon = () => (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 12 16" fill="none">
        <G clipPath="url(#clip0_figma)">
            <Path
                d="M0.4375 2.99351C0.4375 1.34024 1.77774 0 3.43103 0H8.56753C10.2208 0 11.5611 1.34024 11.5611 2.99351C11.5611 4.04037 11.0237 4.96175 10.2097 5.49678C11.0237 6.03184 11.5611 6.95319 11.5611 8.00006C11.5611 9.65334 10.2208 10.9936 8.56753 10.9936H8.50253C7.72747 10.9936 7.02119 10.699 6.48956 10.2157V12.974C6.48956 14.6493 5.11428 16 3.44716 16C1.798 16 0.4375 14.6638 0.4375 13.0065C0.4375 11.9597 0.974828 11.0383 1.78873 10.5033C0.974828 9.96822 0.4375 9.04688 0.4375 8.00006C0.4375 6.95319 0.974875 6.03184 1.78883 5.49678C0.974875 4.96175 0.4375 4.04037 0.4375 2.99351ZM5.509 5.98709H3.43103C2.31929 5.98709 1.41806 6.88834 1.41806 8.00006C1.41806 9.1075 2.31234 10.0061 3.41816 10.013C3.42244 10.013 3.42672 10.013 3.43103 10.013H5.509V5.98709ZM6.48956 8.00006C6.48956 9.11178 7.39078 10.013 8.50253 10.013H8.56753C9.67928 10.013 10.5805 9.11178 10.5805 8.00006C10.5805 6.88834 9.67928 5.98709 8.56753 5.98709H8.50253C7.39078 5.98709 6.48956 6.88834 6.48956 8.00006ZM3.43103 10.9936C3.42672 10.9936 3.42244 10.9936 3.41816 10.9936C2.31234 11.0005 1.41806 11.899 1.41806 13.0065C1.41806 14.1141 2.33133 15.0194 3.44716 15.0194C4.58097 15.0194 5.509 14.0996 5.509 12.974V10.9936H3.43103ZM3.43103 0.980556C2.31929 0.980556 1.41806 1.88179 1.41806 2.99351C1.41806 4.10525 2.31929 5.00647 3.43103 5.00647H5.509V0.980556H3.43103ZM6.48956 5.00647H8.56753C9.67928 5.00647 10.5805 4.10525 10.5805 2.99351C10.5805 1.88179 9.67928 0.980556 8.56753 0.980556H6.48956V5.00647Z"
                fill="#9333EA"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_figma">
                <Path d="M0 0H12V16H0V0Z" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>
)

const PlusIcon = () => (
    <Svg width={21} height={24} viewBox="0 0 21 24" fill="none">
        <Path
            d="M12 3.75C12 2.92031 11.3297 2.25 10.5 2.25C9.67031 2.25 9 2.92031 9 3.75V10.5H2.25C1.42031 10.5 0.75 11.1703 0.75 12C0.75 12.8297 1.42031 13.5 2.25 13.5H9V20.25C9 21.0797 9.67031 21.75 10.5 21.75C11.3297 21.75 12 21.0797 12 20.25V13.5H18.75C19.5797 13.5 20.25 12.8297 20.25 12C20.25 11.1703 19.5797 10.5 18.75 10.5H12V3.75Z"
            fill="#9CA3AF"
        />
    </Svg>
)

const ImageIcon = () => (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
        <Path
            d="M0 3C0 1.89688 0.896875 1 2 1H14C15.1031 1 16 1.89688 16 3V13C16 14.1031 15.1031 15 14 15H2C0.896875 15 0 14.1031 0 13V3ZM10.1187 6.32812C9.97812 6.12187 9.74687 6 9.5 6C9.25313 6 9.01875 6.12187 8.88125 6.32812L6.1625 10.3156L5.33437 9.28125C5.19062 9.10312 4.975 9 4.75 9C4.525 9 4.30625 9.10312 4.16563 9.28125L2.16563 11.7812C1.98438 12.0063 1.95 12.3156 2.075 12.575C2.2 12.8344 2.4625 13 2.75 13H5.75H6.75H13.25C13.5281 13 13.7844 12.8469 13.9125 12.6C14.0406 12.3531 14.025 12.0562 13.8687 11.8281L10.1187 6.32812ZM3.5 6C3.89782 6 4.27936 5.84196 4.56066 5.56066C4.84196 5.27936 5 4.89782 5 4.5C5 4.10218 4.84196 3.72064 4.56066 3.43934C4.27936 3.15804 3.89782 3 3.5 3C3.10218 3 2.72064 3.15804 2.43934 3.43934C2.15804 3.72064 2 4.10218 2 4.5C2 4.89782 2.15804 5.27936 2.43934 5.56066C2.72064 5.84196 3.10218 6 3.5 6Z"
            fill="#9CA3AF"
        />
    </Svg>
)

const AddIcon = () => (
    <Svg width={14} height={16} viewBox="0 0 14 16" fill="none">
        <Path
            d="M8 2.5C8 1.94687 7.55312 1.5 7 1.5C6.44688 1.5 6 1.94687 6 2.5V7H1.5C0.946875 7 0.5 7.44688 0.5 8C0.5 8.55312 0.946875 9 1.5 9H6V13.5C6 14.0531 6.44688 14.5 7 14.5C7.55312 14.5 8 14.0531 8 13.5V9H12.5C13.0531 9 13.5 8.55312 13.5 8C13.5 7.44688 13.0531 7 12.5 7H8V2.5Z"
            fill="#9CA3AF"
        />
    </Svg>
)

const VideoIcon = () => (
    <Svg width={'100%'} height={'100%'} viewBox="0 0 27 24" fill="none">
        <Path
            d="M0 6C0 4.34531 1.34531 3 3 3H15C16.6547 3 18 4.34531 18 6V18C18 19.6547 16.6547 21 15 21H3C1.34531 21 0 19.6547 0 18V6ZM26.2078 4.67813C26.6953 4.94063 27 5.44688 27 6V18C27 18.5531 26.6953 19.0594 26.2078 19.3219C25.7203 19.5844 25.1297 19.5562 24.6656 19.2469L20.1656 16.2469L19.5 15.8016V15V9V8.19844L20.1656 7.75312L24.6656 4.75313C25.125 4.44844 25.7156 4.41563 26.2078 4.67813Z"
            fill="#9CA3AF"
        />
    </Svg>
)

const CheckIcon = ({ stroke = '#007C3D' }: { stroke?: string }) => (
    <Svg width={14} height={12} viewBox="0 0 14 12" fill="none">
        <Path
            d="M1.50977 7.1321L4.90267 10.4571L12.1974 2.14453"
            stroke={stroke}
            strokeWidth="2.37503"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
)

export function PortfolioProjectsCard() {
    const [selectedImport, setSelectedImport] = useState<string | null>(null)
    const [featuredProject, setFeaturedProject] = useState(false)
    const [containerLayout, setContainerLayout] = useState({ width: 0, height: 0 })
    const [videoContainerLayout, setVideoContainerLayout] = useState({ width: 0, height: 0 })
    const [projectTags, setProjectTags] = useState<string[]>(['React'])
    const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false)
    const [tagDropdownLayout, setTagDropdownLayout] = useState({ x: 0, y: 0, width: 0 })
    const tagButtonRef = useRef<View>(null)
    const [isCollapsed, setIsCollapsed] = useState(false)

    const importOptions = [
        { id: 'behance', label: 'Behance', icon: <BehanceIcon /> },
        { id: 'dribbble', label: 'Dribbble', icon: <DribbbleIcon /> },
        { id: 'github', label: 'GitHub', icon: <GitHubIcon /> },
        { id: 'figma', label: 'Figma', icon: <FigmaIcon /> },
    ]

    const tagSuggestions = ['React', 'Next.js', 'UI Design', 'Product Strategy', 'Brand Identity', 'UX Research']

    const handleToggleTag = (tag: string) => {
        setProjectTags((prev) =>
            prev.includes(tag) ? prev.filter((existing) => existing !== tag) : [...prev, tag],
        )
    }

    const handleOpenTagDropdown = () => {
        if (tagButtonRef.current) {
            tagButtonRef.current.measureInWindow((x, y, width, height) => {
                setTagDropdownLayout({ x, y: y + height + 4, width })
                setIsTagDropdownOpen(true)
            })
        }
    }

    const handleSelectTag = (tag: string) => {
        if (!projectTags.includes(tag)) {
            setProjectTags((prev) => [...prev, tag])
        }
        setIsTagDropdownOpen(false)
    }

    const availableTags = tagSuggestions.filter((tag) => !projectTags.includes(tag))

    return (
        <>
            <View className="rounded-2xl border border-[#F3F4F7] bg-white px-6 py-9 mt-8" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.08, shadowRadius: 20, elevation: 4 }}>
                <TouchableOpacity
                    activeOpacity={0.85}
                    onPress={() => setIsCollapsed((prev) => !prev)}
                    className="flex-row items-center justify-between"
                >
                    <Text className="text-[22px] font-semibold text-gray-900">Portfolio</Text>
                    <SectionCaret collapsed={isCollapsed} />
                </TouchableOpacity>

                {!isCollapsed && (
                    <View className="space-y-6 mt-8">
                        {/* Import from */}
                        <View className="space-y-3">
                            <Text className="text-base font-semibold text-[#242424]">Import from</Text>
                            <View className="flex-row flex-wrap -mr-3 -mb-3">
                                {importOptions.map((option) => (
                                    <ImportPlatformOption
                                        key={option.id}
                                        label={option.label}
                                        icon={option.icon}
                                        selected={selectedImport === option.id}
                                        onPress={() => setSelectedImport(selectedImport === option.id ? null : option.id)}
                                    />
                                ))}
                            </View>
                        </View>

                        {/* Add Project Form */}
                        <View
                            className="rounded-xl p-6 relative"
                            onLayout={(event) => {
                                const { width, height } = event.nativeEvent.layout
                                setContainerLayout({ width, height })
                            }}
                        >
                            {/* SVG Dotted Border Overlay */}
                            {containerLayout.width > 0 && containerLayout.height > 0 && (
                                <View style={StyleSheet.absoluteFill} pointerEvents="none">
                                    <Svg width={containerLayout.width} height={containerLayout.height}>
                                        <Rect
                                            x="1"
                                            y="1"
                                            width={containerLayout.width - 2}
                                            height={containerLayout.height - 2}
                                            fill="none"
                                            stroke="#D1D5DB"
                                            strokeWidth="2"
                                            strokeDasharray="2, 2"
                                            rx="12"
                                            ry="12"
                                        />
                                    </Svg>
                                </View>
                            )}
                            <View className="items-center mt-3 space-y-1">
                                <View className="w-[21px] h-6">
                                    <PlusIcon />
                                </View>
                                <Text className="text-lg font-medium text-center text-gray-900">Add Project</Text>
                            </View>

                            <View className="mt-7 space-y-4">
                                <View className="h-[58px] rounded-xl bg-white border border-gray-300 px-4 justify-center">
                                    <TextInput
                                        placeholder="Project Title"
                                        placeholderTextColor="#ADAEBC"
                                        className="text-lg text-[#242424]"
                                    />
                                </View>

                                <View className="h-[58px] rounded-xl bg-white border border-gray-300 px-4 justify-center">
                                    <TextInput
                                        placeholder="Your Role"
                                        placeholderTextColor="#ADAEBC"
                                        className="text-lg text-[#242424]"
                                    />
                                </View>

                                {/* Story Section */}
                                <View className="space-y-2">
                                    <Text className="text-base font-medium text-gray-700">Story</Text>
                                    <View className="space-y-5">
                                        <View className="h-[90px] rounded-xl bg-white border border-gray-300 px-4 justify-center">
                                            <TextInput
                                                placeholder="Problem - What challenge did you solve?"
                                                placeholderTextColor="#ADAEBC"
                                                className="text-lg text-[#242424]"
                                                multiline
                                            />
                                        </View>
                                        <View className="h-[90px] rounded-xl bg-white border border-gray-300 px-4 justify-center">
                                            <TextInput
                                                placeholder="Process - How did you approach it?"
                                                placeholderTextColor="#ADAEBC"
                                                className="text-lg text-[#242424]"
                                                multiline
                                            />
                                        </View>
                                        <View className="h-[90px] rounded-xl bg-white border border-gray-300 px-4 justify-center">
                                            <TextInput
                                                placeholder="Result - What was the outcome?"
                                                placeholderTextColor="#ADAEBC"
                                                className="text-lg text-[#242424]"
                                                multiline
                                            />
                                        </View>
                                    </View>
                                </View>

                                {/* Tags */}
                                <View className="flex-row items-center flex-wrap gap-2">
                                    {projectTags.map((tag) => {
                                        const gradientId = `tag-gradient-${tag.replace(/\s+/g, '')}`
                                        return (
                                            <TouchableOpacity
                                                key={tag}
                                                activeOpacity={0.85}
                                                onPress={() => handleToggleTag(tag)}
                                                className="rounded-lg relative px-3 py-1.5"
                                                style={{ flexGrow: 0 }}
                                            >
                                                <View pointerEvents="none" className='rounded-lg overflow-hidden' style={StyleSheet.absoluteFill}>
                                                    <Svg
                                                        className="w-full h-full"
                                                        viewBox="0 0 100 100"
                                                        preserveAspectRatio="none"
                                                    >
                                                        <Defs>
                                                            <LinearGradient
                                                                id={gradientId}
                                                                x1="0%"
                                                                y1="100%"
                                                                x2="100%"
                                                                y2="0%"
                                                                gradientUnits="userSpaceOnUse"
                                                            >
                                                                <Stop offset="0.5795" stopColor="#07B556" />
                                                                <Stop offset="1.2421" stopColor="#36D97F" />
                                                            </LinearGradient>
                                                        </Defs>
                                                        <Rect width="100%" height="100%" rx="0" fill={`url(#${gradientId})`} />
                                                    </Svg>
                                                </View>
                                                <Text className="text-sm font-medium text-center text-white relative z-10">
                                                    {tag}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                    <View ref={tagButtonRef} collapsable={false}>
                                        <TouchableOpacity
                                            className="px-2.5 py-1.5 rounded-lg bg-[#F3F4F7]"
                                            activeOpacity={0.85}
                                            onPress={handleOpenTagDropdown}
                                        >
                                            <Text className="text-sm text-center text-[#242424] opacity-60">+ Add tag</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* Image Upload */}
                                <View className="flex-row items-center space-x-2">
                                    <ProjectImageTile />
                                    <TouchableOpacity className="w-[85px] h-[85px] rounded-xl bg-[#F3F4F7] items-center justify-center">
                                        <View className="w-3.5 h-4">
                                            <AddIcon />
                                        </View>
                                    </TouchableOpacity>
                                </View>

                                {/* Featured Project Checkbox */}
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => setFeaturedProject(!featuredProject)}
                                    className="flex-row items-center space-x-2"
                                >
                                    <View className="w-[14px] h-[14px] rounded-sm">
                                        {featuredProject ? (
                                            <View className="w-[14px] h-[14px] rounded-sm bg-[#00A551] items-center justify-center">
                                                <CheckIcon stroke="#FFFFFF" />
                                            </View>
                                        ) : (
                                            <View className="w-[14px] h-[14px] rounded-sm bg-white border-[0.5px] border-[#242424]" />
                                        )}
                                    </View>
                                    <Text className="text-base text-[#242424]">Set as featured project</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Intro Video */}
                        <View className="space-y-3">
                            <Text className="text-lg font-semibold text-[#242424]">Intro Video (Optional)</Text>
                            <View
                                className="rounded-xl py-8 px-6 relative"
                                onLayout={(event) => {
                                    const { width, height } = event.nativeEvent.layout
                                    setVideoContainerLayout({ width, height })
                                }}
                            >
                                {/* SVG Dotted Border Overlay */}
                                {videoContainerLayout.width > 0 && videoContainerLayout.height > 0 && (
                                    <View style={StyleSheet.absoluteFill} pointerEvents="none">
                                        <Svg width={videoContainerLayout.width} height={videoContainerLayout.height}>
                                            <Rect
                                                x="1"
                                                y="1"
                                                width={videoContainerLayout.width - 2}
                                                height={videoContainerLayout.height - 2}
                                                fill="none"
                                                stroke="#D1D5DB"
                                                strokeWidth="2"
                                                strokeDasharray="2, 2"
                                                rx="12"
                                                ry="12"
                                            />
                                        </Svg>
                                    </View>
                                )}
                                <View className="items-center space-y-1">
                                    <View className="w-8 h-7">
                                        <VideoIcon />
                                    </View>
                                    <Text className="text-base font-medium text-center text-[#242424] opacity-80">
                                        Upload 30-60s video (MP4/WebM)
                                    </Text>
                                    <Text className="text-sm text-center text-[#242424] opacity-60">
                                        Tip: Introduce yourself and showcase your best work
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                )}
            </View>

            <Modal
                visible={isTagDropdownOpen}
                transparent
                animationType="fade"
                onRequestClose={() => setIsTagDropdownOpen(false)}
            >
                <Pressable style={{ flex: 1 }} onPress={() => setIsTagDropdownOpen(false)}>
                    <Pressable
                        onPress={(e) => e.stopPropagation()}
                        style={{
                            position: 'absolute',
                            top: tagDropdownLayout.y,
                            left: tagDropdownLayout.x,
                            width: tagDropdownLayout.width || 160,
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
                            <ScrollView nestedScrollEnabled style={{ maxHeight: 240 }}>
                                {availableTags.length > 0 ? (
                                    availableTags.map((tag, index) => (
                                        <TouchableOpacity
                                            key={tag}
                                            className={`px-3 py-3 bg-white ${index < availableTags.length - 1 ? 'border-b border-gray-100' : ''
                                                }`}
                                            activeOpacity={0.75}
                                            onPress={() => handleSelectTag(tag)}
                                        >
                                            <Text className="text-sm text-[#242424] opacity-70">{tag}</Text>
                                        </TouchableOpacity>
                                    ))
                                ) : (
                                    <View className="px-3 py-3">
                                        <Text className="text-sm text-[#242424] opacity-60">No more tags available</Text>
                                    </View>
                                )}
                            </ScrollView>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </>
    )
}

