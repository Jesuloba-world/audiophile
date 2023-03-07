import { Container, Heading, Loader, OrderContainer } from "./style";
import { OrderItems } from "components";
import { useQuery } from "@apollo/client";
import { GetOrderDocument, OrderProductType } from "src/graphql/generated";
import { Puff } from "react-loading-icons";
import { useTheme } from "styled-components";

export const OrderDisplay = () => {
	const { data, loading } = useQuery(GetOrderDocument);
	const theme: any = useTheme();

	return (
		<Container>
			<Heading>Orders</Heading>
			{loading ? (
				<Loader>
					<Puff stroke={theme.sienna} />
				</Loader>
			) : (
				<OrderContainer>
					{data?.myOrder?.map((el) => (
						<OrderItems
							key={el?.id}
							items={el?.orderproductSet as OrderProductType[]}
							grandTotal={el?.grandTotal}
						/>
					))}
				</OrderContainer>
			)}
		</Container>
	);
};
