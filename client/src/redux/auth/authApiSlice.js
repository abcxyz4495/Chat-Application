import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (credential) => ({
				url: "auth/register",
				method: "POST",
				body: { ...credential },
			}),
		}),
		login: builder.mutation({
			query: (credential) => ({
				url: "/auth/login",
				method: "POST",
				body: { ...credential },
			}),
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApiSlice;
