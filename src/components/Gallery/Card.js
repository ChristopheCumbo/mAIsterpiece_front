import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { actionToggleLikeAPI, actionUpdateNbLike } from '../../actions/pictures';

import './style.scss';
import { Heart, MessageSquare, User } from 'react-feather';
import { Link } from 'react-router-dom';

function Card({ id, url, userId, userPseudo, userAvatar, nombreLike, nombreReview }) {
  const dispatch = useDispatch();
  // TODO fonction d'initialisation du like si on est connecté

  const [like, setLike] = useState(false);
  const [nbLikes, setNbLikes] = useState(nombreLike);
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);

  const handleToggleLike = (event) => {
    event.preventDefault();
    setLike(!like);
    if (!like) {
      setNbLikes(nbLikes + 1);
      //     // console.log('nombre de like + = ', nbLikes);
    }
    else {
      setNbLikes(nbLikes - 1);
      //     // console.log('nombre de like - = ', nbLikes);
    }
    //   // toggle like via API
    //   // console.log(id);
    dispatch(actionToggleLikeAPI(id));
  };

  return (
    <>
      <img className="gallery__img" src={url} alt="" />
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
