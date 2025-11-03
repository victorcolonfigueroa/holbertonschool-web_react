import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login component", () => {
  // The login prompt should guide the user to authenticate.
  test("renders the login prompt", () => {
    render(<Login />);
    const loginPrompt = screen.getByText(/login to access the full dashboard/i);
    expect(loginPrompt).toBeInTheDocument();
  });

  // The form should include two labels, two inputs, and one button.
  test("renders 2 labels, 2 inputs, and 1 button", () => {
    render(<Login />);
    const labels = screen.getAllByText(/(email|password):/i);
    const inputs = screen.getAllByLabelText(/email|password/i);
    // submit is an input[type=submit], but it exposes role 'button'
  const buttons = screen.getAllByRole("button");
  expect(labels).toHaveLength(2);
  expect(inputs).toHaveLength(2);
  expect(buttons).toHaveLength(1);
  // input[type=submit] exposes role button; assert accessible name
  const okButton = screen.getByRole("button", { name: /ok/i });
  expect(okButton).toBeInTheDocument();
  });

  // Clicking the label should focus the associated input for accessibility.
  test("focuses the email input when its label is clicked", async () => {
    const user = userEvent.setup();
    render(<Login />);
    const emailLabel = screen.getByText(/email:/i);
    const emailInput = screen.getByLabelText(/email/i);
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
  });

  test("submit is disabled by default", () => {
    render(<Login />);
    const submit = screen.getByRole("button");
    expect(submit).toBeDisabled();
  });

  test("submit becomes enabled only when email and password are valid", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submit = screen.getByRole("button");

    // Initially disabled
    expect(submit).toBeDisabled();

    // Type invalid email and short password -> still disabled
    await user.type(emailInput, "not-an-email");
    await user.type(passwordInput, "short");
    expect(submit).toBeDisabled();

    // Correct email but short password -> disabled
    await user.clear(emailInput);
    await user.type(emailInput, "user@example.com");
    expect(submit).toBeDisabled();

    // Long enough password but invalid email -> disabled
    await user.clear(emailInput);
    await user.clear(passwordInput);
    await user.type(emailInput, "bademail@");
    await user.type(passwordInput, "longenough");
    expect(submit).toBeDisabled();

    // Valid email and valid password -> enabled
    await user.clear(emailInput);
    await user.clear(passwordInput);
    await user.type(emailInput, "user@example.com");
    await user.type(passwordInput, "longenough");
    expect(submit).toBeEnabled();
  });
});
