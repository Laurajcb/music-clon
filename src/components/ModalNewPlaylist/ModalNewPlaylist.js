import React from "react";
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsMusicNoteList } from 'react-icons/bs';
import { Link } from "react-router-dom";
import camera from '../../assets/icons/CameraFill.png';
import './ModalNewPlaylist.scss';

function ModalNewPlaylist() {
  return (
    <section className="ModalNewPlaylist-container">
      <div className="ModalNewPlaylist-content">
        <div className="ModalNewPlaylist-header">
          <Link to='/PlayList' className="ModalNewPlaylist-header-span">
            Cancel
          </Link>
          <h5>New Playlist</h5>
          <Link to='/createdPlaylist' className="ModalNewPlaylist-header-span">Done</Link>
        </div>
        <section className="ModalNewPlaylist-imagen">
          <div className="ModalNewPlaylist-icon-container">
            <BsMusicNoteList className="ModalNewPlaylist-icon" />
          </div>
          <div className="ModalNewPlaylist-camera">
            <img src={camera} alt="camera" />
          </div>
        </section>
        <section className="ModalNewPlaylist-description">
          <h5>Playlist name</h5>
          <input className="name-playlist-input" type="text"></input>
          <p className="ModalNewPlaylist-description-p">Description</p>
          <input className="name-playlist-input" type="text"></input>
          <div className="ModalNewPlaylist-description-add">
            <AiFillPlusCircle className="ModalNewPlaylist-description-icon" />
            <p>Add Music</p>
          </div>
        </section>
      </div>
    </section>
  )
}

export { ModalNewPlaylist };
