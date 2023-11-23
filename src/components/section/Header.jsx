import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'


// import { atom } from 'recoil';

// // export const showState = atom({
// //     key: 'showState',
// //     default: false, // 초기값을 false로 설정
// // });


const Header = () => {

    return (
        <header id='header' role='banner'>
            <Logo />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header