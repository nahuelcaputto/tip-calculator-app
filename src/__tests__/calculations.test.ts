import { describe, it, expect } from "vitest";
import {
  calculateTipPerPerson,
  calculateTotalPerPerson,
} from "../logic/calculations";

describe("Calculation Logic", () => {
  it("calculates correct tip per person", () => {
    // Input: bill = 100, tip = 10%, people = 2
    // Expected tip per person: 5
    expect(calculateTipPerPerson(100, 10, 2)).toBe(5);
  });

  it("calculates correct total per person", () => {
    // Input: bill = 100, tip = 10%, people = 2
    // Expected total per person: 55
    expect(calculateTotalPerPerson(100, 10, 2)).toBe(55);
  });

  it("handles zero bill", () => {
    // Input: bill = 0
    // Expected: Tip = 0, Total per person = 0
    expect(calculateTipPerPerson(0, 10, 2)).toBe(0);
    expect(calculateTotalPerPerson(0, 10, 2)).toBe(0);
  });

  it("handles zero people", () => {
    // Input: people = 0
    // Expected: Function returns 0 (controlled avoidance of division by zero)
    expect(calculateTipPerPerson(100, 10, 0)).toBe(0);
    expect(calculateTotalPerPerson(100, 10, 0)).toBe(0);
  });

  it("calculates correctly with different values", () => {
    // bill = 100, tip = 10%
    // tip amount = 10
    expect(calculateTipPerPerson(100, 10, 1)).toBe(10);
  });
});
