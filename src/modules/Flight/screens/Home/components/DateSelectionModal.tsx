import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useAppSelector } from '@src/store/hooks';
import { selectLowerPriceDatesSet, selectMonthNamesLong, selectWeekDaysShort } from '@modules/Flight/store';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('window');

interface DateSelectionModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (date: Date) => void;
  initialDate?: Date;
  title?: string;
}

export default function DateSelectionModal({
  visible,
  onClose,
  onConfirm,
  initialDate,
  title = 'Select Departure Date',
}: DateSelectionModalProps) {
  const weekDays = useAppSelector(selectWeekDaysShort);
  const months = useAppSelector(selectMonthNamesLong);
  const lowerPriceDates = useAppSelector(selectLowerPriceDatesSet);

  const defaultDate = initialDate || new Date(2025, 9, 10); // Default to Oct 10, 2025
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate);
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 9, 1)); // October 2025
  const [flexibleDates, setFlexibleDates] = useState(false);

  useEffect(() => {
    if (visible) {
      // If no initial date provided, default to October 10, 2025
      const dateToUse = initialDate || new Date(2025, 9, 10);
      setSelectedDate(dateToUse);
      setCurrentMonth(new Date(dateToUse.getFullYear(), dateToUse.getMonth(), 1));
      setFlexibleDates(false);
    }
  }, [visible, initialDate]);

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    setSelectedDate(newDate);
    onConfirm(newDate);
    onClose();
  };

  const handleQuickDate = (type: 'today' | 'tomorrow' | 'weekend' | 'next-month') => {
    const today = new Date();
    let date = new Date(today);

    switch (type) {
      case 'today':
        date = new Date(today);
        break;
      case 'tomorrow':
        date = new Date(today);
        date.setDate(date.getDate() + 1);
        break;
      case 'weekend':
        date = new Date(today);
        const dayOfWeek = date.getDay();
        const daysUntilSaturday = 6 - dayOfWeek;
        date.setDate(date.getDate() + (daysUntilSaturday > 0 ? daysUntilSaturday : daysUntilSaturday + 7));
        break;
      case 'next-month':
        date = new Date(today);
        date.setMonth(date.getMonth() + 1);
        date.setDate(1);
        break;
    }
    setSelectedDate(date);
    setCurrentMonth(new Date(date.getFullYear(), date.getMonth(), 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    const prevMonthDays = getDaysInMonth(prevMonth);

    // Previous month's trailing days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = prevMonthDays - i;
      days.push({ day, isCurrentMonth: false, date: new Date(prevMonth.getFullYear(), prevMonth.getMonth(), day) });
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ day, isCurrentMonth: true, date: new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day) });
    }

    // Next month's leading days to fill the grid (42 cells total for 6 rows)
    const totalCells = 42;
    const remainingCells = totalCells - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, day),
      });
    }

    return days;
  };

  const calendarDays = renderCalendar();
  const monthYear = `${months[currentMonth.getMonth()]} ${currentMonth.getFullYear()}`;

  const isDateSelected = (day: number, isCurrentMonth: boolean, date: Date) => {
    if (!isCurrentMonth) return false;
    // Compare date components - ensure we're comparing the same date
    const selectedDay = selectedDate.getDate();
    const selectedMonth = selectedDate.getMonth();
    const selectedYear = selectedDate.getFullYear();
    
    const dateDay = date.getDate();
    const dateMonth = date.getMonth();
    const dateYear = date.getFullYear();
    
    return (
      selectedDay === dateDay &&
      selectedMonth === dateMonth &&
      selectedYear === dateYear &&
      day === dateDay
    );
  };

  const isDateLowerPrice = (day: number, isCurrentMonth: boolean, date: Date) => {
    if (!isCurrentMonth) return false;
    // Lower price dates should not include the selected date (selected date has priority)
    const isSelected = isDateSelected(day, isCurrentMonth, date);
    if (isSelected) return false;
    
    // Check if this date is in the lower price list for October 2025
    return date.getMonth() === 9 && date.getFullYear() === 2025 && lowerPriceDates.has(day);
  };

  const handleClose = () => {
    onClose();
  };

  const handleConfirmAndClose = () => {
    onConfirm(selectedDate);
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View className="flex-1 justify-end" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
        <TouchableOpacity className="absolute inset-0" activeOpacity={1} onPress={handleClose} />
        <View
          className="bg-white rounded-t-3xl"
          style={{
            height: SCREEN_HEIGHT * 0.85,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -46 },
            shadowOpacity: 0.1,
            shadowRadius: 102,
            elevation: 20,
          }}
        >
          {/* Header */}
          <View className="px-6 pt-[19px] pb-4 relative">
            <TouchableOpacity onPress={handleClose} className="absolute right-6 top-5 w-10 h-10 items-center justify-center z-10">
              <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                <Path
                  d="M17.9882 5.99609L5.99609 17.9882"
                  stroke="#242424"
                  strokeWidth={1.99868}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <Path
                  d="M5.99609 5.99609L17.9882 17.9882"
                  stroke="#242424"
                  strokeWidth={1.99868}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </Svg>
            </TouchableOpacity>

            <View className="gap-1.5 mb-[35px]">
              <Text className="text-[18px] font-bold text-[#242424]">{title}</Text>
              <Text className="text-[16px] text-[#898989]">Choose your departure date. Green dots indicate lower prices.</Text>
            </View>

            {/* Quick Date Buttons */}
            <View className="flex-row gap-2 mb-3">
              <TouchableOpacity
                onPress={() => handleQuickDate('today')}
                className="h-[28px] px-[10px] rounded-[7px] bg-white border-[1.07px] border-black/10 items-center justify-center"
              >
                <Text className="text-[12px] text-[#242424]">Today</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleQuickDate('tomorrow')}
                className="h-[28px] px-[10px] rounded-[7px] bg-white border-[1.07px] border-black/10 items-center justify-center"
              >
                <Text className="text-[12px] text-[#242424]">Tomorrow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleQuickDate('weekend')}
                className="h-[28px] px-[10px] rounded-[7px] bg-white border-[1.07px] border-black/10 items-center justify-center"
              >
                <Text className="text-[12px] text-[#242424]">This Weekend</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleQuickDate('next-month')}
                className="h-[28px] px-[10px] rounded-[7px] bg-white border-[1.07px] border-black/10 items-center justify-center"
              >
                <Text className="text-[12px] text-[#242424]">Next Month</Text>
              </TouchableOpacity>
            </View>

            {/* Flexible Dates Toggle */}
            <View className="flex-row items-center gap-2 mb-[40px]">
              <TouchableOpacity
                onPress={() => setFlexibleDates(!flexibleDates)}
                className={`w-[30px] h-[18px] rounded-full border-[1.07px] border-transparent flex-row items-center ${
                  flexibleDates ? 'bg-[#00a551]' : 'bg-[#cbced4]'
                }`}
              >
                <View
                  className={`w-[15px] h-[15px] rounded-full bg-white ${
                    flexibleDates ? 'ml-[13px]' : 'ml-[1px]'
                  }`}
                  style={{
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 0.78 },
                    shadowOpacity: 0.05,
                    shadowRadius: 1.56,
                    elevation: 1,
                  }}
                />
              </TouchableOpacity>
              <Text className="text-[13px] text-[#242424]">Flexible dates (±3 days)</Text>
            </View>
          </View>

          <ScrollView className="flex-1 px-4" showsVerticalScrollIndicator={false}>
            {/* Calendar Container */}
            <View className="mb-6">
              {/* Calendar Header */}
              <View className="flex-row items-center justify-between mb-4 px-1">
                <TouchableOpacity
                  onPress={handlePrevMonth}
                  className="w-[37px] h-[37px] rounded-[10px] border-[1.6px] border-black/10 items-center justify-center opacity-50"
                >
                  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
                    <Path
                      d="M13.0725 15.6865L7.84351 10.4575L13.0725 5.22852"
                      stroke="#242424"
                      strokeWidth={1.74301}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
                <Text className="text-[18px] font-medium text-[#242424]">{monthYear}</Text>
                <TouchableOpacity
                  onPress={handleNextMonth}
                  className="w-[37px] h-[37px] rounded-[10px] border-[1.6px] border-black/10 items-center justify-center opacity-50"
                >
                  <Svg width={21} height={21} viewBox="0 0 21 21" fill="none">
                    <Path
                      d="M7.84375 15.6865L13.0728 10.4575L7.84375 5.22852"
                      stroke="#242424"
                      strokeWidth={1.74301}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>

              {/* Weekday Labels */}
              <View className="flex-row mb-2">
                {weekDays.map((day) => (
                  <View key={day} className="flex-1 items-center">
                    <Text className="text-[17px] text-[#717182]">{day}</Text>
                  </View>
                ))}
              </View>

              {/* Calendar Grid */}
              <View className="flex-row flex-wrap">
                {calendarDays.map(({ day, isCurrentMonth, date }, index) => {
                  const selected = isDateSelected(day, isCurrentMonth, date);
                  const lowerPrice = isDateLowerPrice(day, isCurrentMonth, date);

                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => isCurrentMonth && handleDateSelect(day)}
                      disabled={!isCurrentMonth}
                      style={{ width: (SCREEN_WIDTH - 32) / 7 }}
                      className={`h-[42px] items-center justify-center rounded-[10px] ${
                        selected
                          ? 'bg-[#edfdf3]'
                          : lowerPrice
                            ? 'bg-green-100'
                            : 'bg-transparent'
                      } ${!isCurrentMonth ? 'opacity-50' : ''}`}
                    >
                      <Text
                        className={`text-[18px] ${
                          selected
                            ? 'text-[#8bb299] font-medium'
                            : lowerPrice
                              ? 'text-green-800'
                              : isCurrentMonth
                                ? 'text-[#242424]'
                                : 'text-[#717182]'
                        }`}
                      >
                        {day}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            {/* Legend */}
            <View className="flex-row justify-center items-center gap-4 mb-6 pb-4">
              <View className="flex-row items-center gap-1.5">
                <View className="w-[10px] h-[10px] rounded-full bg-[#b9f8cf]" />
                <Text className="text-[16px] text-[#999]">Lower prices</Text>
              </View>
              <View className="flex-row items-center gap-1.5">
                <View className="w-[10px] h-[10px] rounded-full bg-[#f3f4f7]" />
                <Text className="text-[16px] text-[#999]">Regular prices</Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
