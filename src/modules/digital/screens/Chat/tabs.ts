export type ChatTabId = 'Chat' | 'Files' | 'Milestones' | 'Tasks';

export interface ChatTabConfig {
    id: ChatTabId;
    label: string;
    hasBadge?: boolean;
    badgeCount?: number;
}

export const chatTabs: ChatTabConfig[] = [
    { id: 'Chat', label: 'Chat' },
    { id: 'Files', label: 'Files' },
    { id: 'Milestones', label: 'Milestones', hasBadge: true, badgeCount: 3 },
    { id: 'Tasks', label: 'Tasks' },
];

