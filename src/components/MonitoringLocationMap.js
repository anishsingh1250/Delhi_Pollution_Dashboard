// src/components/MonitoringLocationMap.js
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import styles from '../styles/Home.module.css';

const MonitoringLocationMap = ({ locations, aqiData, selectedLocation, L, createColoredIcon }) => {
    // This component assumes 'L' (the Leaflet instance) is loaded before it's rendered.
    // The parent component (Dashboard.js) handles the loading state.
    
    return (
        <MapContainer 
            center={[selectedLocation.lat, selectedLocation.lng]} 
            zoom={13} 
            className={styles.mapContainer}
            // A key is added here to force React to re-render the map when the location changes.
            // This is crucial for correctly re-centering the map view.
            key={selectedLocation.id}
        >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            {locations.map(location => {
                // Find the latest AQI data for each location pin
                const latestAqi = aqiData.find(d => d.location_id === location.id);
                if (!latestAqi) return null;

                const icon = createColoredIcon(latestAqi.aqi);
                if (!icon) return null; // Don't render if icon creation fails

                return (
                    <Marker key={location.id} position={[location.lat, location.lng]} icon={icon}>
                        <Popup>
                            <strong>{location.name}</strong><br />AQI: {latestAqi.aqi}
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default MonitoringLocationMap;

