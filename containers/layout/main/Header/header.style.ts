import styled from "styled-components";
import { devices } from "styled.config";
import { MiddleLinks } from "../MidLinks/midlinks.style";

export const Container = styled.header<{
	home?: boolean;
}>`
	background-color: ${({ theme, home }) =>
		home ? theme.smoky : theme.black};
	height: 96px;
	position: relative;
	z-index: 10;

	@media ${devices.tablet} {
		height: 90px;
	}
`;

export const Inner = styled.div`
	max-width: 1110px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;

	@media ${devices.desktop} {
		margin-inline: 40px;
	}

	@media ${devices.tablet} {
		justify-content: flex-start;
		gap: 40px;

		& ${MiddleLinks} {
			display: none;
		}
	}

	&::after {
		display: block;
		content: "";
		height: 1px;
		width: 100%;
		background: ${({ theme }) => theme.white};
		opacity: 0.2;
		position: absolute;
		bottom: 0;
	}
`;

export const IconLinks = styled.div`
	display: flex;
	gap: 34px;
	align-items: center;

	@media ${devices.tablet} {
		margin-left: auto;
		gap: 28px;
	}
`;

export const HamButton = styled.button`
	display: none;

	@media ${devices.tablet} {
		display: block;
	}
`;

export const SideNav = styled.div`
	background-color: ${({ theme }) => theme.white};
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	padding-block: 56px 67px;

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	& > section {
		margin-block: 0;
	}
`;
