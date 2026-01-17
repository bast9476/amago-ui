import type { HeaderRightIcon, SearchIcon } from '../headerTypes/sharedTypes';

export interface SearchBehavior {
    getValue: () => string;
    onChangeText: (text: string) => void;
    onSubmit?: (text: string) => void;
}

export type HeaderVariant = 'gradient' | 'white';

export interface MainHeaderProps {
    title: string;
    variant?: HeaderVariant;
    showBorder?: boolean; // optional border toggle
    rightIcon?: HeaderRightIcon;
    rightIcons?: HeaderRightIcon[];
    backButtonSize?: number; // container size (width/height) override
    backButtonStyle?: any;   // container style override
    backIconSize?: number;   // icon size override
    searchConfig?: {
        placeholder: string;
        icons?: SearchIcon[];
        behavior: SearchBehavior;
        filterButton?: {
            onPress: () => void;
        };
    };
    onBackPress?: () => void;
}

