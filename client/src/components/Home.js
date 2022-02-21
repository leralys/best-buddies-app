import MapMain from './MapMain';
import Search from './Search';
import Hero from './Hero';
import ContentWrapper from './ContentWrapper';

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