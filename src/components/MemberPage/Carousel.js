// Note pour le carousel : mettre largeur maximum d'une image importée dans le paramètre         spaceBetween (={600} par exemple) de <Swiper>

// import from react and react-redux
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import React, { useRef, useState } from "react";
// imports from the carousel library : needs "    // "pure-react-carousel": "^1.30.1"," in package.json
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules of Swiper
import { Pagination, Navigation } from "swiper";
// PropTypes
import PropTypes from 'prop-types';
// imports from react-redux and react
// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// style and icons
import './style.scss';
import { Heart, MessageSquare } from 'react-feather';



function Carousel() {
  // list of this member's images in the state
  const pictures = useSelector((state) => state.pictures.listHomePage);
  // IA of the focused picture
  const [pictureIA, setPictureIa] = useState('Midjourney');
  // number of likes of the focused picture
  const [pictureNbLikes, setPictureNbLikes] = useState('155');
  // number of comments of the focused picture
  const [pictureNbComments, setPictureNbComments] = useState('23');

  // let isChanging = true;

  // Sets the datas for the footer
  const setFooter = () => {
    console.log("fonction setFooter");
  };

  // const swiperT = useSwiper();
  // console.log(swiperT);

  // useEffect(
  //   () => {
  //     //
  //     console.log('useEffect ici');
  //   },
  //   [isChanging],
  // );

  return (
    <div className="memberPage__sliderContainer">
      {/* <div className="memberPage__carousel"> */}
      {/* <CarouselProvider
        naturalSlideWidth={10}
        naturalSlideHeight={10}
        totalSlides={30}
        infinite
        className="memberPage__provider"
      >
        <div className="memberPage__sliderContainer">
          <ButtonBack id="memberPage__buttonBack" onClick={setFooter} />
          <Slider className="memberPage__slider">
            {
              pictures.map((picture, index) => (
                <Slide index={index} key={picture.id}>
                  <ImageWithZoom
                    src={picture.src.medium}
                    data-description="Martin Martin"
                    alt=""
                  />
                </Slide>
              ))
            }
          </Slider>
          <ButtonNext id="memberPage__buttonNext" onClick={setFooter} />
        </div>
        <div className="memberPage__sliderFooter">
          <a href="#">{pictureIA}</a>
          <div className="memberPage__sliderFooter--likes">
            {pictureNbLikes} &nbsp; <Heart />
          </div>
          <div className="memberPage__sliderFooter--comments">
            {pictureNbComments} &nbsp; <MessageSquare />
          </div>
        </div>
      </CarouselProvider> */}


      {/* <button type="button" id="memberPage__buttonBack" onClick={setFooter} /> */}
      <Swiper
        slidesPerView={'auto'}
        autoHeight={true}
        centeredSlides={true}
        spaceBetween={600}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="memberPage__SwiperContainer"
      >
        {
          pictures.map((picture) => (
            <SwiperSlide key={picture.id}>
              <img
                src={picture.src.large}
                alt=""
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
      {/* <button type="button" id="memberPage__buttonNext" onClick={setFooter} /> */}
    </div>
  );
}

Carousel.propTypes = {

};

export default Carousel;
