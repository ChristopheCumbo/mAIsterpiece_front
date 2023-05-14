import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
// PropTypes
import PropTypes from 'prop-types';
// imports from react-redux
import { useSelector } from 'react-redux';
// style
import './style.scss';

function Carousel() {
  // list of images
  const pictures = useSelector((state) => state.pictures.listHomePage);

  // let i = 0;

  return (
    <div className="memberPage__carousel">
      <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={10}
        totalSlides={30}
        infinite
        // isPlaying="false"
        // interval="3000"
        // isIntrinsicHeight
        className="memberPage__provider"
      >
        <div className="memberPage__sliderContainer">
          {/* <ButtonBack>Back</ButtonBack> */}
          <ButtonBack id="memberPage__buttonBack" />
          {/* <Slider> */}
          <Slider className="memberPage__slider">
            {
              pictures.map((picture, index) => (
                <Slide index={index}>
                  <ImageWithZoom src={picture.src.medium} data-description={picture.src.photographer} alt="" />
                </Slide>
              ))
            }
          </Slider>
          <ButtonNext id="memberPage__buttonNext" />
        </div>
      </CarouselProvider>
    </div>
  );
}

Carousel.propTypes = {

};

export default Carousel;
