import { render} from "@testing-library/react";
import App from "./App";
import { renderer, cleanup } from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

// afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});


