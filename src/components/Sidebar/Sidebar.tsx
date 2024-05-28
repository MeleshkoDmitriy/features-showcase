import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  return (
    <nav className={styles.wrapper}>
      <h1>Features:</h1>
      <ul className={styles.list}>
        {Object.entries(ROUTES).map(([key, value]) => {
          return (
            <li key={key}>
              <Link to={value}><button>{key}</button></Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
