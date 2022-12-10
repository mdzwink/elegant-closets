import React, { useState, useEffect } from 'react';
import './Splash.css';
import classNames from "classnames";

const Splash = () => {
  const buttons = document.querySelectorAll('[data-carousel-button]')

  //arr of img
  //set first img i=0 as visible by refering to index var
  //onClick change value of var thereby showing the next img in arr
  //
  //onClick add data-active to next img

  //dynamicly set style property here using jsx

  //array of imgs
  //data-class

  //need to assosiate data-class with img through index refference
  //need to be able to support multiple carousels

  buttons.forEach(button => {
    //replace with onClick fn
    button.addEventListener('click', () => {

      const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
      const slides = button.closest('[data-carousel]').querySelector('[data-slides]');

      const activeSlide = slides.querySelector('[data-active]')
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;

      slides.children[newIndex].dataset.active = true;
      delete activeSlide.dataset.active;
    })
  })

  const imgLib = [
    'https://source.unsplash.com/1920x1080?bamboo',
    'https://source.unsplash.com/1920x1080?charcoal',
    'https://source.unsplash.com/1920x1080?maple'
  ]

  // const [currentImgI, setCurrentImgI] = useState(0)
  // let imgInterval = 5000;
  let imgIntervalMode = true
  
  let currentImgI = 0;
  console.log(imgIntervalMode)


  const handleImgButton = () => {
    // let cii = currentImgI;
    // if(imgIntervalMode === true) {
    //   imgIntervalMode = false
    // }
    if(currentImgI < imgLib.length) {
      console.log(imgIntervalMode)
      currentImgI ++;
      // setCurrentImgI(cii + 1);
    }
    if(currentImgI >= imgLib.length) {
      currentImgI = 0;
      // setCurrentImgI(0);
    }
  }


  return (
      <div className="carousel" data-carousel>
        <button className="carousel-button prev" data-carousel-button='prev' onClick={() => handleImgButton}>&#10508;</button>
        <button className="carousel-button next" data-carousel-button='next' onClick={() => handleImgButton}>&#10509;</button>
        <ul data-slides>
          <li className="slide" data-active>
            <img src={imgLib[currentImgI]} alt="brightly lit office with black walls and light birch desk" />
          </li>
          <li className="slide">
            <img src="https://source.unsplash.com/1920x1080?charcoal" alt="brightly lit office with black walls and light birch desk" />
          </li>
          <li className="slide">
            <img src="https://source.unsplash.com/1920x1080?maple" alt="brightly lit office with black walls and light birch desk" />
          </li>
        </ul>
      </div>
  )
}

export default Splash;