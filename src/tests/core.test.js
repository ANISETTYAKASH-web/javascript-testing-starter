import { describe, it, expect } from "vitest";
import {
  calculateDiscount,
  getCoupons,
  isValidUsername,
  validateUserInput,
} from "../core";
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
describe("validateUserInput", () => {
  //POSITIVE TESTING FOR USER NAME
  it("username should validate successfull if it is of type string", () => {
    expect(validateUserInput("akash", 20)).toMatch(/success/i);
  });
  it("username should validate successfull if its length is greater than 3", () => {
    const username = "y00";
    expect(validateUserInput(username, 70)).toMatch(/success/i);
  });
  //NEGATIVE THINKING FOR USER NAME
  it("should return invalid if username arg is not of type string", () => {
    expect(validateUserInput(10, 59)).toMatch(/invalid/i);
  });
  it("should return invalid if username arg less than length of 3", () => {
    expect(validateUserInput(" ", 59)).toMatch(/invalid/i);
  });
  //POSITIVE TESTING FOR AGE
  it("age should validate successfull if it is of type number", () => {
    expect(validateUserInput("akash", 20)).toMatch(/success/i);
  });
  it("age should validate successfull if it is greater than 18", () => {
    expect(validateUserInput("check", 18)).toMatch(/success/i);
  });
  //NEGATIVE THINKING FOR AGE
  it("should return invalid if age arg is not of type number", () => {
    expect(validateUserInput("yooo", "59")).toMatch(/invalid/i);
  });
  it("should return invalid if age arg less than 18", () => {
    expect(validateUserInput("akash", 17)).toMatch(/invalid/i);
  });
});
describe("isValidUserName", () => {
  const minLength = 5;
  const maxLength = 15;
  it("should return true if all the conditions are satsiified", () => {
    expect(isValidUsername("akash")).toBe(true);
  });
  it("should return true for boundary conditions", () => {
    expect(isValidUsername("akash")).toBe(true);
    expect(isValidUsername("A".repeat(15))).toBe(true);
  });
  it("should return false if username is too short or too long", () => {
    expect(isValidUsername("a".repeat(minLength - 1))).toBe(false);
    expect(isValidUsername("A".repeat(maxLength + 1))).toBe(false);
  });
});
