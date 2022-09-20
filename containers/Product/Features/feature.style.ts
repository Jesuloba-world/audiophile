import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	gap: 20px;
`;

export const Features = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	max-width: 635px;
`;

export const InTheBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 350px;
`;

export const Title = styled.h3``;

export const Text = styled.p`
	white-space: pre-line;
	mix-blend-mode: normal;
	opacity: 0.5;
`;

export const IncludedContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Included = styled.div`
	display: flex;
	gap: 20px;
`;

export const Quantity = styled.p`
	font-weight: 700;
	color: #d87d4a;
`;
