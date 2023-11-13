import React from 'react'

const Home = () => {
    return (
        <section id='today'>
            <div className="today__inner">
                <div className="today__thumb"></div>
                <div className="today__text"></div>
                <span className='title'>오늘의 픽!</span>
                <h3>2 시간 지브리 음악 📗 BGM 편안한 지브리 재생 목록 올 타임</h3>
                <p className='desc'>
                    안녕하세요! 여러분, 오늘은 특별한 여행 유튜버 조튜브를 소개합니다.
                </p>
                <div className='info'>
                    <span className='author'>jou튜브</span>
                    <span className='date'>2023.11.04</span>
                </div>
            </div>
        </section>
    )
}

export default Home