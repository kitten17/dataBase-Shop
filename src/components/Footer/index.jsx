import { Link } from 'react-router-dom'

import module from './style.module.scss'
import Logo from '../../images/logo.jpg'

function Footer() {

    return (
        <footer>
            <div className={module.footer__column}>
                <img src={Logo} alt="logo" className={module.logo} />
            </div>
            <div className={module.footer__column}>
                <h3>Урны, корзины для кондиционеров</h3>

                <div>
                    <a href="">Урны</a>
                    <a href="">Кондиционеры</a>
                </div>
            </div>

            <div className={module.footer__column}>
                <div>
                    <a href="tel:+79869920503">+7 986 992 0503</a>
                    <a>email@mail.ru</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;