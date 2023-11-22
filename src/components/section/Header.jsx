import { useState } from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Sns from '../header/Sns'



const Header = () => {
    const [showMenu, setshowMenu] = useState(false);

    const toggleShowMenu = () => {
        setshowMenu(prevShowMenu => !prevShowMenu)
    }

    return (
        <header id='header' className={showMenu ? 'show' : ''} role='banner'>
            <Logo onClick={toggleShowMenu} />
            <Menu />
            <Sns />
        </header>
    )
}

export default Header