import { render, screen } from "@testing-library/react";
import ResCard1 from "../ResCard1";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardmock.json";

it("check rescard is loading correctly", () => {
  render(<ResCard1 resdata={MOCK_DATA} />);
  const name = screen.getByText("Chinese Wok");
  expect(name).toBeInTheDocument();
});
