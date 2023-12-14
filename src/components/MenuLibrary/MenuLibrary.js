import React, { useState } from "react";


import { Link } from 'react-router-dom'

import { MdQueueMusic } from "react-icons/md";
import { PiMicrophoneStageFill } from 'react-icons/pi'
import { IoAlbums } from "react-icons/io5";
import { LiaTvSolid } from "react-icons/lia";
import { IoMdMusicalNote } from 'react-icons/io'
import { SlScreenDesktop } from "react-icons/sl";
import { IoHomeSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

import './MenuLibrary.scss'


function MenuLibrary() {

  const [isClicked, SetIsClicked] = useState(false)

  const handleClick = () => {
    SetIsClicked((prevValue) => !prevValue)
  }

  return (
    <section className="menuLibrary-container">
      <Link className="menuLibrary-done_btn" to="/">
        <h4>Done</h4>
      </Link>

      <h1>Library</h1>

      <section className="menuLibrary-options">
        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item"
            onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            < MdQueueMusic className="icon" />
            <p>Playlists</p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            <PiMicrophoneStageFill className="icon" />
            <p>Artists</p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            <IoAlbums className="icon" />
            <p>Albums</p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            < MdQueueMusic className="icon" />
            <p>Songs</p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>


        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            <LiaTvSolid className="icon" />
            <p> Tv &Movies</p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            <SlScreenDesktop className="icon" />
            <p>Music</p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            <IoHomeSharp className="icon" />
            <p>Home </p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

        <section className="menuLibrary-container-menu">
          <div className="menuLibrary-item" onClick={handleClick}>
            {isClicked ? <FaCheckCircle className="menuLibrary-circleCheck" /> : <FaRegCircle className="menuLibrary-circle" />}
            < IoMdMusicalNote className="icon" />
            <p>Composers </p>
          </div>
          <RxHamburgerMenu className="menuLibrary-icon" />
        </section>

      </section>
    </section>
  )
}

export { MenuLibrary }