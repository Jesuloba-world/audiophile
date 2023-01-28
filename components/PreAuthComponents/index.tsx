import { PreAuthContainer } from "./style";

export const PreAuthLoader = () => {
	return (
		<PreAuthContainer>
			<h3>Loading...</h3>
		</PreAuthContainer>
	);
};

export const PreAuthDenied = () => {
	return (
		<PreAuthContainer>
			<h4>Access Denied</h4>
			<p>You are not logged in</p>
		</PreAuthContainer>
	);
};
