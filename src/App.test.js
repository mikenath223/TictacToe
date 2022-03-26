import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders start game", () => {
  const { getByText } = render(<App />);

  expect(getByText(/start game/i)).toBeInTheDocument();
});
