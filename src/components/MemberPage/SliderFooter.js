import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './style.scss';
import { Heart, MessageSquare } from 'react-feather';

function SliderFooter(picture) {
  // console.log('FOOTER = ');
  console.log('picture dans SliderFooter : ', picture);
  return (
    <div className="memberPage__sliderFooter">
      <Link to={picture[0].ia.link} className="memberPage__sliderFooter--ia">{picture[0].ia.name}</Link>
      {/* <Link to={''} className="zoomPicture__zoomContentAside">IA</Link> */}
      {/* {photographer}  <a href="#">MidJourney</a> */}
      <div className="memberPage__sliderFooter--likes">
        {picture.nombre_like} &nbsp; <Heart />
      </div>
      <div className="memberPage__sliderFooter--comments">
        {picture.nombre_review} &nbsp; <MessageSquare />
      </div>
    </div>

  );
}

SliderFooter.propTypes = {
};

SliderFooter.defaultProps = {

};

export default SliderFooter;
