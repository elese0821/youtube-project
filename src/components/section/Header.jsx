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
        <header id='header' role='banner'>
            <Logo onClick={toggleShowMenu} />
            <Menu show={showMenu} />
            <Sns />
        </header>
    )
}

export default Header