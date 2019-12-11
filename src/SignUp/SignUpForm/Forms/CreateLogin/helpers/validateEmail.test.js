import { validateEmail } from ".";

describe("Validate Email Test", () => {
  test("Validate different types of emails", () => {
    expect(validateEmail("a@a.com")).toBe(true);
  });
});
