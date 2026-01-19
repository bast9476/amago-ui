import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Lazy import reducers to avoid evaluation issues during module load
let digitalReducer: any = null;
let ecommerceReducer: any = null;
let homeReducer: any = null;
let accountReducer: any = null;
let userLevelReducer: any = null;
let flightReducer: any = null;
let paymentReducer: any = null;

const getDigitalReducer = () => {
  if (!digitalReducer) {
    // The digital reducer is now a function that creates the reducer lazily
    const digitalReducerFactory = require('@modules/digital/store').default;
    // Call the factory function to get the actual reducer
    digitalReducer = digitalReducerFactory();
  }
  return digitalReducer;
};

const getEcommerceReducer = () => {
  if (!ecommerceReducer) {
    // The ecommerce reducer is now a function that creates the reducer lazily
    const ecommerceReducerFactory = require('@modules/ecommerce/store').default;
    // Call the factory function to get the actual reducer
    ecommerceReducer = ecommerceReducerFactory();
  }
  return ecommerceReducer;
};

const getHomeReducer = () => {
  if (!homeReducer) {
    // The home reducer is a function that creates the reducer lazily (Hermes-safe)
    const homeReducerFactory = require('@modules/home/store').default;
    homeReducer = homeReducerFactory();
  }
  return homeReducer;
};

const getAccountReducer = () => {
  if (!accountReducer) {
    const accountReducerFactory = require('@modules/Account/store').default;
    accountReducer = accountReducerFactory();
  }
  return accountReducer;
};

const getUserLevelReducer = () => {
  if (!userLevelReducer) {
    const userLevelReducerFactory = require('@modules/UserLevel/store').default;
    userLevelReducer = userLevelReducerFactory();
  }
  return userLevelReducer;
};

const getFlightReducer = () => {
  if (!flightReducer) {
    const flightReducerFactory = require('@modules/Flight/store').default;
    flightReducer = flightReducerFactory();
  }
  return flightReducer;
};

const getPaymentReducer = () => {
  if (!paymentReducer) {
    const paymentReducerFactory = require('@modules/payment/store').default;
    paymentReducer = paymentReducerFactory();
  }
  return paymentReducer;
};

// Store is created lazily - only when first accessed
// This ensures store creation happens after app registration
let storeInstance: ReturnType<typeof configureStore> | null = null;

export const getStore = (): ReturnType<typeof configureStore> => {
  if (!storeInstance) {
    try {
      // Get reducers first
      const digital = getDigitalReducer();
      const ecommerce = getEcommerceReducer();
      const home = getHomeReducer();
      const account = getAccountReducer();
      const userLevel = getUserLevelReducer();
      const flight = getFlightReducer();
      const payment = getPaymentReducer();

      // Get RTK Query APIs (lazy loaded)
      // These are prepared for future API integration
      // Currently using initialData, but structure is ready for API switch
      const getHomeApi = require('@modules/digital/store/api/homeApi').default;
      const getMessagesApi = require('@modules/digital/store/api/messagesApi').default;
      const getChatApi = require('@modules/digital/store/api/chatApi').default;
      const getProjectsApi = require('@modules/digital/store/api/projectsApi').default;
      const getCompletedProjectApi = require('@modules/digital/store/api/completedProjectApi').default;
      const getPostJobApi = require('@modules/digital/store/api/postJobApi').default;
      const getEcommerceHomeApi = require('@modules/ecommerce/store/api/homeApi').default;
      const getHomeModuleApi = require('@modules/home/store/api/homeApi').default;

      const homeApi = getHomeApi();
      const messagesApi = getMessagesApi();
      const chatApi = getChatApi();
      const projectsApi = getProjectsApi();
      const completedProjectApi = getCompletedProjectApi();
      const postJobApi = getPostJobApi();
      const ecommerceHomeApi = getEcommerceHomeApi();
      const homeModuleApi = getHomeModuleApi();

      // Combine reducers inline to avoid function call issues
      const rootReducer = combineReducers({
        digital,
        ecommerce,
        home,
        account,
        userLevel,
        flight,
        payment,
        [homeApi.reducerPath]: homeApi.reducer,
        [messagesApi.reducerPath]: messagesApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
        [projectsApi.reducerPath]: projectsApi.reducer,
        [completedProjectApi.reducerPath]: completedProjectApi.reducer,
        [postJobApi.reducerPath]: postJobApi.reducer,
        [ecommerceHomeApi.reducerPath]: ecommerceHomeApi.reducer,
        [homeModuleApi.reducerPath]: homeModuleApi.reducer,
      });

      // Create store with minimal configuration
      storeInstance = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
          return getDefaultMiddleware({
            // Disable all checks for Hermes compatibility
            serializableCheck: false,
            immutableCheck: false,
            thunk: true,
          }).concat(
            homeApi.middleware,
            messagesApi.middleware,
            chatApi.middleware,
            projectsApi.middleware,
            completedProjectApi.middleware,
            postJobApi.middleware,
            ecommerceHomeApi.middleware,
            homeModuleApi.middleware
          );
        },
      });
    } catch (error) {
      console.error('Error creating Redux store:', error);
      console.error('Error stack:', (error as Error).stack);
      throw error;
    }
  }
  return storeInstance!;
};

// Don't create store at module load - only create when getStore() is called
// This ensures store creation happens after app registration

// Export types for TypeScript
export type RootState = ReturnType<ReturnType<typeof getStore>['getState']>;
export type AppDispatch = ReturnType<typeof getStore>['dispatch'];

