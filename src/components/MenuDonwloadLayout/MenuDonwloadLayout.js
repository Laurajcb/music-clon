import React from "react";
import { MenuDownload } from '../MenuDownload/MenuDownload'
import { PlayerViewBar } from '../PlayerViewBar/PlayerViewBar'
import { MainMenu } from '../MainMenu/MainMenu'


function MenuDownloadLayout() {
  return (
    <>
      <MenuDownload />
      <PlayerViewBar />
      <MainMenu />
    </>
  )
}


export { MenuDownloadLayout }