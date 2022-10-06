import styled from "styled-components";

export const Container = styled.button<{ full?: boolean }>`
	height: 48px;
	width: ${({ full }) => (full ? `100%` : `160px`)};
	background: ${({ theme }) => theme.sienna};
	text-transform: uppercase;

	font-family: "Manrope";
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 1px;

	color: ${({ theme }) => theme.white};

	&:hover {
		background: ${({ theme }) => theme.light_salmon};
	}

	&:focus {
		outline: none;
	}

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;
