import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    paymentinfo: sessionStorage.getItem("paymentinfo") ? JSON.parse(sessionStorage.getItem("paymentinfo")) : {},
    payerinfo: sessionStorage.getItem("payerinfo") ? JSON.parse(sessionStorage.getItem("payerinfo")) : {}
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
        },

        payerInfo: {
            reducer(state, action) {
                state.payerinfo = action?.payload
                sessionStorage.setItem("payerinfo", JSON.stringify(action?.payload))
            }
        }
    }
})

export const { paymentInfo, payerInfo } = paymentSlice.actions

export const paymentinfo = state => state?.payment?.paymentinfo?.data?.reference

export const payer = state => state?.payment?.payerinfo

export default paymentSlice.reducer