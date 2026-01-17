// Shared types used across all headers

export type HeaderRightIconType = 'help' | 'bell' | 'info' | 'none' | 'custom' | 'cart';
export type SearchIconType = 'copy' | 'scan' | 'filter' | 'sort';

export interface HeaderRightIcon {
    type: HeaderRightIconType;
    icon?: React.ReactNode;
    onPress?: () => void;
    badge?: number;
    accessibilityLabel?: string;
}

export interface SearchIcon {
    type: SearchIconType;
    onPress?: () => void;
    accessibilityLabel?: string;
}

