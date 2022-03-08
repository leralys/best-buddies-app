import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import actions from './redux/actions/index';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Footer from './components/footer/Footer';
import Form from './pages/loginRegister/LoginRegister';
import MapPage from './pages/map/mapPage';
import NotFound from './pages/notFound/NotFound';
import UserPage from './pages/userPage/UserPage';
import { Auth } from './auth/Auth';
import { CircularProgress } from '@mui/material';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-toastify/dist/ReactToastify.css';
import './styles.scss';

const Home = lazy(() => import('./pages/home/Home'));
const ParkPage = lazy(() => import('./pages/parkPage/ParkPage'));


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchLocations());
  }, [dispatch]);
  return (
    <div className='App'>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Suspense fallback={
        <div style={{ height: '100vh', width: '100vw', padding: '30px 0 0 30px' }}>
          <CircularProgress color="success" />
        </div>}>
        <Routes>
          <Route path='/' element={<Home title={'Home'} />} />
          <Route path='/map' element={<MapPage />} />
          <Route path='/login' element={<Form title={'Sign In'} />} />
          <Route path='/register' element={<Form title={'Register'} />} />
          <Route path='/mypage' element={<Auth><UserPage /></Auth>} />
          <Route path='/locations/:locationId' element={<ParkPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
