import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import type { Conversation } from '@modules/digital/store';


const MenuDotsIcon = () => (
  <Svg width={4} height={18} viewBox="0 0 4 18" fill="none">
    {[2, 9, 16].map((cy) => (
      <Path
        key={cy}
        d={`M2 ${cy - 1}C1.44772 ${cy - 1} 1 ${cy - 0.55229} 1 ${cy}C1 ${cy + 0.5523} 1.44772 ${cy + 1} 2 ${cy + 1
          }C2.55228 ${cy + 1} 3 ${cy + 0.5523} 3 ${cy}C3 ${cy - 0.55229} 2.55228 ${cy - 1} 2 ${cy - 1}Z`}
        fill="#242424"
        opacity={0.7}
      />
    ))}
  </Svg>
);

interface Props {
  conversation: Conversation;
  onPress?: (conversation: Conversation) => void;
}

export const ConversationCard: React.FC<Props> = ({ conversation: item, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.85}
    className="flex-row items-start px-4 py-4 border-b border-black/10 bg-[#F1F3F7]"
    onPress={() => onPress?.(item)}
  >
    {/* Avatar + online dot */}
    <View className="mr-4">
      <View className="w-[54px] h-[54px] rounded-full overflow-hidden bg-[#E5E7EB]">
        {item.avatar ? (
          <Image source={item.avatar} className="w-full h-full" resizeMode="cover" />
        ) : (
          <View className="flex-1 items-center justify-center">
            <Text className="text-base font-semibold text-[#0F172A]">
              {item.name
                .split(' ')
                .slice(0, 2)
                .map((word) => word[0])
                .join('')}
            </Text>
          </View>
        )}
      </View>
      {item.online && (
        <View className="w-[14px] h-[14px] rounded-full bg-[#00a551] border-2 border-white absolute bottom-0 right-0" />
      )}
    </View>

    {/* Text content */}
    <View className="flex-1">
      <View className="flex-row items-center justify-between">
        <Text className="text-[18px] font-semibold text-[#242424]" numberOfLines={1}>
          {item.name}
        </Text>
        <Text className="text-[13px] text-[#242424] opacity-60">{item.timestamp}</Text>
      </View>
      <Text className="text-[14px] text-[#242424] opacity-60 mt-1" numberOfLines={1}>
        {item.preview}
      </Text>
      <View
        className="mt-2 self-start px-4 py-[5px] rounded-[10px] border-[1px]"
        style={{
          borderColor: item.tagBorder ?? 'rgba(0, 165, 81, 0.25)',
          // backgroundColor: item.tagBackground ?? 'rgba(7, 181, 86, 0.05)',
        }}
      >
        <Text
          className="text-[12px] font-medium"
          style={{ color: item.tagColor ?? '#00a551' }}
        >
          {item.tag}
        </Text>
      </View>
    </View>

    {/* Right side: unread badge + menu */}
    <View className="items-center ml-3">
      {item.unread > 0 && (
        <View
          className="min-w-[22px] px-2 py-1 rounded-full items-center justify-center"
          style={{ backgroundColor: '#07B556' }}
        >
          <Text className="text-white text-xs font-semibold">{item.unread}</Text>
        </View>
      )}
      <View className="mt-3 p-1 rounded-full">
        <MenuDotsIcon />
      </View>
    </View>
  </TouchableOpacity>
);


