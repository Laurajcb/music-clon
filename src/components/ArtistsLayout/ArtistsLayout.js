import React from "react";
import { Artists } from "../Artists/Artists";
import { MainMenu } from "../MainMenu/MainMenu";

function ArtistsLayout() {
  return (
    <section>
      <Artists />
      <MainMenu />
    </section>
  )
}

export { ArtistsLayout }