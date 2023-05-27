
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import EncryptedStorage from 'react-native-encrypted-storage/lib/typescript/EncryptedStorage';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  blacklist: [
    'user',
  ],
  
};

const middlewares = [thunk];

// if (__DEV__) {
//   middlewares.push(createLogger());
// }

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => [
    ...middlewares,
    ...getDefaultMiddleware({serializableCheck: false}),
  ],
});

export const persistor = persistStore(store);

