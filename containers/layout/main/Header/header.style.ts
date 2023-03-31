import styled from "styled-components";
import { devices } from "styled.config";
import { MiddleLinks } from "../MidLinks/midlinks.style";

export const PlaceHolder = styled.div`
	width: 100%;
	height: 96px;

	@media ${devices.tablet} {
		height: 90px;
	}
`;

export const Container = styled.header<{
	home?: boolean;
}>`
	background-color: ${({ theme, home }) =>
		home ? theme.smoky : theme.black};
	height: 96px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
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

	@media ${devices.tablet500} {
		padding-inline: 24px;
		margin-inline: 0;
	}

	@media ${devices.mobile} {
		gap: 16px;
	}

	&::after {
		display: block;
		content: "";
		height: 1px;
		width: 100% + 24px;
		background: ${({ theme }) => theme.white};
		opacity: 0.2;
		position: absolute;
		bottom: 0;

		@media ${devices.tablet500} {
			width: calc(100% + 24px);
			left: -24px;
		}
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

	@media ${devices.tablet500} {
		margin-left: auto;
	}

	@media ${devices.mobile} {
		gap: 16px;
	}
`;

export const HamButton = styled.button<{ active: boolean }>`
	display: none;
	height: ${({ active }) => (active ? `13.44px` : `15px`)};
	transition: all 0.2s;

	div {
		width: 16px;
		height: 3px;
		background: ${({ theme }) => theme.white};

		transition: all 0.2s;
	}

	.second {
		${({ active }) => active && `display: none`};
	}

	${({ active }) =>
		active &&
		`.first {
			transform-origin: left;
			transform: rotate(45deg);
		}

		.third {
			transform-origin: left;
			transform: rotate(-45deg);
		}`}

	@media ${devices.tablet} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
`;

export const SideNav = styled.div`
	background-color: ${({ theme }) => theme.white};
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	padding-block: 40px 67px;

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	max-height: calc(100vh - 96px);

	overflow-y: auto;

	& > section {
		margin-block: 0;
	}

	@media ${devices.tablet} {
		padding-block: 84px 67px;
		max-height: calc(100vh - 90px);
	}

	@media ${devices.tablet500} {
		padding-block: 84px 35px;
	}
`;
