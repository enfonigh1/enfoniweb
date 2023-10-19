import { apiSlice } from "../api/apiSlice";

const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAdmins: builder.query({
            query: () => ({
                url: "/user/fetch-all-users",
                method: "GET",
            }),
        }),
    }),
});

export const {
    useGetAdminsQuery,

} = adminApiSlice;