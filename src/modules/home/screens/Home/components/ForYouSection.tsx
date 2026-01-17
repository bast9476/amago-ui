import React, { useMemo, useState } from 'react';
import { View, Text, ImageSourcePropType } from 'react-native';
import { ProductCard } from '@modules/common/components';

type ForYouItem = {
  id: string;
  imageSource: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
};

const img1 = require('@modules/home/assets/product12.png');
const img2 = require('@modules/home/assets/product13.png');
const img3 = require('@modules/home/assets/product14.png');

export default function ForYouSection() {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const items = useMemo<ForYouItem[]>(
    () => [
      {
        id: 'for-you-1',
        imageSource: img1,
        title: 'Snopy Headphone',
        description: 'Snopy SN- BT96 Pretty Back Bluetooth Headphone',
        price: '৳549',
      },
      {
        id: 'for-you-2',
        imageSource: img2,
        title: 'Greeting Card',
        description: 'Snopy SN- BT96 Pretty Back Bluetooth Headphone',
        price: '৳49',
      },
      {
        id: 'for-you-3',
        imageSource: img3,
        title: 'Snopy Headphone',
        description: 'Snopy SN- BT96 Pretty Back Bluetooth Headphone',
        price: '৳549',
      },
    ],
    [],
  );

  return (
    <View className="px-6 mt-10 mb-36">
      <Text className="text-xl font-bold text-left text-[#242424] mb-[15px]">For You</Text>

      <View className="">
        {items.map((item, index) => (
          <ProductCard
            key={item.id}
            id={item.id}
            index={index}
            imageSource={item.imageSource}
            title={item.title}
            description={item.description}
            price={item.price}
            isFavorite={!!favorites[item.id]}
            onToggleFavorite={(id) => setFavorites((prev) => ({ ...prev, [id]: !prev[id] }))}
          />
        ))}
      </View>
    </View>
  );
}


