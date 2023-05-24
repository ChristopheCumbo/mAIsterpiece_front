// import PropTypes from 'prop-types';
// imports from react-redux and react-router-dom
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// actions
import { actionLoadPictures } from '../../actions/pictures';
// Compoenents
import Card from './Card';
// import list of sorts
// import data from '../../data';
// style and figures
import './style.scss';

function GallerySearch() {
  // sets the dispatch function
  // const dispatch = useDispatch();
  // useEffect(
  //   () => {
  //     // loading by default : most recents pictures
  //     dispatch(actionLoadPictures('picturesMostRecents'));
  //   },
  //   [], // first render
  // );
  // list of images
  const pictures = useSelector((state) => state.pictures.listResultPage);
  // console.log(pictures);
  // id for sorting images
  // const sortIdFromState = useSelector((state) => state.pictures.sortHomePageId);
  // extracts the choosen sort
  // const sortTextContent = data.find((sortDataItem) => sortIdFromState === sortDataItem.id).textContent;
  // Handler for changing sort on click on link
  // const handleChangeSort = (event) => {
  //   event.preventDefault();
  //   dispatch(actionLoadPictures(event.currentTarget.id));
  // };
  return (
    <div className="gallery__container">
      <div className="gallery__title">
        <h2>
          Le résultat de votre recherche
        </h2>
      </div>
      <div className="gallery__content">
        {(pictures.length !== 0)
          && pictures.map((picture) => (
            <Link className="gallery__imgContainer" key={picture[0].id} to={`/picture/${picture[0].id}`}>
              <Card
                id={picture[0].id}
                url={picture[0].url}
                userId={picture.user_id}
                userPseudo={picture.user_pseudo}
                userAvatar={picture.user_avatar}
                nombreLike={picture.nombre_like}
                nombreReview={picture.nombre_review}
              />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default GallerySearch;
