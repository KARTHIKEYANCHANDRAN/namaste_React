import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_RES_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RES_DATA);
    },
  });
});

it("should load resraurant menu componenet and update cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
           <Header /> 
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const resmenuheading = screen.getByText("Recommended (20)");
  fireEvent.click(resmenuheading);
  expect(screen.getAllByTestId("fooditems").length).toBe(20);

  const btn = screen.getAllByRole("button", {name : "ADD +"});
  fireEvent.click(btn[0]);


  expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(21)

});
