import React from "react";
import { Downloaded } from "../Downloaded/Downloaded"
import { PlayerViewBar } from '../PlayerViewBar/PlayerViewBar'
import { MainMenu } from "../MainMenu/MainMenu"



function DownloadLayout() {
  return (
    <>
      <Downloaded />
      <PlayerViewBar />
      <MainMenu />
    </>
  )
}

export {DownloadLayout }