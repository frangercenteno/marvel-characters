import { render, screen } from "@testing-library/react";
import TextField from "@/shared/components/ui/TextField";
const id = "custom-id";
describe("TextField", () => {
  it("should render without error", () => {
    render(<TextField id={id} />);
    const textField = screen.getByRole("textbox");
    expect(textField).toBeInTheDocument();
  });

  it("should render with an icon", () => {
    const Icon = <svg data-testid="icon" />;
    render(<TextField id={id} Icon={Icon} />);
    const icon = screen.getByTestId("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render with an error", () => {
    render(<TextField error={{ message: "error" }} id={id} />);
    const textField = screen.getByTestId(id);
    expect(textField).toHaveClass("error");
  });

  it("should render with custom className", () => {
    const className = "custom-class";
    render(<TextField id={id} className={className} />);
    const textField = screen.getByTestId(id);
    expect(textField).toHaveClass(className);
  });

  it("should render with a specified id", () => {
    render(<TextField id={id} />);
    const textField = screen.getByRole("textbox");
    expect(textField).toHaveAttribute("id", id);
  });

  // Add more tests as needed...
});
