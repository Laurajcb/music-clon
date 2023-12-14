import React from "react";
import { ArtisName } from '../ArtisName/ArtisName';
import { MainMenu } from "../MainMenu/MainMenu";

function ArtisNameLayout() {
  return (
    <>
      <ArtisName/>
      <MainMenu />
    </>
  )
}

export { ArtisNameLayout }