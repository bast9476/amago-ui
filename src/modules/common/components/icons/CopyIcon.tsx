import React from 'react';
import Svg, { Path, G, ClipPath, Rect, Defs } from 'react-native-svg';

interface CopyIconProps {
    size?: number;
    color?: string;
}

export default function CopyIcon({ size = 15, color = '#242424' }: CopyIconProps) {
    return (
        <Svg width={size} height={size} viewBox="0 0 15 15" fill="none">
            <G clipPath="url(#clip0_1060_5025)">
                <Path
                    d="M12.4044 4.95703H6.2022C5.51713 4.95703 4.96176 5.5124 4.96176 6.19747V12.3997C4.96176 13.0848 5.51713 13.6401 6.2022 13.6401H12.4044C13.0895 13.6401 13.6449 13.0848 13.6449 12.3997V6.19747C13.6449 5.5124 13.0895 4.95703 12.4044 4.95703Z"
                    stroke={color}
                    strokeWidth={1.24044}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <Path
                    d="M2.48089 9.92137C1.79865 9.92137 1.24045 9.36317 1.24045 8.68093V2.47872C1.24045 1.79648 1.79865 1.23828 2.48089 1.23828H8.6831C9.36534 1.23828 9.92354 1.79648 9.92354 2.47872"
                    stroke={color}
                    strokeWidth={1.24044}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1060_5025">
                    <Rect width={14.8853} height={14.8853} fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    );
}

