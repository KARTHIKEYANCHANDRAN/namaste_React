import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

it("should check button in header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button", { name: "Login" });
  expect(loginbutton).toBeInTheDocument();
});

it("should change login button in header to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginbutton);
  const logoutbutton = screen.getByRole("button", { name: "Logout" });

  expect(logoutbutton).toBeInTheDocument();
});
