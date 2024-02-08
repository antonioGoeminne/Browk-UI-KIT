import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "./Input";

const defaultProps = {
  onClick: jest.fn(),
  id: "test",
  label: "text",
};

describe("Test Input component", () => {
  it("renders the component", () => {
    render(<Input {...defaultProps} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("renders the correct label", () => {
    const { getByLabelText } = render(<Input {...defaultProps} />);
    expect(getByLabelText(/text/i)).toBeInTheDocument();
  });

  it("doesn't work if it is disabled", () => {
    const onChange = jest.fn();
    const { getByText } = render(
      <Input {...defaultProps} onChange={onChange} disabled />
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onChange).not.toHaveBeenCalled();
  });
});
