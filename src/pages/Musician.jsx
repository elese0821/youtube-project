import React from 'react'
import { MusicianText } from '../data/Musician'
import { Link } from 'react-router-dom'
import Main from '../components/section/Main'

const Musician = () => {
    return (
        <section id='musicianPage'>
            <h2>🐱‍🐉 인기 음악가</h2>
            <div className='Musician__inner'>

                {MusicianText.map((musi, key) => {
                    return (
                        <Main
                            title="가수"
                            description="음악 채널 페이지입니다"
                        >
                            <div className="Musician" key={key}>
                                <div className='Musician__img'>
                                    <Link to={`./channel/${musi.channelId}`}>
                                        <img src={musi.img} alt="" />
                                    </Link>
                                </div>
                                <div className='Musician__info'>{musi.author}</div>
                            </div>
                        </Main>
                    )
                })}
            </div>

        </section>
    )
}

export default Musician