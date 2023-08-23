import React from 'react';
import heroimg from '../../assets/hero-headphone.svg';
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div>
            <h1>100 Thousand songs, ad free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img src={heroimg} alt="headphone" width={212} />
        </div>
    </div>
  )
}

export default Hero;