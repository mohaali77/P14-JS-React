import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import employeeReducer from './employeeSlice';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, employeeReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export const persistor = persistStore(store);

export default store;
