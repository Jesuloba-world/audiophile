import { colorType } from "types";

export const interpretColor = (color: colorType, theme: any) => {
	switch (color) {
		case "black":
			return `
                    color: ${theme.white};
                    background-color: ${theme.black};

					&:hover {
						background-color: ${theme.grey};
					}
                `;

		case "sienna":
			return `
                    color: ${theme.white};
                    background-color: ${theme.sienna};

					&:hover {
						background-color: ${theme.light_salmon};
					}

                    &:disabled {
                        background:  ${theme.light_salmon};
                    }
                `;

		case "transparent":
			return `
				color: ${theme.black};
				background-color: transparent;
				border: 1px solid ${theme.black};

				&:hover {
					background-color: ${theme.black};
					color: ${theme.white};
				}
        	`;
	}
};
