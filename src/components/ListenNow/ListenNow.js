import React from "react";
import user from '../../assets/icons/PersonCircle.png'
import { BsApple } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'
import singer from '../../assets/img/album-karolG.jpeg'
import  singer2 from '../../assets/img/karolG-album.jpeg'
import  singer3 from '../../assets/img/dj.jpeg'
import album1 from '../../assets/img/album1.jpeg'
import album2 from '../../assets/img/music3.jpeg'
import album3 from '../../assets/img/album3.jpeg'
import music1 from '../../assets/img/music1.jpeg'
import music2 from '../../assets/img/song1.jpeg'
import music3 from '../../assets/img/music4.jpeg'


import './ListenNow.scss'


function ListenNow() {
  return (
    <section className="ListenNow-container">
      <div className="ListenNow-Head">
        <h2>Listen Now</h2>
        <img src={user} alt="user" />
      </div>
      <article className="ListenNow-card">
        <p>
          80 million songs to
          play or download. All
          ad-free
        </p>
        <div className="ListenNow-logo">
          <BsApple />
          <span>Music</span>
        </div>
        <article className="ListenNow-add">
          <div className="ListenNow-add-div">
            <p className="ListenNow-add-p">Try it free</p>
            <FiChevronRight />
          </div>
          <p className="ListenNow-add-p">1 month free, then US$4.99/month</p>
        </article>
      </article>

      <article className="ListenNow-container-songs">
        <h3>New Songs Added</h3>
        <div className="ListenNow-slider-container">
          <section className="ListenNow-song">
            <img src={ singer2} alt='singer' />
            <h5>Today's Music Hit</h5>
            <p>Apple Music Hits</p>
          </section>
          <section className="ListenNow-song">
            <img src={singer} alt='singer' />
            <h5>MAÑANA SERÁ BONI...</h5>
            <p>KAROL G</p>
          </section>
          <section className="ListenNow-song">
            <img src={ singer3} alt='singer' />
            <h5>New Music Daily</h5>
            <p>Apple Music</p>
          </section>
        </div>
      </article>

      <article className="ListenNow-container-songs">
        <h3>Stations by Genre</h3>
        <div className="ListenNow-slider-container">
          <section className="ListenNow-song">
            <img src={album1} alt="album" />
            <h5>Hits Station</h5>
            <p>Apple Music Hits</p>
          </section>
          <section className="ListenNow-song">
            <img src={album2} alt="album" />
            <h5>Acousting Station</h5>
            <p>Apple Music Acustic</p>
          </section>
          <section className="ListenNow-song">
            <img src={album3} alt="album" />
            <h5>Chill Stationt</h5>
            <p>Apple Music Chill</p>
          </section>
        </div>
      </article>

      <article className="ListenNow-container-songs last-one">
        <h3>Albums We Love</h3>
        <div className="ListenNow-slider-container">
          <section className="ListenNow-song">
            <img src={music3} alt='singer' />
            <h5>Certified Lover Boy</h5>
            <p>The 1978</p>
          </section>
          <section className="ListenNow-song">
            <img src={music1} alt='singer' />
            <h5>D-Day</h5>
            <p>Machine Gun Kelly</p>
          </section>
          <section className="ListenNow-song">
            <img src={music2} alt='singer' />
            <h5>Sour</h5>
            <p>Oliva</p>
          </section>
        </div>
      </article>
    </section >
  )
}

export { ListenNow }