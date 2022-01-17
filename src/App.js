import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import { ProgressBar } from 'react-bootstrap';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './pages/HomePage';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import styles from './App.css';
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
  const dispatch = useDispatch();
  const isRefreshingPage = useSelector(authSelectors.getIsRefreshingPage);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div className={styles.body}>
      <Container>
        <AppBar />

        {!isRefreshingPage ? (
          <Suspense
            fallback={
              <div className={styles.body}>
                <ProgressBar striped variant="warning" now={60} />
              </div>
            }
          >
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute navigateTo="/contacts">
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="/register"
                element={
                  <PublicRoute navigateTo="/contacts" restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute navigateTo="/contacts" restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute navigateTo="/login">
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contacts/addNewContact"
                element={
                  <PrivateRoute navigateTo="/login">
                    <ContactForm />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        ) : (
          <b>Loading...</b>
        )}
      </Container>
    </div>
  );
}

export default App;
