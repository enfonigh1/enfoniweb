import { apiSlice } from "../api/apiSlice";

const paymentApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        postPayment: builder.mutation({
            query: data => ({
                url: "/user/payment",
                method: "POST",
                body: data
            })
        }),

        submitOtp: builder.mutation({
            query: data => ({
                url: "/user/submit-otp",
                method: "POST",
                body: data
            })
        }),

        checkPaymentStatus: builder.mutation({
            query: data => ({
                url: "/user/check-payment-status",
                method: "POST",
                body: data
            })
        })
    })
})

export const {
    usePostPaymentMutation,
    useSubmitOtpMutation,
    useCheckPaymentStatusMutation
} = paymentApiSlice