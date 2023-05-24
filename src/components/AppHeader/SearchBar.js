import { useNavigate } from 'react-router-dom';
// style and icon
import './style.scss';
import { Search } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
  actionSearchbyAuthor,
  actionSearchbyPrompt,
  actionSearchbyTag,
  actionUpdateSearchBar,
} from '../../actions/pictures';

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // memorize the select's result
  const [selectedValue, setSelectedValue] = useState('Prompt');
  // Controlled fields for input bar
  const inputSearchBar = useSelector((state) => state.pictures.inputSearchBar);
  const handleChangeInputSearchBar = (event) => {
    dispatch(actionUpdateSearchBar(event.target.value));
  };
  // recording value of select
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  // handle for submit
  const handleSubmitSearch = (event) => {
    event.preventDefault();
    switch (selectedValue) {
      case 'tag':
        dispatch(actionSearchbyTag(inputSearchBar));
        console.log('rechercher par tag');
        break;
      case 'author':
        dispatch(actionSearchbyAuthor(inputSearchBar));
        console.log('rechercher par auteur');
        break;
      default:
        dispatch(actionSearchbyPrompt(inputSearchBar));
        console.log('rechercher par prompt');
    }
    navigate('/resultats');
  };
  return (
    <div className="appHeaderMin__searchBar">
      <form onSubmit={handleSubmitSearch}>
        <select name="fieldSearch" onChange={handleSelectChange}>
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
    </div>

  );
}

export default SearchBar;
