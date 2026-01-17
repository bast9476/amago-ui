import React, { useMemo, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'

const STAR_PATH =
    'M19.2049 3.82343C19.278 3.67589 19.3908 3.5517 19.5306 3.46487C19.6705 3.37804 19.8318 3.33203 19.9965 3.33203C20.1611 3.33203 20.3224 3.37804 20.4623 3.46487C20.6022 3.5517 20.715 3.67589 20.788 3.82343L24.6373 11.6203C24.8909 12.1335 25.2652 12.5775 25.7281 12.9142C26.1911 13.2509 26.7288 13.4702 27.2951 13.5533L35.9036 14.8131C36.0667 14.8367 36.2199 14.9055 36.346 15.0117C36.472 15.1179 36.5658 15.2573 36.6168 15.414C36.6678 15.5707 36.6739 15.7386 36.6344 15.8986C36.5949 16.0586 36.5115 16.2044 36.3935 16.3195L30.1679 22.3817C29.7574 22.7818 29.4502 23.2757 29.2728 23.8208C29.0955 24.366 29.0532 24.9461 29.1498 25.5112L30.6195 34.0763C30.6483 34.2393 30.6307 34.4071 30.5687 34.5606C30.5067 34.7141 30.4028 34.8471 30.2688 34.9444C30.1349 35.0417 29.9763 35.0994 29.8111 35.1109C29.646 35.1224 29.4809 35.0872 29.3348 35.0094L21.6395 30.9635C21.1325 30.6972 20.5683 30.5581 19.9956 30.5581C19.4229 30.5581 18.8588 30.6972 18.3518 30.9635L10.6582 35.0094C10.5121 35.0868 10.3472 35.1215 10.1823 35.1098C10.0175 35.0981 9.85917 35.0403 9.72549 34.9431C9.59181 34.8459 9.4881 34.7131 9.42615 34.5599C9.3642 34.4066 9.3465 34.2391 9.37507 34.0763L10.8431 25.5128C10.9401 24.9475 10.8981 24.367 10.7207 23.8215C10.5433 23.276 10.2359 22.7819 9.82498 22.3817L3.59945 16.3212C3.48046 16.2062 3.39614 16.0602 3.3561 15.8997C3.31606 15.7392 3.3219 15.5707 3.37296 15.4133C3.42402 15.256 3.51824 15.1161 3.6449 15.0097C3.77156 14.9033 3.92556 14.8346 4.08936 14.8114L12.6961 13.5533C13.2631 13.4708 13.8016 13.2518 14.2651 12.9151C14.7287 12.5784 15.1035 12.134 15.3573 11.6203L19.2049 3.82343Z'

const highlightedTags = ['Quality', 'Communication', 'On-time']
const secondaryTags = ['Responsive', 'Creative', 'Professional', 'Exceeded expectations']

const ExperienceFeedbackCard = () => {
    const [selectedTags, setSelectedTags] = useState<string[]>(highlightedTags)
    const [rating, setRating] = useState(5)
    const allTags = useMemo(() => [...highlightedTags, ...secondaryTags], [])

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        )
    }

    return (
        <View className="px-5 mt-8">
            <View className="rounded-2xl bg-white border border-black/10 shadow-sm shadow-black/5 px-5 py-6 space-y-7">
                <View className="space-y-6 mb-2">
                    <Text className="mt-1 text-[21px] font-[500] text-[#242424] mb-4">Rate Your Experience</Text>
                    <View className="mt-2 items-center space-y-5">
                        <View className="flex-row justify-between items-center w-full px-4 space-x-1">
                            {[1, 2, 3, 4, 5].map((value) => {
                                const active = value <= rating
                                return (
                                    <Text
                                        key={value}
                                        onPress={() => setRating(value)}
                                        accessibilityRole="button"
                                        accessibilityState={{ selected: active }}
                                    >
                                        <Svg width={44} height={44} viewBox="0 0 40 40" fill="none">
                                            <Path
                                                d={STAR_PATH}
                                                fill={active ? '#FDC700' : 'transparent'}
                                                stroke="#FDC700"
                                                strokeWidth={3.33273}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </Svg>
                                    </Text>
                                )
                            })}
                        </View>
                        <Text className="text-[17px] text-[#242424] opacity-60 text-center">Outstanding!</Text>
                    </View>
                </View>

                <View className="space-y-3 mb-2">
                    <Text className="text-[18px] font-medium text-[#242424]">What did you like?</Text>
                    <View className="flex-row flex-wrap">
                        {allTags.map((tag) => {
                            const selected = selectedTags.includes(tag)
                            return (
                                <View
                                    key={tag}
                                    className={`mr-2 mb-2 px-3 py-1 rounded-[14px] border ${selected ? 'border-[#07B556] bg-[#07B556]' : 'bg-white border-black/10'
                                        }`}
                                >
                                    <Text
                                        className={`text-[14px] font-[500] ${selected ? 'text-white' : 'text-[#242424]'}`}
                                        onPress={() => toggleTag(tag)}
                                    >
                                        {tag}
                                    </Text>
                                </View>
                            )
                        })}
                    </View>
                </View>

                <View className="space-y-2">
                    <Text className="text-[16.5px] font-medium text-[#242424]">Additional feedback (optional)</Text>
                    <TextInput
                        multiline
                        placeholder="Share your experience working with this freelancer..."
                        placeholderTextColor="#717182"
                        className="min-h-[74px] rounded-[10px] bg-[#f3f3f5] px-3 py-1 text-[17px] text-[#242424]"
                    />
                </View>
            </View>
        </View>
    )
}

export default ExperienceFeedbackCard

