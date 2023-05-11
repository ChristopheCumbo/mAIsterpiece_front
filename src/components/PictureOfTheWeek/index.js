// import PropTypes from 'prop-types';
// imports from react-redux
import { useSelector } from 'react-redux';
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
      <div className="pictureOfTheWeek__imgContainer">
        <img className="pictureOfTheWeek__img" src={picture.src.medium} alt="images de la semaine" />
        <div className="pictureOfTheWeek__imgDatas">
          <div className="pictureOfTheWeek__author">
            <User />
            <p>Martin Martin</p>
          </div>
          <div className="pictureOfTheWeek__imgLikesAndComments">
            <div className="pictureOfTheWeek__imgLikes">
              167 &nbsp; <Heart />
            </div>
            <div className="pictureOfTheWeek__imgComments">
              12 &nbsp; <MessageSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// PictureOfTheWeek.propTypes = {

// };

export default PictureOfTheWeek;
