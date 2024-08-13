// Importation des fonctions nécessaires pour les tests
import { fireEvent, render, screen } from "@testing-library/react";
// Importation du composant Button et des types de boutons
import Button, { BUTTON_TYPES } from "./index";

// Début de la suite de tests pour le composant Button
describe("When a button is created", () => {
  // Test pour vérifier que le bouton inclut un titre
  it("the button must include a title", () => {
    // Rendu du bouton avec un titre spécifique
    render(<Button title="my-button" type={BUTTON_TYPES.DEFAULT} />);
    // Récupération du bouton par son titre
    const buttonElement = screen.getByTitle("my-button");
    // Vérification que le bouton est présent dans le document
    expect(buttonElement).toBeInTheDocument();
  });

  // Test pour vérifier que le bouton affiche une étiquette
  it("the button must display a label", () => {
    // Rendu du bouton avec un contenu textuel
    render(<Button>label</Button>);
    // Récupération du bouton par son contenu textuel
    const buttonElement = screen.getByText(/label/);
    // Vérification que le bouton est présent dans le document
    expect(buttonElement).toBeInTheDocument();
  });

  // Sous-suite de tests pour vérifier le comportement lors du clic sur le bouton
  describe("and it's clicked", () => {
    // Test pour vérifier que l'événement onClick est exécuté
    it("an event onClick it executed", () => {
      // Création d'une fonction mock pour l'événement onClick
      const onClick = jest.fn();
      // Rendu du bouton avec la fonction onClick
      render(<Button onClick={onClick} />);
      // Récupération du bouton par son data-testid
      const buttonElement = screen.getByTestId("button-test-id");
      // Simulation d'un clic sur le bouton
      fireEvent(
        buttonElement,
        new MouseEvent("click", {
          bubbles: true,        // L'événement peut se propager
          cancelable: true,     // L'événement peut être annulé
        })
      );
      // Vérification que la fonction onClick a été appelée au moins une fois
      expect(onClick.mock.calls.length).toBeGreaterThan(0);
    });
  });

  // Sous-suite de tests pour vérifier le type de bouton de soumission
  describe("and selected type is submit", () => {
    // Test pour vérifier qu'un input de type submit est créé
    it("an input submit is created", () => {
      // Rendu du bouton avec le type SUBMIT
      render(<Button type={BUTTON_TYPES.SUBMIT}>label</Button>);
      // Récupération du bouton par son data-testid
      const buttonElement = screen.getByTestId("button-test-id");
      // Vérification que le type de l'élément est "submit"
      expect(buttonElement.type).toEqual("submit");
    });
  });
});
