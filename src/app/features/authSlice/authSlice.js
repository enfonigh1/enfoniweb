import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : [],
  userInfo: sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : [],
  userpayment: sessionStorage.getItem("payment")
    ? JSON.parse(sessionStorage.getItem("payment"))
    : [],
  service: sessionStorage.getItem("service") ? sessionStorage.getItem("service") : ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    auth: {
      reducer(state, action) {
        state.auth = action?.payload;
        sessionStorage.setItem("auth", JSON.stringify(action.payload));
      },
    },

    logout: {
      reducer(state, action) {
        state.auth = []
        sessionStorage.clear()
      }
    },

    userInfo: {
      reducer(state, action) {
        state.userInfo = action?.payload;
        sessionStorage.setItem("userInfo", JSON.stringify(action.payload));
      },
    },

    userService: {
      reducer(state, action) {
        state.service = action?.payload;
        sessionStorage.setItem("service", action.payload);
      },
    },
    payment: {
      reducer(state, action) {
        state.userpayment = action?.payload;
        sessionStorage.setItem("payment", JSON.stringify(action?.payload));
      },
    },
  },
});

export const { auth, payment, userInfo, logout, userService } = authSlice.actions;
export const registerDetails = (state) => state?.auth?.auth;
export const userinfo = (state) => state?.auth?.userInfo;

export const service = (state) => state?.auth?.service;
export default authSlice.reducer;
