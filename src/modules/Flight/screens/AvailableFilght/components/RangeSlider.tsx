import React, { useState, useRef, useCallback, useMemo } from 'react';
import { View, Text, PanResponder, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop, Rect, Circle } from 'react-native-svg';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const SLIDER_WIDTH = SCREEN_WIDTH - 64; // Account for padding
const SLIDER_HEIGHT = 16;
const THUMB_SIZE = 20;

interface RangeSliderProps {
  min: number;
  max: number;
  minValue: number;
  maxValue: number;
  onValueChange: (min: number, max: number) => void;
  formatLabel?: (value: number) => string;
}

export default function RangeSlider({
  min,
  max,
  minValue,
  maxValue,
  onValueChange,
  formatLabel = (val) => val.toString(),
}: RangeSliderProps) {
  const [minVal, setMinVal] = useState(minValue);
  const [maxVal, setMaxVal] = useState(maxValue);
  const isDraggingRef = useRef(false);
  const startMinValRef = useRef(minValue);
  const startMaxValRef = useRef(maxValue);
  // Refs to track current values for PanResponder handlers
  const currentMinValRef = useRef(minValue);
  const currentMaxValRef = useRef(maxValue);

  // Sync state with props only when not dragging
  React.useEffect(() => {
    if (!isDraggingRef.current) {
      setMinVal(minValue);
      setMaxVal(maxValue);
      startMinValRef.current = minValue;
      startMaxValRef.current = maxValue;
      currentMinValRef.current = minValue;
      currentMaxValRef.current = maxValue;
    }
  }, [minValue, maxValue]);

  // Update refs whenever state changes
  React.useEffect(() => {
    currentMinValRef.current = minVal;
  }, [minVal]);

  React.useEffect(() => {
    currentMaxValRef.current = maxVal;
  }, [maxVal]);

  const getPercentage = useCallback((value: number) => ((value - min) / (max - min)) * 100, [min, max]);
  const getValueFromPercentage = useCallback((percentage: number) => min + (percentage / 100) * (max - min), [min, max]);

  const minPercentage = useMemo(() => getPercentage(minVal), [minVal, getPercentage]);
  const maxPercentage = useMemo(() => getPercentage(maxVal), [maxVal, getPercentage]);

  const minThumbX = useMemo(() => (minPercentage / 100) * SLIDER_WIDTH - THUMB_SIZE / 2, [minPercentage]);
  const maxThumbX = useMemo(() => (maxPercentage / 100) * SLIDER_WIDTH - THUMB_SIZE / 2, [maxPercentage]);

  // Check if min thumb should be draggable (only if minValue is not at the absolute minimum)
  const isMinThumbDraggable = useMemo(() => minValue > min, [minValue, min]);

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        isDraggingRef.current = true;
        startMinValRef.current = currentMinValRef.current;
      },
      onPanResponderMove: (evt, gestureState) => {
        // Calculate position directly from gesture, not from stale closure values
        const startX = (getPercentage(startMinValRef.current) / 100) * SLIDER_WIDTH;
        const newX = startX + gestureState.dx;
        const newPercentage = Math.max(0, Math.min(100, (newX / SLIDER_WIDTH) * 100));
        const newValue = getValueFromPercentage(newPercentage);
        const currentMax = currentMaxValRef.current;
        // Allow dragging to min, but ensure it doesn't exceed max - 1
        const clampedValue = Math.max(min, Math.min(Math.round(newValue), currentMax - 1));
        
        // Update state immediately
        setMinVal(clampedValue);
        // Call callback immediately for responsive updates
        onValueChange(clampedValue, currentMax);
      },
      onPanResponderRelease: () => {
        isDraggingRef.current = false;
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        isDraggingRef.current = true;
        startMaxValRef.current = maxVal;
      },
      onPanResponderMove: (evt, gestureState) => {
        // Calculate position directly from gesture, not from stale closure values
        const startX = (getPercentage(startMaxValRef.current) / 100) * SLIDER_WIDTH;
        const newX = startX + gestureState.dx;
        const newPercentage = Math.max(0, Math.min(100, (newX / SLIDER_WIDTH) * 100));
        const newValue = getValueFromPercentage(newPercentage);
        const currentMin = currentMinValRef.current;
        const clampedValue = Math.max(currentMin + 1, Math.min(Math.round(newValue), max));
        
        // Update state immediately
        setMaxVal(clampedValue);
        // Call callback immediately for responsive updates
        onValueChange(currentMin, clampedValue);
      },
      onPanResponderRelease: () => {
        isDraggingRef.current = false;
      },
    })
  ).current;

  return (
    <View className="w-full">
      <View style={{ width: SLIDER_WIDTH, height: SLIDER_HEIGHT }} className="relative">
        {/* Track background with gradient */}
        <Svg width={SLIDER_WIDTH} height={SLIDER_HEIGHT} viewBox={`0 0 ${SLIDER_WIDTH} ${SLIDER_HEIGHT}`}>
          <Defs>
            <LinearGradient id="sliderTrackGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor="#07B556" />
              <Stop offset="100%" stopColor="#36D97F" />
            </LinearGradient>
          </Defs>
          <Rect
            x={3}
            y={2}
            width={SLIDER_WIDTH - 6}
            height={SLIDER_HEIGHT - 4}
            rx={8}
            fill="url(#sliderTrackGrad)"
          />
        </Svg>

        {/* Min Thumb - always visible */}
        <View
          style={{
            position: 'absolute',
            left: minThumbX,
            top: -2,
            width: THUMB_SIZE,
            height: THUMB_SIZE,
          }}
          {...(isMinThumbDraggable ? panResponderMin.panHandlers : {})}
        >
          <Svg width={THUMB_SIZE} height={THUMB_SIZE} viewBox="0 0 20 20">
            <Defs>
              <LinearGradient id="thumbGradMin" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#07B556" />
                <Stop offset="100%" stopColor="#36D97F" />
              </LinearGradient>
            </Defs>
            <Circle cx={10} cy={10} r={9} fill="url(#thumbGradMin)" />
            <Circle cx={10} cy={10} r={7} fill="white" />
          </Svg>
        </View>

        {/* Max Thumb */}
        <View
          style={{
            position: 'absolute',
            left: maxThumbX,
            top: -2,
            width: THUMB_SIZE,
            height: THUMB_SIZE,
          }}
          {...panResponderMax.panHandlers}
        >
          <Svg width={THUMB_SIZE} height={THUMB_SIZE} viewBox="0 0 20 20">
            <Defs>
              <LinearGradient id="thumbGradMax" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0%" stopColor="#07B556" />
                <Stop offset="100%" stopColor="#36D97F" />
              </LinearGradient>
            </Defs>
            <Circle cx={10} cy={10} r={9} fill="url(#thumbGradMax)" />
            <Circle cx={10} cy={10} r={7} fill="white" />
          </Svg>
        </View>
      </View>

      {/* Labels */}
      <View className="flex-row justify-between mt-2">
        <Text className="text-sm font-medium text-[#595959]">{formatLabel(minVal)}</Text>
        <Text className="text-sm font-medium text-[#595959]">{formatLabel(maxVal)}</Text>
      </View>
    </View>
  );
}
