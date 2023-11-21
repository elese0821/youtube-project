import React from 'react'

import { Link } from 'react-router-dom'
import { SiYoutubemusic } from 'react-icons/si'

const Logo = (props) => {
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em onClick={props.onClick}><SiYoutubemusic /></em>
                <span>Music<br />youtube</span>
            </Link>
        </h1>
    )
}

export default Logo