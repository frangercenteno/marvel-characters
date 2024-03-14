import { render, screen } from "@testing-library/react";
import CharacterCard from "@/shared/components/ui/CharacterCard";
import { ROUTES } from "@/shared/lib/constants";
import { Character } from "@/shared/types";

const mockCharacter: Character = {
  id: 1,
  name: "Test Character",
  thumbnail: {
    path: "/test/image",
    extension: "jpg",
  },
  description: "Test description",
  modified: "2021-10-05T15:00:00-0400",
  resourceURI: "http://test.com",
  urls: [
    {
      type: "detail",
      url: "http://test.com/detail",
    },
  ],
};

describe("CharacterCard", () => {
  it("should render the character card with correct image and name", () => {
    render(
      <CharacterCard
        character={mockCharacter}
        isFavorite={false}
        onFavorite={() => {}}
      />
    );

    const image = screen.getByAltText(mockCharacter.name);
    expect(image).toBeInTheDocument();

    const name = screen.getByText(mockCharacter.name);
    expect(name).toBeInTheDocument();
  });

  it("should navigate to character has correct route", async () => {
    const mockOnFavorite = jest.fn();
    render(
      <CharacterCard
        character={mockCharacter}
        isFavorite={false}
        onFavorite={mockOnFavorite}
      />
    );

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute(
      "href",
      `${ROUTES.CHARACTER_DETAILS}/${mockCharacter.id}`
    );
  });
});
