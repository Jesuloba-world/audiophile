import { MainLayout } from "./index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Layout component", () => {
	it("Renders", () => {
		render(<MainLayout />);

		screen.getAllByText("Header");
	});
});
