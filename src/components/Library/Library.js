import React from 'react'
import { BsMusicNoteList } from 'react-icons/bs'
import { FiChevronRight } from 'react-icons/fi'
import { IoMdMusicalNote } from 'react-icons/io'
import { PiMicrophoneStageFill } from 'react-icons/pi'
import { Link } from 'react-router-dom'
import scroll from '../../assets/img/ScrollDown.png'
import concertImg from '../../assets/img/concert.jpg'
import "../Library/Library.scss"


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
        <Link to="/playList"  className='link'>
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <BsMusicNoteList className='library-icon' />
              <span>Playlist</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>

        <Link to="/artists" className='link'>
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <PiMicrophoneStageFill className='library-icon' alt='micro' />
              <span>Artist</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>

        <Link to="/songs" className='link'>
          <section className='library-options'>
            <div className='library-optios-iconLabel'>
              <IoMdMusicalNote className='library-icon' />
              <span>Songs</span>
            </div>
            <FiChevronRight />
          </section>
        </Link>

        <Link to="/downloaded" className='link'>
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


export { Library }
