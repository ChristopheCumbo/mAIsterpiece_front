// import PropTypes from 'prop-types';
// imports from react-redux and react-router-dom
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// actions
import { LOAD_PICTURES_FILTERED, actionLoadPictures, actionLoadPicturesFiltered, actionUpdateSortingHomepagePictures } from '../../actions/pictures';
// Compoenents
import Card from './Card';
// import list of sorts
import data from '../../data';
// style and figures
import './style.scss';
import { Heart, MessageSquare, User } from 'react-feather';



function Gallery() {
  // console.log('Chargement Gallery');
  // sets the dispatch function
  const dispatch = useDispatch();
  useEffect(
    () => {
      // loading by default : most recents pictures
      dispatch(actionLoadPictures('picturesMostRecents'));
    },
    [], // first render
  );
  // list of images
  const pictures = useSelector((state) => state.pictures.listHomePage);
  // console.log(pictures);
  // id for sorting images
  const sortIdFromState = useSelector((state) => state.pictures.sortHomePageId);
  // extracts the choosen sort
  const sortTextContent = data.find((sortDataItem) => sortIdFromState === sortDataItem.id).textContent;
  // Handler for changing sort on click on link
  const handleChangeSort = (event) => {
    event.preventDefault();
    dispatch(actionLoadPictures(event.currentTarget.id));
    // dispatch(actionUpdateSortingHomepagePictures(event.currentTarget.id));
    // dispatch(actionLoadPicturesFiltered(event.currentTarget.id));
  };
  return (
    <div className="gallery__container">
      <div className="gallery__title">
        <h2>
          Les Productions
        </h2>
        <div className="gallery__line" />
        <div className="gallery__menu">
          <button type="button" className="gallery__sortButton">{sortTextContent}</button>
          <div className="gallery__menu--dropdown">
            {
              data.map((sortType) => (
                (sortType.id !== sortIdFromState)
                && (
                  <a
                    id={sortType.id}
                    key={sortType.id}
                    href="#"
                    onClick={handleChangeSort}
                  >
                    {sortType.textContent}
                  </a>
                )))
            }
            {/* <a className="gallery__menuItem--hidden" id="optionMostRecents" href="#">les plus récentes</a>
            <a id="optionMostReviewed" href="#">les plus commentées</a>
            <a id="optionMostLiked" href="#">les plus aimées</a>
            <a id="optionMostClicked" href="#">les plus vues</a> */}
          </div>
          {/* <select name="selectSort" className="gallery__menu--dropdown">
            <option value="dates">les plus récentes</option>
            <option value="comments">les plus commentées</option>
            <option value="likes">les plus aimées</option>
            <option value="cliks">les plus vues</option>
          </select> */}
        </div>
      </div>
      <div className="gallery__content">
        {
          pictures.map((pic) => (
            <Link className="gallery__imgContainer" key={pic.picture[0].id} to={`/picture/${pic.picture[0].id}`}>
              <Card
                id={pic.picture[0].id}
                url={pic.picture[0].fileName}
                userId={pic.picture.user_id}
                userPseudo={pic.picture.user_pseudo}
                userAvatar={pic.picture.user_avatar}
                nombreLike={pic.picture.nombre_like}
                nombreReview={pic.picture.nombre_review}
              />
              {/* <img className="gallery__img" src={picture.src.medium} alt="" /> */}
              {/* <img className="gallery__img" src={picture[0].url} alt="" />
              <div className="gallery__imgDatas">
                <div className="gallery__author">
                  { picture.user_avatar ==='' ? <User /> : <img src={picture.user_avatar} alt="" className="gallery__avatarPicture" />}
                  <p>{picture.user_pseudo}</p>
                </div>
                <div className="gallery__imgLikesAndComments">
                  <div className="gallery__imgLikes" onClick={handleToggleLike}>
                    {picture.nombre_like} &nbsp; <Heart className="heartFilled"/>
                  </div>
                  <div className="gallery__imgComments">
                    {picture.nombre_review} &nbsp; <MessageSquare />
                  </div>
                </div>
              </div> */}
            </Link>
          ))
        }
      </div>
    </div>
  );
}

// Home.propTypes = {

// };

export default Gallery;
