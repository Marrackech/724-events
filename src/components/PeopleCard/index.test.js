import { render, screen } from "@testing-library/react";
import PeopleCard from "./index";

describe("When a people card is created", () => {
  it("an image is display with alt value", () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const imageElement = screen.getByTestId("card-image-testid");
    expect(imageElement).toBeInTheDocument(); // Vérifie que l'élément image est présent dans le DOM
    expect(imageElement.alt).toEqual("image-alt-text"); // Vérifie que l'attribut alt de l'image est égal à "image-alt-text"
  });

  it("a title and a position are displayed", () => {
    render(
      <PeopleCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        name="test name"
        position="test position"
      />
    );
    const nameElement = screen.getByText(/test name/); // Récupère l'élément contenant le texte "test name"
    const positionElement = screen.getByText(/test position/); // Récupère l'élément contenant le texte "test position"
    expect(nameElement).toBeInTheDocument(); // Vérifie que l'élément avec le nom est présent dans le DOM
    expect(positionElement).toBeInTheDocument(); // Vérifie que l'élément avec la position est présent dans le DOM
  });
});
