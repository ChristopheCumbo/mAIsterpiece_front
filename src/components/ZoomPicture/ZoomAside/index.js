import PropTypes from 'prop-types';

import './style.scss';

// import React-feather
import { useState } from 'react';
import { AlertTriangle, Heart, MessageSquare, User } from 'react-feather';
import AlertModal from '../../AlertModal';

function ZoomAside({ author, avatar, ia, likes, reviews }) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="zoomPicture__zoomAside">
      <div className="zoomPicture__zoomInfo">
        {
          !avatar
            ? <User className="zoomPicture__zoomTitleAside" />
            : <img src={avatar} alt="avatar du créateur" className="zoomPicture__zoomTitleAside" />
        }
        <p className="zoomPicture__zoomContentAside">{author}</p>
      </div>
      <div className="zoomPicture__zoomInfo">
        <p className="zoomPicture__zoomTitleAside">IA</p>
        <p className="zoomPicture__zoomContentAside">{ia}</p>
      </div>
      <div className="zoomPicture__zoomInfo">
        <Heart className="zoomPicture__zoomTitleAside" />
        <p className="zoomPicture__zoomContentAside">{likes}</p>
      </div>
      <div className="zoomPicture__zoomInfo">
        <MessageSquare className="zoomPicture__zoomTitleAside" />
        <p className="zoomPicture__zoomContentAside">{reviews}</p>
      </div>
      <div className="zoomPicture__zoomTags">
        <p className="zoomPicture__zoomTitleAside">Tags</p>
        <p className="zoomPicture__zoomContentAside">"Beau, coloré, carré"</p>
      </div>
      <div className="zoomPicture__containerButtonAlert">
        <p>Signaler</p>
        <button onClick={toggleMenu} className="zoomPicture__reportButton" type="button"><AlertTriangle /> </button>
        {isVisible && <AlertModal isVisible={isVisible} setIsVisible={setIsVisible} className="alertModal" />}
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
