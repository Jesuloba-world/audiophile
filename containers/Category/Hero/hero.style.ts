import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section`
	background-color: ${({ theme }) => theme.black};
	color: ${({ theme }) => theme.white};
	height: 240px;
	display: grid;
	place-items: center;

	@media ${devices.tablet500} {
		height: 120px;
	}
`;

export const Title = styled.h2`
	@media ${devices.tablet500} {
		font-size: 28px;
		line-height: 38px;
		letter-spacing: 2px;
	}
`;
