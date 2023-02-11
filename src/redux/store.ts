import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import followingsReducer from './followingsSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  user: userReducer,
  followings: followingsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, user: UserState}
export type AppDispatch = typeof store.dispatch