// import PropTypes from 'prop-types';

import './style.scss';

function Gallery() {
  return (
    <div className="gallery__container">
      <div className="gallery__title">
        <h2>
          Dernières Productions
        </h2>
        <div className="gallery__line" />
        <div className="gallery__menu">
          <button type="button" className="gallery__sortButton">triées par ...</button>
          <div className="gallery__menu--dropdown">
            <a href="#">dates les plus récentes</a>
            <a href="#">nombre de likes</a>
            <a href="#">nombre de vues</a>
          </div>
        </div>
      </div>
      <div className="gallery__content">
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/4tlv.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/x3r4.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/gb8y.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/4a3q.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/vi6a.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/wasp.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/gh6c.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/8ptc.jpg" alt="images de la semaine" />
        <img className="gallery__img" src="https://www.zupimages.net/up/23/18/qs7v.jpg" alt="images de la semaine" />
      </div>
    </div>
  );
}

// Home.propTypes = {

// };

export default Gallery;
