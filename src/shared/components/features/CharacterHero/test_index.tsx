import { render, screen, fireEvent } from "@testing-library/react";
import CharacterHero from "@/shared/components/features/CharacterHero";
import useFavorites from "@/shared/hooks/useFavorites";
import { mockCharacters } from "../../../../../mocks/characters.mock";

jest.mock("@/shared/hooks/useFavorites");

const character = mockCharacters[0];

describe("CharacterHero", () => {
  beforeEach(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      isFavorite: jest.fn(),
      toggleFavorite: jest.fn(),
    });
  });

  it("should render the character name and description", () => {
    render(<CharacterHero character={character} />);

    const nameElement = screen.getByText(character.name);
    const descriptionElement = screen.getByText(character.description);

    expect(nameElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it("should call toggleFavorite when FavoriteButton is clicked", () => {
    const toggleFavorite = jest.fn();
    (useFavorites as jest.Mock).mockReturnValue({
      isFavorite: jest.fn(),
      toggleFavorite,
    });

    render(<CharacterHero character={character} />);

    const favoriteButton = screen.getByLabelText("Favorite Button");
    fireEvent.click(favoriteButton);

    expect(toggleFavorite).toHaveBeenCalledWith(character);
  });
});
