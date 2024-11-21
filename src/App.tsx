import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthPage from './pages/auth';
import Homepage from './pages/home';
import HistoryPage from './pages/history';
import TrackingPage from './pages/tracking';
import ProfilePage from './pages/profile';
import useUserStore from './store/auth-store';

const App = () => {
  const { user } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
          element={!user ? <AuthPage /> : <Navigate to="/" />}
        />

        <Route
          path="/"
          element={user ? <Homepage /> : <Navigate to="/auth" />}
        />

        <Route
          path="/history"
          element={user ? <HistoryPage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/tracking"
          element={user ? <TrackingPage /> : <Navigate to="/auth" />}
        />
        <Route
          path="/profile"
          element={user ? <ProfilePage /> : <Navigate to="/auth" />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
};

export default App;
