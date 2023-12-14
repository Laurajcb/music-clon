import React from "react";
import { NewPlayList } from "../NewPlayList/NewPlayList";
import { MainMenu } from "../MainMenu/MainMenu";


function NewPlayListLayout() {
  return (
    <>
    <NewPlayList/>
    <MainMenu />
    </>
  )
}

export { NewPlayListLayout }