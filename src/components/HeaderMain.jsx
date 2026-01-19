import './HeaderMain.css';
import { HeaderLogo } from './HeaderLogo';
import { HeaderList } from './HeaderList';

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
