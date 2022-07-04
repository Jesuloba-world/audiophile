import { MainLayout } from "./index";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";

describe("Layout component", () => {
	it.only("Renders layout component", () => {
		render(<MainLayout>Test</MainLayout>);

		screen.getByRole("heading", { name: /header/i });
		screen.getByText(/test/i);
	});
});
