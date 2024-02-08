import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Toggle } from "./Toggle";

const defaultProps = {
  onClick: jest.fn(),
  id: "test",
  label: "text",
};

describe("Test Toggle component", () => {
  it("renders the component", () => {
    render(<Toggle {...defaultProps} />);
    const toggle = screen.getByRole("switch");
    expect(toggle).toBeInTheDocument();
  });

  it("renders the correct label", () => {
    const { getByLabelText } = render(<Toggle {...defaultProps} />);
    expect(getByLabelText(/text/i)).toBeInTheDocument();
  });

  it("doesn't work if it is disabled", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Toggle {...defaultProps} onChange={onChange} disabled />
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onChange).not.toHaveBeenCalled();
  });
});
