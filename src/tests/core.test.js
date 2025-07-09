import { describe, it, expect } from "vitest";
import { getCoupons } from "../core";
describe("Get Coupouns", () => {
  it("returns an array of length greater than 1", () => {
    expect(getCoupons().length).greaterThan(0);
  });
  it("should have both code and discount properties", () => {
    getCoupons().forEach((user) => {
      expect(user).toHaveProperty("code");
      expect(user).toHaveProperty("discount");
    });
  });
  it("discount property should have value between 0 and 1", () => {
    getCoupons().forEach((user) => {
      expect(user.discount).toBeGreaterThan(0);
      expect(user.discount).toBeLessThan(1);
    });
  });
});
