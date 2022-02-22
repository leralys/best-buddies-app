import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import actions from './redux/actions/index';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ParkPage from './components/ParkPage';
import Footer from './components/Footer';
import Form from './components/LoginRegister';
import UserPage from './components/UserPage';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchLocations());
  }, [dispatch]);
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:locationId' element={<ParkPage />} />
        <Route path='/login' element={<Form title={'Sign In'} />} />
        <Route path='/register' element={<Form title={'Register'} />} />
        <Route path='/users/:userId' element={<UserPage title={'Username'} />} />
        <Route
          path='*' element={<main style={{ padding: '1rem' }}>
            <p>Oops, there is nothing here... <span> 👀</span></p>
          </main>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
