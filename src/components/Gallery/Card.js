import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { actionToggleLikeAPI, actionUpdateNbLike } from '../../actions/pictures';

import { URL_SERVER_BACK } from '../../utils/url';

import './style.scss';
import { Heart, MessageSquare, User } from 'react-feather';
import { Link } from 'react-router-dom';

// function Card({ id, url, userId, userPseudo, userAvatar, nombreLike, nombreReview }) {
function Card({ id, url, isLiked, userId, userPseudo, userAvatar, nombreLike, nombreReview }) {
  const dispatch = useDispatch();
  // console.log(isLiked);
  // initialisation du like si on est connecté
  const [like, setLike] = useState(isLiked);
  const [nbLikes, setNbLikes] = useState(parseInt(nombreLike, 10));
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);

  const handleToggleLike = (event) => {
    event.preventDefault();
    setLike(!like);
    if (!like) {
      setNbLikes(nbLikes + 1);
    }
    else {
      setNbLikes(nbLikes - 1);
    }
    // toggle like via API
    dispatch(actionToggleLikeAPI(id));
  };

  const prefix = `${URL_SERVER_BACK}/uploads/images/`;
  let urlCompleted = url;
  // console.log(urlCompleted.substring(0, 3));
  if (urlCompleted.substring(0, 4) !== 'http') {
    urlCompleted = prefix + urlCompleted;
  }

  return (
    <>
      <img className="gallery__img" src={urlCompleted} alt="" />
      <div className="gallery__imgDatas">
        <div className="gallery__author">
          {userAvatar === '' ? <User /> : <img src={userAvatar} alt="" className="gallery__avatarPicture" />}
          {/* <p>{userPseudo}</p> */}
          <Link to={`/membre/${userId}`}>{userPseudo}</Link>
        </div>
        <div className="gallery__imgLikesAndComments">
          {/* <div className="gallery__imgLikes"> */}
          <div className="gallery__imgLikes" onClick={isLogged ? handleToggleLike : null}>
            {nbLikes} &nbsp; <Heart className={like ? 'heartFilled' : ''} />
          </div>
          <div className="gallery__imgComments">
            {nombreReview} &nbsp; <MessageSquare />
          </div>
        </div>
      </div>
    </>
  );
}

Card.propTypes = {

};

export default Card;
