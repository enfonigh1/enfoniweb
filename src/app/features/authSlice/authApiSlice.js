import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    postRegister: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: {
          full_name: data?.full_name,
          email: data?.email,
          password: data?.password,
          usher: true,
          college_name: data?.college_name,
          student_id: data?.student_id,
          phone_number: data?.phone_number,
          date_of_graduation: data?.date_of_graduation,
        },
      }),
    }),

    verifyEmail: builder.query({
      query: (data) => ({
        url: "/resend-token",
        method: "GET",

      }),
    }),
    verifyEmail: builder.query({
      query: (data) => ({
        url: "/verify-email",
        method: "GET",

      }),
    }),

    postLogin: builder.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: { ...data },
      }),
    }),

    usherLogin: builder.mutation({
      query: (data) => ({
        url: "/usher/login",
        method: "POST",
        body: { ...data },
      }),
    }),

    fetchSingleUser: builder.mutation({
      query: (data) => ({
        url: "/user/fetch-single-user",
        method: "POST",
        body: data,
      }),
    }),

    sendCode: builder.mutation({
      query: (data) => ({
        url: "/recover_password",
        method: "POST",
        body: data,
      }),
    }),


    verifyCode: builder.mutation({
      query: (data) => ({
        url: "/verify_code",
        method: "POST",
        body: data,
      }),
    }),


    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/reset-password",
        method: "PUT",
        body: data,
      }),
    }),



    updateUser: builder.mutation({
      query: (data) => ({
        url: "/user/update-user",
        method: "PUT",
        body: data,
      }),
    }),

    postUserPayment: builder.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        body: { ...data },
      }),
    }),
    sameDayBookiing: builder.mutation({
      query: (data) => ({
        url: "/same-day-booking",
        method: "POST",
        body: { ...data },
      }),
    }),
    usherCheckins: builder.mutation({
      query: (data) => ({
        url: "/user/usher-checkins",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  usePostRegisterMutation,
  usePostLoginMutation,
  usePostUserPaymentMutation,
  useVerifyEmailQuery,
  useFetchSingleUserMutation,
  useSendCodeMutation,
  useVerifyCodeMutation,
  useResetPasswordMutation,
  useUsherLoginMutation,
  useSameDayBookiingMutation,
  useUsherCheckinsMutation
} = authApiSlice;
