import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IconLink = ({ icon, link, className }) => {
  return (
    <div className={className}>
      <a href={link}>
        <FontAwesomeIcon size="2x" icon={icon} />
      </a>
    </div>
  );
};

IconLink.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.any.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default IconLink;
