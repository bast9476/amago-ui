import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const ProjectSummaryCard = () => {
    return (
        <View className="px-5">
            <View className="rounded-2xl bg-white border border-black/10 shadow-sm shadow-black/5 px-5 py-6 space-y-7">
                <View className="space-y-7">
                    <Text className="text-[21px] font-semibold text-[#242424]">Project Summary</Text>
                    <View className="space-y-3">
                        <Text className="text-[17px] font-medium text-[#242424]">Banking App UI/UX Design</Text>
                        <View className="flex-row justify-between">
                            <Text className="text-[16px] text-[#242424]/60">Freelancer</Text>
                            <Text className="text-[16px] font-medium text-black">Sarah Ahmed</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-[16px] text-[#242424]/60">Total paid</Text>
                            <Text className="text-[16px] font-medium text-black">৳25,000</Text>
                        </View>
                        <View className="flex-row justify-between">
                            <Text className="text-[16px] text-[#242424]/60">Duration</Text>
                            <Text className="text-[16px] font-medium text-black">12 days</Text>
                        </View>
                    </View>
                </View>
                <View className="h-px bg-black/10" />
                <View className="flex-row space-x-3">
                    <TouchableOpacity className="flex-1 h-10 rounded-[10px] border border-black/10 bg-white flex-row items-center justify-center space-x-2">
                        <Svg width={20} height={20} viewBox="0 0 16 16" fill="none">
                            <Path d="M7.995 9.995V2" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
                            <Path
                                d="M13.991 9.992V12.657C13.991 13.011 13.851 13.349 13.601 13.599C13.351 13.849 13.012 13.989 12.658 13.989H3.331C2.978 13.989 2.639 13.849 2.389 13.599C2.139 13.349 1.999 13.011 1.999 12.657V9.992"
                                stroke="#242424"
                                strokeWidth={1.33245}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path d="M4.664 6.664L7.995 9.995L11.326 6.664" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                        <Text className="text-[16px] font-[400] text-black">Download Files</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 h-10 rounded-[10px] border border-black/10 bg-white flex-row items-center justify-center space-x-2">
                        <Svg width={20} height={20} viewBox="0 0 16 16" fill="none">
                            <Path
                                d="M11.992 5.329C13.096 5.329 13.991 4.435 13.991 3.331C13.991 2.227 13.096 1.332 11.992 1.332C10.888 1.332 9.993 2.227 9.993 3.331C9.993 4.435 10.888 5.329 11.992 5.329Z"
                                stroke="#242424"
                                strokeWidth={1.33245}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M3.997 9.993C5.101 9.993 5.996 9.099 5.996 7.995C5.996 6.891 5.101 5.996 3.997 5.996C2.894 5.996 1.999 6.891 1.999 7.995C1.999 9.099 2.894 9.993 3.997 9.993Z"
                                stroke="#242424"
                                strokeWidth={1.33245}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path
                                d="M11.992 14.657C13.096 14.657 13.991 13.763 13.991 12.659C13.991 11.555 13.096 10.66 11.992 10.66C10.888 10.66 9.993 11.555 9.993 12.659C9.993 13.763 10.888 14.657 11.992 14.657Z"
                                stroke="#242424"
                                strokeWidth={1.33245}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <Path d="M5.723 9L10.273 11.652" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
                            <Path d="M10.267 4.336L5.723 6.988" stroke="#242424" strokeWidth={1.33245} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                        <Text className="text-[16px] font-[400] text-black">Share</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ProjectSummaryCard

