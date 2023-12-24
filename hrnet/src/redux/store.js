import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["employee"],
};

const persistedEmployeeReducer = persistReducer(
    persistConfig,
    employeeReducer
);

const store = configureStore({
    reducer: {
        employee: persistedEmployeeReducer,
    },
});

const persistor = persistStore(store);

export { store, persistor };
