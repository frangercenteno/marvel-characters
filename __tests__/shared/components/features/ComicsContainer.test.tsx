import { render, screen } from "@testing-library/react";
import ComicsContainer from "@/shared/components/features/ComicsContainer";
import { mockComics } from "../../../../mocks/comics.mock";
import TestLayout from "../../../../testUtil";

jest.mock("next/navigation", () => {
  return {
    useRouter: () => {
      return {
        navigate: jest.fn(),
      };
    },
    usePathname: () => {
      return jest.fn();
    },
  };
});

describe("ComicsContainer", () => {
  it("should render the comics container with correct title", () => {
    render(
      <TestLayout>
        <ComicsContainer comics={mockComics} />
      </TestLayout>
    );

    const title = screen.getByText("Comics");
    expect(title).toBeInTheDocument();
  });

  it("should render the correct number of comic cards", () => {
    render(
      <TestLayout>
        <ComicsContainer comics={mockComics} />
      </TestLayout>
    );

    const comicCards = screen.getAllByTestId("carousel-item");
    expect(comicCards.length).toBe(mockComics.length);
  });
});
