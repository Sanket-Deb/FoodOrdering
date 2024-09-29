import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header component test cases", () => {
  it("Should render Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
  });

  it("Should render Header Component with Cart Items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-(0 items)");

    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header Component with Cart Items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/); //passing regex

    expect(cartItems).toBeInTheDocument();
  });

  it("Should change Login button to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header></Header>
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});
