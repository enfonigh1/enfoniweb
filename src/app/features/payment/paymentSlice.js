import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentinfo: sessionStorage.getItem("paymentinfo") ? JSON.parse(sessionStorage.getItem("paymentinfo")) : {}
}

export const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        paymentInfo: {
            reducer(state, action) {
                state.paymentinfo = action?.payload
                sessionStorage.setItem("paymentinfo", JSON.stringify(action?.payload))
            }
        }
    }
})

export const { paymentInfo } = paymentSlice.actions

export const paymentinfo = state => state?.payment?.paymentinfo?.data?.reference

export default paymentSlice.reducer