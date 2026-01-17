import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { cardShadow } from './cardShadow';

type Stat = { label: string; value: number | string };

type Props = {
  stats: Stat[];
};

const icons: Record<string, JSX.Element> = {
  Users: (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        stroke="#155DFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        stroke="#155DFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 21v-2a4 4 0 0 0-3-3.87"
        stroke="#155DFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 3a4 4 0 0 1 0 8"
        stroke="#155DFC"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Properties: (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className="flex-grow-0 flex-shrink-0 w-[23.98px] h-[23.98px] relative"
      preserveAspectRatio="none"
    >
      <Path
        d="M11.9921 9.99316H12.0021"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9921 13.9912H12.0021"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9921 5.99609H12.0021"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9894 9.99316H15.9994"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9894 13.9912H15.9994"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.9894 5.99609H15.9994"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 9.99316H8.00472"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 13.9912H8.00472"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99472 5.99609H8.00472"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99405 21.9856V18.9876C8.99405 18.7226 9.09934 18.4684 9.28675 18.281C9.47416 18.0936 9.72835 17.9883 9.99339 17.9883H13.9907C14.2558 17.9883 14.51 18.0936 14.6974 18.281C14.8848 18.4684 14.9901 18.7226 14.9901 18.9876V21.9856"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.9881 1.99902H5.99602C4.89218 1.99902 3.99734 2.89386 3.99734 3.9977V19.9871C3.99734 21.091 4.89218 21.9858 5.99602 21.9858H17.9881C19.0919 21.9858 19.9868 21.091 19.9868 19.9871V3.9977C19.9868 2.89386 19.0919 1.99902 17.9881 1.99902Z"
        stroke="#00A551"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
  Outlets: (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      className="flex-grow-0 flex-shrink-0 w-[23.98px] h-[23.98px] relative"
      preserveAspectRatio="none"
    >
      <Path
        d="M14.9901 20.9863V15.9896C14.9901 15.7245 14.8848 15.4703 14.6974 15.2829C14.51 15.0955 14.2558 14.9902 13.9907 14.9902H9.99339C9.72835 14.9902 9.47416 15.0955 9.28675 15.2829C9.09934 15.4703 8.99405 15.7245 8.99405 15.9896V20.9863"
        stroke="#9810FA"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.7623 10.3035C17.554 10.1041 17.2767 9.99279 16.9883 9.99279C16.6999 9.99279 16.4226 10.1041 16.2143 10.3035C15.7496 10.7468 15.1321 10.994 14.4899 10.994C13.8478 10.994 13.2303 10.7468 12.7656 10.3035C12.5573 10.1044 12.2803 9.99326 11.9921 9.99326C11.7039 9.99326 11.4269 10.1044 11.2186 10.3035C10.7539 10.7471 10.1362 10.9945 9.49375 10.9945C8.85134 10.9945 8.23362 10.7471 7.76889 10.3035C7.56056 10.1041 7.2833 9.99279 6.9949 9.99279C6.7065 9.99279 6.42924 10.1041 6.22091 10.3035C5.77205 10.7319 5.17987 10.9779 4.55963 10.9936C3.9394 11.0094 3.33548 10.7938 2.86543 10.3889C2.39538 9.98389 2.09284 9.41852 2.01667 8.80277C1.94051 8.18703 2.09619 7.56497 2.4534 7.05768L5.34049 2.87644C5.52368 2.60613 5.7703 2.38482 6.0588 2.23187C6.34729 2.07891 6.66887 1.99896 6.9954 1.99902H16.9888C17.3144 1.9989 17.6351 2.07831 17.923 2.23036C18.2108 2.38241 18.4572 2.60248 18.6407 2.87145L21.5338 7.06068C21.8911 7.56837 22.0466 8.1909 21.9699 8.80696C21.8933 9.42303 21.59 9.98849 21.1192 10.3932C20.6484 10.7978 20.0439 11.0127 19.4233 10.996C18.8027 10.9792 18.2106 10.732 17.7623 10.3025"
        stroke="#9810FA"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.99734 10.9424V18.9871C3.99734 19.5172 4.20792 20.0255 4.58274 20.4003C4.95757 20.7752 5.46594 20.9857 5.99602 20.9857H17.9881C18.5182 20.9857 19.0266 20.7752 19.4014 20.4003C19.7762 20.0255 19.9868 19.5172 19.9868 18.9871V10.9424"
        stroke="#9810FA"
        strokeWidth={1.99868}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  ),
};

const StatIcon = ({ label }: { label: string }) => icons[label] ?? null;

/**
 * Responsive stat cards row. Uses flex-wrap so items adapt to different widths,
 * shows a small icon per stat, and keeps padding/radius consistent across devices.
 */
export default function StatsRow({ stats }: Props) {
  return (
    <View className="flex-row flex-wrap gap-3 mb-4">
      {stats.map((item) => (
        <View
          key={`${item.label}-${item.value}`}
          className="flex-1 min-w-[100px] rounded-[14px] bg-[#f8fefb] px-[17px] py-[21px] border border-[#9c9c9c]/10 items-center"
          style={cardShadow}
        >
          <View className="mb-[17px]">
            <StatIcon label={item.label} />
          </View>
          <Text className="text-2xl font-bold text-[#242424]">{item.value}</Text>
          <Text className="text-sm font-semibold text-[#848484] mt-1">{item.label}</Text>
        </View>
      ))}
    </View>
  );
}