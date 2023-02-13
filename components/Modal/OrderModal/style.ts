import styled from "styled-components";

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const MarkContainer = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: ${({ theme }) => theme.sienna};
	display: grid;
	place-items: center;
`;

export const Appreciation = styled.h3`
	text-transform: uppercase;
`;

export const Text = styled.p`
	mix-blend-mode: normal;
	opacity: 0.5;
`;
