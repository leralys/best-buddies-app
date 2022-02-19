import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home';
import Nav from './components/Nav';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} title={'Home'} />
        <Route
          path='*' element={<main style={{ padding: '1rem' }}>
            <p>Oops, there is nothing here... <span> 👀</span></p>
          </main>} />
      </Routes>
    </div>
  )
}

export default App;
