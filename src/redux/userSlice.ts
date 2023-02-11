import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  username: string | null,
  userId: string | null,
  jwtToken: string | null,
  loggedIn: boolean,
  imageId: string | null
}

// Define the initial state using that type
const initialState: UserState = {
    username: null,
    userId: null,
    jwtToken: null,
    loggedIn: false,
    imageId: null
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    updateUserInfo: (state, action: PayloadAction<UserState>) => {
      state.username = action.payload.username
      state.userId = action.payload.userId
      state.jwtToken = action.payload.jwtToken
      state.loggedIn = action.payload.loggedIn
      state.imageId = action.payload.imageId
    }
  }
})

export const { updateUserInfo } = userSlice.actions

export default userSlice.reducer