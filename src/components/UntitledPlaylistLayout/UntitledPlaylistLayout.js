import React from "react";

import {UntitledPlaylist} from '../UntitledPlaylist/UntitledPlaylist'
import {MainMenu} from '../MainMenu/MainMenu'


function UntitledPlaylistLayout() {
  return (
    <section>
      <UntitledPlaylist />
      <MainMenu />
    </section>
  )
}

export { UntitledPlaylistLayout }