import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSelected: sessionStorage.getItem("price") ? sessionStorage.getItem("price") : 0.02,

}

const priceSlice = createSlice({
    name: "price",
    initialState,
    reducers: {
        currentPrice: {
            reducer(state, action) {
                state.currentSelected = action?.payload
                sessionStorage.setItem("price", action?.payload)
            }
        },
        setprice: {
            reducer(state, action) {
                state.setprice = action?.payload
                sessionStorage.setItem("setprice", action?.payload)
            }
        }
    }
})

export const { currentPrice, setprice } = priceSlice.actions

export const price = state => state?.price?.currentSelected
export default priceSlice.reducer