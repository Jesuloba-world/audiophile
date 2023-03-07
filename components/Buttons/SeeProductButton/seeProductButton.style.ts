import styled from "styled-components";
import { colorType } from "types";
import { interpretColor } from "../colorutil";

export const Container = styled.div<{ color: colorType }>`
	button {
		width: 160px;
		height: 48px;
		${({ color, theme }) => interpretColor(color, theme)};
		transition: all 0.2s;

		p {
			font-weight: 700;
			font-size: 13px;
			line-height: 18px;
			letter-spacing: 1px;
			text-transform: uppercase;
		}
	}
`;
