import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Main from './components/section/Main'

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Musician = lazy(() => import('./pages/Musician'));
const Channel = lazy(() => import('./pages/Channel'));
const Search = lazy(() => import('./pages/Search'));
const Video = lazy(() => import('./pages/Video'));


// import Header from './components/section/Header'
// import Footer from './components/section/Footer'
// import Today from './pages/Today'
// import Musician from './pages/Musician'
// import Channel from './pages/Channel'
// import Search from './pages/Search'
// import Video from './pages/Video'

const App = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
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
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App