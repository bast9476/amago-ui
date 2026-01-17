import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

export interface CartItemProps {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
  quantity: number;
  onDelete?: (id: string) => void;
  onIncreaseQuantity?: (id: string) => void;
  onDecreaseQuantity?: (id: string) => void;
  index: number;
}

// Delete Icon Component
const DeleteIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 13 13" fill="none">
    <Path
      d="M11.9169 0.0456543C12.0496 0.045693 12.1944 0.0646486 12.3202 0.11499C12.4455 0.165174 12.5588 0.245194 12.66 0.332764L12.662 0.334717C12.7569 0.425961 12.8296 0.54591 12.8807 0.663818H12.8798C12.9427 0.786055 12.9637 0.916567 12.9637 1.05347C12.9637 1.18458 12.9324 1.31517 12.8807 1.43433C12.8282 1.55549 12.7447 1.66514 12.6425 1.76343L7.7655 6.44995L8.66394 7.30444L12.6425 11.1375L12.6434 11.1384C12.8295 11.3273 12.9336 11.5769 12.9237 11.8376C12.9237 12.0983 12.8196 12.3388 12.6229 12.5281C12.4362 12.7076 12.1761 12.8171 11.9061 12.8171C11.6384 12.817 11.3792 12.7285 11.1815 12.5486L11.1805 12.5476L5.56531 7.15015C5.47144 7.05979 5.39914 6.94983 5.34753 6.83081C5.29594 6.7118 5.2646 6.58189 5.26453 6.45093C5.26453 6.31987 5.29557 6.1898 5.34656 6.06226L5.34753 6.0603C5.39916 5.94132 5.47143 5.83128 5.56531 5.74097L11.1805 0.343506C11.2732 0.254511 11.3873 0.174957 11.5126 0.124756H11.5135C11.6461 0.0757557 11.7812 0.0456543 11.9169 0.0456543Z"
      fill="#979A99"
      stroke="#979A99"
      strokeWidth="0.0905797"
    />
    <Path
      d="M1.09216 12.8174C0.959472 12.8173 0.814606 12.7984 0.688843 12.748C0.563534 12.6979 0.450264 12.6178 0.348999 12.5303L0.347046 12.5283C0.252136 12.4371 0.17941 12.3171 0.128296 12.1992L0.129273 12.1992C0.0663424 12.077 0.0453031 11.9465 0.0452882 11.8096C0.0452882 11.6785 0.0766427 11.5479 0.128296 11.4287C0.180874 11.3075 0.264322 11.1979 0.366577 11.0996L5.24353 6.41309L4.34509 5.55859L0.366578 1.72559L0.365602 1.72461C0.179497 1.53576 0.0754619 1.28611 0.0853282 1.02539C0.0853282 0.764756 0.18941 0.524204 0.386109 0.33496C0.572857 0.155467 0.832921 0.0458978 1.10291 0.0458979C1.37059 0.0459927 1.62987 0.134531 1.82752 0.314453L1.82849 0.315429L7.44373 5.71289C7.5376 5.80324 7.60989 5.91321 7.6615 6.03223C7.71309 6.15124 7.74443 6.28115 7.74451 6.41211C7.74451 6.54317 7.71346 6.67323 7.66248 6.80078L7.6615 6.80273C7.60987 6.92172 7.5376 7.03175 7.44373 7.12207L1.82849 12.5195C1.73587 12.6085 1.62176 12.6881 1.49646 12.7383L1.49548 12.7383C1.36293 12.7873 1.22784 12.8174 1.09216 12.8174Z"
      fill="#979A99"
      stroke="#979A99"
      strokeWidth="0.0905797"
    />
  </Svg>
);

// Increment Button Icon
const IncrementIcon = () => (
  <Svg width={46} height={46} viewBox="0 0 42 42" fill="none">
    <Rect
      x="0.452899"
      y="0.453143"
      width="40.462"
      height="40.4606"
      rx="14.9457"
      stroke="#E0E0E0"
      strokeWidth="0.905797"
    />
    <Path
      d="M28.3832 20.6834C28.3832 21.0238 28.2526 21.3529 28.0086 21.5912C27.7702 21.8352 27.441 21.9713 27.1004 21.9713H21.9695V27.1004C21.9695 27.4408 21.8333 27.7699 21.5892 28.0082C21.3508 28.2465 21.0273 28.3827 20.6867 28.3827C20.3462 28.3827 20.017 28.2465 19.7786 28.0082C19.5345 27.7699 19.3983 27.4408 19.3983 27.1004V21.9713H14.2674C13.9268 21.9713 13.5976 21.8352 13.3592 21.5912C13.1208 21.3529 12.9846 21.0238 12.9846 20.6834C12.9846 20.343 13.1208 20.0196 13.3592 19.7756C13.5976 19.5373 13.9268 19.4011 14.2674 19.4011H19.3983V14.2721C19.3983 13.9316 19.5345 13.6026 19.7786 13.3643C20.017 13.1203 20.3462 12.9841 20.6867 12.9841C21.0273 12.9841 21.3508 13.1203 21.5892 13.3643C21.8333 13.6026 21.9695 13.9316 21.9695 14.2721V19.4011H27.1004C27.441 19.4011 27.7702 19.5373 28.0086 19.7756C28.2526 20.0196 28.3832 20.343 28.3832 20.6834Z"
      fill="#00A551"
    />
  </Svg>
);

// Decrement Button Icon
const DecrementIcon = () => (
  <Svg width={46} height={46} viewBox="0 0 42 42" fill="none">
    <Rect
      x="0.452899"
      y="0.452899"
      width="40.462"
      height="40.4606"
      rx="14.9457"
      stroke="#FAFAFA"
      strokeWidth="0.905797"
    />
    <Path
      d="M28.3832 20.6834C28.3832 21.0238 28.2526 21.3529 28.0086 21.5912C27.7702 21.8352 27.441 21.9713 27.1004 21.9713H21.9695H19.3983H14.2674C13.9268 21.9713 13.5976 21.8352 13.3592 21.5912C13.1208 21.3529 12.9846 21.0238 12.9846 20.6834C12.9846 20.343 13.1208 20.0196 13.3592 19.7756C13.5976 19.5373 13.9268 19.4011 14.2674 19.4011H19.3983H21.9695H27.1004C27.441 19.4011 27.7702 19.5373 28.0086 19.7756C28.2526 20.0196 28.3832 20.343 28.3832 20.6834Z"
      fill="#979A99"
    />
  </Svg>
);

// Divider Component
const Divider = () => (
  <View className="w-full h-[1px] overflow-hidden">
    <Svg width="100%" height={1} viewBox="0 0 330 1" fill="none" preserveAspectRatio="none">
      <Path
        d="M0 0.452863H329.348"
        stroke="#E0E0E0"
        strokeWidth="0.905797"
        strokeLinecap="round"
      />
    </Svg>
  </View>
);

export function CartItem({
  id,
  imageSource,
  title,
  description,
  price,
  quantity,
  onDelete,
  onIncreaseQuantity,
  onDecreaseQuantity,
  index,
}: CartItemProps) {
  return (
    <View className="w-full">
      {index === 0 ? null : <Divider />}
      <View className="flex-row justify-between items-center w-full my-[30px]">
        {/* Product Image */}
        <Image
          source={imageSource}
          className="w-[68px] h-[68px] rounded-lg"
          resizeMode="cover"
        />

        {/* Product Info */}
        <View className="flex-1 ml-6 flex-col justify-start items-center">
          {/* Title and Delete Button Row */}
          <View className="flex-row justify-between items-start w-full">
            <View className="flex-1 flex-col justify-start items-start">
              <Text className="text-[20px] font-semibold text-left text-[#242424]">
                {title}
              </Text>
              <Text className="text-sm font-medium text-left text-[#979a99] mt-1">
                {description}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => onDelete?.(id)}
              className="p-1"
              activeOpacity={0.7}
            >
              <DeleteIcon />
            </TouchableOpacity>
          </View>

          {/* Quantity Controls and Price Row */}
          <View className="flex-row justify-between items-center w-full mt-2">
            {/* Quantity Controls */}
            <View className="flex-row items-center gap-3">
              <TouchableOpacity
                onPress={() => onDecreaseQuantity?.(id)}
                activeOpacity={0.7}
                className="w-[46px] h-[46px] items-center justify-center"
              >
                <DecrementIcon />
              </TouchableOpacity>
              <Text className="text-lg font-bold text-[#242424] min-w-[20px] text-center">
                {quantity}
              </Text>
              <TouchableOpacity
                onPress={() => onIncreaseQuantity?.(id)}
                activeOpacity={0.7}
                className="w-[46px] h-[46px] items-center justify-center"
              >
                <IncrementIcon />
              </TouchableOpacity>
            </View>

            {/* Price */}
            <Text className="text-lg font-medium text-left text-[#242424]">
              {price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

