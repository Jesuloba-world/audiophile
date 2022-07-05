import { MainLayout } from "./index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

jest.mock("next/head", () => {
	return {
		__esModule: true,
		default: ({ children }: { children: Array<React.ReactElement> }) => {
			return <>{children}</>;
		},
	};
});

describe("Layout component", () => {
	it("Renders layout component", () => {
		const tree = render(<MainLayout>Test</MainLayout>);
		expect(tree).toMatchSnapshot();
	});

	it("Contains a title prop", () => {
		const testTitle = "Test Title";
		render(<MainLayout title={testTitle}>Test</MainLayout>);
		expect(document.title).toBe(testTitle);
	});

	it("Renders Header", () => {
		render(<MainLayout>Test</MainLayout>);
		screen.getByText(/home/i);
	});
});
