import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { actionSearchbyAuthor, actionSearchbyPrompt, actionSearchbyTag, actionUpdateSearchBar } from '../../actions/pictures';

// import image de fond
// import BackgroundImage from 'https://www.zupimages.net/up/23/18/3bwm.jpg'
// import reactLogo from './react-logo.svg';
import Logo from '../../assets/proposition_logo.png';
// import composants
import NavBar from './NavBar';

// import scss
import './style.scss';
import SearchBar from './SearchBar';

function AppHeader({ isOpen, setIsOpen }) {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [selectedValue, setSelectedValue] = useState('Prompt');
  // // Controlled fields for input bar
  // const inputSearchBar = useSelector((state) => state.pictures.inputSearchBar);
  // const handleChangeInputSearchBar = (event) => {
  //   dispatch(actionUpdateSearchBar(event.target.value));
  // };
  // // value of select
  // const handleSelectChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  // // handle for submit
  // const handleSubmitSearch = (event) => {
  //   event.preventDefault();
  //   switch (selectedValue) {
  //     case 'tag':
  //       dispatch(actionSearchbyTag(inputSearchBar));
  //       console.log('rechercher par tag');
  //       break;
  //     case 'author':
  //       dispatch(actionSearchbyAuthor(inputSearchBar));
  //       console.log('rechercher par auteur');
  //       break;
  //     default:
  //       dispatch(actionSearchbyPrompt(inputSearchBar));
  //       console.log('rechercher par prompt');
  //   }
  //   navigate('/resultats');
  // };

  return (
    <div
      className="appHeader"
      style={{
        backgroundImage: 'url("https://www.zupimages.net/up/23/19/oqik.jpg")',
      }}
    >
      <div className="appHeader__logoNavbar">
        <div className="appHeader__logoAndTitle">
          <Link to="/">
            <img className="appHeader__logoImg" src={Logo} alt=" logo" />
          </Link>
          <Link to="/" id="appHeader__brand">mAIsterpiece</Link>
        </div>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className="appHeader__searchBarContainer">
        <p className="appHeader__textAboveSearchBar">Bienvenue sur mAIsterpiece ! Ici, vous pourrez apprécier
          et téléverser vos images générées par IA
        </p>
        <SearchBar />

      </div>
    </div>
  );
}

AppHeader.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default AppHeader;
