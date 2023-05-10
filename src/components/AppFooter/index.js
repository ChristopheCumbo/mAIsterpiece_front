// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import './style.scss';

function AppFooter() {
  return (
    <div className="footer__container">
      <ul>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <ul>
        <li><Link to="/mentionlegales">Mention Légales</Link></li>
      </ul>

    </div>
  );
}

// AppFooter.propTypes = {

// };

export default AppFooter;
