import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);

  return (
    <>
      <div className={styles.user__menu}>
        <p className={styles.user__menu__text}>Hello, {email} </p>
        <Button variant="primary" type="submit" onClick={() => dispatch(authOperations.logOut())}>
          Logout
        </Button>
      </div>
    </>
  );
}
