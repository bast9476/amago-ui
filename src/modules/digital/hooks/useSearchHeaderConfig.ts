import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { selectSearchQuery } from '@modules/digital/store/selectors/homeSelectors';
import { setSearchQuery } from '@modules/digital/store';
import type { MainHeaderProps, SearchBehavior } from '@modules/common/components/MainHeader';

type DigitalScreenType = 'home' | 'messages' | 'projects' | 'postJob' | 'becomeServiceProvider';

function createDigitalSearchBehavior(
    dispatch: ReturnType<typeof useAppDispatch>,
    searchQuery: string
): SearchBehavior {
    return {
        getValue: () => searchQuery,
        onChangeText: (text: string) => {
            dispatch(setSearchQuery(text));
        },
    };
}

export function useSearchHeaderConfig(screenType: DigitalScreenType): MainHeaderProps {
    const dispatch = useAppDispatch();
    const searchQuery = useAppSelector(selectSearchQuery);

    return useMemo(() => {
        const configs: Record<DigitalScreenType, MainHeaderProps> = {
            home: {
                title: 'Digital Services',
                rightIcon: {
                    type: 'help',
                    onPress: () => {
                        console.log('Help pressed');
                    },
                },
                searchConfig: {
                    placeholder: 'Find expert freelancers...',
                    icons: [
                        {
                            type: 'copy',
                            onPress: () => {
                                console.log('Copy pressed');
                            },
                        }
                    ],
                    behavior: createDigitalSearchBehavior(dispatch, searchQuery),
                },
            },
            messages: {
                title: 'Messages',
                rightIcon: {
                    type: 'help',
                    onPress: () => {
                        console.log('Help pressed');
                    },
                },
                searchConfig: {
                    placeholder: 'Search conversations...',
                    icons: [],
                    behavior: createDigitalSearchBehavior(dispatch, searchQuery),
                },
            },
            projects: {
                title: 'Digital Services',
                rightIcon: {
                    type: 'help',
                    onPress: () => {
                        console.log('Help pressed');
                    },
                },
                searchConfig: {
                    placeholder: 'Find expert freelancers...',
                    icons: [
                        {
                            type: 'copy',
                            onPress: () => {
                                console.log('Copy pressed');
                            },
                        },
                        {
                            type: 'scan',
                            onPress: () => {
                                console.log('Scan pressed');
                            },
                        },
                    ],
                    behavior: createDigitalSearchBehavior(dispatch, searchQuery),
                },
            },
            postJob: {
                title: 'Post a Job',
                rightIcon: {
                    type: 'help',
                    onPress: () => {
                        console.log('Help pressed');
                    },
                },
                searchConfig: {
                    placeholder: 'Find expert freelancers...',
                    icons: [
                        {
                            type: 'copy',
                            onPress: () => {
                                console.log('Copy pressed');
                            },
                        },
                        {
                            type: 'scan',
                            onPress: () => {
                                console.log('Scan pressed');
                            },
                        },
                    ],
                    behavior: createDigitalSearchBehavior(dispatch, searchQuery),
                },
            },
            becomeServiceProvider: {
                title: 'Become a Service Provider',
                rightIcon: {
                    type: 'help',
                    onPress: () => {
                        console.log('Help pressed');
                    },
                },
            },
        };

        return configs[screenType];
    }, [screenType, dispatch, searchQuery]);
}

