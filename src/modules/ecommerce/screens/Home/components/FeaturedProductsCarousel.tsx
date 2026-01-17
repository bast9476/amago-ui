import React from 'react';
import { ScrollView } from 'react-native';
import { FeaturedProductCard, FeaturedProductCardProps } from './FeaturedProductCard';

interface FeaturedProductsCarouselProps {
  products: Omit<FeaturedProductCardProps, 'index' | 'onToggleFavorite' | 'onPress'>[];
  onToggleFavorite: (id: string) => void;
  onPress?: (id: string) => void;
}

export function FeaturedProductsCarousel({ products, onToggleFavorite, onPress }: FeaturedProductsCarouselProps) {
  return (
    <ScrollView
    className='mt-2'
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 16 }}
    >
      {products.map((product, index) => (
        <FeaturedProductCard
          key={product.id}
          index={index}
          {...product}
          onToggleFavorite={onToggleFavorite}
          onPress={onPress}
        />
      ))}
    </ScrollView>
  );
}


