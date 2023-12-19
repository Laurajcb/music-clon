import React from "react";
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from "react-router-dom";
import './NewPlayList.scss';


function NewPlayList() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate('/');
  }

  return (
    <section className="NewPlayList-container">
      <div className="NewPlayList-header">
        <div className="NewPlayList-header-btn">
          <button onClick={goBack} className='NewPlayList-btn-back'>
            <IoIosArrowBack className="NewPlayList-icon" />
          </button>
          <h6 className="NewPlayList-title">Library</h6>
        </div>
        <span className="NewPlayList-span">Sort</span>
      </div>
      <h2 className="NewPlayList-main-title">Playlists</h2>
      <section className="NewPlayList-create-playlist">
        <h5>Looking for your playlists?</h5>
        <p>Playlists you create will apper here.</p>
        <Link to="/modalNewPlaylist" className="NewPlayList-link">
          <button>New Playlist</button>
        </Link>

      </section>
    </section>
  )
}

export { NewPlayList };
