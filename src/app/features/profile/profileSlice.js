import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSelected:  "",
    setprofile: false,
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        currentProfile: {
            reducer(state, action) {
                state.currentSelected = action?.payload
                // sessionStorage.setItem("profile", action?.payload)
            }
        },
        setprofile: {
            reducer(state, action) {
                state.setprofile = action?.payload
                // sessionStorage.setItem("setprofile", action?.payload)
            }
        }
    }
})

export const {currentProfile, setprofile} = profileSlice.actions

export const profile = state => state?.profile?.currentSelected
export const pcliecked = state => state?.profile?.setprofile

export default profileSlice.reducer