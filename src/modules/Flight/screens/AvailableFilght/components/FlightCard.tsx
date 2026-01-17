import React, { useState, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect, G, ClipPath } from 'react-native-svg';
import { useAppSelector, useAppDispatch } from '@src/store/hooks';
import { selectSelectedFlightId, selectAvailableFlights, setSelectedFlight } from '@modules/Flight/store';
import FlightDetails from './FlightDetails';

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  logo?: any;
  badge?: {
    type: 'cheapest' | 'recommended' | 'few-seats-left';
    label: string;
  };
  departure: {
    time: string;
    code: string;
  };
  arrival: {
    time: string;
    code: string;
  };
  duration: string;
  stops: string;
  onTimePercent: number;
  price: string;
  currency: string;
  points: number;
}

interface FlightCardProps {
  flightId: string;
  onSelect?: (flightId: string) => void;
  onMoreDetails?: (flightId: string) => void;
}

export default function FlightCard({ flightId, onSelect, onMoreDetails }: FlightCardProps) {
  const dispatch = useAppDispatch();
  const selectedFlightId = useAppSelector(selectSelectedFlightId);
  const availableFlights = useAppSelector(selectAvailableFlights);
  const [showDetails, setShowDetails] = useState(false);

  // Get flight data from Redux store
  const flight = useMemo(() => {
    return availableFlights.find((f) => f.id === flightId);
  }, [availableFlights, flightId]);

  // Don't render if flight not found
  if (!flight) {
    return null;
  }

  // Determine if this flight is selected using Redux state
  const isSelected = selectedFlightId === flight.id;

  // Handle flight selection
  const handleSelect = () => {
    if (onSelect) {
      onSelect(flightId);
    } else {
      // Default behavior: dispatch Redux action
      dispatch(setSelectedFlight(flightId));
    }
  };

  return (
    <View
      className="w-full rounded-[13px] bg-white mb-4"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.8 },
        shadowOpacity: isSelected ? 0.15 : 0.1,
        shadowRadius: 2.4,
        elevation: isSelected ? 3 : 2,
      }}
    >
      <View className="p-3">
        {/* Top section: Logo, Airline info, and Price */}
        <View className="flex-row items-start mb-3 relative">
          {/* Left: Logo and flight number */}
          <View className="items-center mr-3">
            <View
              className="w-[38px] h-[38px] rounded-[8px] bg-gray-100 items-center justify-center mb-1"
              style={{
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.06,
                shadowRadius: 1,
                elevation: 1,
              }}
            >
              {flight.logo ? (
                <Image source={flight.logo} className="w-full h-full rounded-[8px]" resizeMode="cover" />
              ) : (
                <Text className="text-xs text-gray-500">{flight.airline.charAt(0)}</Text>
              )}
            </View>
            <Text className="text-[12px] text-center text-neutral-500">{flight.flightNumber}</Text>
          </View>

          {/* Middle: Airline name, badge, and route info */}
          <View className="flex-1 pr-2">
            {/* Airline name and badge */}
            <View className="flex-row items-center gap-1.5 mb-1.5">
              <Text className="text-[14px] font-medium text-[#242424]">{flight.airline}</Text>
              {flight.badge && (
                <View
                  className={`flex-row items-center justify-center overflow-hidden rounded-[6.37px] ${
                    flight.badge.type === 'cheapest'
                      ? 'relative'
                      : flight.badge.type === 'recommended'
                        ? 'bg-blue-100'
                        : 'bg-[#ffedd4]'
                  }`}
                  style={{
                    paddingHorizontal: 5.89,
                    paddingVertical: 1.96,
                    height: 20,
                  }}
                >
                  {flight.badge.type === 'cheapest' && (
                    <View
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: 0,
                      }}
                      pointerEvents="none"
                    >
                      <Svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <Defs>
                          <LinearGradient
                            id={`grad-${flight.id}`}
                            x1="0%"
                            y1="100%"
                            x2="100%"
                            y2="0%"
                          >
                            <Stop offset="57.95%" stopColor="#07B556" />
                            <Stop offset="124.21%" stopColor="#36D97F" />
                          </LinearGradient>
                        </Defs>
                        <Rect width="100" height="100" rx={6.37} fill={`url(#grad-${flight.id})`} />
                      </Svg>
                    </View>
                  )}
                  <Text
                    className={`text-[12px] px-1 ${
                      flight.badge.type === 'cheapest'
                        ? 'text-white'
                        : flight.badge.type === 'recommended'
                          ? 'text-[#1447e6]'
                          : 'text-[#ca3500]'
                    }`}
                    style={{
                      paddingHorizontal: 7,
                      paddingVertical: -1,
                      lineHeight: 12,
                      zIndex: 10,
                      position: 'relative',
                    }}
                  >
                    {flight.badge.label}
                  </Text>
                </View>
              )}
            </View>

            {/* Route: Departure - Arrival */}
            <View className="flex-row items-center gap-1 mb-1.5">
              {/* Departure */}
              <View className="gap-0">
                <Text className="text-[14px] text-[#242424]">{flight.departure.time}</Text>
                <Text className="text-[12px] text-[#999]">{flight.departure.code}</Text>
              </View>

              {/* Route line with plane icon */}
              <View className="flex-row items-center flex-1 px-1.5">
                <View className="flex-1 h-[1px] border-t border-dashed border-[#d1d5dc]" />
                <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
                  <G clipPath="url(#clip0_11_5917)">
                    <Path
                      d="M9.44359 10.1845L8.48861 5.83406L10.3455 3.97716C11.1413 3.18134 11.4066 2.12025 11.1413 1.58971C10.6108 1.32444 9.5497 1.58971 8.75389 2.38553L6.89698 4.24243L2.54653 3.28745C2.28126 3.2344 2.06904 3.3405 1.96293 3.55272L1.80377 3.81799C1.69766 4.08326 1.75072 4.34854 1.96293 4.5077L4.77481 6.3646L3.71373 7.95623H2.1221L1.59155 8.48677L3.18318 9.54786L4.24427 11.1395L4.77481 10.6089V9.01732L6.36644 7.95623L8.22334 10.7681C8.38251 10.9803 8.64778 11.0334 8.91305 10.9273L9.17832 10.8212C9.39054 10.662 9.49665 10.4498 9.44359 10.1845Z"
                      stroke="#99A1AF"
                      strokeWidth={1.06109}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </G>
                  <Defs>
                    <ClipPath id="clip0_11_5917">
                      <Rect width={12.733} height={12.733} fill="white" />
                    </ClipPath>
                  </Defs>
                </Svg>
                <View className="flex-1 h-[1px] border-t border-dashed border-[#d1d5dc]" />
              </View>

              {/* Arrival */}
              <View className="items-end gap-0">
                <Text className="text-[14px] text-[#242424]">{flight.arrival.time}</Text>
                <Text className="text-[12px] text-[#999]">{flight.arrival.code}</Text>
              </View>
            </View>

            {/* Duration and stops */}
            <View className="gap-1">
              <View className="flex-row items-center gap-1">
                <Svg width={9} height={9} viewBox="0 0 9 9" fill="none">
                  <Path
                    d="M4.37695 1.98828V4.37573L5.96858 5.17154"
                    stroke="#737373"
                    strokeWidth={0.795815}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <Path
                    d="M4.37702 8.35659C6.57461 8.35659 8.3561 6.57509 8.3561 4.37751C8.3561 2.17993 6.57461 0.398438 4.37702 0.398438C2.17944 0.398438 0.397949 2.17993 0.397949 4.37751C0.397949 6.57509 2.17944 8.35659 4.37702 8.35659Z"
                    stroke="#737373"
                    strokeWidth={0.795815}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
                <Text className="text-[12px] text-neutral-500">{flight.duration}</Text>
                <Text className="text-[10px] text-neutral-500">•</Text>
                <Text className="text-[12px] text-neutral-500">{flight.stops}</Text>
              </View>
              <Text className="text-[12px] text-[#999]">✓ {flight.onTimePercent}% on-time</Text>
            </View>
          </View>

          {/* Right: Price and Select button */}
          <View className="items-end gap-1">
            <View className="items-end mb-1.5">
              <Text className="text-[16px] font-semibold text-[#242424]">{flight.price} {flight.currency}</Text>
              <Text className="text-[12px] text-[#999]">per adult</Text>
            </View>
            <TouchableOpacity
              onPress={handleSelect}
              className="rounded-full overflow-hidden relative"
              activeOpacity={0.8}
              style={{
                paddingHorizontal: 18,
                paddingVertical: 5,
                minHeight: 25,
              }}
            >
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 0,
                }}
                pointerEvents="none"
              >
                <Svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <Defs>
                    <LinearGradient
                      id={`selectGrad-${flight.id}`}
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <Stop offset="57.95%" stopColor="#07B556" />
                      <Stop offset="124.21%" stopColor="#36D97F" />
                    </LinearGradient>
                  </Defs>
                  <Rect width="100" height="100" rx={2} fill={`url(#selectGrad-${flight.id})`} />
                </Svg>
              </View>
              <Text
                className="text-[14px] font-semibold text-white"
                style={{
                  zIndex: 10,
                  position: 'relative',
                }}
              >
                Select
              </Text>
            </TouchableOpacity>
            <Text className="text-[10px] text-[#00a551]">+{flight.points} pts</Text>
          </View>
        </View>

        {/* More details toggle */}
        <TouchableOpacity
          onPress={() => {
            setShowDetails(!showDetails);
            onMoreDetails?.(flightId);
          }}
          className="flex-row items-center justify-center pt-3 border-t border-gray-100 mt-2 mb-[15px]"
        >
          <Text className="text-[14px] font-medium text-[#3b3b3b] mr-0.5">More details</Text>
          <Svg width={13} height={13} viewBox="0 0 13 13" fill="none">
            <Path
              d={showDetails ? "M3.18335 8.18335L6.36661 5L9.54987 8.18335" : "M3.18335 4.77344L6.36661 7.9567L9.54987 4.77344"}
              stroke="#242424"
              strokeWidth={1.06109}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </TouchableOpacity>

        {/* Expanded More Details Section */}
        {showDetails && <FlightDetails flightId={flightId} />}
      </View>
    </View>
  );
}
