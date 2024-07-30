import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/authSlice";
import { contactsSlice } from "./contacts/contactsSlice";
import { filterSlice } from "./filterSlice";


export const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export const persistor = persistStore(store);