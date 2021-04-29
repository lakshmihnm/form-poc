import { render } from "@testing-library/react";
import Button from "./customButton";
import { renderer, cleanup } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

describe("renders submit button", () => {
  it("submit button rendered correctly", () => {
    const { getByText } = render(<Button />);
    const inputButton = getByText("Submit");

    expect(inputButton).toBeInTheDocument();
  });
});
