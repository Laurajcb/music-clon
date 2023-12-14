import React from "react";

import { BsThreeDots } from 'react-icons/bs'

import { TbPlayerTrackPrevFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { CgPlayPause } from "react-icons/cg";

import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { IoVolumeMedium } from "react-icons/io5";
import { IoVolumeLowSharp } from "react-icons/io5";

import { BsChatLeftQuoteFill } from "react-icons/bs";
import { SiAirplayaudio } from "react-icons/si";
import { RiListUnordered } from "react-icons/ri";

import album from '../../assets/img/album1.jpeg'
import './SongReproducer.scss'

function SongReproducer() {
  return (
    <section className="songReprod-container">
      <div className="songReprod-container-img">
        <img src={album} alt="album" className="songReprod-img" />
      </div>

      <section className="songReprod-main_section">
        <article className="songReprod-albumName">
          <h3>Album Name</h3>
          <div className="songReprod-dots-container">
            <BsThreeDots className="songReprod-dots" />
          </div>
        </article>


        <article className="songReprod-time">
          <div className="songReprod-line">
            <hr />
          </div>
          <GoDotFill className="songReprod-dot" />
          <div className="songReprod-minutes">
            <h6>03:45</h6>
            <h6>04:20</h6>
          </div>
        </article>

        <article className="songReprod-next">
          <TbPlayerTrackPrevFilled />
          <CgPlayPause className="songReprod-stop" />
          <TbPlayerTrackNextFilled />
        </article>

        <section className="songReprod-volume_bar">
          <IoVolumeLowSharp className="songReprod-volume_iconsVol" />
          <div className="songReprod-volume-line">
            <hr />
          </div>
          <IoVolumeMedium className="songReprod-volume_iconsVol" />
        </section>

        <section className="songReprod-menu">
          <div className="songReprod-icon_quotes">
            <BsChatLeftQuoteFill />
          </div>
          <SiAirplayaudio />
          <RiListUnordered />
        </section>
        
      </section>
      
    </section>
  )
}

export { SongReproducer }