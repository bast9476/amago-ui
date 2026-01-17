import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  StatusBar,
} from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import {
  selectYouEarn,
  selectNetworkEarns,
  selectPointsBreakdown,
} from '@modules/ecommerce/store';

const screenHeight = Dimensions.get('window').height;

export interface PointsDistributionModalProps {
  visible: boolean;
  onClose: () => void;
}

export function PointsDistributionModal({
  visible,
  onClose,
}: PointsDistributionModalProps) {
  // Get points distribution data from Redux
  const youEarn = useAppSelector(selectYouEarn);
  const networkEarns = useAppSelector(selectNetworkEarns);
  const breakdown = useAppSelector(selectPointsBreakdown);
  const [isBreakdownExpanded, setIsBreakdownExpanded] = useState(true);

  // Calculate dynamic modal height based on breakdown state
  // When expanded: use max 80% of screen, when collapsed: use smaller height
  const modalHeight = isBreakdownExpanded 
    ? screenHeight * 0.8 
    : screenHeight * 0.63;

  const totalPoints = youEarn + networkEarns;
  const youPercentage = totalPoints > 0 ? Math.round((youEarn / totalPoints) * 100) : 0;
  const networkPercentage = totalPoints > 0 ? Math.round((networkEarns / totalPoints) * 100) : 0;

  // Calculate progress bar widths (30% you, 70% network)
  const progressBarWidth = 100; // Percentage
  const youBarWidth = youPercentage;
  const networkBarWidth = networkPercentage;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.7)" barStyle="light-content" translucent />
      <View className="flex-1 justify-end">
        <Pressable
          style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0, 0, 0, 0.7)' }]}
          onPress={onClose}
        />
        <View
          className="w-full z-10"
          style={{
            height: modalHeight,
          }}
        >
          <Pressable onPress={(e) => e.stopPropagation()} style={{ flex: 1 }}>
            <View
              className="bg-white rounded-t-3xl w-full h-full"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -9 },
                shadowOpacity: 0.1,
                shadowRadius: 20,
                elevation: 20,
              }}
            >
              {/* Header */}
              <View className="flex-row justify-between items-center px-6 pt-6 pb-8">
                <Text className="text-2xl font-bold text-left text-[#31C373]">
                  Points Distribution
                </Text>
                <TouchableOpacity
                  onPress={onClose}
                  className="w-10 h-10 items-center justify-center rounded-full"
                  activeOpacity={0.7}
                >
                  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <Path
                      d="M17.9881 5.99609L5.99603 17.9882"
                      stroke="#242424"
                      strokeWidth={1.99868}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M5.99603 5.99609L17.9881 17.9882"
                      stroke="#242424"
                      strokeWidth={1.99868}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingBottom: 20 }}
                nestedScrollEnabled
              >
                {/* Summary Cards */}
                <View className="flex-row gap-4 px-6 mb-6">
                  {/* You Earn Card */}
                  <View className="flex-1 rounded-2xl overflow-hidden relative border-[1.22px] border-[#d0fae5]" style={{ minHeight: 90 }}>
                    <View style={StyleSheet.absoluteFill} pointerEvents="none">
                      <Svg
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: '100%',
                          height: '100%',
                        }}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <Defs>
                          <LinearGradient
                            id="youEarnGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                            gradientUnits="objectBoundingBox"
                          >
                            <Stop offset="0%" stopColor="#ecfdf5" stopOpacity={1} />
                            <Stop offset="100%" stopColor="#f0fdfa" stopOpacity={1} />
                          </LinearGradient>
                        </Defs>
                        <Rect x="0" y="0" width="100" height="100" fill="url(#youEarnGradient)" />
                      </Svg>
                    </View>
                    <View className="p-4 gap-1 relative" style={{ zIndex: 10 }}>
                      <Text className="text-base font-medium text-left text-[#09793c]">
                        You Earn
                      </Text>
                      <Text className="text-[28px] font-semibold text-left text-[#09793c]">
                        {youEarn} Points
                      </Text>
                    </View>
                  </View>

                  {/* Network Earns Card */}
                  <View className="flex-1 rounded-2xl bg-gray-50 border-[1.22px] border-[#f3f4f7] p-4 gap-1" style={{ minHeight: 90 }}>
                    <Text className="text-base font-medium text-left text-[#848484]">
                      Network Earns
                    </Text>
                    <Text className="text-[28px] font-semibold text-left text-[#242424]">
                      {networkEarns} Points
                    </Text>
                  </View>
                </View>

                {/* Detailed Breakdown Section */}
                <View className="px-6 mb-6">
                  <TouchableOpacity
                    onPress={() => setIsBreakdownExpanded(!isBreakdownExpanded)}
                    className="flex-row justify-between items-center rounded-[14px] bg-gray-50 px-4 py-4 mb-4"
                    activeOpacity={0.7}
                  >
                    <Text className="text-xl font-medium text-left text-[#242424]">
                      Detailed Breakdown
                    </Text>
                    <Svg
                      width={24}
                      height={24}
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{
                        transform: [{ rotate: isBreakdownExpanded ? '180deg' : '0deg' }],
                      }}
                    >
                      <Path
                        d="M14.9901 12.4918L9.9934 7.49512L4.9967 12.4918"
                        stroke="#242424"
                        strokeWidth={1.66557}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </TouchableOpacity>

                  {isBreakdownExpanded && (
                    <View className="gap-3">
                      {breakdown.map((item) => (
                        <View
                          key={item.level}
                          className="flex-row justify-between items-center rounded-[10px] bg-white border-[1.22px] border-[#f3f4f7] px-3 py-3"
                        >
                          <View className="flex-1">
                            <Text className="text-lg font-semibold text-left text-[#242424] mb-1">
                              Level {item.level}
                            </Text>
                            <Text className="text-base text-left text-[#787878]">
                              {item.description}
                            </Text>
                          </View>
                          <Text className="text-xl font-medium text-left text-[#00a551] ml-4">
                            {item.points} pts
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>

                {/* Progress Bar Section */}
                <View className="px-6 mb-6">
                  <Text className="text-lg font-semibold text-left text-[#333] mb-3">
                    Points Distribution
                  </Text>
                  <View className="h-[18px] rounded-full bg-[#f3f4f7] overflow-hidden mb-2">
                    <View className="flex-row h-full">
                      <View
                        className="h-full"
                        style={{
                          width: `${youBarWidth}%`,
                        }}
                      >
                        <View style={StyleSheet.absoluteFill} pointerEvents="none">
                          <Svg
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              width: '100%',
                              height: '100%',
                            }}
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                          >
                            <Defs>
                              <LinearGradient
                                id="progressGradient"
                                x1="0%"
                                y1="100%"
                                x2="100%"
                                y2="0%"
                                gradientUnits="objectBoundingBox"
                              >
                                <Stop offset="57.95%" stopColor="#07b556" />
                                <Stop offset="124.21%" stopColor="#36d97f" />
                              </LinearGradient>
                            </Defs>
                            <Rect x="0" y="0" width="100" height="100" fill="url(#progressGradient)" />
                          </Svg>
                        </View>
                      </View>
                      <View
                        className="h-full bg-[#99a1af]"
                        style={{
                          width: `${networkBarWidth}%`,
                        }}
                      />
                    </View>
                  </View>
                  <View className="flex-row justify-between">
                    <Text className="text-base font-medium text-left text-[#868686]">
                      You: {youPercentage}%
                    </Text>
                    <Text className="text-base font-medium text-left text-[#868686]">
                      Network: {networkPercentage}%
                    </Text>
                  </View>
                </View>

                {/* Learn More Button */}
                <View className="px-6 mb-6">
                  <TouchableOpacity
                    className="items-center justify-center rounded-[14px] py-3 px-12 overflow-hidden relative"
                    activeOpacity={0.7}
                    style={{
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowOffset: { width: 0, height: 10 },
                      shadowOpacity: 1,
                      shadowRadius: 15,
                      elevation: 10,
                    }}
                  >
                    <View style={StyleSheet.absoluteFill} pointerEvents="none">
                      <Svg
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: '100%',
                          height: '100%',
                        }}
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <Defs>
                          <LinearGradient
                            id="learnMoreGradient"
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                            gradientUnits="objectBoundingBox"
                          >
                            <Stop offset="57.95%" stopColor="#07b556" />
                            <Stop offset="124.21%" stopColor="#36d97f" />
                          </LinearGradient>
                        </Defs>
                        <Rect x="0" y="0" width="100" height="100" fill="url(#learnMoreGradient)" />
                      </Svg>
                    </View>
                    <Text className="text-xl font-semibold text-left text-white relative" style={{ zIndex: 10 }}>
                      Learn More About Points
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}


