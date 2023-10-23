import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: sessionStorage.getItem("auth")
    ? JSON.parse(sessionStorage.getItem("auth"))
    : [],
  userInfo: sessionStorage.getItem("userInfo")
    ? JSON.parse(sessionStorage.getItem("userInfo"))
    : {},
  userpayment: sessionStorage.getItem("payment")
    ? JSON.parse(sessionStorage.getItem("payment"))
    : [],
  email: sessionStorage.getItem("email") ? sessionStorage.getItem("email") : "",
  service: sessionStorage.getItem("service") ? sessionStorage.getItem("service") : "",
  closepopup: sessionStorage.getItem("closepopup") ? sessionStorage.getItem("closepopup") : true,
  openservice: sessionStorage.getItem("openservice") ? sessionStorage.getItem("openservice") : false,
  openschool: sessionStorage.getItem("openschool") ? sessionStorage.getItem("openschool") : false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userEmail: {
      reducer(state, action) {
        state.email = action?.payload;
        sessionStorage.setItem("email", action.payload);
      }
    },
    auth: {
      reducer(state, action) {
        state.auth = action?.payload;
        sessionStorage.setItem("auth", JSON.stringify(action.payload));
      },
    },

    closePopUp: {
      reducer(state, action) {
        state.closepopup = action?.payload;
        sessionStorage.setItem("closepopup", action.payload);
      },
    },
    openService: {
      reducer(state, action) {
        state.openservice = action?.payload;
        sessionStorage.setItem("openservice", action.payload);
      },
    },

    openSchool: {
      reducer(state, action) {
        state.openschool = action?.payload;
        sessionStorage.setItem("openschool", action.payload);
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

export const { auth, payment, userInfo, logout, userService, closePopUp, openService, openSchool, userEmail } = authSlice.actions;
export const authuser = (state) => state?.auth?.auth;
export const userinfo = (state) => state?.auth?.userInfo;
export const closepop = state => state?.auth?.closepopup
export const service = (state) => state?.auth?.service;
export const openservice = (state) => state?.auth?.openservice;
export const openschool = (state) => state?.auth?.openschool;
export const useremail = (state) => state?.auth?.email;
export default authSlice.reducer;
