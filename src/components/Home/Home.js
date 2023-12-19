import React from "react";
import { Library } from '../Library/Library';
import { MainMenu } from '../MainMenu/MainMenu';
import { PlayerViewBar } from '../PlayerViewBar/PlayerViewBar';

function Home() {
  return (
    <>
      <Library />
      <PlayerViewBar />
      <MainMenu />
    </>
  )
}

export { Home };
