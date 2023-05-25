import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
// import { Link } from 'react-feather';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/proposition_logo.png';
import NavBar from '../NavBar';
import { actionUpdateSearchBar } from '../../../actions/pictures';
import { Search } from 'react-feather';
import SearchBar from '../SearchBar';

function AppHeaderMin({ isOpen, setIsOpen }) {
  // const inputSearchBar = useSelector((state) => state.pictures.inputSearchBar);

  // const dispatch = useDispatch();

  // const handleChangeInputSearchBar = (event) => {
  //   dispatch(actionUpdateSearchBar(event.target.value));
  // };

  return (

    <div
      className="appHeaderMin"
      style={{
        // backgroundImage: 'url("https://www.zupimages.net/up/23/18/3bwm.jpg")',
        backgroundImage: 'url("https://www.zupimages.net/up/23/19/oqik.jpg")',
      }}
    >
      {/* <div className="appHeaderMin__logoNavbar"> */}

      <div className="appHeaderMin__logoAndTitle">
        <Link to="/">
          <img className="appHeaderMin__logoImg" src={Logo} alt=" logo" />
        </Link>
        <Link to="/" id="appHeaderMin__brand">mAIsterpiece</Link>
        {/* </div> */}
      </div>

      {/* <div className="appHeaderMin__searchBar">
        <form>
          <select name="fieldSearch">
            <option value="prompt">Prompt</option>
            <option value="tag">Mot-clé</option>
            <option value="author">Auteur</option>
          </select>
          <input
            className="appHeaderMin__headerSearch"
            type="text"
            name="headerSearch"
            id="headerSearch"
            placeholder="Rechercher votre image"
            value={inputSearchBar}
            onChange={handleChangeInputSearchBar}
          />
          <button type="submit" className="appHeaderMin__searchButton">
            <Search className="appHeaderMin__searchIcon" />
          </button>
        </form>
      </div> */}

      <SearchBar />

      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
  );
}

AppHeaderMin.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,

};

export default AppHeaderMin;
