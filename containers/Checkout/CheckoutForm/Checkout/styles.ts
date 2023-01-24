import styled from "styled-components";

export const Container = styled.div`
	background: ${({ theme }) => theme.white};
	padding: 54px 48px 48px 48px;
	border-radius: 8px;
`;

export const Heading = styled.h3`
	padding-bottom: 40px;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;

	&:not(:last-of-type) {
		margin-bottom: 50px;
	}
`;

export const SectionTitle = styled.h6`
	font-size: 13px;
	line-height: 25px;

	letter-spacing: 1px;
	text-transform: uppercase;

	color: ${({ theme }) => theme.sienna};
`;

export const SectionInputs = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	row-gap: 24px;
	column-gap: 16px;
`;

export const PaymentTitle = styled.p<{ error: boolean }>`
	font-weight: 700;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: -0.2px;
	color: ${({ theme, error }) => (!error ? theme.black : theme.error)};
`;

export const PaymentMethods = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
