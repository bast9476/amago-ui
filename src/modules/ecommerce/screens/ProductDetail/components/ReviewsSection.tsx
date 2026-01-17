import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, ClipPath, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';

export interface Review {
  id: string;
  userName: string;
  userInitial: string;
  rating: number;
  timeAgo: string;
  comment: string;
}

export interface ReviewsSectionProps {
  overallRating?: number;
  totalReviews?: number;
  ratingBreakdown?: {
    stars: number;
    count: number;
    percentage: number;
  }[];
  reviews?: Review[];
  onViewAll?: () => void;
}

export function ReviewsSection({
  overallRating = 4.8,
  totalReviews = 1247,
  ratingBreakdown = [
    { stars: 5, count: 936, percentage: 75 },
    { stars: 4, count: 224, percentage: 18 },
    { stars: 3, count: 62, percentage: 5 },
    { stars: 2, count: 12, percentage: 1 },
    { stars: 1, count: 13, percentage: 1 },
  ],
  reviews = [
    {
      id: '1',
      userName: 'Sarah Chen',
      userInitial: 'S',
      rating: 5,
      timeAgo: '2 days ago',
      comment: "Absolutely amazing sound quality and the noise cancellation is incredible. Best headphones I've ever owned!",
    },
    {
      id: '2',
      userName: 'Mike Johnson',
      userInitial: 'M',
      rating: 5,
      timeAgo: '1 week ago',
      comment: "The build quality is premium and they're surprisingly comfortable for long listening sessions.",
    },
  ],
  onViewAll,
}: ReviewsSectionProps) {
  // Star rating component
  const StarRating = ({ rating, size = 16 }: { rating: number; size?: number }) => {
    const stars = [];
    const starPath =
      'M7.67826 1.52899C7.70746 1.47 7.75256 1.42035 7.80848 1.38563C7.86439 1.35092 7.9289 1.33252 7.99472 1.33252C8.06053 1.33252 8.12504 1.35092 8.18096 1.38563C8.23688 1.42035 8.28198 1.47 8.31118 1.52899L9.85016 4.64626C9.95154 4.85144 10.1012 5.02895 10.2863 5.16355C10.4714 5.29816 10.6864 5.38585 10.9128 5.41908L14.3545 5.92275C14.4197 5.9322 14.481 5.95971 14.5314 6.00216C14.5818 6.04462 14.6193 6.10033 14.6397 6.163C14.6601 6.22566 14.6625 6.29278 14.6467 6.35675C14.6309 6.42073 14.5976 6.47902 14.5504 6.52502L12.0614 8.94875C11.8972 9.10871 11.7744 9.30617 11.7035 9.52412C11.6326 9.74208 11.6157 9.974 11.6543 10.1999L12.2419 13.6243C12.2534 13.6895 12.2464 13.7566 12.2216 13.818C12.1968 13.8794 12.1553 13.9325 12.1017 13.9714C12.0481 14.0103 11.9847 14.0334 11.9187 14.038C11.8527 14.0426 11.7867 14.0285 11.7283 13.9974L8.65162 12.3798C8.4489 12.2734 8.22335 12.2178 7.99438 12.2178C7.76542 12.2178 7.53987 12.2734 7.33715 12.3798L4.26118 13.9974C4.20278 14.0283 4.13686 14.0422 4.07094 14.0376C4.00502 14.0329 3.94174 14.0098 3.88829 13.9709C3.83485 13.932 3.79338 13.879 3.76861 13.8177C3.74385 13.7564 3.73677 13.6894 3.74819 13.6243L4.33513 10.2006C4.37391 9.97456 4.35711 9.74249 4.28619 9.5244C4.21528 9.30631 4.09237 9.10875 3.92807 8.94875L1.43905 6.52568C1.39148 6.47974 1.35776 6.42135 1.34175 6.35718C1.32574 6.29301 1.32808 6.22563 1.34849 6.16272C1.36891 6.09981 1.40658 6.0439 1.45722 6.00135C1.50786 5.95881 1.56943 5.93134 1.63492 5.92208L5.07598 5.41908C5.30267 5.3861 5.51795 5.29853 5.70329 5.16391C5.88863 5.02928 6.03848 4.85164 6.13994 4.64626L7.67826 1.52899Z';

    // Scale factor to make stars slightly larger (12.5% increase)
    const scale = 1.11;
    const starCenterX = 8; // Approximate center of star (half of ~16 width)
    const originalStarWidth = 15.9894;
    const scaledStarWidth = originalStarWidth * scale;
    const spacing = 20; // Original spacing between stars

    for (let i = 0; i < 5; i++) {
      const xOffset = i * spacing;
      stars.push(
        <G key={i} clipPath={`url(#clip${i}_star)`}>
          <Path
            d={starPath}
            fill="#FDC700"
            stroke="#FDC700"
            strokeWidth="1.33245"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${xOffset + starCenterX}, 0) scale(${scale}) translate(${-starCenterX}, 0)`}
          />
        </G>
      );
    }

    // Calculate clip path positions for scaled stars
    // Star center is at xOffset + starCenterX, after scaling left edge is at center - (scaled width/2)
    const scaledStarHalfWidth = scaledStarWidth / 2;
    
    // Adjusted dimensions: original 96x16 * 1.125 = 108x18
    const scaledSize = size * scale;
    return (
      <Svg width={108} height={scaledSize} viewBox="0 0 96 16" fill="none">
        <Defs>
          {[0, 1, 2, 3, 4].map((i) => {
            const starCenter = i * spacing + starCenterX;
            const clipX = starCenter - scaledStarHalfWidth;
            return (
              <ClipPath key={i} id={`clip${i}_star`}>
                <Rect width={scaledStarWidth} height={scaledStarWidth} x={clipX} fill="white" />
              </ClipPath>
            );
          })}
        </Defs>
        {stars}
      </Svg>
    );
  };

  // Overall rating stars component
  const OverallRatingStars = () => {
    const starPath =
      'M9.59783 1.91111C9.63432 1.83738 9.6907 1.77531 9.7606 1.73192C9.83049 1.68852 9.91113 1.66553 9.9934 1.66553C10.0757 1.66553 10.1563 1.68852 10.2262 1.73192C10.2961 1.77531 10.3525 1.83738 10.389 1.91111L12.3127 5.8077C12.4394 6.06417 12.6265 6.28606 12.8579 6.45432C13.0892 6.62258 13.358 6.73219 13.641 6.77373L17.9431 7.40332C18.0247 7.41513 18.1013 7.44951 18.1642 7.50258C18.2272 7.55565 18.2741 7.62529 18.2996 7.70362C18.3251 7.78195 18.3281 7.86585 18.3084 7.94582C18.2887 8.02579 18.247 8.09865 18.188 8.15615L15.0767 11.1858C14.8715 11.3858 14.718 11.6326 14.6294 11.905C14.5407 12.1775 14.5196 12.4674 14.5679 12.7498L15.3024 17.0303C15.3168 17.1118 15.308 17.1957 15.277 17.2724C15.246 17.3491 15.1941 17.4155 15.1271 17.4642C15.0602 17.5128 14.9809 17.5416 14.8984 17.5474C14.8158 17.5531 14.7334 17.5355 14.6603 17.4966L10.8145 15.4747C10.5611 15.3416 10.2792 15.2721 9.99298 15.2721C9.70677 15.2721 9.42485 15.3416 9.17144 15.4747L5.32648 17.4966C5.25347 17.5353 5.17108 17.5527 5.08868 17.5468C5.00628 17.541 4.92718 17.5121 4.86037 17.4635C4.79356 17.4149 4.74173 17.3486 4.71077 17.272C4.67981 17.1954 4.67097 17.1117 4.68524 17.0303L5.41892 12.7506C5.46739 12.4681 5.44639 12.178 5.35774 11.9054C5.2691 11.6328 5.11546 11.3858 4.91009 11.1858L1.79881 8.15698C1.73935 8.09955 1.69721 8.02657 1.6772 7.94635C1.65718 7.86614 1.6601 7.78191 1.68562 7.70328C1.71114 7.62464 1.75823 7.55475 1.82153 7.50157C1.88483 7.44839 1.96179 7.41406 2.04365 7.40248L6.34498 6.77373C6.62834 6.73251 6.89744 6.62304 7.12911 6.45476C7.36079 6.28648 7.5481 6.06443 7.67493 5.8077L9.59783 1.91111Z';

    const stars = [];
    // Scale factor to make stars 12% larger (between original and 25% larger)
    const scale = 1.05;
    // Star center is approximately at x=10 (half of ~20 width)
    const starCenterX = 10;
    // Original offsets: [0, 24, 48, 72, 96]
    const baseOffsets = [0, 24, 48, 72, 96];
    // Original star width (from original clip path)
    const originalStarWidth = 19.9868;
    const scaledStarWidth = originalStarWidth * scale;

    for (let i = 0; i < 5; i++) {
      const offset = baseOffsets[i];
      stars.push(
        <G key={i} clipPath={i >= 3 ? `url(#clip${i}_overall)` : undefined}>
          <Path
            d={starPath}
            fill="#FDC700"
            stroke="#FDC700"
            strokeWidth="1.66557"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform={`translate(${offset + starCenterX}, 0) scale(${scale}) translate(${-starCenterX}, 0)`}
          />
        </G>
      );
    }

    // Calculate clip path positions for scaled stars
    // Keep original viewBox size, but scale the SVG display size
    // Original clip paths were at: clip3 x=71.9525, clip4 x=95.9366
    // After scaling stars by 1.12, the clip paths need to account for the scaled star size
    // Star center positions remain the same: offset + 10
    // But the star width is now 20 * 1.12 = 22.4, so half-width is 11.2
    // Clip path should start at: center - halfWidth
    const starWidth = 20;
    const scaledStarHalfWidth = (starWidth * scale) / 2;
    const clip3X = (baseOffsets[3] + starCenterX) - scaledStarHalfWidth; // 82 - 11.2 = 70.8
    const clip4X = (baseOffsets[4] + starCenterX) - scaledStarHalfWidth; // 106 - 11.2 = 94.8

    // Keep original viewBox to maintain coordinate system, but scale display size
    return (
      <Svg width={130} height={22.4} viewBox="0 0 116 20" fill="none">
        <Defs>
          <ClipPath id="clip3_overall">
            <Rect width={scaledStarWidth} height={scaledStarWidth} x={clip3X} fill="white" />
          </ClipPath>
          <ClipPath id="clip4_overall">
            <Rect width={scaledStarWidth} height={scaledStarWidth} x={clip4X} fill="white" />
          </ClipPath>
        </Defs>
        {stars}
      </Svg>
    );
  };

  return (
    <View className="flex-col items-start w-full overflow-hidden rounded-[14px] bg-gray-50 border-[1.22px] border-[#f3f4f7] mt-6 px-6 py-6">
      {/* Header */}
      <Text className="text-lg font-semibold text-left text-[#242424] mb-4">
        Reviews & Ratings
      </Text>

      {/* Rating Summary */}
      <View className="flex-row items-center w-full mb-4 gap-4">
        {/* Overall Rating */}
        <View className="flex-col items-center justify-center gap-2">
          <Text className="text-4xl text-center text-[#242424] font-[400]">{overallRating}</Text>
          <View className="w-full">
            <OverallRatingStars />
          </View>
          <Text className="text-base text-center text-neutral-500">{totalReviews} reviews</Text>
        </View>

        {/* Rating Breakdown */}
        <View className="flex-1 space-y-[1px]">
          {ratingBreakdown.map((item) => (
            <View key={item.stars} className="flex-row items-center gap-2">
              <Text className="text-[18px] text-left text-[#fdc700] w-8">{item.stars}★</Text>
              <View className="flex-1 h-[10px] bg-[#f3f4f7] rounded-full overflow-hidden">
                <View
                  className="h-full bg-[#fdc700] rounded-full"
                  style={{ width: `${item.percentage}%` }}
                />
              </View>
              <Text className="text-base text-left text-neutral-500 w-8">{item.count}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Reviews List */}
      <View className="flex-col w-full gap-4 mb-4">
        {reviews.map((review) => (
          <View
            key={review.id}
            className="flex-col items-start w-full p-4 rounded-[10px] bg-gray-50"
          >
            {/* User Info */}
            <View className="flex-row items-center w-full mb-2 gap-3">
              {/* Avatar */}
              <View className="w-10 h-10 rounded-full items-center justify-center overflow-hidden relative">
                <Svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 32 32"
                  preserveAspectRatio="none"
                >
                  <Defs>
                    <LinearGradient
                      id={`avatarGradient_${review.id}`}
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                      gradientUnits="userSpaceOnUse"
                    >
                      <Stop offset="0.5795" stopColor="#07B556" />
                      <Stop offset="1.2421" stopColor="#36D97F" />
                    </LinearGradient>
                  </Defs>
                  <Rect width="32" height="32" rx="16" fill={`url(#avatarGradient_${review.id})`} />
                </Svg>
                <Text className="text-lg text-white font-[400] z-10">{review.userInitial}</Text>
              </View>

              {/* User Details */}
              <View className="flex-1">
                <View className="flex-row items-center space-x-2">
                  <Text className="text-base font-semibold text-left text-[#242424]">
                    {review.userName}
                  </Text>
                  <View className="flex-1">
                    <StarRating rating={review.rating} />
                  </View>
                </View>
                <Text className="text-sm text-left text-[#999]">{review.timeAgo}</Text>
              </View>
            </View>

            {/* Review Text */}
            <Text className="text-base leading-[28px] text-left text-[#7d7d7d] w-full">{review.comment}</Text>
          </View>
        ))}
      </View>

      {/* View All Reviews Button */}
      <TouchableOpacity
        onPress={onViewAll}
        className="flex-row justify-between items-center w-full px-3 py-3 rounded-[10px] border-[1.22px] border-[#f3f4f7]"
        activeOpacity={0.7}
      >
        <Text className="text-xl font-semibold text-left text-[#242424]">View All Reviews</Text>
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none">
          <Path
            d="M5.99603 11.9923L9.99339 7.99492L5.99603 3.99756"
            stroke="#99A1AF"
            strokeWidth="1.33245"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}

