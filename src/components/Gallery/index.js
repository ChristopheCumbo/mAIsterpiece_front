// import PropTypes from 'prop-types';
// imports from react-redux
import { useSelector } from 'react-redux';
// style
import './style.scss';

function Gallery() {
  // list of images
  const pictures = useSelector((state) => state.pictures.listHomePage);
  // console.log(pictures);
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
        {
          pictures.map((picture) => (
            <img className="gallery__img" src={picture.src.medium} key={picture.id} alt="" />
          ))
        }
      </div>
    </div>
  );
}

// Home.propTypes = {

// };

export default Gallery;
