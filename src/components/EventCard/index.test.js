// Importation des fonctions nécessaires pour les tests
import { render, screen } from "@testing-library/react";
// Importation du composant EventCard
import EventCard from "./index";

// Début de la suite de tests pour le composant EventCard
describe("When a event card is created", () => {

  // Test pour vérifier que l'image est affichée avec la valeur alt appropriée
  it("an image is display with alt value", () => {
    // Rendu de la carte d'événement avec les propriétés nécessaires
    render(
      <EventCard 
        imageSrc="http://src-image" 
        imageAlt="image-alt-text" 
        date={new Date("2022-04-01")}
        title="test event"
        label="test label"
      />
    );
    // Récupération de l'élément image par son data-testid
    const imageElement = screen.getByTestId("card-image-testid");
    // Vérification que l'image est présente dans le document
    expect(imageElement).toBeInTheDocument();
    // Vérification que le texte alternatif de l'image est correct
    expect(imageElement.alt).toEqual("image-alt-text");
  });

  // Test pour vérifier que le titre, l'étiquette et le mois sont affichés
  it("a title, a label and a month are displayed", () => {
    // Rendu de la carte d'événement avec les propriétés nécessaires
    render(
      <EventCard
        imageSrc="http://src-image"
        imageAlt="image-alt-text"
        title="test event"
        label="test label"
        date={new Date("2022-04-01")}
      />
    );
    // Récupération des éléments par leur contenu textuel
    const titleElement = screen.getByText(/test event/);
    const monthElement = screen.getByText(/avril/);
    const labelElement = screen.getByText(/test label/);
    // Vérification que le titre est présent dans le document
    expect(titleElement).toBeInTheDocument();
    // Vérification que l'étiquette est présente dans le document
    expect(labelElement).toBeInTheDocument();
    // Vérification que le mois est présent dans le document
    expect(monthElement).toBeInTheDocument();
  });

  // Sous-suite de tests pour vérifier le comportement avec la propriété small
  describe("with small props", () => {
    // Test pour vérifier que la classe modificateur small est ajoutée
    it("a modifier small is added", () => {
      // Rendu de la carte d'événement avec la propriété small
      render(
        <EventCard
          imageSrc="http://src-image"
          imageAlt="image-alt-text"
          title="test event"
          label="test label"
          date={new Date("2022-04-01")}
          small
        />
      );
      // Récupération de l'élément carte par son data-testid
      const cardElement = screen.getByTestId("card-testid");
      // Vérification que la classe "EventCard--small" est présente
      expect(cardElement.className.includes("EventCard--small")).toEqual(true);
    });
  });
});
