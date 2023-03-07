import styled from "styled-components";
import { colorType } from "types";
import { interpretColor } from "../colorutil";

export const Container = styled.button<{ full?: boolean; color: colorType }>`
	height: 48px;
	width: ${({ full }) => (full ? `100%` : `160px`)};
	text-transform: uppercase;

	font-family: "Manrope";
	font-weight: 700;
	font-size: 13px;
	line-height: 18px;
	letter-spacing: 1px;

	${({ color, theme }) => interpretColor(color, theme)};

	&:focus {
		outline: none;
	}

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;
