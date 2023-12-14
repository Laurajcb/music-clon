import React from "react";
import { Link } from 'react-router-dom'

import { BsMusicNoteList } from 'react-icons/bs'
import { PiMicrophoneStageFill } from 'react-icons/pi'
import { IoMdMusicalNote } from 'react-icons/io'
import { FiChevronRight } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'

import album from '../../assets/img/album3.jpeg'

import './Downloaded.scss'


function Downloaded() {
  return (
    <section className="downloaded-container">
      <div className="downloaded-header">
        <div className="downloaded-header-left">
          <Link className="downloaded-link" to="/">
            <IoIosArrowBack className="downloaded-link-back" />
          </Link>
          <span>
            Library
          </span>
        </div>
        <Link className="downloaded-edit" to="/menuDownload">
          <span>
            Edit
          </span>
        </Link>

      </div>

      <h2 className='library-main-title'>Download</h2>

      <article className='library-list'>
        <Link to="/playList" className="txt-decoration" >
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <BsMusicNoteList className='library-icon' />
              <span>Playlist</span>
            </div>
            <FiChevronRight className="iconRight" />
          </section>
        </Link>

        <Link to="/artists" className="txt-decoration">
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <PiMicrophoneStageFill className='library-icon' alt='micro' />
              <span>Artist</span>
            </div>
            <FiChevronRight className="iconRight" />
          </section>
        </Link>

        <Link to="/songs" className="txt-decoration border-botton">
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <IoMdMusicalNote className='library-icon' />
              <span>Songs</span>
            </div>
            <FiChevronRight className="iconRight" />
          </section>
        </Link>
      </article>

      <section className="downloaded-album-section">
        <h3>Recently Downloaded</h3>
        <img alt="album" src={album} className="downloaded-img" />
        <p>Unknown Album</p>
      </section>
    </section>
  )
}

export { Downloaded }