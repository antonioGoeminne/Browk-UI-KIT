import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

const defaultProps = {
  onClick: jest.fn(),
  label: "Primary",
};

describe("Test Button component", () => {
  it("renders the component", () => {
    render(<Button label="primary" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("renders the correct label", () => {
    const { getByRole } = render(<Button label="primary" />);
    expect(getByRole("button")).toHaveTextContent(/primary/i);
  });

  it("calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button {...defaultProps} onClick={onClick} />
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).toHaveBeenCalled();
  });
});
