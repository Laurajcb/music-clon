import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home'

import './Styles/main.scss'
import { ListenNowLayout } from './components/ListenNowLayout/ListenNowLayout';
import { NewPlayListLayout } from './components/NewPlayListLayout/NewPlayListLayout'
import { ModalNewPlaylist } from './components/ModalNewPlaylist/ModalNewPlaylist'
import { CreatedPlaylistLayout } from './components/CreatedPlaylistLayout/CreatedPlaylistLayout'
import { UntitledPlaylistLayout } from './components/UntitledPlaylistLayout/UntitledPlaylistLayout';
import { ArtistsLayout } from './components/ArtistsLayout/ArtistsLayout';
import { ArtisNameLayout } from './components/ArtisNameLayout/ArtisNameLayout'
import { SearchLayout } from './components/SearchLayout/SearchLayout'
import { SongsLayout } from './components/SongsLayout/SongsLayout';
import { SongReproducer } from './components/SongReproducer/SongReproducer';
import { DownloadLayout } from './components/DownloadLayout/DownloadLayout'
import { MenuLibraryLayout } from './components/MenuLibraryLayout/MenuLibraryLayout';
import { MenuDownloadLayout } from './components/MenuDonwloadLayout/MenuDonwloadLayout';
import { RadioLayout } from "./components/RadioLayout/RadioLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="listenNowLayout" element={<ListenNowLayout />} />
        <Route path='/playList' element={<NewPlayListLayout />} />
        <Route path='/modalNewPlaylist' element={<ModalNewPlaylist />} />
        <Route path='/createdPlaylist' element={<CreatedPlaylistLayout />} />
        <Route path='/untitledPlaylist' element={<UntitledPlaylistLayout />} />
        <Route path='/artists' element={<ArtistsLayout />} />
        <Route path='/artis-name' element={<ArtisNameLayout />} />
        <Route path='/search' element={<SearchLayout />} />
        <Route path='/songs' element={<SongsLayout />} />
        <Route path='/songReproducer' element={<SongReproducer />} />
        <Route path='/downloaded' element={<DownloadLayout />} />
        <Route path='/menuLibrary' element={<MenuLibraryLayout />} />
        <Route path='/menuDownload' element={<MenuDownloadLayout />} />
        <Route path='/radio' element={<RadioLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
