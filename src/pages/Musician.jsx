import React from 'react'
import { MusicianText } from '../data/Musician'
import { Link } from 'react-router-dom'

const Musician = () => {
    return (
        <section id='musicianPage'>
            <h2>🐱‍🐉 인기 음악가</h2>
            <div className='Musician__inner'>

                {MusicianText.map((musi, key) => {
                    return (
                        <div className="Musician" key={key}>
                            <div className='Musician__img'>
                                <Link to={`./channel/${musi.channelId}`}>
                                    <img src={musi.img} alt="" />
                                </Link>
                            </div>
                            <div className='Musician__info'>{musi.author}</div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Musician