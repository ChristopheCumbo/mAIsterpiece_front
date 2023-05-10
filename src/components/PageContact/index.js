// import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Logo from '../../assets/proposition_logo.png';
import svg from '../../assets/envelope-open-svgrepo-com.svg';
import './style.scss';

function PageContact() {
  return (
    <div className="contact">
      <div className="contact__logoAndTitle">
        <img className="contact__logoImg" src={Logo} alt=" logo" />
        <p className="contact__contact_us"> mAIsterpiece</p>
      </div>
        <h1 className="">Nous contacter</h1>
      <Link to="">
        <div className="contact__infos">
          <img className="contact__logoSvg" src={svg} alt=" enveloppe" />
          <p>Email:</p>
          <p>Ecrivez-nous sur l'adresse mail</p>
          <p>mAIsterpiece@xxxx.xxx</p>
        </div>
      </Link>
    </div>
  );
}

PageContact.propTypes = {

};

export default PageContact;
