import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Logo } from ".";

test("Logo renders correctly", () => {
	render(<Logo />);

	screen.getByRole("logo");
});
