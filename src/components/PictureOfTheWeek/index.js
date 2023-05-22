// import PropTypes from 'prop-types';
// imports from react-redux and react-redux-dom
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// style and icons
import './style.scss';
import { Heart, MessageSquare, User } from 'react-feather';


function PictureOfTheWeek() {
  // datas of the picture of the week
  const picture = useSelector((state) => state.pictures.pictureOfTheWeek);
  // console.log(picture);
  return (
    <div className="pictureOfTheWeek">
      <h2>Image de la semaine</h2>
      <Link className="pictureOfTheWeek__imgContainer" to={`/picture/${picture.id}`}>
        {/* <img className="pictureOfTheWeek__img" src={picture.src.medium} alt="images de la semaine" /> */}
        <img className="pictureOfTheWeek__img" src={picture.url} alt="images de la semaine" />
        <div className="pictureOfTheWeek__imgDatas">
          <div className="pictureOfTheWeek__author">
            {picture.user_avatar === '' ? <User /> : <img src={picture.user_avatar} alt="" className="gallery__avatarPicture" />}
            <p>{picture.user_pseudo}</p>
            {/* <User />
            <p>Martin Martin</p> */}
          </div>
          <div className="pictureOfTheWeek__imgLikesAndComments">
            <div className="pictureOfTheWeek__imgLikes">
              {picture.nombre_like} &nbsp; <Heart />
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
