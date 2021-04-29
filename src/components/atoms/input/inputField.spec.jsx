import { render} from "@testing-library/react";
import InputField from "./inputField";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
const inputData = [
  {
    type: "text",
    id: "labelName",
    name: "name",
    placeholder: "Enter Name",
    ariaLabel: "Please enter name",
    label: "Name",
  },
  {
    type: "number",
    id: "labelNumber",
    name: "phone",
    placeholder: "Enter contact Number",
    ariaLabel: "Please enter contact number",
    label: "Contact",
  },
  {
    type: "date",
    id: "labelDate",
    name: "doj",
    placeholder: "Enter DOJ",
    ariaLabel: "Please enter DOJ",
    label: "DOJ",
  },
];
describe("renders the form correctly", () => {
  it("renders the form field Name", () => {
    const { getByLabelText } = render(<InputField inputData={inputData[0]} />);
    const nameLabel = getByLabelText("Name");
    expect(nameLabel).toBeInTheDocument();
  });
  it("Check input field Name type", () => {
    const { getByLabelText } = render(<InputField inputData={inputData[0]} />);
    const nameLabel = getByLabelText("Name");

    expect(nameLabel).toHaveAttribute("type", "text");
  });

  test("pass value to test name input field", () => {
    const { getByTestId, queryByTestId } = render(
      <InputField inputData={inputData[0]} />
    );

    const inputEl = getByTestId("labelName");
    userEvent.type(inputEl, "test");

    expect(getByTestId("labelName")).toHaveValue("test");
    expect(queryByTestId("name")).not.toBeInTheDocument();
  });

  it("renders the form field Contact number", () => {
    const { getByLabelText } = render(<InputField inputData={inputData[1]} />);

    const contactLabel = getByLabelText("Contact");

    expect(contactLabel).toBeInTheDocument();
  });

  it("Check input field Contatct type", () => {
    const { getByLabelText } = render(<InputField inputData={inputData[1]} />);

    const contactLabel = getByLabelText("Contact");

    expect(contactLabel).toHaveAttribute("type", "number");
  });

  it("renders the form field DOJ", () => {
    const { getByLabelText } = render(<InputField inputData={inputData[2]} />);

    const dojLabel = getByLabelText("DOJ");

    expect(dojLabel).toBeInTheDocument();
  });
  it("Check input field DOJ type", () => {
    const { getByLabelText } = render(<InputField inputData={inputData[2]} />);

    const dojLabel = getByLabelText("DOJ");

    expect(dojLabel).toHaveAttribute("type", "date");
  });
});
