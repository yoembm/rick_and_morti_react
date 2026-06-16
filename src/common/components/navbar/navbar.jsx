

import { Link } from 'react-router';
import style from './navbar.module.css';

export function Navbar() {

    return (
        <div>
            <nav className={style.container}>
                <Link to="/">All Characters</Link>
                <Link to="/locations">Character Search</Link>
            </nav>
        </div>
    );

}