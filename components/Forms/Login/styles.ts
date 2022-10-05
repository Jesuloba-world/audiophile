import styled from "styled-components";

export const Container = styled.div`
	background: ${({ theme }) => theme.white};
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 15;

	width: 480px;
	min-height: 100px;
	border-radius: 8px;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
		0 4px 6px -4px rgb(0 0 0 / 0.1);
	overflow: hidden;

	padding-inline: 20px;
	padding-block: 24px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

export const Form = styled.form`
	background: ${({ theme }) => theme.white};
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const Heading = styled.h3`
	text-transform: capitalize;
	text-align: center;

	display: flex;
	flex-direction: column;
	gap: 8px;

	&::after {
		content: "";
		display: block;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.sienna};
	}
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const CheckboxWrapper = styled.div`
	display: flex;
	gap: 4px;
	align-items: center;
	cursor: pointer;

	input,
	p {
		cursor: pointer;
	}
`;

export const ForgetText = styled.p`
	font-weight: 600;
`;

export const SwitchButton = styled.button`
	border-bottom: 1px solid ${({ theme }) => theme.black};
	padding-inline: 8px;
`;
