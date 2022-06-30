import { useRef } from 'react'
import { NavLink } from 'react-router-dom'

import module from './style.module.scss'
import Logo from '../../images/logo.jpg'

function Nav() {
    const burgerRef = useRef("")

    const burgerOpen = (top) => {
        burgerRef.current.classList.toggle(module["nav_active"])

        if (top) {
            window.scrollTo(0, 0)
        }
    }

    return (
        <nav ref={burgerRef}>
            <div className={module.nav__column}>
                <img src={Logo} alt="Здесь лого" className={module["nav-logo"]} />
            </div>

            <button className={module["nav-burger"]} onClick={() => burgerOpen(false)}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className={module.nav__column}>
                <NavLink to="/bins" className={({isActive}) => isActive ? module["active-link"] : ""} onClick={() => burgerOpen(true)}>Урны</NavLink>
                <NavLink to="/conditioners" className={({isActive}) => isActive ? module["active-link"] : ""} onClick={() => burgerOpen(true)}>Кондиционеры</NavLink>
            </div>
        </nav>
    );
}

export default Nav;