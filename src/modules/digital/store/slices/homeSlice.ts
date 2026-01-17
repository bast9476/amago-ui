import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HomeUIState, HowItWorksTab } from '../types';

const initialState: HomeUIState = {
    selectedCategory: 'Development',
    howItWorksTab: 'clients',
    searchQuery: '',
};

const homeSlice = createSlice({
            name: 'digital/home',
            initialState,
            reducers: {
                setSelectedCategory: (state, action: PayloadAction<string>) => {
                    state.selectedCategory = action.payload;
                },
                setHowItWorksTab: (state, action: PayloadAction<HowItWorksTab>) => {
                    state.howItWorksTab = action.payload;
                },
                setSearchQuery: (state, action: PayloadAction<string>) => {
                    state.searchQuery = action.payload;
                },
            },
        });

export const { setSelectedCategory, setHowItWorksTab, setSearchQuery } = homeSlice.actions;

export default homeSlice.reducer;

