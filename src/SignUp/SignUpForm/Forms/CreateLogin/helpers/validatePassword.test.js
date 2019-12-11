import { validatePassword } from "./validatePassword";
describe("Validate Password Test", () => {
  test("test", () => {
    expect(validatePassword("")).toBe(true);
    expect(validatePassword("a")).toBe(false);
    expect(validatePassword("ab")).toBe(false);
    expect(validatePassword("abc")).toBe(false);
    expect(validatePassword("abcd")).toBe(false);
    expect(validatePassword("abcde")).toBe(true);
    expect(validatePassword("abcdef")).toBe(true);
  });
});
