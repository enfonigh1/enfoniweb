import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    admins: sessionStorage.getItem("admins") ? JSON.parse(sessionStorage.getItem("admins")) : [],
}

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdmins: (state, action) => {
            state.admins = action.payload;
            sessionStorage.setItem("admins", JSON.stringify(state.admins))
        },
    },
})

export const { setAdmins } = adminSlice.actions;

export const selectAdmins = (state) => state?.admin?.admins;

export default adminSlice.reducer;