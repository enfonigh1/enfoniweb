import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSelected: sessionStorage.getItem("profile") ? sessionStorage.getItem("profile") : ""
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        currentProfile: {
            reducer(state, action) {
                state.currentSelected = action?.payload
                sessionStorage.setItem("profile", action?.payload)
            }
        }
    }
})

export const {currentProfile} = profileSlice.actions

export const profile = state => state?.profile?.currentSelected

export default profileSlice.reducer