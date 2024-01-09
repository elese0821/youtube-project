import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main'
import { atom } from 'recoil';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Musician = lazy(() => import('./pages/Musician'));
const Channel = lazy(() => import('./pages/Channel'));
const Search = lazy(() => import('./pages/Search'));
const Video = lazy(() => import('./pages/Video'));

export const togglemenuState = atom({
  key: 'toggle',
  default: false,
});

const App = () => {


  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/Musician' element={<Musician />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/search/:searchId' element={<Search />} />
          <Route path='/video/:videoId' element={<Video />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
