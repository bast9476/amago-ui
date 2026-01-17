import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { CopyIcon, ScanIcon, SearchIcon, ICON_SIZES } from '../icons';
import type { MainHeaderProps } from './types';

interface MainHeaderSearchProps {
  config: NonNullable<MainHeaderProps['searchConfig']>;
}

export default function MainHeaderSearch({ config }: MainHeaderSearchProps) {
  const searchValue = config.behavior.getValue();

  const renderIcon = (iconType: string, index: number, onPress?: () => void) => {
    const iconProps = { size: ICON_SIZES.SEARCH_ACTION_ICON, color: '#242424' };

    switch (iconType) {
      case 'copy':
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            className="w-[37px] h-[37px] rounded-[8px] items-center justify-center ml-2"
          >
            <CopyIcon {...iconProps} />
          </TouchableOpacity>
        );
      case 'scan':
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            className="w-[37px] h-[37px] rounded-[8px] items-center justify-center ml-2"
          >
            <ScanIcon {...iconProps} />
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };

  return (
    <View
      className="w-full h-[54px] bg-[#f3f3f5] rounded-[15px] flex-row items-center justify-between px-[11px] shadow-lg shadow-black/10"
    >
      <View className="flex-row items-center opacity-50 gap-[11px] flex-1">
        <View className="items-center justify-center">
          <SearchIcon size={ICON_SIZES.SEARCH_ICON} color="#99A1AF" />
        </View>
        <TextInput
          placeholder={config.placeholder}
          placeholderTextColor="#242424"
          className="text-[17px] text-[#242424] flex-1"
          value={searchValue}
          onChangeText={config.behavior.onChangeText}
          onSubmitEditing={() => config.behavior.onSubmit?.(searchValue)}
        />
      </View>
      {config.icons && config.icons.length > 0 && (
        <View className="flex-row items-center">
          {config.icons.map((icon, index) => renderIcon(icon.type, index, icon.onPress))}
        </View>
      )}
    </View>
  );
}

