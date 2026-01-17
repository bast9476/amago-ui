import React from 'react';
import { View } from 'react-native';
import { ProductCard, ProductCardProps } from '@modules/common/components';

interface ProductListProps {
  products: Omit<ProductCardProps, 'onToggleFavorite' | 'onPress'>[];
  onToggleFavorite: (id: string) => void;
  onPress?: (id: string) => void;
}

export function ProductList({ products, onToggleFavorite, onPress }: ProductListProps) {
  return (
    <View className="px-4 pb-4 mb-[120px]">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          {...product}
          index={index}
          onToggleFavorite={onToggleFavorite}
          onPress={onPress}
        />
      ))}
    </View>
  );
}


