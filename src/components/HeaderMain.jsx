import './HeaderMain.css';
import dcLogo from '../../public/img/dc-logo.png';

export function HeaderMain() {
    return (
        <header className="header-main">
            <nav className="nav-header-main">
                <div className="div-logo-header-main">
                    <a href=""><img src={dcLogo} alt="" /></a>
                </div>
                <ul className="ul-header-main">
                    <li><a href="#">Characters</a></li>
                    <li><a href="#">Comics</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">Tv</a></li>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Shop</a></li>
                </ul>
            </nav>
        </header>
    )
}