import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.css';

export default function AppNav() {
  return (
    <nav className={styles.nav}>
        <ul>
            <li>
                <NavLink to="cities">List of Cities</NavLink>
            </li>
            <li>
                <NavLink to="countries">List of Countries</NavLink>
            </li>
        </ul>
    </nav>
  )
}
