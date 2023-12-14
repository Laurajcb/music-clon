import React from "react";
import { BsMusicNoteBeamed } from 'react-icons/bs'
import { CgPlayForwards } from 'react-icons/cg'
import { CgPlayButton } from 'react-icons/cg'
import './PlayerViewBar.scss'

function PlayerViewBar() {
  return (
    <section className="PlayerViewBar-container">
      <BsMusicNoteBeamed className="icon-note"/>
      <p>
        Ed Sheeran-Thinking...
      </p>
      <div className="PlayerViewBar-icons">
        <CgPlayButton className="icon"/>
        <CgPlayForwards className="icon"/>
      </div>

    </section>
  )
}

export { PlayerViewBar };