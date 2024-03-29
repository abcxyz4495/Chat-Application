/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
	baseUrl: "http://localhost:4000",
	credentials: "include",
	prepareHeaders: (headers, { getState }) => {
		const token = getState().auth.token;
		if (token) headers.set("authorization", `Bearer ${token}`);
		return headers;
	},
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);
	if (result?.error?.originalStatus === 403) {
		console.log(`Sending refresh token`);

		const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
		console.log(`RefreshToken: ${refreshResult}`);

		if (refreshResult?.data) {
			const user = api.getState().auth.user;
			api.dispatch(setCredentials({ ...refreshResult.data, user }));
			result = await baseQuery(args, api, extraOptions);
		} else {
			api.dispatch(logOut());
		}
	}
	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	endpoints: (builder) => ({}),
});
