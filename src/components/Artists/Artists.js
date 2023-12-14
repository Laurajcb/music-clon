import React from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { FaMicrophone } from 'react-icons/fa'
import artistsCover1 from '../../assets/img/aGrande.png'
import artistsCover2 from '../../assets/img/duaLipa.png'
import artistsCover3 from '../../assets/img/karolG.png'


import './Artists.scss'

function Artists() {
  return (
    <section className="Artists-container">
      <section className="Artists-header">
        <Link className="Artists-link" to="/">
          <IoIosArrowBack className="Artists-link-back" />
        </Link>
        <span>
          Library
        </span>
      </section>
      <h2 className="Artists-title">Artists</h2>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <img src={artistsCover1} alt="artists" />
          </article>
          <p className="Artist-name">Ariana Grande</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <img src={artistsCover2} alt="artists" />
          </article>
          <p className="Artist-name">Dua Lipa</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <img src={artistsCover3} alt="artists" />
          </article>
          <p className="Artist-name">karol G</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <img src={artistsCover2} alt="artists" />
          </article>
          <p className="Artist-name">Dua Lipa</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
      <Link className="Artists-link-to-artists" to="/artis-name">
        <section className="Artists-img-name">
          <article className="artist-img">
            <FaMicrophone alt="artists" className="artist-icon" />
          </article>
          <p className="Artist-name">Artists Name</p>
        </section>
      </Link>
    </section>
  )
}


export { Artists }