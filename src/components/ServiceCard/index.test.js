import { render, screen } from "@testing-library/react";
import ServiceCard from "./index";

describe("When a service card is created", () => {
  it("an image is display with alt value", () => {
    render(
      // Render ServiceCard with image source and alt text
      <ServiceCard imageSrc="http://src-image" imageAlt="image-alt-text">{" "}</ServiceCard>
    );
    // Ensure the image element is in the document
    const imageElement = screen.getByTestId("card-image-testid");
    expect(imageElement).toBeInTheDocument();
    // Check that the alt attribute of the image matches the provided alt text
    expect(imageElement.alt).toEqual("image-alt-text");
  });

  it("a content is displayed", () => {
    render(
      // Render ServiceCard with image source, alt text, and content children
      <ServiceCard imageSrc="http://src-image" imageAlt="image-alt-text">
        This is the card content
      </ServiceCard>
    );
    // Ensure the content text is in the document
    const contentElement = screen.getByText(/This is the card content/);
    expect(contentElement).toBeInTheDocument();
  });
});
