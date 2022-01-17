import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <div className={styles.userMenu}>
        <p className={styles.userMenuText}>Hello, {email} </p>
        <button
          className={styles.userButton}
          type="submit"
          onClick={() => dispatch(authOperations.logOut())}
        >
          Logout
        </button>
      </div>
    </>
  );
}
