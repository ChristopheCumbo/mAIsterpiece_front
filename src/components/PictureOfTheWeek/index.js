// import PropTypes from 'prop-types';
// imports from react-redux
import { useSelector } from 'react-redux';
// style
import './style.scss';

function PictureOfTheWeek() {
  // datas of the picture of the week
  const picture = useSelector((state) => state.pictures.pictureOfTheWeek);
  // console.log(picture);
  return (
    <div className="pictureOfTheWeek">
      <h2>Image de la semaine</h2>
      <img className="pictureOfTheWeek__img" src={picture.src.medium} alt="images de la semaine" />
    </div>
  );
}

// PictureOfTheWeek.propTypes = {

// };

export default PictureOfTheWeek;
