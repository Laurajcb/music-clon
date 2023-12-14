import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import concertImg from '../../assets/img/concert.jpg'
import { BsMusicNoteList } from 'react-icons/bs'
import { PiMicrophoneStageFill } from 'react-icons/pi'
import { IoMdMusicalNote } from 'react-icons/io'
import scroll from '../../assets/img/ScrollDown.png'
import "../Library/Library.scss"
import { Link } from 'react-router-dom'


function Library() {
  return (
    < section className='library-container'>
      <div className='library-container-btn'>
        <Link to="/menuLibrary">
          <button className='library-btn-edit'>Edit</button>
        </Link>

      </div>
      <h4 className='library-main-title'>Library</h4>

      <article className='library-list'>
        <Link to="/playList" >
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <BsMusicNoteList className='library-icon' />
              <span>Playlist</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>

        <Link to="/artists">
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <PiMicrophoneStageFill className='library-icon' alt='micro' />
              <span>Artist</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>

        <Link to="/songs">
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <IoMdMusicalNote className='library-icon' />
              <span>Songs</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>

        <Link to="/downloaded">
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <img src={scroll} alt='Scroll' />
              <span>Downloaded</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>


      </article>
      <article className='library-album'>
        <h4>Recently Added</h4>
        <div className='library-album-container'>
          <img src={concertImg} alt='imageconcert' />
          <span>UnKnown Album</span>
        </div>
      </article>
    </section >
  )
}


export { Library };