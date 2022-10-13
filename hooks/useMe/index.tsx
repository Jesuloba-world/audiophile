import { useState, useEffect, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/client";
import {
	MeQueryDocument,
	MeQueryQuery,
	RefreshAndRevokeTokenDocument,
	UserNode,
} from "src/graphql/generated";
import axios from "src/axios";

type useMeType = () => {
	me: UserNode | undefined;
	loading: boolean;
	error: string;
	loggedIn: boolean;
};

export const useMe: useMeType = () => {
	const { data, loading } = useQuery(MeQueryDocument);
	const [refreshAndRevoke] = useMutation(RefreshAndRevokeTokenDocument);
	const [gettingRefresh, setGettingRefresh] = useState(false);
	const [error, setError] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	const getRefresh = useCallback(async () => {
		setGettingRefresh(true);
		axios
			.get("/getRefresh")
			.then((data: any) => {
				setGettingRefresh(false);
				const refresh = data.data.refresh;
				refreshAndRevoke({
					variables: {
						refreshToken: refresh,
					},
				});
			})
			.catch((err) => {
				setError(err.message);
				setLoggedIn(false);
			});
	}, [refreshAndRevoke]);

	useEffect(() => {
		if (!data?.me) {
			getRefresh();
		} else {
			setLoggedIn(true);
		}
	}, [data?.me, getRefresh]);

	return {
		me: data?.me as UserNode,
		loading: loading || gettingRefresh,
		error,
		loggedIn,
	};
};
