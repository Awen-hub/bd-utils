import { getStrWithStartAndEnd } from "../../lib/string";

test("getStrWithStartAndEnd", () => {
  expect(getStrWithStartAndEnd("abcdefg", "b", "d")).toBe("bcd");
  expect(getStrWithStartAndEnd("abcdefg", "b", "b")).toBe("b");
  expect(getStrWithStartAndEnd("abcdefg", /a/, /d/)).toBe("abcd");
  expect(getStrWithStartAndEnd("abcdefg", /a/, /a/)).toBe("a");
  expect(getStrWithStartAndEnd("abcdefg", /h/, /a/)).toBe(null);
  expect(getStrWithStartAndEnd("abcdefg", /a/, /h/)).toBe(null);
  expect(getStrWithStartAndEnd("abcdefg", "1", "b")).toBe(null);
  expect(getStrWithStartAndEnd("abcdefg", "a", "2")).toBe(null);
  expect(getStrWithStartAndEnd("abcdefg", "g", "a")).toBe(null);
});
