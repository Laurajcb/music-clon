import React from 'react';
import { Link, useLocation } from "react-router-dom";

import { IoRadio, IoSearch } from "react-icons/io5";
import { MdLibraryMusic, MdOutlinePlayCircle } from "react-icons/md";

import './MainManu.scss';


function MainMenu() {

  const location = useLocation();
  const getIconColor = (path) => {
    return location.pathname === path ? 'icon-selected' : 'icon-default';
  };

  return (
    <section className='MainMenu-container'>
      <Link to='/listenNowLayout' className='MainMenu-link'>
        <article className='MainMenu-article' >
          <MdOutlinePlayCircle
            alt='player-icon'
            className={`MainMenu-icon ${getIconColor('/listenNowLayout')}`}
          />
          <h5>Listen now</h5>
        </article>
      </Link>
      <Link className='MainMenu-link' to="/radio">
        <article className='MainMenu-article'>
          <IoRadio
            alt='radio-icon'
            className={`MainMenu-icon ${getIconColor('/radio')}`}
          />
          <h5>Radio</h5>
        </article>
      </Link>
      <Link className='MainMenu-link' to="/">
        <article className='MainMenu-article'>
          <MdLibraryMusic
            alt='library-icon'
            className={`MainMenu-icon ${getIconColor('/')}`}
          />
          <h5>Library</h5>
        </article>
      </Link>

      <Link className='MainMenu-link' to='/search' >
        <article className='MainMenu-article'>
          <IoSearch
            alt='search-icon'
            className={`MainMenu-icon ${getIconColor('/search')}`}
          />
          <h5>Search</h5>
        </article>
      </Link>

    </section>
  )
}

export { MainMenu };
