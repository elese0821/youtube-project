import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'

import { togglemenuState } from '../../App';
import { useRecoilValue } from 'recoil';
// import { atom } from 'recoil';

// // export const showState = atom({
// //     key: 'showState',
// //     default: false, // 초기값을 false로 설정
// // });


const Header = () => {
    const toggleMenu = useRecoilValue(togglemenuState);

    return (
        <header id='header' role='banner' className={toggleMenu ? 'show' : ''}>
            <Logo />
            <Menu />
            <Sns />
        </header>


    )
}

export default Header