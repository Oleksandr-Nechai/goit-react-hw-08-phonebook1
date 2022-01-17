import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { authSelectors } from '../redux/auth';

export default function PrivateRoute({ children, navigateTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}
