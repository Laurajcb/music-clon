import { React, useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { BiSolidMusic } from 'react-icons/bi';
import { BsFillArrowDownCircleFill, BsFillPlayFill, BsMusicNote, BsShuffle, BsThreeDots } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from "react-router-dom";
import ListImg from "../../assets/icons/List.png";


import { AiFillMinusCircle, AiTwotoneDislike } from 'react-icons/ai';
import { BiSolidTrashAlt } from 'react-icons/bi';
import { BsFastForwardBtnFill, BsFillHeartFill, BsMusicNoteList } from 'react-icons/bs';
import { HiShare } from 'react-icons/hi';
import { HiMiniMusicalNote } from 'react-icons/hi2';



import './UntitledPlaylist.scss';



function UntitledPlaylist() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const handleMenuItemClick = () => {
    setIsMenuVisible(false);
  };


  return (
    <section className="UntitledPlaylist" onClick={() => {
      if (isMenuVisible) {
        handleMenuItemClick();
      }
    }}>
      <section className="UntitledPlaylist-header">
        <Link to="/" className="UntitlePlaylist-back">
          <IoIosArrowBack className="UntitlePlaylist-back-icon" />
        </Link>
        <div className="UntitlePlaylist-back-dots-container">
          <BsThreeDots className="UntitlePlaylist-back-dots" />
        </div>
      </section>
      <div className="UntitledPlaylist-coverPl-container">
        <div className="UntitledPlaylist-coverPl">
          <img
            src={ListImg}
            className="UntitledPlaylist-coverPl-menu"
            alt="icon-music"
          />
          <AiOutlineMenu className="UntitledPlaylist-coverPl-menu" />
        </div>
        <section>
          <BsMusicNote className="UntitledPlaylist-coverPl-music-icon" />
        </section>
      </div>
      <div className="UntitledPlaylist-text">
        <h2 className="UntitledPlaylist-text1">Untitled Playlist </h2>
        <h6 className="UntitledPlaylist-text2">UPDATED YESTERDAY</h6>
      </div>

      <div className="UntitledPlaylist-bnts">
        <button><BsFillPlayFill />Play</button>
        <button><BsShuffle />Shuffle</button>
      </div>
      <section className="UntitledPlaylist-song-preview">
        <div className="UntitledPlaylist-song-border">
          <div className="UntitledPlaylist-song-icon">
            <BiSolidMusic className="UntitledPlaylist-song-note" />
          </div>
          <div className="UntitledPlaylist-song-txt">
            <h4 className="UntitledPlaylist-txt1" >Turn Up the Speaker</h4>
            <h6 className="UntitledPlaylist-txt2">Afrojack & Martin Garrix</h6>
          </div>
          <div className="UntitledPlaylist-song-icons">
            <BsFillArrowDownCircleFill className="UntitledPlaylist-song-circle" />
            <button onClick={toggleMenu} className="UntitledPlaylist-btn-dots-menu"><BsThreeDots /></button>
            {isMenuVisible && (
              <section className="UntitledPlaylis-menu-dots">
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p red">Remove from Playlist</p>
                  <AiFillMinusCircle className="UntitledPlaylis-menu-dots-icon red" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p red">Delete from Library</p>
                  <BiSolidTrashAlt className="UntitledPlaylis-menu-dots-icon red" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p">Add to Playlist.....</p>
                  <BsMusicNoteList className="UntitledPlaylis-menu-dots-icon" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p">Play Next</p>
                  <BsFastForwardBtnFill className="UntitledPlaylis-menu-dots-icon" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p">SharePlay</p>
                  <HiShare className="UntitledPlaylis-menu-dots-icon" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p">ShowAlbum</p>
                  <HiMiniMusicalNote className="UntitledPlaylis-menu-dots-icon" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p">Love</p>
                  <BsFillHeartFill className="UntitledPlaylis-menu-dots-icon" />
                </div>
                <div className="UntitledPlaylis-menu-item" onClick={handleMenuItemClick}>
                  <p className="UntitledPlaylis-menu-dots-p">Suggest Less Like This</p>
                  <AiTwotoneDislike className="UntitledPlaylis-menu-dots-icon" />
                </div>
              </section>
            )}
          </div>
        </div>
      </section>
      <p>1 song, 3 minutes</p>

    </section>
  )
}

export { UntitledPlaylist };
