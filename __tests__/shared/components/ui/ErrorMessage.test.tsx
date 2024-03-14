import { render, screen } from "@testing-library/react";
import ErrorMessage from "@/shared/components/ui/ErrorMessage";

describe("ErrorMessage", () => {
  it("should render without error", () => {
    render(<ErrorMessage />);
    const errorContainer = screen.getByTestId("error-message");
    expect(errorContainer).toBeInTheDocument();
  });

  it("should render the error message", () => {
    const message = "Test error message";
    render(<ErrorMessage message={message} />);
    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();
  });
});
