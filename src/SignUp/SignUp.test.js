import React from "react";
import * as RTL from "@testing-library/react";
import SignUp from "./SignUp";

describe("Sign Up Tests", () => {
  test("Test rendering sign up", () => {
    RTL.render(<SignUp />);
  });

  test("Test on back click", () => {
    const onBackClick = jest.fn();
    const signUp = RTL.render(<SignUp onBackClick={onBackClick} />);

    RTL.fireEvent.click(signUp.getByTestId("back-button"));
    expect(onBackClick).toBeCalled();
  });

  test("Test on sign up click", () => {
    const onSignUp = jest.fn();
    const signUp = RTL.render(<SignUp onSignUp={onSignUp} />);

    expect(onSignUp).toBeCalledWith("hello");
  });
});
