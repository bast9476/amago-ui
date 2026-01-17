# Digital Module API Files

This folder contains RTK Query API definitions for all 5 screens in the digital module.

## API Files

1. **homeApi.ts** - Home screen API
   - Categories, Featured Services, Top Rated Providers, Recent Projects, How It Works Steps

2. **messagesApi.ts** - Messages screen API
   - Conversations list and individual conversation details

3. **chatApi.ts** - Chat screen API
   - Chat messages for conversations, send messages

4. **projectsApi.ts** - Projects screen API
   - Active, Completed, and Posted projects
   - Project status updates

5. **completedProjectApi.ts** - Completed Project screen API
   - Completed project details, submit review, rehire provider

## Current Status

- ✅ All API files are created and structured
- ✅ All APIs are registered in the root store
- ✅ Currently using `initialData` functions (no API calls yet)
- ✅ Structure is ready for API integration

## How to Switch to API

When you have the actual API ready:

1. Update `baseUrl` in each API file from `'https://api.example.com'` to your actual API URL
2. Replace `initialData` usage with API hooks in components:

   **Before (using initialData):**
   ```tsx
   useEffect(() => {
       if (!initialized) {
           const { getInitialActiveProjects } = require('@modules/digital/store/initialData');
           dispatch(setActiveProjects(getInitialActiveProjects()));
       }
   }, [initialized]);
   ```

   **After (using API):**
   ```tsx
   const { useGetActiveProjectsQuery } = getProjectsApiHooks();
   const { data: activeProjects, isLoading } = useGetActiveProjectsQuery();
   ```

3. Remove the `initialized` check and `useEffect` - RTK Query handles loading automatically
4. Update error handling to use RTK Query's error state

## Usage Example

```tsx
import { getProjectsApiHooks } from '@modules/digital/store';

function MyComponent() {
    const { useGetActiveProjectsQuery } = getProjectsApiHooks();
    const { data, isLoading, error } = useGetActiveProjectsQuery();
    
    if (isLoading) return <Loading />;
    if (error) return <Error />;
    
    return <ProjectsList projects={data} />;
}
```

