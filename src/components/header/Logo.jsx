import React from 'react'
import { Link } from 'react-router-dom'
import { SiYoutubemusic } from 'react-icons/si'
import { useSetRecoilState } from 'recoil';
import { togglemenuState } from '../../App';

const Logo = (props) => {
    const setToggleMenu = useSetRecoilState(togglemenuState);  // setToggleMenu 함수를 가져옵니다.

    const handleClick = () => {
        setToggleMenu(prevState => !prevState);  // toggleMenu 상태를 변경합니다.
    }
    return (
        <h1 className='header__logo'>
            <Link to='/'>
                <em onClick={props.onClick}><SiYoutubemusic /></em>
                <span>Music<br />youtube</span>
            </Link>
            <div class="close close2" onClick={handleClick}></div>
        </h1>
    )
}

export default Logo