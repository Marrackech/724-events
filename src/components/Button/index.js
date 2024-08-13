// Importation des propTypes pour la validation des types de propriétés
import PropTypes from "prop-types";

// Importation du fichier de style
import "./style.scss";

// Définition des types de boutons
export const BUTTON_TYPES = {
  DEFAULT: 1, // Bouton standard
  SUBMIT: 2,  // Bouton de soumission de formulaire
};

// Déclaration du composant Button
// title : chaîne de caractères représentant le titre du bouton
// onClick : fonction à appeler lors du clic sur le bouton
// type : type de bouton défini dans BUTTON_TYPES
// disabled : booléen indiquant si le bouton est désactivé
// children : contenu à afficher à l'intérieur du bouton
const Button = ({ title, onClick, type, disabled, children }) => {
  // Utilisation d'un switch pour rendre le type de bouton approprié
  switch (type) {
    case BUTTON_TYPES.DEFAULT:
      // Rendu d'un bouton standard
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
    case BUTTON_TYPES.SUBMIT:
      // Rendu d'un bouton de soumission de formulaire
      return (
        <input
          disabled={disabled}
          className="Button"
          type="submit"
          data-testid="button-test-id"
          value={children}
          onClick={onClick}
          title={title}
        />
      );
    default:
      // Rendu par défaut, en cas de type non spécifié
      return (
        <button
          type="button"
          disabled={disabled}
          className="Button"
          data-testid="button-test-id"
          onClick={onClick}
          title={title}
        >
          {children}
        </button>
      );
  }
};

// Définition des propTypes pour la validation des propriétés du composant
// eslint-disable-next-line react/no-typos
Button.propTypes = {
  title: PropTypes.string,         // Titre du bouton
  onClick: PropTypes.func,         // Fonction de clic
  type: PropTypes.number,          // Type de bouton
  disabled: PropTypes.bool,        // Indique si le bouton est désactivé
  children: PropTypes.node,        // Contenu du bouton
};

// Définition des valeurs par défaut des propriétés
Button.defaultProps = {
  disabled: false,                 // Par défaut, le bouton n'est pas désactivé
  onClick: () => null,             // Par défaut, la fonction de clic ne fait rien
  type: BUTTON_TYPES.DEFAULT,      // Par défaut, le type de bouton est standard
  title: "",                       // Par défaut, il n'y a pas de titre
  children: null                   // Par défaut, il n'y a pas de contenu
}

// Exportation du composant Button pour l'utiliser dans d'autres fichiers
export default Button;
