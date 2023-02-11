import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ViewedUser from '../models/ViewedUser'

export interface FollowingsState {
  followings: ViewedUser[]
}

// Define the initial state using that type
const initialState: FollowingsState = {
    followings: []
}

export const followingsSlice = createSlice({
  name: 'followings',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    loadFollowings: (state, action: PayloadAction<ViewedUser[]>) => {
      state.followings = action.payload;
    },
    addToFollowings: (state, action: PayloadAction<ViewedUser>) => {
      state.followings = [action.payload, ...state.followings];
    }
  }
})

export const { loadFollowings, addToFollowings } = followingsSlice.actions

export default followingsSlice.reducer