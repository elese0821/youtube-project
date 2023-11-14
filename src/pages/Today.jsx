import React from 'react'
import { todayText } from '../data/today'

const Today = () => {
    return (
        <section id='todayPage'>
            <h2>오늘의 추천 LIST</h2>
            {todayText.map((today, key) => {
                return (
                    <div className="today__inner" key={key}>
                        <div className="today__thumb"></div>
                        <div className="today__text">
                            <span className='today'>오늘의 픽!</span>
                            <h3 className='title'>{today.title}</h3>
                            <p className='desc'>
                                {today.desc}
                            </p>
                            <div className='info'>
                                <span className='author'>{today.author}</span>
                                <span className='date'>{today.date}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Today