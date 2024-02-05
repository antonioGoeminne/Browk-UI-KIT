import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "./Checkbox";

const defaultProps = {
  onClick: jest.fn(),
  id: "test",
  label: "text",
};

describe("Test Checkbox component", () => {
  it("renders the component", () => {
    render(<Checkbox {...defaultProps} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("renders the correct label", () => {
    const { getByLabelText } = render(<Checkbox {...defaultProps} />);
    expect(getByLabelText(/text/i)).toBeInTheDocument();
  });

  it("calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Checkbox {...defaultProps} onClick={onClick} />
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).toHaveBeenCalled();
  });

  it("doesn't work if it is disabled", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Checkbox {...defaultProps} onChange={onChange} disabled />
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onChange).not.toHaveBeenCalled();
  });
});
