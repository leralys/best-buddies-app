import MapMain from '../components/MapMain';
import Search from '../components/Search';
import Hero from '../components/Hero';
import ContentWrapper from '../components/ContentWrapper';
import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />
            <ContentWrapper>
                <Search id='Home-search' />
                <MapMain />
                <br />
                <br />
                <br />
            </ContentWrapper>
        </>
    )
}

export default Home;