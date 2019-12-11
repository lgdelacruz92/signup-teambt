import React from "react";
import * as RTL from "@testing-library/react";
import SignUp from "./SignUp";

describe("Sign Up Tests", () => {
  test("Test rendering sign up", () => {
    RTL.render(<SignUp onBackClick={() => {}} onSignUp={() => {}} />);
  });

  test("Test on back click", () => {
    const onBackClick = jest.fn();
    const signUp = RTL.render(
      <SignUp onSignUp={() => {}} onBackClick={onBackClick} />
    );

    RTL.fireEvent.click(signUp.getByTestId("back-button"));
    expect(onBackClick).toBeCalled();
  });

  test("Test on sign up click", () => {
    const onSignUp = jest.fn();
    const signUp = RTL.render(
      <SignUp onBackClick={() => {}} onSignUp={onSignUp} />
    );

    RTL.fireEvent.change(signUp.getByTestId("email-field"), {
      target: { value: "a@a.com" }
    });
    RTL.fireEvent.change(signUp.getByTestId("password-field"), {
      target: { value: "password" }
    });
    RTL.fireEvent.click(signUp.getByText("NEXT"));

    RTL.fireEvent.change(signUp.getByTestId("first-name-field"), {
      target: { value: "Lester" }
    });

    RTL.fireEvent.change(signUp.getByTestId("last-name-field"), {
      target: { value: "Dela Cruz" }
    });

    RTL.fireEvent.change(signUp.getByTestId("company-name-field"), {
      target: { value: "BloomTrac" }
    });

    RTL.fireEvent.change(signUp.getByTestId("website-field"), {
      target: { value: "www.bloomtrac.com" }
    });

    RTL.fireEvent.change(signUp.getByTestId("phone-number-field"), {
      target: { value: "123-123-1234" }
    });

    RTL.fireEvent.click(signUp.getByText("SIGN UP"));

    expect(onSignUp).toBeCalledWith({
      email: "a@a.com",
      password: "password",
      firstName: "Lester",
      lastName: "Dela Cruz",
      companyName: "BloomTrac",
      website: "www.bloomtrac.com",
      phoneNumber: "123-123-1234"
    });
  });
});
