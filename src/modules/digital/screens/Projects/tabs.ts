export type ProjectTabId = 'active' | 'completed' | 'posted';

export interface ProjectTabConfig {
    id: ProjectTabId;
    label: string;
    badge?: number;
    isFlex?: boolean;
    minWidth?: number;
}

export const projectTabs: ProjectTabConfig[] = [
    { id: 'active', label: 'Active', badge: 2, isFlex: true },
    { id: 'completed', label: 'Completed', minWidth: 112 },
    { id: 'posted', label: 'Posted', minWidth: 102 },
];

