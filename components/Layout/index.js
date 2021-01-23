import PropTypes from 'prop-types';
import IconLink from '../IconLink';
import NavBar from '../NavBar';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

IconLink.PropTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
