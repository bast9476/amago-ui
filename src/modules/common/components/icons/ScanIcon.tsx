import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface ScanIconProps {
  size?: number;
  color?: string;
}

export default function ScanIcon({ size = 20, color = '#242424' }: ScanIconProps) {
  return (
    // <View className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[37.23px] h-[37.23px] relative pr-[0.017770586535334587px] rounded-[7.45px]">
      <Svg
        width={size}
        height={size}
        viewBox="0 0 15 15"
        fill="none"
        className="flex-grow-0 flex-shrink-0 w-[14.89px] h-[14.89px] relative"
      >
        <Path
          d="M4.34148 1.85938H2.48082C2.13828 1.85938 1.8606 2.13706 1.8606 2.4796V4.34026C1.8606 4.6828 2.13828 4.96048 2.48082 4.96048H4.34148C4.68402 4.96048 4.9617 4.6828 4.9617 4.34026V2.4796C4.9617 2.13706 4.68402 1.85938 4.34148 1.85938Z"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.4045 1.85938H10.5438C10.2013 1.85938 9.92358 2.13706 9.92358 2.4796V4.34026C9.92358 4.6828 10.2013 4.96048 10.5438 4.96048H12.4045C12.747 4.96048 13.0247 4.6828 13.0247 4.34026V2.4796C13.0247 2.13706 12.747 1.85938 12.4045 1.85938Z"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.34148 9.92188H2.48082C2.13828 9.92188 1.8606 10.1996 1.8606 10.5421V12.4028C1.8606 12.7453 2.13828 13.023 2.48082 13.023H4.34148C4.68402 13.023 4.9617 12.7453 4.9617 12.4028V10.5421C4.9617 10.1996 4.68402 9.92188 4.34148 9.92188Z"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.0247 9.92188H11.164C10.835 9.92187 10.5195 10.0526 10.2869 10.2852C10.0543 10.5178 9.92358 10.8333 9.92358 11.1623V13.023"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.0247 13.0234V13.0301"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.44266 4.33984V6.20051C7.44266 6.52949 7.31197 6.845 7.07934 7.07763C6.84671 7.31026 6.5312 7.44095 6.20222 7.44095H4.34155"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.8606 7.44141H1.86726"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.44263 1.85938H7.44929"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.44263 9.92188V9.92854"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9.92358 7.44141H10.5438"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.0247 7.44141V7.44807"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.44263 13.0226V12.4023"
          stroke={color}
          strokeWidth={1.24044}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    // </View>
  );
}

