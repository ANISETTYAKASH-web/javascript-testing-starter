import { describe, it, expect } from "vitest";
import { calculateDiscount, getCoupons } from "../core";
describe("Get Coupouns", () => {
  it("returns an array of length greater than 1", () => {
    expect(getCoupons().length).greaterThan(0);
  });
  it("should have both code and discount properties", () => {
    getCoupons().forEach((user) => {
      expect(user).toHaveProperty("code");
      expect(typeof user.code).toBe("string");
      expect(user).toHaveProperty("discount");
    });
  });
  it("discount property should have value between 0 and 1", () => {
    getCoupons().forEach((user) => {
      expect(user.discount).toBeGreaterThan(0);
      expect(user.discount).toBeLessThan(1);
      expect(typeof user.discount).toBe("number");
    });
    // it("making sure type of properties are checked", () => {});
  });
});
describe("calculateDiscount", () => {
  //POSITIVE TESTING
  it("should return discount for valid codes", () => {
    expect(calculateDiscount(10, "SAVE10")).toBe(9);
    expect(calculateDiscount(20, "SAVE20")).toBe(16);
  });
  //NEGATIVE TESTING
  it("should return invalid if price is not a number", () => {
    expect(calculateDiscount("10", "SAVE10")).toMatch(/invalid/i);
  });
  it("should return invalid if price is negative", () => {
    expect(calculateDiscount(-10, "SAVE10")).toMatch(/invalid/i);
  });
  it("should return invalid if discount code sis not string", () => {
    expect(calculateDiscount(10, 10)).toMatch(/invalid/i);
  });
  it("should return orginal price  if discount code is not valid", () => {
    expect(calculateDiscount(10, "SAVE30")).toBe(10);
  });
});
