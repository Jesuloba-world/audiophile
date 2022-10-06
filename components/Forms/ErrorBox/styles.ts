import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 16px;
	align-items: center;
	padding-block: 8px;
	padding-inline: 16px;
	background-color: rgb(185 28 28 / 0.3);
	border: 1px solid rgb(185 28 28);
	border-radius: 4px;

	svg {
		font-size: 24px;
	}

	p {
		font-size: 14px;
		line-height: 20px;
	}
`;
