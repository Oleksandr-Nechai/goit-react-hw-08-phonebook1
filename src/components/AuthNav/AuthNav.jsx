import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/login"
        className={({ isActive }) => `${styles.link} ${isActive ? styles.activ : ''}`}
      >
        Log In
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => `${styles.link} ${isActive ? styles.activ : ''}`}
      >
        Sign Up
      </NavLink>
    </div>
  );
};
export default AuthNav;
