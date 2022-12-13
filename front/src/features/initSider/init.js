import { createSlice } from "@reduxjs/toolkit";

export const initSider = createSlice({
    name: 'initSider',
    initialState: {
        Loading: false,
      },
    reducers: {
        changeLoading: (state, action) => {
            state.Loading=action.payload
        },

    }
})
export const { changeLoading } = initSider.actions
export default initSider.reducer