import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts/contactsSlice';
import { modalReducer } from './modal/modalSlice';
import { themeReducer } from './theme/themeSlice';
import { langReducer } from './lang/langSlice';
import { authReducer, AuthState } from './auth/authSlice';


const authPersistConfig= {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const store = configureStore({

    reducer: {    
        contacts: contactsReducer,

        modal: modalReducer,
        theme:themeReducer,
        lang:langReducer,
        // generator:generatorReducer,
        auth: persistReducer<AuthState >(authPersistConfig, authReducer) ,// ✅ Correctly typed
    },

    middleware (getDefaultMiddleware) {
        return getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, ],
          },
        })},
})   

export const getDispatch = () => store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);