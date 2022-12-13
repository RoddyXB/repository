import { createSlice } from "@reduxjs/toolkit";

export const routeMenu = createSlice({
    name: 'routeMenu',
    initialState: {
        value: '/',
      },
    reducers: {
        changeUrl: (state, action) => {
            state.value=action.payload
        }
    }
})
export const { changeUrl } = routeMenu.actions
export default routeMenu.reducer