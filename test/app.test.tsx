import TestRenderer from "react-test-renderer";
import MyApp from "pages/_app";

const dummyComponent = () => <div>For testing purposes</div>;

describe("test _app", () => {
	it("Renders correctly", () => {
		const tree = TestRenderer.create(
			<MyApp pageProps={{}} Component={dummyComponent} />
		).toJSON();
		expect(tree).toMatchSnapshot();
	});
});
