import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import Navbar from "@/shared/components/features/Navbar";
import { ROUTES } from "@/shared/lib/constants";
import useFavorites from "@/shared/hooks/useFavorites";

jest.mock("next/router");
jest.mock("next/navigation");
jest.mock("../../../../src/shared/hooks/useFavorites");

describe("Navbar", () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      isFavorite: jest.fn(),
      toggleFavorite: jest.fn(),
    });
  });
  it("should render the Navbar component with the Marvel logo", () => {
    render(<Navbar />);

    const logo = screen.getByAltText("Marvel");
    expect(logo).toBeInTheDocument();
  });

  it("should navigate to the home page when the logo is clicked", async () => {
    const pushMock = jest.fn().mockReturnValue(ROUTES.HOME);
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<Navbar />);

    const logo = screen.getByRole("navigation");
    expect(logo).toBeInTheDocument();
    fireEvent.click(logo);
    expect(logo).toHaveAttribute("href", ROUTES.HOME);
  });

  it("should toggle the visibility of favorites when the FavoriteButton is clicked", () => {
    const toggleVisibleMock = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: [],
      toggleVisible: toggleVisibleMock,
    });

    render(<Navbar />);

    const favoriteButton = screen.getByRole("button");
    fireEvent.click(favoriteButton);

    expect(toggleVisibleMock).toHaveBeenCalled();
  });
});
