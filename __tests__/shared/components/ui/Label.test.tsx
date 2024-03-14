import Label from "@/shared/components/ui/Label";
import { render, screen } from "@testing-library/react";

describe("Label", () => {
  it("should render label text", () => {
    render(<Label text="Hello, World!" />);
    const label = screen.getByText("Hello, World!");
    expect(label).toBeInTheDocument();
  });
});
