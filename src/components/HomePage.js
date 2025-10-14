// src/components/HomePage.js
import styles from '../styles/Home.module.css';
import AqiGuide from './AqiGuide';

const HomePage = ({ locations, aqiData, onLocationSelect }) => {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroSection}>
                <h1>Real-Time Air Quality Insights for Delhi-NCR</h1>
                <p>Select a station below to view a detailed dashboard with forecasts, health advisories, and source analysis.</p>
            </div>

            <h2>Select a Monitoring Station</h2>
            <div className={styles.locationGrid}>
                {locations.map(location => {
                    const latestAqi = aqiData.find(d => d.location_id === location.id);
                    return (
                        <div key={location.id} className={styles.locationCard} onClick={() => onLocationSelect(location)}>
                            <h3>{location.name}</h3>
                            <p>{latestAqi ? `${latestAqi.aqi} AQI` : 'No data'}</p>
                        </div>
                    );
                })}
            </div>
            <AqiGuide />
        </div>
    );
};

export default HomePage;

