import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import { renderer, cleanup } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

// afterEach(cleanup);

// it("matches snapshot", () => {
//   const { asFragment } = render(<App />);
//   expect(asFragment()).toMatchSnapshot();
// });

test("renders Employee Details Form header", () => {
  render(<App />);
  const linkElement = screen.getByText(/Employee Details Form/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders the form correctly", () => {
  const { getByText, getByLabelText } = render(<App />);
  const nameLabel = getByLabelText("Name");
  const contactLabel = getByLabelText("Contact");
  const dojLabel = getByLabelText("DOJ");
  const button = getByText(/Submit/i);
  expect(button).toBeInTheDocument();
  expect(nameLabel).toBeInTheDocument();
  expect(contactLabel).toBeInTheDocument();
  expect(dojLabel).toBeInTheDocument();
  expect(nameLabel).toHaveAttribute("type", "text");
  expect(contactLabel).toHaveAttribute("type", "number");
  expect(dojLabel).toHaveAttribute("type", "date");
});

test("pass value to test name input field", () => {
  const { getByTestId, queryByTestId } = render(<App />);

  const inputEl = getByTestId("labelName");
  userEvent.type(inputEl, "test");

  expect(getByTestId("labelName")).toHaveValue("test");
  expect(queryByTestId("name")).not.toBeInTheDocument();
});

test("submit button should be disabled when Name is empty", () => {
  const { getByLabelText, getByRole, debug } = render(<App />);
  const input = getByLabelText("Name");
  fireEvent.change(input, { target: { value: "" } });
  const submitBtn = getByRole("button", { name: "Submit" });
  expect(submitBtn).not.toHaveAttribute({ disabled: false });
  debug(submitBtn);
  fireEvent.change(input, { target: { value: "John Doe" } });
  debug(submitBtn);
  expect(submitBtn).not.toHaveAttribute({ disabled: true });
});
