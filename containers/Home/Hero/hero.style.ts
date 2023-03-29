import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section<{
	image: string;
	tabletImage: string;
	mobileImage: string;
}>`
	height: calc(100vh - 96px);
	background-color: ${({ theme }) => theme.smoky};
	background-image: url(${({ image }) => image});
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;

	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;

	min-height: calc(500px - 96px);

	@media ${devices.tablet} {
		height: calc(100vh - 90px);
		background-image: url(${({ tabletImage }) => tabletImage});
	}

	@media ${devices.tablet500} {
		height: calc(100vh - 90px);
		background-image: url(${({ mobileImage }) => mobileImage});
	}
`;

export const Inner = styled.div`
	max-width: 1110px;
	height: 100%;
	margin: 0 auto;

	display: flex;
	align-items: center;

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		justify-content: center;
	}

	@media ${devices.tablet500} {
		padding-inline: 24px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media ${devices.tablet} {
		align-items: center;
		text-align: center;
	}

	a {
		margin-top: 16px;
	}

	@media ${devices.tablet500} {
		a {
			margin-top: 4px;
		}
	}
`;

export const Overline = styled.p`
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 10px;
	text-transform: uppercase;
	color: ${({ theme }) => theme.white};
	opacity: 0.5;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.white};
	text-transform: uppercase;
	width: 398px;

	@media ${devices.tablet500} {
		font-size: 36px;
		line-height: 40px;
		letter-spacing: 1.2px;
		width: 100%;
	}
`;

export const SubTitle = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	color: ${({ theme }) => theme.white};
	opacity: 0.75;
	width: 349px;

	@media ${devices.tablet500} {
		width: 100%;
	}
`;
