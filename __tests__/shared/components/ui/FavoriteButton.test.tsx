import { render, screen, fireEvent } from "@testing-library/react";
import FavoriteButton from "@/shared/components/ui/FavoriteButton";

describe("FavoriteButton", () => {
  const onClickMock = jest.fn();

  beforeEach(() => {
    onClickMock.mockClear();
  });

  it("should render the button without error", () => {
    render(<FavoriteButton isFavorite={false} onClick={onClickMock} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("should call onClick when the button is clicked", () => {
    render(<FavoriteButton isFavorite={false} onClick={onClickMock} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should render the active favorite icon when isFavorite is true", () => {
    render(<FavoriteButton isFavorite={true} onClick={onClickMock} />);
    const activeIcon = screen.getByTestId("favorite-icon-active");
    expect(activeIcon).toBeInTheDocument();
  });

  it("should render the disabled favorite icon when isFavorite is false", () => {
    render(<FavoriteButton isFavorite={false} onClick={onClickMock} />);
    const disabledIcon = screen.getByTestId("favorite-icon-disabled");
    expect(disabledIcon).toBeInTheDocument();
  });

  it("should render the length prop as the button's number", () => {
    const length = 10;
    render(
      <FavoriteButton
        isFavorite={false}
        onClick={onClickMock}
        length={length}
      />
    );
    const number = screen.getByText(length.toString());
    expect(number).toBeInTheDocument();
  });

  it("should apply the className prop to the button", () => {
    const className = "custom-class";
    render(
      <FavoriteButton
        isFavorite={false}
        onClick={onClickMock}
        className={className}
      />
    );
    const button = screen.getByRole("button");
    expect(button).toHaveClass(className);
  });

  it("should apply the classNameIcon prop to the favorite disabled icons", () => {
    const classNameIcon = "custom-icon-class";
    render(
      <FavoriteButton
        isFavorite={false}
        onClick={onClickMock}
        classNameIcon={classNameIcon}
      />
    );
    const disabledIcon = screen.getByTestId("favorite-icon-disabled");
    expect(disabledIcon).toHaveClass(classNameIcon);
  });
});
