import Map, { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import useSupercluster from 'use-supercluster';
import PetsIcon from '@mui/icons-material/Pets';
import './Map.css';

const MapComponent = () => {
    const [viewState, setViewState] = useState({
        latitude: 32.07851910922377,
        longitude: 34.78072420871621,
        zoom: 13
    });
    const locations = useSelector(state => state.locations.locations);
    const mapRef = useRef();
    let points = [];
    const bounds = mapRef.current
        ? mapRef.current.getMap().getBounds().toArray().flat()
        : null;
    if (locations) {
        points = locations.map(adr => ({
            type: 'Feature',
            properties: {
                cluster: false,
                pointId: adr.location_id,
            },
            geometry: {
                type: "Point",
                coordinates: [
                    adr.lng,
                    adr.lat
                ]
            }
        }));
    }
    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom: viewState.zoom,
        options: { radius: 50, maxZoom: 20 }
    });

    return (
        <div className='Map-container'>
            <Map
                reuseMaps
                {...viewState}
                onMove={evt => setViewState(evt.viewState)}
                mapStyle='mapbox://styles/mapbox/streets-v9'
                mapboxAccessToken={process.env.REACT_APP_MAPBOX}
                minZoom={2}
                maxZoom={20}
                ref={mapRef}
            >
                <NavigationControl />
                <GeolocateControl />

                {locations && clusters.length < 1
                    ? locations.map(adr => {
                        return <Marker longitude={adr.lng}
                            latitude={adr.lat} anchor='bottom'
                            key={adr.location_id}>
                            <PetsIcon style={{ color: 'var(--color-map-red' }} />
                        </Marker>
                    })
                    : clusters.map(cluster => {
                        const [lng, lat] = cluster.geometry.coordinates;
                        const {
                            cluster: isCluster,
                            point_count: pointCount,
                        } = cluster.properties;
                        if (isCluster) {
                            return <Marker longitude={lng}
                                latitude={lat} anchor='bottom'
                                key={cluster.properties.cluster_id}>
                                <div
                                    className='cluster-marker'
                                    style={{
                                        width: `${25 + (pointCount / points.length) * 40}px`,
                                        height: `${25 + (pointCount / points.length) * 40}px`
                                    }}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id), 20
                                        );
                                        // setViewState({
                                        //     ...viewState,
                                        //     latitude: lat,
                                        //     longitude: lng,
                                        //     zoom: expansionZoom
                                        // });
                                        mapRef.current.easeTo({
                                            center: cluster.geometry.coordinates,
                                            zoom: expansionZoom,
                                            duration: 500
                                        });
                                    }}
                                >
                                    {pointCount}
                                </div>
                            </Marker>
                        } else {
                            return <Marker longitude={lng}
                                latitude={lat} anchor='bottom'
                                key={cluster.properties.pointId}>
                                <PetsIcon style={{ color: 'var(--color-map-red' }} />
                            </Marker>
                        }
                    })
                }
            </Map>
        </div>
    )
}

export default MapComponent;