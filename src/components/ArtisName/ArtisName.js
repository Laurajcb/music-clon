import { React, useState } from "react";
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from "react-router-dom";
import { BsFillPlayFill } from 'react-icons/bs'
import { BsShuffle } from 'react-icons/bs'
import { AiOutlineCheck } from 'react-icons/ai'
import album from '../../assets/img/album2.jpeg'

import './ArtisName.scss'

function ArtisName() {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const toggleMenu = () => {
		setIsMenuVisible(!isMenuVisible);
	};

	return (
		<section className={`Artis-container ${isMenuVisible ? 'background-blur' : ''}`}>
			<section className="Artis-header">
				<div className="Artis-header-right">
					<Link className="Artis-link" to="/">
						<IoIosArrowBack className="Artis-link-back" />
					</Link>
					<span>
						Artists
					</span>
				</div>
				<span className="Artis-sort" onClick={toggleMenu}>
					sort
				</span>
				{
					isMenuVisible && (
						<ul className="artis-menu-ul">
							<li className="artis-menu-item "><AiOutlineCheck className="artis-menu-item-icon" /> Title</li>
							<li className="artis-menu-item item">Recently Added</li>
							<li className="artis-menu-item item">Newest First</li>
							<li className="artis-menu-item item">Oldest First</li>
						</ul>

					)
				}
			</section>
			<h1>
				Artists Name
			</h1>
			<div className="Artis-bnts">
				<button><BsFillPlayFill />Play</button>
				<button><BsShuffle />Shuffle</button>
			</div>

			<section className="artis-img">
				<img src={album} alt="img" className="imagen" />
				<p>Unknown Album</p>
			</section>

		</section>
	)
}


export { ArtisName }