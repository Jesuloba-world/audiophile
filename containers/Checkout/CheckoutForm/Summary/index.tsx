import { FC } from "react";
import { Container } from "./styles";
import { GenButton } from "components";

export const Summary: FC = () => {
	return (
		<Container>
			Summary
			<GenButton fullwidth>Submit</GenButton>
		</Container>
	);
};
