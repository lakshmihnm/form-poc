import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormContainer from "./formContainer";
import "@testing-library/jest-dom/extend-expect";

test("renders Employee Details Form header", () => {
  render(<FormContainer />);
  const headerElement = screen.getByText(/Employee Details Form/i);
  expect(headerElement).toBeInTheDocument();
});
