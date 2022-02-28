import { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from './redux/actions/index';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import Home from './pages/Home';
// import ParkPage from './pages/ParkPage';
import UserPage from './pages/UserPage';
import Form from './pages/LoginRegister';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import { Auth } from './auth/Auth';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home'));
const ParkPage = lazy(() => import('./pages/ParkPage'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home title={'Home'} />} />
          <Route path='/login' element={<Form title={'Sign In'} />} />
          <Route path='/register' element={<Form title={'Register'} />} />
          <Route path='/mypage' element={<Auth><UserPage /></Auth>} />
          {/* <Route path='/mypage' element={<UserPage />} /> */}
          <Route path='/locations/:locationId' element={<ParkPage />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
