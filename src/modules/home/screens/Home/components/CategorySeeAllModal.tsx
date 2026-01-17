import React from 'react';
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';

export type CategorySeeAllItem = {
  id: string;
  label: string;
};

export interface CategorySeeAllModalProps {
  visible: boolean;
  title: string;
  items: CategorySeeAllItem[];
  onClose: () => void;
}

const CloseIcon = () => (
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
);

const logoIcon = require('@modules/home/assets/logo.png');

const ActionTile = ({ label, index }: { label: string; index: number }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      className="items-center"
      style={{
        width: '25%',
        marginTop: index >= 4 ? 19 : 0,
      }}
    >
      <View className="w-12 h-12 rounded-2xl bg-[#e6f6ee] items-center justify-center">
        <Image source={logoIcon} style={{ width: 20, height: 20 }} resizeMode="contain" />
      </View>
      <Text
        className="text-base font-semibold text-center text-[#242424] mt-[11px]"
        numberOfLines={1}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default function CategorySeeAllModal({
  visible,
  title,
  items,
  onClose,
}: CategorySeeAllModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      hardwareAccelerated
      onRequestClose={onClose}
    >
      <StatusBar backgroundColor="rgba(0, 0, 0, 0.7)" barStyle="light-content" translucent />
      <View className="flex-1 items-center justify-center px-6">
        <Pressable
          style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0, 0, 0, 0.7)' }]}
          onPress={onClose}
        />

        <View className="w-full z-10 items-center justify-center">
          <Pressable onPress={(e) => e.stopPropagation()} className="w-full items-center justify-center">
            <View
              className="bg-white w-full rounded-[14px] border border-black/10"
              style={{
                maxWidth: 360,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 12 },
                shadowOpacity: 0.18,
                shadowRadius: 27,
                elevation: 18,
              }}
            >
              <View className="flex-row justify-between items-center pl-6 pr-4 pt-4">
                <Text className="text-2xl font-bold text-left text-[#242424]">{title}</Text>
                <TouchableOpacity
                  onPress={onClose}
                  className="w-7 h-7 items-center justify-center"
                  activeOpacity={0.7}
                >
                  <CloseIcon />
                </TouchableOpacity>
              </View>

              <View className="px-2 pt-6 pb-8">
                <View className="flex-row flex-wrap justify-between">
                  {items.map((a, index) => (
                    <ActionTile key={a.id} label={a.label} index={index} />
                  ))}
                </View>
              </View>
            </View>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}


