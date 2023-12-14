import React from "react";
import { CreatedNewPlaylist } from '../CreatedNewPlaylist/CreatedNewPlaylist'
import { MainMenu } from "../MainMenu/MainMenu";


function CreatedPlaylistLayout() {
  return (
    <section>
      <CreatedNewPlaylist />
      <MainMenu />
    </section>
  )
}

export { CreatedPlaylistLayout }