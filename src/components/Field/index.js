// Importation de PropTypes pour la validation des types de propriétés
import PropTypes from "prop-types";

// Importation du fichier de style
import "./style.scss";

// Définition des types de champ possibles
export const FIELD_TYPES = {
  INPUT_TEXT: 1, // Champ de saisie de texte
  TEXTAREA: 2,   // Zone de texte
};

// Déclaration du composant Field
// Props:
// - type : type de champ (défini dans FIELD_TYPES, par défaut INPUT_TEXT)
// - label : étiquette du champ (chaîne de caractères)
// - name : nom du champ (chaîne de caractères)
// - placeholder : texte d'indication du champ (chaîne de caractères)
// - onChange : fonction à exécuter lorsque la valeur du champ change
const Field = ({ type = FIELD_TYPES.INPUT_TEXT, label, name, placeholder, onChange }) => {
  let component;

  // Utilisation d'un switch pour rendre le type de champ approprié
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      // Rendu d'un champ de saisie de texte
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          aria-label={label} // Ajout d'un label d'accessibilité
          onChange={onChange} // Ajout de la gestion de l'événement onChange
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      // Rendu d'une zone de texte
      component = (
        <textarea
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          aria-label={label} // Ajout d'un label d'accessibilité
          onChange={onChange} // Ajout de la gestion de l'événement onChange
        />
      );
      break;
    default:
      // Rendu par défaut, en cas de type non spécifié (champ de saisie de texte)
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          aria-label={label} // Ajout d'un label d'accessibilité
          onChange={onChange} // Ajout de la gestion de l'événement onChange
        />
      );
  }

  // Rendu du composant Field
  return (
    <div className="inputField">
      {/* Étiquette du champ */}
      <span>{label}</span>
      {/* Champ approprié (input ou textarea) */}
      {component}
    </div>
  );
};

// Définition des propTypes pour la validation des propriétés du composant
Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)), // Type de champ
  name: PropTypes.string,                            // Nom du champ
  label: PropTypes.string,                           // Étiquette du champ
  placeholder: PropTypes.string,                     // Texte d'indication
  onChange: PropTypes.func,                          // Fonction appelée lors du changement de valeur
};

// Définition des valeurs par défaut des propriétés
Field.defaultProps = {
  label: "",                                         // Par défaut, l'étiquette est vide
  placeholder: "",                                   // Par défaut, le placeholder est vide
  type: FIELD_TYPES.INPUT_TEXT,                      // Par défaut, le type de champ est INPUT_TEXT
  name: "field-name",                                // Par défaut, le nom du champ est "field-name"
  onChange: () => {},                                // Par défaut, une fonction vide est utilisée
};

// Exportation du composant Field pour l'utiliser dans d'autres fichiers
export default Field;
