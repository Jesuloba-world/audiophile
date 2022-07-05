import { MainLayout } from "./index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Layout component", () => {
	it("Renders layout component", () => {
		render(<MainLayout>Test</MainLayout>);
		screen.getByText(/test/i);
	});
	it("Renders Header", () => {
		render(<MainLayout>Test</MainLayout>);
		screen.getByText(/home/i);
	});
});
