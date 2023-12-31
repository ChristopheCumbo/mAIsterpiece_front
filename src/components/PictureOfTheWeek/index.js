// import PropTypes from 'prop-types';
// imports from react-redux and react-redux-dom
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionLoadPictureOfTheWeek, actionToggleLikeAPI } from '../../actions/pictures';
import { URL_SERVER_BACK } from '../../utils/url';
// style and icons
import './style.scss';
import { Heart, MessageSquare, User } from 'react-feather';


function PictureOfTheWeek() {
  // sets the dispatch function
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [nbLikes, setNbLikes] = useState(0);
  // datas of the picture of the week
  const picture = useSelector((state) => state.pictures.pictureOfTheWeek);
  useEffect(
    () => {
      dispatch(actionLoadPictureOfTheWeek());
    },
    [], // first render
  );
  useEffect(
    () => {
      setNbLikes(picture.nombre_like);
      setLike(picture.isLiked);
    },
    [picture],
  );
  // console.log(picture);
  // check in the state if the user is logged
  const isLogged = useSelector((state) => state.user.logged);

  // const [nbLikes, setNbLikes] = useState(picture.nombre_like);
  // if (picture.nombre_like === undefined) {
  //   setNbLikes(picture.nombre_like);
  // }
  // console.log('nbLikes ', picture.nombre_like);
  // console.log('nbLikes ', nbLikes);
  // console.log('nbLikes : ', nbLikes);

  const handleToggleLike = (event) => {
    event.preventDefault();
    setLike(!like);
    if (!like) {
      setNbLikes(nbLikes + 1);
      // console.log('nombre de like + = ', nbLikes);
    }
    else {
      setNbLikes(nbLikes - 1);
      // console.log('nombre de like - = ', nbLikes);
    }
    // toggle like via API
    // console.log('nbLikes : ', nbLikes);
    dispatch(actionToggleLikeAPI(picture.id));
  };
  const prefix = `${URL_SERVER_BACK}/uploads/images/`;
  let urlCompleted = picture.fileName;
  // console.log(picture.fileName);
  if ((urlCompleted !== undefined) && urlCompleted.substring(0, 4) !== 'http') {
    urlCompleted = prefix + urlCompleted;
  }
  return (
    <div className="pictureOfTheWeek">
      <h2>Image de la semaine</h2>
      <Link className="pictureOfTheWeek__imgContainer" to={`/picture/${picture.id}`}>
        {/* <img className="pictureOfTheWeek__img" src={picture.src.medium} alt="images de la semaine" /> */}
        <img className="pictureOfTheWeek__img" src={urlCompleted} alt="images de la semaine" />
        <div className="pictureOfTheWeek__imgDatas">
          <div className="pictureOfTheWeek__author">
            {picture.user_avatar === '' ? <User /> : <img src={picture.user_avatar} alt="" className="gallery__avatarPicture" />}
            {/* <p>{picture.user_pseudo}</p> */}
            <Link to={`/membre/${picture.user_id}`}>{picture.user_pseudo}</Link>
            {/* <User />
            <p>Martin Martin</p> */}
          </div>
          <div className="pictureOfTheWeek__imgLikesAndComments">
            <div className="pictureOfTheWeek__imgLikes" onClick={isLogged ? handleToggleLike : null}>
              {nbLikes} &nbsp; <Heart className={like ? 'heartFilled' : ''} />
            </div>
            <div className="pictureOfTheWeek__imgComments">
              {picture.nombre_review} &nbsp; <MessageSquare />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

// PictureOfTheWeek.propTypes = {

// };

export default PictureOfTheWeek;
