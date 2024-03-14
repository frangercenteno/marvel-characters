import { render, screen } from "@testing-library/react";
import ComicCard from "@/shared/components/ui/ComicCard";
import type { Comic } from "@/shared/types";

const mockComic: Comic = {
  thumbnail: {
    path: "/_next/image?url=%2F.jpg&w=384&q=75",
    extension: "jpg",
  },
  title: "Test Comic",
  issn: "12345678",
  id: 1,
  resourceURI: "http://test.com",
  name: "Test Comic",
};

describe("ComicCard", () => {
  it("should render the comic card with correct image and title", () => {
    render(<ComicCard {...mockComic} />);

    const image = screen.getByAltText(mockComic.title);
    expect(image).toBeInTheDocument();

    const title = screen.getByText(mockComic.title);
    expect(title).toBeInTheDocument();
  });

  it("should render the comic card with correct ISSN", () => {
    render(<ComicCard {...mockComic} />);

    const issn = screen.getByText(mockComic.issn);
    expect(issn).toBeInTheDocument();
  });

  // Add more tests as needed...
});
