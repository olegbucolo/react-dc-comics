import './HeaderMain.css';
import { HeaderLogo } from './header/HeaderLogo';
import { HeaderList } from './header/HeaderList';

export function HeaderMain() {
    return (
        <header className="header-main">
            <nav className="nav-header-main">
                <HeaderLogo />
                <HeaderList />
            </nav>
        </header>
    )
}
