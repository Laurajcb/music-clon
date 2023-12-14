import React from "react";

import { BsApple } from 'react-icons/bs'
import { IoMdPlayCircle } from "react-icons/io";
import { FaNewspaper } from "react-icons/fa6";

import image1 from '../../assets/img/Rectangle 27.png'
import image2 from '../../assets/img/Rectangle 28.png'
import image3 from '../../assets/img/Rectangle 29.png'


import './Radio.scss'

function Radio() {
  return (
    <section className="radio-container">
      <section className="radio-add">
        <div className="radio-logo">
          <BsApple />
          <p>Music</p>
        </div>
        <p className="radio-text">Try it now and get 1 month free</p>
      </section>

      <section className="radio-content">
        <h1>
          Radio
        </h1>

        <article className="radio-article">
          <div className="radio-article-header">
            <div className="radio-position">
              <div className="radio-logo-text">
                <div className="radio-logo">
                  <BsApple />
                  <p>Music</p>
                </div>
                <h4>The new music that matters</h4>
              </div>
              <div className="radio-icon">
                <FaNewspaper />
              </div>
            </div>
            <img src={image1} alt="img" className="radio-img" />
          </div>
          <section className="radio-article-content">
            <div className="radio-article-txt">
              <h4>LIVE 3-5AM</h4>
              <h3>Today’s Chill</h3>
              <h5>Songs that reduces the sound of </h5>
              <h4>chill on a daily basis</h4>
            </div>
            <div className="radio-icon-play_container">
              <IoMdPlayCircle className="radio-icon-play" />
            </div>

          </section>
        </article>

        <article className="radio-article">
          <div className="radio-article-header">
            <div className="radio-position">
              <div className="radio-logo-text">
                <div className="radio-logo">
                  <BsApple />
                  <p>Music</p>
                </div>
                <h4>The new music that matters</h4>
              </div>
              <div className="radio-icon">
                <FaNewspaper />
              </div>
            </div>
            <img src={image2} alt="img" className="radio-img" />
          </div>
          <section className="radio-article-content">
            <div className="radio-article-txt">
              <h4>LIVE 3-5AM</h4>
              <h3>Today’s Chill</h3>
              <h5>Songs that reduces the sound of </h5>
              <h4>chill on a daily basis</h4>
            </div>
            <div className="radio-icon-play_container">
              <IoMdPlayCircle className="radio-icon-play" />
            </div>
          </section>
        </article>


        <article className="radio-article">
          <div className="radio-article-header">
            <div className="radio-position">
              <div className="radio-logo-text">
                <div className="radio-logo">
                  <BsApple />
                  <p>Music</p>
                </div>
                <h4>The new music that matters</h4>
              </div>
              <div className="radio-icon">
                <FaNewspaper />
              </div>
            </div>
            <img src={image3} alt="img" className="radio-img" />
          </div>
          <section className="radio-article-content">
            <div className="radio-article-txt">
              <h4>LIVE 3-5AM</h4>
              <h3>Today’s Chill</h3>
              <h5>Songs that reduces the sound of </h5>
              <h4>chill on a daily basis</h4>
            </div>
            <div className="radio-icon-play_container">
              <IoMdPlayCircle className="radio-icon-play" />
            </div>

          </section>
        </article>

      </section>
    </section>
  )
}

export { Radio }