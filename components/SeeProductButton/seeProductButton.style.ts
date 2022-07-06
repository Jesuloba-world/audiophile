import styled from "styled-components";

export type colorType = "black" | "sienna" | undefined;

const interpretColor = (color: colorType, theme: any) => {
	if (color) {
		switch (color) {
			case "black":
				return `
                    color: ${theme.white};
                    background-color: ${theme.black};
                `;

			case "sienna":
				return `
                    color: ${theme.white};
                    background-color: ${theme.sienna};
                `;
		}
	} else {
		return `
            color: ${theme.black};
            background-color: transparent;
            border: 1px solid ${theme.black};
        `;
	}
};

export const Container = styled.a<{ color: colorType }>`
	button {
		width: 160px;
		height: 48px;
		${({ color, theme }) => interpretColor(color, theme)};

		p {
			font-weight: 700;
			font-size: 13px;
			line-height: 18px;
			letter-spacing: 1px;
			text-transform: uppercase;
		}
	}
`;
