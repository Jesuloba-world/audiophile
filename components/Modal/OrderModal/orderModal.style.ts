import styled from "styled-components";
import { devices } from "styled.config";

export const Inner = styled.div`
	display: flex;
	flex-direction: column;

	& > button {
		margin-top: 46px;
	}

	@media ${devices.tablet500} {
		& > button {
			margin-top: 23px;
		}
	}
`;

export const MarkContainer = styled.div`
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: ${({ theme }) => theme.sienna};
	display: grid;
	place-items: center;
	margin-bottom: 33px;

	@media ${devices.tablet500} {
		margin-bottom: 23px;
	}
`;

export const Appreciation = styled.h3`
	text-transform: uppercase;
	margin-bottom: 24px;

	@media ${devices.tablet500} {
		margin-bottom: 16px;
	}
`;

export const Text = styled.p`
	mix-blend-mode: normal;
	opacity: 0.5;
	margin-bottom: 33px;

	@media ${devices.tablet500} {
		margin-bottom: 23px;
	}
`;

export const Loading = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;

	h3 {
		text-align: center;
	}
`;
