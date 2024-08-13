// Importation des fonctions nécessaires pour les tests
import { fireEvent, render, screen } from "@testing-library/react";
// Importation du composant Field et des types de champ
import Field, { FIELD_TYPES } from "./index";

// Début de la suite de tests pour le composant Field
describe("When a field is created", () => {

  // Test pour vérifier que le nom est défini sur le champ
  it("a name is set on the field", () => {
    // Rendu du champ avec la propriété name
    render(<Field name="field-name" />);
    // Récupération de l'élément champ par son data-testid
    const fieldElement = screen.getByTestId("field-testid");
    // Vérification que le champ est présent dans le document
    expect(fieldElement).toBeInTheDocument();
    // Vérification que le nom du champ est correct
    expect(fieldElement.name).toEqual("field-name");
  });

  // Test pour vérifier que le placeholder est défini sur le champ
  it("a placeholder is set on the field", () => {
    // Rendu du champ avec la propriété placeholder
    render(<Field placeholder="field-placeholder" name="test" />);
    // Récupération de l'élément champ par son data-testid
    const fieldElement = screen.getByTestId("field-testid");
    // Vérification que le placeholder du champ est correct
    expect(fieldElement.placeholder).toEqual("field-placeholder");
  });

  // Test pour vérifier que l'étiquette est définie avec le champ
  it("a label is set with field", () => {
    // Rendu du champ avec les propriétés placeholder et label
    render(<Field placeholder="field-placeholder" label="field_label" name="test" />);
    // Récupération de l'élément étiquette par son contenu textuel
    const labelElement = screen.getByText(/field_label/);
    // Vérification que l'étiquette est présente dans le document
    expect(labelElement).toBeInTheDocument();
  });

  // Sous-suite de tests pour vérifier le comportement lors du changement de valeur
  describe("and its value is changed", () => {
    // Test pour vérifier que la fonction onChange est exécutée
    it("a onChange value is executed", () => {
      // Création d'une fonction mock pour l'événement onChange
      const onChange = jest.fn();
      // Rendu du champ avec la propriété onChange
      render(<Field onChange={onChange} name="test" />);
      // Récupération de l'élément champ par son data-testid
      const fieldElement = screen.getByTestId("field-testid");
      // Simulation d'un changement de valeur sur le champ
      fireEvent.change(fieldElement, { target: { value: 'new value' } });
      // Vérification que la fonction onChange a été appelée au moins une fois
      expect(onChange).toHaveBeenCalled();
    });
  });

  // Sous-suite de tests pour vérifier le type FIELD_TYPES.INPUT_TEXT
  describe("and its type is set to FIELD_TYPES.INPUT_TEXT", () => {
    // Test pour vérifier qu'un champ de texte est rendu
    it("a text input is rendered", () => {
      // Désactivation des avertissements de PropTypes dans la console
      window.console.error = jest.fn().mockImplementation(() => null);
      // Rendu du champ avec le type INPUT_TEXT
      render(<Field type={FIELD_TYPES.INPUT_TEXT} name="test" />);
      // Récupération de l'élément champ par son data-testid
      const fieldElement = screen.getByTestId("field-testid");
      // Vérification que le type de l'élément est "text"
      expect(fieldElement.type).toEqual("text");
    });
  });

  // Sous-suite de tests pour vérifier le type FIELD_TYPES.TEXTAREA
  describe("and its type is set to FIELD_TYPES.TEXTAREA", () => {
    // Test pour vérifier qu'une zone de texte est rendue
    it("a textarea is rendered", () => {
      // Désactivation des avertissements de PropTypes dans la console
      window.console.error = jest.fn().mockImplementation(() => null);
      // Rendu du champ avec le type TEXTAREA
      render(<Field type={FIELD_TYPES.TEXTAREA} name="test" />);
      // Récupération de l'élément champ par son data-testid
      const fieldElement = screen.getByTestId("field-testid");
      // Vérification que le type de l'élément est "textarea"
      expect(fieldElement.tagName.toLowerCase()).toEqual("textarea");
    });
  });

  // Sous-suite de tests pour vérifier le comportement avec un type incorrect
  describe("and its type is set to a wrong value", () => {
    // Test pour vérifier qu'un champ de texte est rendu par défaut
    it("a text input is rendered", () => {
      // Désactivation des avertissements de PropTypes dans la console
      window.console.error = jest.fn().mockImplementation(() => null);
      // Rendu du champ avec un type incorrect
      render(<Field type="wrong-type" name="test" />);
      // Récupération de l'élément champ par son data-testid
      const fieldElement = screen.getByTestId("field-testid");
      // Vérification que le type de l'élément est "text"
      expect(fieldElement.type).toEqual("text");
    });
  });
});
