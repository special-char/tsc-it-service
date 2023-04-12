"use client"
import React from 'react'
import { useState }  from 'react';
import Reviews from '../Review/Review';
import styles from './slider.module.css';

const slides = [
  {
    title: 'Slide 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://placeimg.com/640/480/tech'
  },
  {
    title: 'Slide 2',
    description: 'Nulla facilisi. Aliquam nec augue eget diam feugiat porta.',
    image: 'https://placeimg.com/640/480/nature'
  },
  {
    title: 'Slide 3',
    description: 'Pellentesque eget semper nulla. Nunc venenatis metus in velit tristique.',
    image: 'https://placeimg.com/640/480/animals'
  }
];

 const Carousal = ()=> {
  const [currentSlide, setCurrentSlide] = useState(null)

  const handleBulletClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.slider}>
      <div className={styles.wrapper} style={{ transform: `translateX(-${currentSlide * 10}%)` }}>
        {slides.map((slide, index) => (
            
          <div className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`} key={index}>
            <img src={slide.image} alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.bullets}>
        {slides.map((slide, index) => (
          <div className={`${styles.bullet} ${index === currentSlide ? styles.active : ''}`} key={index} onClick={() => handleBulletClick(index)}></div>
        ))}
      </div>
      <Reviews  height={20} width={20} rate={3} />
    </div>
  );
}

export default Carousal
