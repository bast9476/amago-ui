import React from 'react';
import { View } from 'react-native';
import { ProjectCard } from '../shared/ProjectCard';
import { useAppSelector } from '@src/store/hooks';
import {
    selectCompletedProjects,
    type Project,
} from '@modules/digital/store';

export function Completed() {
    const completedProjects = useAppSelector(selectCompletedProjects);

    return (
        <View className="flex-1 mt-3 mb-[150px] bg-[#F1F3F7]">
            <View className="px-4">
                {completedProjects.map((project: Project, index: number) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        clientName={project.clientName}
                        clientInitial={project.clientInitial}
                        clientAvatar={project.clientAvatar}
                        status={project.status}
                        statusColor={project.statusColor}
                        statusBg={project.statusBg}
                        progress={project.progress}
                        paid={project.paid}
                        budget={project.budget}
                        dueDate={project.dueDate}
                        index={index}
                    />
                ))}
            </View>
        </View>
    );
}

