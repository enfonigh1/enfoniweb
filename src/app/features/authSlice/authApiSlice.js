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
          college_name: data?.college_name,
          student_id: data?.student_id,
          phone_number: data?.phone_number,
          date_of_graduation: data?.date_of_graduation,
        },
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
  }),
});

export const {
  useUpdateUserMutation,
  usePostRegisterMutation,
  usePostLoginMutation,
  usePostUserPaymentMutation,
  useVerifyEmailQuery,
} = authApiSlice;
