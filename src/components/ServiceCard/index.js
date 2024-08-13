import PropTypes from "prop-types";
import "./style.scss";

const ServiceCard = ({ imageSrc, imageAlt, children }) => (
  <div className="ServiceCard">
    {/* Container for the image */}
    <div className="ServiceCard__imageContainer">
      <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
    </div>
    {/* Container for the text or children */}
    <div className="ServiceCard__textContainer">{children}</div>
  </div>
);

ServiceCard.propTypes = {
  // Source URL for the image, required
  imageSrc: PropTypes.string.isRequired,

  // Alternative text for the image (for accessibility), optional
  imageAlt: PropTypes.string,

  // Children elements, typically text content or other components
  children: PropTypes.node.isRequired,
};

ServiceCard.defaultProps = {
  // Default value for imageAlt when not provided
  imageAlt: "image",
};

export default ServiceCard;
