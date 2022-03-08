import Nav from '../../components/nav/Nav';
import MapMain from '../../components/mapMain/MapMain';
import './mapPage.scss';

const MapPage = () => {
    return (
        <div className='map-page'>
            <Nav />
            <MapMain />
        </div>
    )
}

export default MapPage;