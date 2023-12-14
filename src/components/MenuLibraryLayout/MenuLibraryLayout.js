import React from "react";
import {MenuLibrary} from '../MenuLibrary/MenuLibrary'
import {PlayerViewBar} from '../PlayerViewBar/PlayerViewBar'
import {MainMenu} from '../MainMenu/MainMenu'


function MenuLibraryLayout() {
  return (
    <>
      <MenuLibrary />
      <PlayerViewBar />
      <MainMenu />
    </>
  )
}


export { MenuLibraryLayout }