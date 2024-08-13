import { render, screen } from "@testing-library/react"; // Import des fonctions de rendu et de sélection d'éléments de testing-library/react
import md5 from "md5"; // Import de la fonction md5 pour calculer le hash MD5
import Icon from "."; // Import du composant Icon à tester

describe("Icon component", () => {
  describe("When an icon is created with name twitch", () => { // Début du premier bloc de test
    it("the icon contains the path hash value 327fbc38c8e878259c3ec35ef231517a", () => { // Test spécifique pour l'icône Twitch
      render(<Icon name="twitch" />); // Rendu du composant Icon avec name="twitch"
      const pathAttributeValue = screen.getByTestId("icon").getAttribute("d"); // Récupération de la valeur de l'attribut 'd' du chemin SVG
      const hashValue = md5(pathAttributeValue); // Calcul du hash MD5 de la valeur du chemin SVG
      expect(hashValue).toEqual("327fbc38c8e878259c3ec35ef231517a"); // Vérification si le hash MD5 correspond à la valeur attendue pour l'icône Twitch
    });
  });

  describe("When an icon is created with name facebook", () => { // Début du deuxième bloc de test
    it("the icon contains the path hash value bbea4c9e40773b969fdb6e406059f853", () => { // Test spécifique pour l'icône Facebook
      render(<Icon name="facebook" />); // Rendu du composant Icon avec name="facebook"
      const pathAttributeValue = screen.getByTestId("icon").getAttribute("d"); // Récupération de la valeur de l'attribut 'd' du chemin SVG
      const hashValue = md5(pathAttributeValue); // Calcul du hash MD5 de la valeur du chemin SVG
      expect(hashValue).toEqual("bbea4c9e40773b969fdb6e406059f853"); // Vérification si le hash MD5 correspond à la valeur attendue pour l'icône Facebook
    });
  });
});
