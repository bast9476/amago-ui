import { ScrollView } from 'react-native';
import React, { useEffect, useMemo } from 'react';
import MainHeader from '@modules/common/components/MainHeader';
import { useSearchHeaderConfig } from '@modules/digital/hooks/useSearchHeaderConfig';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import {
    PostJobForm,
    Attachments,
    BudgetType,
    SummaryCard,
    ActionButtons,
} from './components';
import {
    bootstrapPostJobData,
    setJobTitle,
    setJobCategory,
    addJobSkill,
    removeJobSkill,
    setJobDescription,
    addJobAttachment,
    removeJobAttachment,
    setPostJobBudgetType,
    setPostJobBudget,
    setPostJobMaximum,
    setPostJobTimeline,
    setPostJobVisibility,
    selectPostJobForm,
    selectPostJobCategoryOptions,
    selectPostJobSkillOptions,
    selectPostJobTimelineOptions,
    selectPostJobInitialized,
} from '@modules/digital/store';

export default function PostJob() {
    const headerProps = useSearchHeaderConfig('postJob');
    const dispatch = useAppDispatch();
    const form = useAppSelector(selectPostJobForm);
    const categoryOptions = useAppSelector(selectPostJobCategoryOptions);
    const skillOptions = useAppSelector(selectPostJobSkillOptions);
    const timelineOptions = useAppSelector(selectPostJobTimelineOptions);
    const initialized = useAppSelector(selectPostJobInitialized);

    useEffect(() => {
        if (!initialized) {
            dispatch(bootstrapPostJobData());
        }
    }, [dispatch, initialized]);

    const availableSkills = useMemo(() => {
        return skillOptions.filter((skill: string) => !form.skills.includes(skill));
    }, [skillOptions, form.skills]);

    const handleAddAttachment = () => {
        const newAttachmentId = `${Date.now()}`;
        dispatch(
            addJobAttachment({
                id: newAttachmentId,
                name: `attachment-${form.attachments.length + 1}.pdf`,
            })
        );
    };

    const formatCurrency = (value: string) => {
        if (!value) return '—';
        const numericValue = Number(value.replace(/[^0-9.]/g, ''));
        if (Number.isNaN(numericValue)) {
            return `৳${value}`;
        }
        return `৳${numericValue.toLocaleString('en-US')}`;
    };

    const summaryItems = [
        {
            label: 'Budget Range',
            value: `${formatCurrency(form.budget)} - ${formatCurrency(form.maximum)}`
        },
        {
            label: 'Timeline',
            value: form.timeline || '—'
        },
        {
            label: 'Skills Required',
            value: `${form.skills.length} ${form.skills.length === 1 ? 'skill' : 'skills'}`
        }
    ];

    const handleSaveDraft = () => {
        console.log('Save draft pressed');
    };

    const handlePostJob = () => {
        console.log('Post job pressed');
    };

    return (
        <ScrollView className="flex-1 bg-[#F1F3F7]">
            <MainHeader {...headerProps} />
            <PostJobForm
                jobTitle={form.jobTitle}
                onJobTitleChange={(text) => dispatch(setJobTitle(text))}
                selectedCategory={form.category}
                onCategorySelect={(category) => dispatch(setJobCategory(category))}
                categoryOptions={categoryOptions}
                skills={form.skills}
                onSkillRemove={(skill) => dispatch(removeJobSkill(skill))}
                onSkillAdd={(skill) => dispatch(addJobSkill(skill))}
                availableSkills={availableSkills}
                description={form.description}
                onDescriptionChange={(text) => dispatch(setJobDescription(text))}
            />
            <Attachments
                attachments={form.attachments}
                onAttachmentRemove={(id) => dispatch(removeJobAttachment(id))}
                onAddAttachment={handleAddAttachment}
            />
            <BudgetType
                selectedType={form.budgetType}
                onSelect={(type) => dispatch(setPostJobBudgetType(type))}
                budget={form.budget}
                onBudgetChange={(value) => dispatch(setPostJobBudget(value))}
                maximum={form.maximum}
                onMaximumChange={(value) => dispatch(setPostJobMaximum(value))}
                timeline={form.timeline}
                onTimelineSelect={(value) => dispatch(setPostJobTimeline(value))}
                timelineOptions={timelineOptions}
                visibility={form.visibility}
                onVisibilitySelect={(value) => dispatch(setPostJobVisibility(value))}
            />
            <SummaryCard items={summaryItems} />
            <ActionButtons
                onSaveDraft={handleSaveDraft}
                onPostJob={handlePostJob}
            />
        </ScrollView>
    )
}