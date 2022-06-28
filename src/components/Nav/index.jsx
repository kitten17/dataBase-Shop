import { NavLink } from 'react-router-dom'

import module from './style.module.scss'

import Logo from '../../images/logo.jpg'
import { useRef } from 'react'

function Nav() {
    const burgerRef = useRef("")

    const burgerOpen = () => {
        burgerRef.current.classList.toggle(module["nav_active"])
    }

    return (
        <nav ref={burgerRef}>
            <div className={module.nav__column}>
                <img src={Logo} alt="Здесь лого" className={module["nav-logo"]} />
            </div>

            <button className={module["nav-burger"]} onClick={burgerOpen}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className={module.nav__column}>
                <NavLink to="/">Урны</NavLink>
                <NavLink to="/">Кондиционеры</NavLink>
            </div>
        </nav>
    );
}

export default Nav;