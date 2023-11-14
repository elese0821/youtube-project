import React from 'react'
import { MusicianText } from '../../data/Musician'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Musician = () => {
    return (

        <section id='Musician'>
            <h2>🐱‍🐉 인기 음악가</h2>

            <Swiper
                spaceBetween={20}
                className="mySwiper"
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    400: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    960: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 6,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 7,
                        spaceBetween: 20,
                    },
                }}
            >
                <div className='Musician__inner'>
                    {MusicianText.map((musi, key) => {
                        return (
                            <SwiperSlide className="Musician" key={key}>
                                <div className='Musician__img'>
                                    <Link to={`./channel/${musi.channelId}`}>
                                        <img src={musi.img} alt="" />
                                    </Link>
                                </div>
                                <div className='Musician__info'>{musi.author}</div>
                            </SwiperSlide>
                        )
                    })}
                </div>
            </Swiper>
        </section >
    )
}

export default Musician