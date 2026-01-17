import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CompleteProjectButton from '../shared/CompleteProjectButton';
import { TaskItem } from '../shared/TaskItem';
import { useCrossModuleNavigation } from '@modules/common/hooks/useCrossModuleNavigation';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
    bootstrapChatTasks,
    toggleChatTask,
    setChatTaskActive,
    selectChatTasks,
    selectChatTasksInitialized,
} from '@modules/digital/store';

export function ChatTasks() {
    const navigation = useCrossModuleNavigation();
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(selectChatTasks);
    const tasksInitialized = useAppSelector(selectChatTasksInitialized);

    const handleCompletePress = () => navigation('Digital', 'CompletedProject');

    useEffect(() => {
        if (!tasksInitialized) {
            dispatch(bootstrapChatTasks());
        }
    }, [tasksInitialized, dispatch]);

    const handleToggleTask = (taskId: string) => {
        dispatch(toggleChatTask(taskId));
    };

    const handleSetActive = (taskId: string) => {
        dispatch(setChatTaskActive(taskId));
    };

    return (
        <View className="flex-1 bg-[#F1F3F7]">
            <ScrollView className="flex-1 px-4 py-8">
                <View className="w-full mb-16">
                    {tasks.map((task: any) => (
                        <TaskItem
                            key={task.id}
                            text={task.text}
                            isCompleted={task.isCompleted}
                            isActive={task.isActive}
                            checkmarkId={task.id}
                        />
                    ))}
                </View>
            </ScrollView>
            <CompleteProjectButton onCompletePress={handleCompletePress} />
        </View>
    );
}

