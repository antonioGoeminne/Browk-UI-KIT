import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Radio } from "./Radio";

const defaultProps = {
  onClick: jest.fn(),
  id: "test",
  label: "text",
};

describe("Test Radio component", () => {
  it("renders the component", () => {
    render(<Radio {...defaultProps} />);
    const radio = screen.getByRole("radiogroup");
    expect(radio).toBeInTheDocument();
  });

  it("renders the correct label", () => {
    const { getByLabelText } = render(<Radio {...defaultProps} />);
    expect(getByLabelText(/text/i)).toBeInTheDocument();
  });

  it("doesn't work if it is disabled", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Radio {...defaultProps} onClick={onClick} disabled />
    );
    fireEvent.click(getByText(defaultProps.label));
    expect(onClick).not.toHaveBeenCalled();
  });
});
