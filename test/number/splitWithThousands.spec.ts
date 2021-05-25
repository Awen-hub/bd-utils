import { splitWithThousands } from "../../lib/number";

test("splitWithThousands", () => {
  expect(splitWithThousands(1234567)).toBe("1,234,567");
  expect(splitWithThousands(123456)).toBe("123,456");
  expect(splitWithThousands(12)).toBe("12");
  expect(splitWithThousands(12.1234)).toBe("12.123,4");
  expect(splitWithThousands(12.1)).toBe("12.1");
  expect(splitWithThousands(12.0)).toBe("12");
  expect(splitWithThousands("12.0")).toBe("12.0");
});
