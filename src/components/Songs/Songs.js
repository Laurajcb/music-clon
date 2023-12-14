import { React, useState } from "react";
import { Link } from "react-router-dom";

import { IoIosArrowBack } from 'react-icons/io'
import { AiOutlineCheck } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { BsShuffle } from 'react-icons/bs'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

import album from '../../assets/img/album1.jpeg'

import './Songs.scss'

function Songs() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <section className={`songs-container ${isMenuVisible ? 'background-blur' : ''}`}>
      <section className="songs-header">
        <div className="songs-header-right">
          <Link className="songs-link" to="/">
            <IoIosArrowBack className="songs-link-back" />
          </Link>
          <span>
            Library
          </span>
          <span className="songs-sort" onClick={toggleMenu}>
            Sort
          </span>
        </div>
        {
          isMenuVisible && (
            <ul className="artis-menu-ul">
              <li className="artis-menu-item "><AiOutlineCheck className="artis-menu-item-icon" /> Title</li>
              <li className="artis-menu-item item">Recently Added</li>
              <li className="artis-menu-item item">Newest First</li>
              <li className="artis-menu-item item">Oldest First</li>
            </ul>
          )
        }
        <h1 className="songs-main-title">
          Songs
        </h1>
        <div className="songs-bnts">
          <button><BsFillPlayFill />Play</button>
          <button><BsShuffle />Shuffle</button>
        </div>
      </section>

      <section className="songs-album-content">
        <article className="song-album">

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>

          <Link className="song-album-item" to='/SongReproducer'>
            <img alt="album" src={album} />
            <div className="border-container">
              <div className="song-album-titles">
                <h5>Name</h5>
                <h6>Artists Name</h6>
              </div>
              <BsFillArrowDownCircleFill className="song-album-icon" />
            </div>
          </Link>


        </article>
        <article className="song-abc-bar">
          <span>..</span>
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>E</span>
          <span>F</span>
          <span>G</span>
          <span>H</span>
          <span>I</span>
          <span>J</span>
          <span>K</span>
          <span>L</span>
          <span>M</span>
          <span>N</span>
          <span>O</span>
          <span>P</span>
          <span>Q</span>
          <span>R</span>
          <span>S</span>
          <span>T</span>
          <span>U</span>
          <span>V</span>
          <span>W</span>
          <span>X</span>
          <span>Y</span>
          <span>Z</span>
          <span>#</span>
          <span>?</span>
        </article>
      </section>
    </section>
  )
}

export { Songs }