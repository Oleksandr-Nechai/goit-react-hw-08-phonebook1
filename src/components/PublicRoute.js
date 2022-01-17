import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { authSelectors } from '../redux/auth';

export default function PublicRoute({ children, navigateTo = '/', restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldNavigate = isLoggedIn && restricted;
  return shouldNavigate ? <Navigate to={navigateTo} /> : children;
}
