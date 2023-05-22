import PropTypes from 'prop-types';

import './style.scss';
import { Heart, MessageSquare, User } from 'react-feather';
import { useState } from 'react';

function Card({ url, userPseudo, userAvatar, nombreLike, nombreReview }) {
  // TODO fonction d'initialisation du like si on est connecté
  const [like, setLike] = useState(false);
  const [nbLikes, setNbLikes]= useState(nombreLike);

  const handleToggleLike = (event) => {
    event.preventDefault();
    setLike(!like);
    if (!like) {
      setNbLikes(nbLikes + 1);
      console.log('nombre de like + = ', nbLikes);
    }
    else {
      setNbLikes(nbLikes - 1);
      console.log('nombre de like - = ', nbLikes);
    }
  };

  return (
    <>
      <img className="gallery__img" src={url} alt="" />
      <div className="gallery__imgDatas">
        <div className="gallery__author">
          {userAvatar === '' ? <User /> : <img src={userAvatar} alt="" className="gallery__avatarPicture" />}
          <p>{userPseudo}</p>
        </div>
        <div className="gallery__imgLikesAndComments">
          {/* <div className="gallery__imgLikes"> */}
          <div className="gallery__imgLikes" onClick={handleToggleLike}>
            {nbLikes} &nbsp; <Heart className={like && 'heartFilled'} />
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
