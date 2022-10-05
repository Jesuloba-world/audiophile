import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const FormInput = styled.input`
	height: 48px;
	background: #ffffff;
	border: 1px solid #cfcfcf;
	/* border-radius: 8px; */
	padding-inline: 16px;

	font-size: 14px;
	line-height: 19px;
	letter-spacing: -0.25px;

	box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
`;
