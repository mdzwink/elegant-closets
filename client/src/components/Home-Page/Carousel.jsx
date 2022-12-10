import React, { useEffect, useState } from 'react';
import './Carousel.css'

const Carousel = (props) => {

  const { imgArr } = props;

  const [currentImgI, setCurrentImgI] = useState(0);


  const handleNextImg = () => {
    setCurrentImgI(currentImgI === imgArr.length - 1 ? 0 : currentImgI + 1)
    console.log('currentIndex', currentImgI)
  }

  const handlePrevImg = () => {
    setCurrentImgI(currentImgI === 0 ? imgArr.length - 1 : currentImgI - 1)
    console.log('currentIndex', currentImgI)
  }




  return (
    <div className="home-splash">
      <div className="carousel">
        <div className="carousel-button prev" onClick={handlePrevImg}>{'<'}</div>
        <div className="carousel-button next" onClick={handleNextImg}>{'>'}</div>
        <img src={imgArr[currentImgI]} alt="office" />
      </div>
    </div>
  )
}

export default Carousel;