import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact page test cases", () => {

  // beforeAll(()=>{
  //   console.log("before all");
  // })

  // beforeEach , afterAll , afterEach

  it("about page load", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  // test("check button", () => {
  //   render(<Contact />);
  //   const button = screen.getByRole("button");
  //   expect(button).toBeInTheDocument();
  // });
});
