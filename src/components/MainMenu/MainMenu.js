import React from 'react';
import { Link } from "react-router-dom";
import PlayerIcon from '../../assets/icons/PlayCircle.png'
import Radio from '../../assets/icons/Broadcast.png'
import LibraryIcon from '../../assets/icons/FileMusic.png'
import Search from '../../assets/icons/Search.png'
import './MainManu.scss'

function MainMenu() {
  return (
    <section className='MainMenu-container'>
      <Link to='/listenNowLayout' className='MainMenu-link'>
        <article className='MainMenu-article' >
          <img src={PlayerIcon} alt='player' className='MainMenu-icon' />
          <h5>Listen now</h5>
        </article>
      </Link>
      <Link className='MainMenu-link' to="/radio">
        <article className='MainMenu-article'>
          <img src={Radio} alt='player' className='MainMenu-icon' />
          <h5>Radio</h5>
        </article>
      </Link>
      <Link className='MainMenu-link' to="/">
        <article className='MainMenu-article'>
          <img src={LibraryIcon} alt='player' className='MainMenu-icon' />
          <h5>Library</h5>
        </article>
      </Link>

      <Link className='MainMenu-link' to='/search' >
        <article className='MainMenu-article'>
          <img src={Search} alt='player' className='MainMenu-icon' />
          <h5>Search</h5>
        </article>
      </Link>

    </section>
  )
}

export { MainMenu };