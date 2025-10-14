// src/components/Dashboard.js
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import HealthAdvisory from './HealthAdvisory';
import PolicyImpact from './PolicyImpact';
import SourceContribution from './SourceContribution';
import GeminiInsights from './GeminiInsights';

const MonitoringLocationMap = dynamic(() => import('./MonitoringLocationMap'), {
    ssr: false,
    loading: () => <div className={styles.mapContainer}><h3 style={{textAlign: 'center'}}>Loading Map...</h3></div>
});
const SafeRoutePlanner = dynamic(() => import('./SafeRoutePlanner'), {
    ssr: false,
    loading: () => <div className={styles.card}><h3 style={{textAlign: 'center'}}>Loading Route Planner...</h3></div>
});

const Dashboard = ({ selectedLocation, aqiData, locations }) => {
    if (!selectedLocation || !aqiData || aqiData.length === 0) {
        return <div className={styles.loadingScreen}><h2>Preparing Dashboard Data...</h2></div>;
    }

    const [L, setL] = useState(null);
    const latestAqiData = aqiData.find(d => d.location_id === selectedLocation.id);

    if (!latestAqiData) {
        return <div className={styles.loadingScreen}><h2>Could not find AQI data for {selectedLocation.name}.</h2></div>;
    }

    useEffect(() => {
        import('leaflet').then(leaflet => {
            setL(leaflet);
        });
    }, []);

    const getMarkerColor = (aqi) => {
        if (aqi <= 50) return 'green';
        if (aqi <= 100) return 'yellow';
        if (aqi <= 200) return 'orange';
        if (aqi <= 300) return 'red';
        return 'maroon';
    };

    const createColoredIcon = (aqi) => {
        if (!L) return null;
        const iconUrl = `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${getMarkerColor(aqi)}.png`;
        const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png';
        return new L.Icon({
            iconUrl, shadowUrl,
            iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
        });
    };

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardGrid}>
                <div className={`${styles.card} ${styles.mapCard}`}>
                    <h2>Monitoring Location: {selectedLocation.name}</h2>
                    {L && (
                        <MonitoringLocationMap
                            locations={locations}
                            aqiData={aqiData}
                            selectedLocation={selectedLocation}
                            L={L}
                            createColoredIcon={createColoredIcon}
                        />
                    )}
                </div>

                <div className={`${styles.card} ${styles.healthCard}`}>
                    <HealthAdvisory latestAqiData={latestAqiData} />
                </div>
                
                <div className={`${styles.card} ${styles.trendCard}`}>
                    <PolicyImpact aqiData={aqiData.filter(d => d.location_id === selectedLocation.id)} selectedLocation={selectedLocation}/>
                </div>

                {/* --- FIX: These two components are now side-by-side --- */}
                <div className={`${styles.card} ${styles.sourceCard}`}>
                    <SourceContribution latestAqiData={latestAqiData} selectedLocation={selectedLocation} />
                </div>
                
                <div className={`${styles.card} ${styles.aiCard}`}>
                    <GeminiInsights latestAqiData={latestAqiData} />
                </div>
                
                <SafeRoutePlanner />
            </div>
        </div>
    );
};

export default Dashboard;

