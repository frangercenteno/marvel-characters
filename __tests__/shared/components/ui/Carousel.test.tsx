import Carousel from "@/shared/components/ui/Carousel";
import { render, screen } from "@testing-library/react";

describe("Carousel", () => {
  it("should render the carousel with children", () => {
    render(
      <Carousel>
        <Carousel.Item>Item 1</Carousel.Item>
        <Carousel.Item>Item 2</Carousel.Item>
        <Carousel.Item>Item 3</Carousel.Item>
      </Carousel>
    );

    const carouselContainer = screen.getByTestId("carousel-container");
    expect(carouselContainer).toBeInTheDocument();

    const carouselItems = screen.getAllByTestId("carousel-item");
    expect(carouselItems).toHaveLength(3);
  });
});
