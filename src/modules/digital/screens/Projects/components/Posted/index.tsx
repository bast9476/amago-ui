import React from 'react';
import { View } from 'react-native';
import { PostedProjectCard } from '../shared/PostedProjectCard';
import { useAppSelector } from '@src/store/hooks';
import {
    selectPostedProjects,
    type Project,
} from '@modules/digital/store';

export function Posted() {
    const postedProjects = useAppSelector(selectPostedProjects);

    return (
        <View className="flex-1 mt-3 mb-[150px] bg-[#F1F3F7]">
            <View className="px-4">
                {postedProjects.map((project: Project) => (
                    <PostedProjectCard
                        key={project.id}
                        title={project.title}
                        status={project.status}
                        budget={project.budget}
                        dueDate={project.dueDate}
                    />
                ))}
            </View>
        </View>
    );
}

