import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
	MeQueryDocument,
	RefreshAndRevokeTokenDocument,
	UserNode,
} from "src/graphql/generated";
import axios from "src/axios";

type useMeType = () => {
	me: UserNode | undefined;
	loading: boolean;
	error: string;
	loggedIn: boolean;
	logout: () => void;
};

export const useMe: useMeType = () => {
	const { data, loading, refetch } = useQuery(MeQueryDocument, {
		fetchPolicy: "network-only",
	});
	const [refreshAndRevoke] = useMutation(RefreshAndRevokeTokenDocument);
	const [gettingRefresh, setGettingRefresh] = useState(false);
	const [error, setError] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const getRefresh = useCallback(async () => {
		setGettingRefresh(true);
		try {
			const response = await axios.get("/getRefresh");
			const refresh = response.data.refresh;
			await refreshAndRevoke({
				variables: {
					refreshToken: refresh,
				},
			});
			await refetch();

			setGettingRefresh(false);
		} catch {
			(err: any) => {
				setError(err.message);
				setLoggedIn(false);
				setGettingRefresh(false);
			};
		}
	}, [refreshAndRevoke, refetch]);

	const logout = async () => {
		try {
			const response = await axios.post("/logout");
			console.log("Logged out");
		} catch {
			(err: any) => {
				setError(err.message);
			};
		}
	};

	useEffect(() => {
		if (!loading) {
			if (!data?.me) {
				getRefresh();
			} else {
				setLoggedIn(true);
			}
		}
	}, [data?.me, getRefresh, loading]);

	return {
		me: data?.me as UserNode,
		loading: loading || gettingRefresh,
		error,
		loggedIn,
		logout,
	};
};
