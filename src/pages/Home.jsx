import React from 'react'

import Today from '../components/contents/Today'
import Musician from '../components/contents/Musician'
import Main from '../components/section/Main'

const Home = () => {
    return (
        <Main
            title="음악 유튜버"
            description="음악유튜브 모음 사이트에 오신것을 환영합니다."
        >
            <Today />
            <Musician />
        </Main>
    )
}

export default Home