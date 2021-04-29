import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormContainer from "./formContainer";
import { renderer, cleanup } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("renders Employee Details Form header", () => {
  render(<FormContainer />);
  const headerElement = screen.getByText(/Employee Details Form/i);
  expect(headerElement).toBeInTheDocument();
});
