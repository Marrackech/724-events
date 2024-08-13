// Importation de PropTypes pour la validation des types de propriétés
import PropTypes from "prop-types";
// Importation de la fonction getMonth depuis le fichier helpers/Date
import { getMonth } from "../../helpers/Date";

// Importation du fichier de style
import "./style.scss";

// Déclaration du composant EventCard
// Props:
// - imageSrc : source de l'image (chaîne de caractères, requis)
// - imageAlt : texte alternatif pour l'image (chaîne de caractères, facultatif)
// - date : date de l'événement (instance de Date, requis)
// - title : titre de l'événement (chaîne de caractères, requis)
// - label : étiquette pour l'événement (chaîne de caractères, requis)
// - small : booléen indiquant si la carte doit être rendue en petite taille (facultatif)
// - props : autres propriétés supplémentaires
const EventCard = ({
  imageSrc,
  imageAlt,
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => (
    // Rendu de la carte d'événement avec des classes dynamiques
    <div
      data-testid="card-testid"
      className={`EventCard${small ? " EventCard--small" : ""}`}
      {...props}
    >
      {/* Conteneur de l'image de la carte */}
      <div className="EventCard__imageContainer">
        {/* Rendu de l'image avec des props pour la source et le texte alternatif */}
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        {/* Rendu de l'étiquette de l'événement */}
        <div className="EventCard__label">{label}</div>
      </div>
      {/* Conteneur de la description de l'événement */}
      <div className="EventCard__descriptionContainer">
        {/* Rendu du titre de l'événement */}
        <div className="EventCard__title">{title}</div>
        {/* Rendu du mois de l'événement en utilisant la fonction getMonth */}
        <div className="EventCard__month">{getMonth(date)}</div>
      </div>
    </div>
  );

// Définition des propTypes pour la validation des propriétés du composant
EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,       // Source de l'image, requis
  imageAlt: PropTypes.string,                  // Texte alternatif de l'image, facultatif
  date: PropTypes.instanceOf(Date).isRequired, // Date de l'événement, requis
  title: PropTypes.string.isRequired,          // Titre de l'événement, requis
  small: PropTypes.bool,                       // Indicateur de petite taille, facultatif
  label: PropTypes.string.isRequired,          // Étiquette de l'événement, requis
};

// Définition des valeurs par défaut des propriétés
EventCard.defaultProps = {
  imageAlt: "image",                           // Texte alternatif par défaut
  small: false,                                // Par défaut, la carte n'est pas petite
}

// Exportation du composant EventCard pour l'utiliser dans d'autres fichiers
export default EventCard;
