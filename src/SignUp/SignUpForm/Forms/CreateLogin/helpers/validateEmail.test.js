import { validateEmail } from ".";

describe("Validate Email Test", () => {
  test("Validate different types of emails", () => {
    expect(validateEmail("a@a.com")).toBe(true);
    expect(validateEmail("a@b.c")).toBe(true);
    expect(validateEmail("1@a.com")).toBe(true);

    expect(validateEmail("a@.az")).toBe(false);
    expect(validateEmail("")).toBe(false);
    expect(validateEmail("a")).toBe(false);
    expect(validateEmail("@ad.com")).toBe(false);
    expect(validateEmail("@ad.123")).toBe(false);
  });
});
