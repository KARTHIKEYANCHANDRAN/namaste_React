import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResListData";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load search item", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchtxt = screen.getByPlaceholderText("Search Here....");

  expect(searchtxt).toBeInTheDocument();

  const cardsbeforesearch = screen.getAllByTestId("resCard");

  expect(cardsbeforesearch.length).toBe(9);

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "pizza" } });

  const cardsaftersearch = screen.getAllByTestId("resCard");

  expect(cardsaftersearch.length).toBe(1);
});

it("should load Filtered item", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cards = screen.getAllByTestId("resCard");
  expect(cards.length).toBe(9);

  const toprated = screen.getByRole("button", {
    name: "Filter Restaurants above 4.3 Rating",
  });
  fireEvent.click(toprated);

  const cardsafterfilter = screen.getAllByTestId("resCard");
  expect(cardsafterfilter.length).toBe(4);
});
