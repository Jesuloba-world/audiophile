import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.footer`
	color: ${({ theme }) => theme.white};
	background-color: ${({ theme }) => theme.black};
`;

export const Inner = styled.div`
	padding-block: 75px 48px;
	max-width: 1110px;
	margin: 0 auto;
	position: relative;

	@media ${devices.desktop} {
		padding-inline: 40px;
		padding-block: 60px 46px;
	}

	@media ${devices.tablet500} {
		padding-inline: 24px;
		padding-block: 52px 38px;
	}
`;

export const Top = styled.div`
	display: flex;
	justify-content: space-between;

	@media ${devices.tablet} {
		flex-direction: column;
		gap: 32px;
	}

	@media ${devices.tablet500} {
		align-items: center;
		gap: 48px;
	}
`;

export const Middle = styled.div`
	margin-block: 36px 56px;
	display: grid;
	grid-template-columns: 1fr 1fr;

	@media ${devices.tablet} {
		grid-template-columns: 1fr;
		margin-block: 32px 80px;
	}

	@media ${devices.tablet500} {
		margin-block: 48px;
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;

	@media ${devices.tablet500} {
		flex-direction: column;
		align-items: center;
		gap: 48px;
	}
`;

export const Note = styled.p`
	font-weight: 500;
	font-size: 15px;
	line-height: 25px;
	mix-blend-mode: normal;
	opacity: 0.5;
	width: 540px;

	@media ${devices.tablet} {
		width: 100%;
	}

	@media ${devices.tablet500} {
		text-align: center;
	}
`;

export const Socials = styled.div`
	align-items: flex-end;
	justify-content: flex-end;
	display: flex;
	gap: 16px;

	${Bottom} & {
		display: none;
	}

	@media ${devices.tablet} {
		${Bottom} & {
			display: flex;
		}

		${Middle} & {
			display: none;
		}
	}
`;

export const Copyright = styled(Note)`
	font-weight: 700;
`;

export const Yellow = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${({ theme }) => theme.sienna};
	height: 4px;
	width: 101px;

	@media ${devices.desktop} {
		left: 40px;
	}

	@media ${devices.tablet500} {
		left: 50%;
		transform: translateX(-50%);
	}
`;
