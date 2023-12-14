import React from "react";
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'
import { BsApple } from 'react-icons/bs'
import cover1 from '../../assets/img/cover1.png'
import cover2 from '../../assets/img/cover2.jpg'
import cover3 from '../../assets/img/cover3.png'
import cover4 from '../../assets/img/cover4.jpg'

import './Search.scss'

function Search() {
  return (
    <section className="search-container">
      <h2 className="search-title">Search</h2>
      <div className="search-bar">
        <AiOutlineSearch className="search-bar-icon" />
        <input
          type="text"
          className="search-input"
          value="Artistis, Song, Lyrics, and More"
        >
        </input>
        <FaMicrophone className="search-bar-icon2" />
      </div>
      <section className="search-logo-container">
        <div className="search-logo">
          <BsApple className="search-logo-icon" />
          <span>Music</span>
        </div>
        <div className="search-bottom">
          <h3>Get 1 month of free music</h3>
          <p>Plus your entire music library on all your device <br /> 1 month free, then US$4.99/month.</p>
          <button className="search-btn">Try it Free</button>
        </div>
      </section>

      <section>
        <h3>
          New Songs Added
        </h3>

        <section className="search-music-grid-container">
          <section className="search-music-section">
            <img src={cover1} alt="imgen" className="img" />
            <h4>Today’s Hit</h4>
            <h6>Apple Music Hits</h6>
          </section>
          <section className="search-music-section">
            <img src={cover2} alt="imgen" className="img" />
            <h4>New Music Daily</h4>
            <h6>Apple Music</h6>
          </section>
          <section className="search-music-section">
            <img src={cover3} alt="imgen" className="img" />
            <h4>Sour</h4>
            <h6>Olivia</h6>
          </section>
          <section className="search-music-section">
            <img src={cover4} alt="imgen" className="img" />
            <h4>R&B Now </h4>
            <h6>Apple music R&B </h6>
          </section>
        </section>
      </section>
    </section>
  )
}

export { Search }