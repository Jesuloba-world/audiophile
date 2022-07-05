import Home from "pages";
import { render } from "@testing-library/react";

describe("Test Root Document", () => {
	it("Renders", () => {
		const tree = render(<Home />);
		expect(tree).toMatchSnapshot();
	});

	it("Renders layout", () => {
		const Layout = Home.getLayout || ((Home) => Home);
		const tree = render(<>{Layout(<Home />, {})}</>);
		expect(tree).toMatchSnapshot();
	});
});
