import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App UI Behavior", () => {
  it("renders all required inputs and outputs", () => {
    render(<App />);

    expect(screen.getByLabelText(/bill/i)).toBeInTheDocument();
    expect(screen.getByText(/select tip %/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of people/i)).toBeInTheDocument();
    expect(screen.getByText(/tip amount/i)).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });

  it("updates calculation when bill and tip changes", async () => {
    const user = userEvent.setup();
    render(<App />);

    const billInput = screen.getByLabelText(/bill/i);
    const peopleInput = screen.getByLabelText(/number of people/i);
    const tip5Btn = screen.getByText("5%");

    await user.type(billInput, "100");
    await user.click(tip5Btn);
    await user.type(peopleInput, "2");

    screen.debug();

    // Tip: 100 * 0.05 = 5. Per person: 2.50
    // Total: 105. Per person: 52.50
    expect(screen.getByText(/\$2\.50/)).toBeInTheDocument();
    expect(screen.getByText(/\$52\.50/)).toBeInTheDocument();
  });

  it("custom tip percentage works", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/bill/i), "200");
    await user.type(screen.getByPlaceholderText(/custom/i), "15");
    await user.type(screen.getByLabelText(/number of people/i), "4");

    // Bill 200, Tip 15% = 30. Tip per person = 7.50
    // Total 230, Total per person = 57.50
    expect(screen.getByText(/\$7\.50/)).toBeInTheDocument();
    expect(screen.getByText(/\$57\.50/)).toBeInTheDocument();
  });

  it("shows error state when number of people is zero", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText(/bill/i), "100");
    await user.click(screen.getByRole("button", { name: /10%/i }));
    await user.type(screen.getByLabelText(/number of people/i), "0");

    expect(screen.getByText(/can't be zero/i)).toBeInTheDocument();
    // Values should stay $0.00
    expect(screen.getAllByText(/\$0\.00/)).toHaveLength(2);
  });

  it("reset button clears all values", async () => {
    const user = userEvent.setup();
    render(<App />);

    const billInput = screen.getByLabelText(/bill/i);
    const resetBtn = screen.getByRole("button", { name: /reset/i });

    await user.type(billInput, "100");
    expect(resetBtn).not.toBeDisabled();

    await user.click(resetBtn);

    expect(billInput.value).toBe("");
    expect(screen.getAllByText(/\$0\.00/)).toHaveLength(2);
    expect(resetBtn).toBeDisabled();
  });
});
