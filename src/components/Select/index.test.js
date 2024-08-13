import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./index";

describe("When a select is created", () => {
  it("a list of choices is displayed", () => {
    render(<Select selection={["value1", "value2"]} />);
    const selectElement = screen.getByTestId("select-testid");
    const selectDefault = screen.getByText("Toutes");
    expect(selectElement).toBeInTheDocument(); // Vérifie que l'élément de select est présent dans le DOM
    expect(selectDefault).toBeInTheDocument(); // Vérifie que l'élément contenant le texte "Toutes" est présent dans le DOM
  });

  it("a collapse action button is displayed", () => {
    render(<Select selection={["value1", "value2"]} />);
    const collapseButtonElement = screen.getByTestId("collapse-button-testid");
    expect(collapseButtonElement).toBeInTheDocument(); // Vérifie que le bouton de collapse est présent dans le DOM
  });

  describe("with a label", () => {
    it("a label is displayed", () => {
      render(<Select label="label" selection={["value1", "value2"]} />);
      const labelDefault = screen.getByText("label");
      expect(labelDefault).toBeInTheDocument(); // Vérifie que l'élément contenant le texte du label est présent dans le DOM
    });
  });

  describe("and a click is triggered on collapse button", () => {
    it("a list of values is displayed", () => {
      render(<Select selection={["value1", "value2"]} />);
      const collapseButtonElement = screen.getByTestId("collapse-button-testid");
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      ); // Déclenche un clic sur le bouton de collapse
      const choice1 = screen.getByText("value1");
      const choice2 = screen.getByText("value2");
      expect(choice1).toBeInTheDocument(); // Vérifie que le choix "value1" est présent dans le DOM après l'ouverture
      expect(choice2).toBeInTheDocument(); // Vérifie que le choix "value2" est présent dans le DOM après l'ouverture
    });

    describe("and a click is triggered on a choice item", () => {
      it("an onChange callback is called", () => {
        const onChange = jest.fn(); // Mock de la fonction onChange
        render(<Select selection={["value1", "value2"]} onChange={onChange} />);
        const collapseButtonElement = screen.getByTestId("collapse-button-testid");
        fireEvent(
          collapseButtonElement,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        ); // Déclenche un clic sur le bouton de collapse
        const choice1 = screen.getByText("value1");
        fireEvent(
          choice1,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        ); // Déclenche un clic sur le choix "value1"
        expect(onChange.mock.calls.length).toBeGreaterThan(0); // Vérifie que la fonction onChange a été appelée au moins une fois

        fireEvent(
          collapseButtonElement,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        ); // Ferme le dropdown en déclenchant un autre clic sur le bouton de collapse

        const choiceAll = screen.getByText("Toutes");
        fireEvent(
          choiceAll,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        ); // Déclenche un clic sur le choix "Toutes"
        expect(onChange.mock.calls.length).toBeGreaterThan(1); // Vérifie que la fonction onChange a été appelée une deuxième fois
      });
    });
  });
});
