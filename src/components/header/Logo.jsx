import React from 'react'

import { Link } from 'react-router-dom'
import { SiYoutubemusic } from 'react-icons/si'

const Logo = () => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em><SiYoutubemusic /></em>
                <span>Music<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo