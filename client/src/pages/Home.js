import Nav from '../components/Nav';
import MapMain from '../components/MapMain';
import Search from '../components/Search';
import Hero from '../components/Hero';
import ContentWrapper from '../components/ContentWrapper';

const Home = () => {
    return (
        <>
            <Nav />
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