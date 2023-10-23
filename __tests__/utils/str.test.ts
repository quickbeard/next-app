import { toTitleCase } from "../../src/utils/str";

describe("To Title Case", () => {
  test("converts a string to title case", () => {
    expect(toTitleCase("BRIAN")).toBe("Brian");
    expect(toTitleCase("BRIAN brett")).toBe("Brian Brett");
    expect(toTitleCase("ALBERTA'LYN SMITH")).toBe("Alberta'lyn Smith");
    expect(toTitleCase("Alberta'lyn Smith")).toBe("Alberta'lyn Smith");
    expect(toTitleCase("BRENDA SMITH BRAAM")).toBe("Brenda Smith Braam");
    expect(toTitleCase("brenda smith braam")).toBe("Brenda Smith Braam");
    expect(toTitleCase("Mr. BEan 123")).toBe("Mr. Bean 123");
    expect(toTitleCase("Mr. BEan123")).toBe("Mr. Bean123");
    expect(toTitleCase("123 Main ST")).toBe("123 Main St");
    expect(toTitleCase("Mary-JAMES")).toBe("Mary-James");
  });
});