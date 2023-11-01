import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import authReducer from "./features/authSlice/authSlice";
import profileReducer from "./features/profile/profileSlice";
import adminReducer from "./features/admin/adminSlice";
import priceReducer from "./features/pricing/priceSlice";
import paymentReducer from "./features/payment/paymentSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    profile: profileReducer,
    admin: adminReducer,
    price: priceReducer,
    payment: paymentReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
