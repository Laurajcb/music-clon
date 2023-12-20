import React from "react";
import { NewPlayList } from "../NewPlayList/NewPlayList";
import { MainMenu } from "../MainMenu/MainMenu";


function NewPlayListLayout() {
  return (
    <section className="NewPlayListLayout-container">
    <NewPlayList/>
    <MainMenu />
    </section>
  )
}

export { NewPlayListLayout }