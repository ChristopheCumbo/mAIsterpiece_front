import PropTypes from 'prop-types';

import './style.scss';

function PictureOfTheWeek() {
  return (
    <div className="pictureOfTheWeek">
      <h1>PictureOfTheWeek</h1>
      <img className="pictureOfTheWeek__img" src="https://www.zupimages.net/up/23/18/4tlv.jpg" alt="images de la semaine" />
    </div>
  );
}

PictureOfTheWeek.propTypes = {

};

export default PictureOfTheWeek;
