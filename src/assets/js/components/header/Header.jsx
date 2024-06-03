import "./header.sass"
import logoSportSee from '/logo.svg'

function Header() {

    return <>
        <header>
                <img src={logoSportSee} className="header__logo" alt="Sport See logo" />
                <h1 className="header__title">SportSee </h1>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item" key="link1"> Accueil</li>
                        <li className="header__nav-item" key="link2">Profil</li>
                        <li className="header__nav-item" key="link3">Réglage</li>
                        <li className="header__nav-item" key="link4">Communauté</li>
                    </ul>
                </nav>
        </header>
    </>
}

export default Header