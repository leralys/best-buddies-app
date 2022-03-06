import Nav from '../../components/nav/Nav';
import MapMain from '../../components/mapMain/MapMain';
import Hero from '../../components/hero/Hero';

const Home = () => {
    return (
        <div className='home'>
            <Nav />
            <Hero />
            <MapMain />
        </div>
    )
}

export default Home;