import styled from "styled-components";
import { devices } from "styled.config";

export const Container = styled.section<{ home: boolean | undefined }>`
	max-width: 1110px;
	margin: 0 auto;
	margin-block: ${({ home }) => (home ? `120px 168px` : `160px`)};

	height: 284px;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

	gap: 30px;

	@media ${devices.desktop} {
		padding-inline: 40px;
	}

	@media ${devices.tablet} {
		height: auto;
		margin-block: 148px 96px;
		column-gap: 10px;
		row-gap: 70px;
	}

	@media ${devices.desktop} {
		padding-inline: 24px;
	}
`;

export const OneCategory = styled.div`
	display: flex;
	align-items: flex-end;
`;

export const GreyInside = styled.a`
	height: 204px;
	width: 100%;
	border-radius: 8px;
	background-color: ${({ theme }) => theme.cultured};
	padding-bottom: 30px;

	display: flex;
	align-items: flex-end;
	justify-content: center;
	position: relative;

	@media ${devices.tablet} {
		height: 165px;
	}
`;

export const Imager = styled.div`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translate(-50%, -35%);

	img {
		width: auto;
		height: auto;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
`;

export const LinkText = styled.div`
	display: flex;
	align-items: center;
	gap: 13px;

	p {
		font-weight: 700;
		font-size: 13px;
		line-height: 18px;
		letter-spacing: 1px;
		text-transform: uppercase;
		color: ${({ theme }) => theme.black};
		mix-blend-mode: normal;
		opacity: 0.5;
		transition: all 0.2s;

		${GreyInside}:hover & {
			color: ${({ theme }) => theme.sienna};
			opacity: 1;
		}
	}
`;
