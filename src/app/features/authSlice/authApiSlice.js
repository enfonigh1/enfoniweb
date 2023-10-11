import { apiSlice } from "../api/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
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

    postLogin: builder.mutation({
      query: (data) => ({
        url: "/signin",
        method: "POST",
        body: { ...data },
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
  usePostRegisterMutation,
  usePostLoginMutation,
  usePostUserPaymentMutation,
} = authApiSlice;
