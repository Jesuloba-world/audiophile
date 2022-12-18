import styled from "styled-components";

export const Container = styled.section<{ home: boolean | undefined }>`
	max-width: 1110px;
	margin: 0 auto;
	margin-block: ${({ home }) => (home ? `120px 168px` : `160px`)};

	height: 284px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;

	gap: 30px;
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
