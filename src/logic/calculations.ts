/**
 * Calculates the tip amount per person.
 * @param bill - The total bill amount.
 * @param tipPercent - The tip percentage.
 * @param people - The number of people sharing the bill.
 * @returns The tip amount per person.
 */
export function calculateTipPerPerson(
  bill: number,
  tipPercent: number | null,
  people: number
): number {
  if (!bill || !tipPercent || !people || people <= 0) {
    return 0;
  }
  return (bill * (tipPercent / 100)) / people;
}

/**
 * Calculates the total amount per person (bill + tip).
 * @param bill - The total bill amount.
 * @param tipPercent - The tip percentage.
 * @param people - The number of people sharing the bill.
 * @returns The total amount per person.
 */
export function calculateTotalPerPerson(
  bill: number,
  tipPercent: number | null,
  people: number
): number {
  if (!bill || !people || people <= 0) {
    return 0;
  }
  const tipPerPerson = calculateTipPerPerson(bill, tipPercent, people);
  return bill / people + tipPerPerson;
}
