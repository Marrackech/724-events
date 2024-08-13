import PropTypes from "prop-types"; // Import des PropTypes pour la validation des types des props
import "./style.scss"; // Import du fichier de style SCSS associé au composant

// Définition du composant fonctionnel PeopleCard avec destructuring des props
const PeopleCard = ({ imageSrc, imageAlt, position, name }) => (
  <div className="PeopleCard"> {/* Conteneur principal du composant avec classe CSS PeopleCard */}
    <div className="PeopleCard__imageContainer"> {/* Conteneur pour l'image de la personne */}
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} /> {/* Image avec attribut data-testid pour les tests, source et texte alternatif */}
    </div>
    <div className="PeopleCard__descriptionContainer"> {/* Conteneur pour les informations de description */}
      <div className="PeopleCard__name">{name}</div> {/* Nom de la personne */}
      <div className="PeopleCard__position">{position}</div> {/* Position ou rôle de la personne */}
    </div>
  </div>
);

// Définition des propTypes pour valider les types des props
PeopleCard.propTypes = {
  imageSrc: PropTypes.string.isRequired, // imageSrc est une chaîne obligatoire (requise)
  imageAlt: PropTypes.string, // imageAlt est une chaîne optionnelle
  name: PropTypes.string.isRequired, // name est une chaîne obligatoire (requise)
  position: PropTypes.string.isRequired, // position est une chaîne obligatoire (requise)
};

// Définition des defaultProps pour définir des valeurs par défaut des props optionnelles
PeopleCard.defaultProps = {
  imageAlt: "", // Par défaut, imageAlt est une chaîne vide
};

export default PeopleCard; // Export du composant PeopleCard par défaut
