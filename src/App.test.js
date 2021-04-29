import { render} from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

// afterEach(cleanup);

it("matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});


