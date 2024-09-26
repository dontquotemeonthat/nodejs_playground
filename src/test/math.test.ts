import { sum } from "../lib/math";

describe("math tests", () => {
  it("sum happy path", () => {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  it("sum nightmare path", () => {
    expect(() => sum("a" as unknown as number, 1)).toThrow(
      "One or more values are not numbers"
    );
  });
});
