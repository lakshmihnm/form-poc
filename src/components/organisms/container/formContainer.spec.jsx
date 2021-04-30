import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormContainer from "./formContainer";
import "@testing-library/jest-dom/extend-expect";

describe("renders Employee Details Form", () => {
  it("renders Employee Details Form header", () => {
    render(<FormContainer />);
    const headerElement = screen.getByText(/Employee Details/i);
    expect(headerElement).toBeInTheDocument();
  });
});
