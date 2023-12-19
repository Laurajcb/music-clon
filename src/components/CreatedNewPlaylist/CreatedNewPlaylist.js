import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import { BsMusicNoteList } from 'react-icons/bs';
import { FaMicrophone } from 'react-icons/fa';
import { FiChevronRight } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

import './CreatedNewPlaylist.scss';

function CreatedNewPlaylist() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }
  return (
    <section className="CreatedNewPlaylist-container">
      <div className="CreatedNewPlaylist-header">
        <div className="CreatedNewPlaylist-header-btn">
          <button onClick={goBack} className='CreatedNewPlaylist-btn-back'>
            <IoIosArrowBack className="CreatedNewPlaylist-icon" />
          </button>
          <h6 className="CreatedNewPlaylist-title">Library</h6>
        </div>
        <span className="CreatedNewPlaylist-span">Sort</span>
      </div>
      <section className="CreatedNewPlaylist-content">
        <h2>Playlists</h2>
        <div className="CreatedNewPlaylist-search-bar">
          <AiOutlineSearch />
          <label for="search" className="CreatedNewPlaylist-label">Find in Playlists</label>
          <input type="text" id="search" name="search" className="CreatedNewPlaylist-input">
          </input>
          <FaMicrophone />
        </div>
        <section className="CreatedNewPlaylist-album">
          <div className="CreatedNewPlaylist-album-content">
            <div className="CreatedNewPlaylist-img"></div>
            <p className="CreatedNewPlaylist-p">New Playlist....</p>
          </div>
        </section>
        <section className="CreatedNewPlaylist-album-with-icon">
            <div className="CreatedNewPlaylist-img">
              <BsMusicNoteList className="CreatedNewPlaylist-icon" />
            </div>
          <Link className="CreatedNewPlaylist-arrow" to="/untitledPlaylist">
            <p className="CreatedNewPlaylist-p">Untitled Playlist </p>
            <FiChevronRight className="CreatedNewPlaylist-arrow-right"/>
          </Link>
        </section>
      </section>
    </section>
  )
}

export { CreatedNewPlaylist };
