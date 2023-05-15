import PropTypes from 'prop-types';

import './style.scss';

// import React-feather
import { AlertTriangle, Heart, MessageSquare, User } from 'react-feather';

function ZoomAside({ author, ia }) {
  return (
    <div className="zoomPicture__zoomAside">
      <div className="zoomPicture__zoomInfo">
        <User className="zoomPicture__zoomTitleAside" />
        <p className="zoomPicture__zoomContentAside">{author}</p>
      </div>
      <div className="zoomPicture__zoomInfo">
        <p className="zoomPicture__zoomTitleAside">IA</p>
        <p className="zoomPicture__zoomContentAside">{ia}</p>
      </div>
      <div className="zoomPicture__zoomInfo">
        <Heart className="zoomPicture__zoomTitleAside" />
        <p className="zoomPicture__zoomContentAside">160</p>
      </div>
      <div className="zoomPicture__zoomInfo">
        <MessageSquare className="zoomPicture__zoomTitleAside" />
        <p className="zoomPicture__zoomContentAside">7</p>
      </div>
      <div className="zoomPicture__zoomTags">
        <p className="zoomPicture__zoomTitleAside">Tags</p>
        <p className="zoomPicture__zoomContentAside">"Beau, coloré, carré"</p>
      </div>
      <div className="zoomPicture__containerButtonAlert">
        <p>Signaler</p>
        <button className="zoomPicture__reportButton" type="button"><AlertTriangle /> </button>
      </div>
    </div>
  );
}

ZoomAside.propTypes = {
  author: PropTypes.string,
  ia: PropTypes.string,
};

ZoomAside.defaultProps = {
  author: 'non communiqué',
  ia: 'non communiquée',
};

export default ZoomAside;
