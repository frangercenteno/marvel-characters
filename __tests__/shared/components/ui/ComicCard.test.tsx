import { render, screen } from "@testing-library/react";
import ComicCard from "@/shared/components/ui/ComicCard";
import type { Comic } from "@/shared/types";
import { mockComics } from "../../../../mocks/comics.mock";

describe("ComicCard", () => {
  it("should render the comic card with correct image and title", () => {
    render(<ComicCard {...mockComics[0]} />);

    const image = screen.getByAltText(mockComics[0].title);
    expect(image).toBeInTheDocument();

    const title = screen.getByText(mockComics[0].title);
    expect(title).toBeInTheDocument();
  });

  it("should render the comic card with correct Date", () => {
    render(<ComicCard {...mockComics[0]} />);

    const date = screen.getByText(mockComics[0].dates[0].date.getFullYear());
    expect(date).toHaveTextContent("2021");
  });

  // Add more tests as needed...
});
