import { render } from "@testing-library/react";
import Button from "./customButton";
import "@testing-library/jest-dom/extend-expect";

describe("renders submit button", () => {
  it("submit button rendered correctly", () => {
    const { getByText } = render(<Button />);
    const inputButton = getByText("Submit");

    expect(inputButton).toBeInTheDocument();
  });
});
