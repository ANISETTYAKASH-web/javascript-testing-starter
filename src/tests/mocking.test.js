import { it, expect, describe, vi } from "vitest";
import { getPriceInCurrency } from "../mocking";
import { getExchangeRate } from "../libs/currency";
vi.mock("../libs/currency");
describe("mock", () => {
  it("send message mock", () => {
    const sendMessage = vi.fn();
    // sendMessage("");
    // sendMessage.mockImplementation((name) => name + " hello");
    sendMessage.mockReturnValue("ok");
    expect(sendMessage()).toBe("ok");
    expect(sendMessage).toHaveBeenCalled();
    // expect(sendMessage).toHaveBeenCalledWith("name");
    // console.log(sendMessage);
  });
});
describe("mock modules", () => {
  it("mocking func inside a module", () => {
    vi.mocked(getExchangeRate).mockReturnValue(2);
    expect(getPriceInCurrency(10, "aud")).toBe(20);
  });
});
