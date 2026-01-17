import React, { useMemo, useState } from 'react';
import { Modal, ScrollView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect, G, ClipPath } from 'react-native-svg';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
  decrementExtraBaggage,
  incrementExtraBaggage,
  selectSeatMap,
  selectSeatSelection,
  setSelectedSeat,
} from '@modules/Flight/store';

const SEAT_TYPE_AVAILABLE = 'available';
const SEAT_TYPE_STANDARD = 'standard';
const SEAT_TYPE_OCCUPIED = 'occupied';
const SEAT_TYPE_EXIT = 'exit';
const SEAT_TYPE_SELECTED = 'selected';

const SEAT_LEGENDS = [
  { label: 'Available', color: '#F3E8FF' },
  { label: 'Occupied', color: '#D1D5DC' },
  { label: 'Exit row (+500 BDT)', color: '#DBEAFE' },
  { label: 'Selected', color: '#00A551' },
];

const SEAT_STYLE_MAP = {
  [SEAT_TYPE_AVAILABLE]: { background: 'bg-purple-50', stroke: '#AD46FF' },
  [SEAT_TYPE_STANDARD]: { background: 'bg-white', stroke: '#737373' },
  [SEAT_TYPE_OCCUPIED]: { background: 'bg-[#d1d5dc]', stroke: '#999999' },
  [SEAT_TYPE_EXIT]: { background: 'bg-blue-100', stroke: '#2B7FFF' },
  [SEAT_TYPE_SELECTED]: { background: 'bg-[#00a551]', stroke: '#ffffff' },
} as const;

interface ExtraItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  action: string | React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
}

const ExtraItem = ({ icon, title, subtitle, action, onPress, disabled }: ExtraItemProps) => {
  const isActionText = typeof action === 'string';
  const isAddAction = isActionText && action === 'Add';

  return (
    <View
      className="rounded-2xl bg-white border border-neutral-200 p-5"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
      }}
    >
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-3 flex-1">
          <View className="w-10 h-10 rounded-[16px] items-center justify-center overflow-hidden">
            <Svg width={40} height={40} viewBox="0 0 40 40" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
              <Defs>
                <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <Stop offset="0%" stopColor="#07B556" />
                  <Stop offset="100%" stopColor="#36D97F" />
                </LinearGradient>
              </Defs>
              <Rect width="40" height="40" rx={16} fill="url(#gradient)" />
            </Svg>
            <View style={{ zIndex: 10 }}>{icon}</View>
          </View>
          <View className="flex-1">
            <Text className="text-[16px] font-medium text-[#242424]">{title}</Text>
            <Text className="text-[14px] text-[#898989]">{subtitle}</Text>
          </View>
        </View>
        {isActionText ? (
          <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            className={
              isAddAction
                ? 'w-[52.69px] h-8 px-3 rounded-[6.8px] items-center justify-center bg-neutral-200/30 border border-neutral-200'
                : `px-3 py-2 rounded-[7px] ${disabled ? 'bg-neutral-200/30 opacity-50' : ''}`
            }
          >
            <Text
              className={
                isAddAction
                  ? 'text-sm font-medium text-[#242424]'
                  : `text-[16px] ${disabled ? 'text-[#242424]' : 'text-[#00a551]'}`
              }
            >
              {action}
            </Text>
          </TouchableOpacity>
        ) : (
          <View>{action}</View>
        )}
      </View>
    </View>
  );
};

export default function SeatsAndExtrasSection() {
  const dispatch = useAppDispatch();
  const [showSeatModal, setShowSeatModal] = useState(false);
  const { selectedSeatId, extraBaggage } = useAppSelector(selectSeatSelection);
  const { rows, leftSeats, rightSeats, occupiedSeatIds, availableSeatIds, exitRowSeatIds } =
    useAppSelector(selectSeatMap);
  const { height } = useWindowDimensions();
  const modalHeight = Math.min(height * 0.9, 725);
  const dividerAfterRow = '2';
  const rowSpacing = 8;
  const dividerSpacingTop = 10;

  const allSeats = useMemo(
    () => rows.flatMap((row) => [...leftSeats, ...rightSeats].map((col) => `${row}${col}`)),
    [rows, leftSeats, rightSeats],
  );
  const occupiedSeats = useMemo(() => new Set(occupiedSeatIds), [occupiedSeatIds]);
  const availableSeats = useMemo(() => new Set(availableSeatIds), [availableSeatIds]);
  const exitRowSeats = useMemo(() => new Set(exitRowSeatIds), [exitRowSeatIds]);
  const standardSeats = useMemo(() => {
    const standard = new Set(allSeats);
    availableSeats.forEach((seat) => standard.delete(seat));
    exitRowSeats.forEach((seat) => standard.delete(seat));
    occupiedSeats.forEach((seat) => standard.delete(seat));
    return standard;
  }, [allSeats, availableSeats, exitRowSeats, occupiedSeats]);

  const getSeatType = (seatId: string) => {
    if (selectedSeatId === seatId) return SEAT_TYPE_SELECTED;
    if (occupiedSeats.has(seatId)) return SEAT_TYPE_OCCUPIED;
    if (exitRowSeats.has(seatId)) return SEAT_TYPE_EXIT;
    if (availableSeats.has(seatId)) return SEAT_TYPE_AVAILABLE;
    if (standardSeats.has(seatId)) return SEAT_TYPE_STANDARD;
    return SEAT_TYPE_STANDARD;
  };

  return (
    <View className="px-5 mt-[59px]">
      <Text className="text-[24px] font-bold text-[#242424] mb-[12px]">Seats & Extras</Text>

      <View className="gap-3 items-center mt-[1px]">
        {/* Seat Selection */}
        <View className="w-full">
          <ExtraItem
            icon={
              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <Path
                  d="M15.823 7.49595V4.9976C15.823 4.55586 15.6475 4.13222 15.3352 3.81986C15.0228 3.50751 14.5992 3.33203 14.1575 3.33203H5.82963C5.38789 3.33203 4.96425 3.50751 4.6519 3.81986C4.33954 4.13222 4.16406 4.55586 4.16406 4.9976V7.49595"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M2.49854 13.3236C2.49854 13.7654 2.67401 14.189 2.98637 14.5014C3.29872 14.8137 3.72237 14.9892 4.1641 14.9892H15.8231C16.2648 14.9892 16.6884 14.8137 17.0008 14.5014C17.3132 14.189 17.4886 13.7654 17.4886 13.3236V9.15971C17.4886 8.71797 17.3132 8.29433 17.0008 7.98197C16.6884 7.66962 16.2648 7.49414 15.8231 7.49414C15.3813 7.49414 14.9577 7.66962 14.6453 7.98197C14.333 8.29433 14.1575 8.71797 14.1575 9.15971V10.4089C14.1575 10.5193 14.1136 10.6252 14.0355 10.7033C13.9575 10.7814 13.8515 10.8253 13.7411 10.8253H6.24606C6.13563 10.8253 6.02971 10.7814 5.95163 10.7033C5.87354 10.6252 5.82967 10.5193 5.82967 10.4089V9.15971C5.82967 8.71797 5.65419 8.29433 5.34184 7.98197C5.02948 7.66962 4.60584 7.49414 4.1641 7.49414C3.72237 7.49414 3.29872 7.66962 2.98637 7.98197C2.67401 8.29433 2.49854 8.71797 2.49854 9.15971V13.3236Z"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M4.16406 14.9902V16.6558"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M15.8228 14.9902V16.6558"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
            title="Seat Selection"
            subtitle="Auto-assigned at check-in"
            action="Select"
            onPress={() => setShowSeatModal(true)}
          />
        </View>

        {/* Extra Baggage */}
        <View className="w-full">
          <ExtraItem
            icon={
              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <Path
                  d="M4.99662 16.6551C4.55489 16.6551 4.13124 16.4796 3.81889 16.1672C3.50653 15.8549 3.33105 15.4312 3.33105 14.9895V6.66166C3.33105 6.21992 3.50653 5.79628 3.81889 5.48393C4.13124 5.17157 4.55489 4.99609 4.99662 4.99609H14.99C15.4318 4.99609 15.8554 5.17157 16.1678 5.48393C16.4801 5.79628 16.6556 6.21992 16.6556 6.66166V14.9895C16.6556 15.4312 16.4801 15.8549 16.1678 16.1672C15.8554 16.4796 15.4318 16.6551 14.99 16.6551"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M6.66211 14.9905V3.33158C6.66211 2.88985 6.83759 2.4662 7.14994 2.15385C7.4623 1.84149 7.88594 1.66602 8.32768 1.66602H11.6588C12.1005 1.66602 12.5242 1.84149 12.8365 2.15385C13.1489 2.4662 13.3244 2.88985 13.3244 3.33158V14.9905"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M8.32764 16.6562H11.6588"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M13.3247 18.3214C14.2446 18.3214 14.9903 17.5757 14.9903 16.6558C14.9903 15.7359 14.2446 14.9902 13.3247 14.9902C12.4049 14.9902 11.6592 15.7359 11.6592 16.6558C11.6592 17.5757 12.4049 18.3214 13.3247 18.3214Z"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M6.66215 18.3214C7.58202 18.3214 8.32771 17.5757 8.32771 16.6558C8.32771 15.7359 7.58202 14.9902 6.66215 14.9902C5.74228 14.9902 4.99658 15.7359 4.99658 16.6558C4.99658 17.5757 5.74228 18.3214 6.66215 18.3214Z"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
            title="Extra Baggage"
            subtitle="Standard allowance"
            action={
              <View className="flex-row items-center gap-2">
                <TouchableOpacity
                  onPress={() => dispatch(decrementExtraBaggage())}
                  className="w-8 h-8 items-center justify-center rounded-[10px] bg-neutral-200/30 border border-neutral-200 opacity-50"
                >
                  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <Path
                      d="M3.33105 7.99414H12.6582"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
                <Text className="text-sm text-[#242424]">{extraBaggage}</Text>
                <TouchableOpacity
                  onPress={() => dispatch(incrementExtraBaggage())}
                  className="w-8 h-8 items-center justify-center rounded-[10px] bg-neutral-200/30 border border-neutral-200"
                >
                  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <Path
                      d="M3.33105 7.99414H12.6582"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M7.99463 3.33203V12.6592"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            }
            onPress={() => { }}
            disabled
          />
        </View>

        {/* In-Flight Meal */}
        <View className="w-full">
          <ExtraItem
            icon={
              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <G clipPath="url(#clip0_meal)">
                  <Path
                    d="M13.3244 1.66602L11.409 3.58142C10.9512 4.04843 10.6948 4.67631 10.6948 5.33026C10.6948 5.98421 10.9512 6.61209 11.409 7.07911L12.908 8.57812C13.375 9.03588 14.0029 9.29229 14.6569 9.29229C15.3108 9.29229 15.9387 9.03588 16.4057 8.57812L18.3211 6.66271"
                    stroke="white"
                    strokeWidth={1.66557}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M12.4916 12.4916L2.74806 2.74805C2.41568 3.07371 2.15163 3.46242 1.97136 3.89142C1.79109 4.32041 1.69824 4.78107 1.69824 5.2464C1.69824 5.71173 1.79109 6.17238 1.97136 6.60138C2.15163 7.03037 2.41568 7.41908 2.74806 7.74475L8.82738 13.8241C9.41033 14.407 10.4929 14.407 11.1592 13.8241L12.4916 12.4916ZM12.4916 12.4916L18.3211 18.3211"
                    stroke="white"
                    strokeWidth={1.66557}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M1.74902 18.1547L7.07884 12.9082"
                    stroke="white"
                    strokeWidth={1.66557}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M15.8226 4.16406L9.99316 9.99355"
                    stroke="white"
                    strokeWidth={1.66557}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </G>
                <Defs>
                  <ClipPath id="clip0_meal">
                    <Rect width={19.9868} height={19.9868} fill="white" />
                  </ClipPath>
                </Defs>
              </Svg>
            }
            title="In-Flight Meal"
            subtitle="Pre-order and save"
            action="Select"
            onPress={() => { }}
          />
        </View>

        {/* Travel Insurance */}
        <View className="w-full">
          <ExtraItem
            icon={
              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                <Path
                  d="M16.6556 10.827C16.6556 14.9909 13.7408 17.0729 10.2765 18.2804C10.0951 18.3419 9.898 18.3389 9.7185 18.2721C6.2458 17.0729 3.33105 14.9909 3.33105 10.827V4.99752C3.33105 4.77666 3.41879 4.56483 3.57497 4.40866C3.73115 4.25248 3.94297 4.16474 4.16384 4.16474C5.8294 4.16474 7.91136 3.1654 9.36041 1.89957C9.53683 1.74883 9.76127 1.66602 9.99332 1.66602C10.2254 1.66602 10.4498 1.74883 10.6262 1.89957C12.0836 3.17373 14.1572 4.16474 15.8228 4.16474C16.0437 4.16474 16.2555 4.25248 16.4117 4.40866C16.5678 4.56483 16.6556 4.77666 16.6556 4.99752V10.827Z"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M7.49512 9.99369L9.16068 11.6593L12.4918 8.32812"
                  stroke="white"
                  strokeWidth={1.66557}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            }
            title="Travel Insurance"
            subtitle="Add protection for 500 BDT"
            action="Add"
            onPress={() => { }}
          />
        </View>
      </View>

      <Modal
        visible={showSeatModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSeatModal(false)}
      >
        <View className="flex-1 bg-black/40 justify-end">
          <View
            className="bg-white rounded-t-3xl border-t border-black/10"
            style={{
              height: modalHeight,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -8 },
              shadowOpacity: 0.12,
              shadowRadius: 12,
              elevation: 8,
            }}
          >
            <View className="px-5 pt-6">
              <View className="flex-row items-start justify-between">
                <View className="flex-1 pr-4">
                  <Text className="text-xl font-bold text-[#242424]">Select Your Seat</Text>
                  <Text className="text-sm text-neutral-500">Choose your preferred seat for the flight</Text>
                </View>
                <TouchableOpacity
                  onPress={() => setShowSeatModal(false)}
                  className="w-8 h-8 items-center justify-center"
                >
                  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
                    <Path
                      d="M11.9923 3.99805L3.99756 11.9928"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <Path
                      d="M3.99756 3.99805L11.9923 11.9928"
                      stroke="#242424"
                      strokeWidth={1.33245}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>

            <View className="flex-row flex-wrap gap-3 mt-6">
              {SEAT_LEGENDS.map((item) => (
                <View key={item.label} className="flex-row items-center gap-2">
                  <View
                    style={{
                      width: 24.72,
                      height: 24.72,
                      borderRadius: 4.12,
                      borderWidth: 1.26,
                      borderColor: '#E5E7EB',
                      backgroundColor: item.color,
                    }}
                  />
                  <Text className="text-[12px] text-neutral-500">{item.label}</Text>
                </View>
              ))}
              </View>
            </View>

            <ScrollView className="flex-1 px-4 mt-6">
              <View className="bg-gray-50 rounded-2xl px-3.5 py-5">
                <View className="items-center mb-4">
                  <Text className="text-sm text-[#999]">Front of Aircraft</Text>
                </View>

                <View className="gap-0">
                  {rows.map((row) => (
                    <React.Fragment key={row}>
                      <View
                        className="flex-row items-center justify-between"
                        style={{ marginBottom: row === dividerAfterRow ? dividerSpacingTop : rowSpacing }}
                      >
                        <View className="flex-row gap-2">
                        {leftSeats.map((col) => {
                          const seatId = `${row}${col}`;
                          const type = getSeatType(seatId);
                          const isDisabled = type === SEAT_TYPE_OCCUPIED;
                          const seatStyle = SEAT_STYLE_MAP[type];

                          return (
                            <TouchableOpacity
                              key={seatId}
                              disabled={isDisabled}
                              onPress={() => dispatch(setSelectedSeat(seatId))}
                              className={`w-10 h-10 rounded-[10px] border border-neutral-200 items-center justify-center ${
                                seatStyle.background
                              }`}
                            >
                              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <Path
                                  d="M15.823 7.49595V4.9976C15.823 4.55586 15.6475 4.13222 15.3352 3.81986C15.0228 3.50751 14.5992 3.33203 14.1575 3.33203H5.82963C5.38789 3.33203 4.96425 3.50751 4.6519 3.81986C4.33954 4.13222 4.16406 4.55586 4.16406 4.9976V7.49595"
                                  stroke={seatStyle.stroke}
                                  strokeWidth={1.66557}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <Path
                                  d="M2.49854 13.3236C2.49854 13.7654 2.67401 14.189 2.98637 14.5014C3.29872 14.8137 3.72237 14.9892 4.1641 14.9892H15.8231C16.2648 14.9892 16.6884 14.8137 17.0008 14.5014C17.3132 14.189 17.4886 13.7654 17.4886 13.3236V9.15971C17.4886 8.71797 17.3132 8.29433 17.0008 7.98197C16.6884 7.66962 16.2648 7.49414 15.8231 7.49414C15.3813 7.49414 14.9577 7.66962 14.6453 7.98197C14.333 8.29433 14.1575 8.71797 14.1575 9.15971V10.4089C14.1575 10.5193 14.1136 10.6252 14.0355 10.7033C13.9575 10.7814 13.8515 10.8253 13.7411 10.8253H6.24606C6.13563 10.8253 6.02971 10.7814 5.95163 10.7033C5.87354 10.6252 5.82967 10.5193 5.82967 10.4089V9.15971C5.82967 8.71797 5.65419 8.29433 5.34184 7.98197C5.02948 7.66962 4.60584 7.49414 4.1641 7.49414C3.72237 7.49414 3.29872 7.66962 2.98637 7.98197C2.67401 8.29433 2.49854 8.71797 2.49854 9.15971V13.3236Z"
                                  stroke={seatStyle.stroke}
                                  strokeWidth={1.66557}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            </TouchableOpacity>
                          );
                        })}
                      </View>

                      <View className="w-8" />

                        <View className="flex-row gap-2">
                        {rightSeats.map((col) => {
                          const seatId = `${row}${col}`;
                          const type = getSeatType(seatId);
                          const isDisabled = type === SEAT_TYPE_OCCUPIED;
                          const seatStyle = SEAT_STYLE_MAP[type];

                          return (
                            <TouchableOpacity
                              key={seatId}
                              disabled={isDisabled}
                              onPress={() => dispatch(setSelectedSeat(seatId))}
                              className={`w-10 h-10 rounded-[10px] border border-neutral-200 items-center justify-center ${
                                seatStyle.background
                              }`}
                            >
                              <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                                <Path
                                  d="M15.823 7.49595V4.9976C15.823 4.55586 15.6475 4.13222 15.3352 3.81986C15.0228 3.50751 14.5992 3.33203 14.1575 3.33203H5.82963C5.38789 3.33203 4.96425 3.50751 4.6519 3.81986C4.33954 4.13222 4.16406 4.55586 4.16406 4.9976V7.49595"
                                  stroke={seatStyle.stroke}
                                  strokeWidth={1.66557}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <Path
                                  d="M2.49854 13.3236C2.49854 13.7654 2.67401 14.189 2.98637 14.5014C3.29872 14.8137 3.72237 14.9892 4.1641 14.9892H15.8231C16.2648 14.9892 16.6884 14.8137 17.0008 14.5014C17.3132 14.189 17.4886 13.7654 17.4886 13.3236V9.15971C17.4886 8.71797 17.3132 8.29433 17.0008 7.98197C16.6884 7.66962 16.2648 7.49414 15.8231 7.49414C15.3813 7.49414 14.9577 7.66962 14.6453 7.98197C14.333 8.29433 14.1575 8.71797 14.1575 9.15971V10.4089C14.1575 10.5193 14.1136 10.6252 14.0355 10.7033C13.9575 10.7814 13.8515 10.8253 13.7411 10.8253H6.24606C6.13563 10.8253 6.02971 10.7814 5.95163 10.7033C5.87354 10.6252 5.82967 10.5193 5.82967 10.4089V9.15971C5.82967 8.71797 5.65419 8.29433 5.34184 7.98197C5.02948 7.66962 4.60584 7.49414 4.1641 7.49414C3.72237 7.49414 3.29872 7.66962 2.98637 7.98197C2.67401 8.29433 2.49854 8.71797 2.49854 9.15971V13.3236Z"
                                  stroke={seatStyle.stroke}
                                  strokeWidth={1.66557}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </Svg>
                            </TouchableOpacity>
                          );
                        })}
                        </View>
                      </View>
                      {row === dividerAfterRow && (
                        <View
                          className="self-stretch"
                          style={{
                            height: 16,
                            marginBottom: rowSpacing,
                            borderTopWidth: 1.22,
                            borderColor: '#E5E7EB',
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}

                  <View className="items-center mt-4">
                    <Text className="text-sm text-[#999]">Back of Aircraft</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
