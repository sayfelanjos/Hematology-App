import React from "react";
import { render, screen } from "@testing-library/react";
<<<<<<< HEAD
import App from "./App";
=======
import App from "./App.jsx";
>>>>>>> b4e4f22 (Sync routes across Micro Frontends)

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
