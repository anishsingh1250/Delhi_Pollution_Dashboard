// src/pages/index.js
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Dashboard from '../components/Dashboard';
import { demoLocations, demoAqiData } from '../lib/demoData';

const App = () => {
    const [currentView, setCurrentView] = useState('home'); // 'home' or 'dashboard'
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [locations, setLocations] = useState([]);
    const [aqiData, setAqiData] = useState([]);

    useEffect(() => {
        // Simulate a real data fetch
        const timer = setTimeout(() => {
            setLocations(demoLocations);
            setAqiData(demoAqiData);
            setIsLoading(false);
        }, 500); // A small delay to simulate loading

        return () => clearTimeout(timer); // Cleanup timer
    }, []);

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setCurrentView('dashboard');
    };

    const handleBack = () => {
        setSelectedLocation(null);
        setCurrentView('home');
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <div className={styles.loadingScreen}>
                    <h2>Loading Air Quality Data...</h2>
                </div>
            );
        }

        if (currentView === 'home') {
            return (
                <HomePage 
                    locations={locations} 
                    aqiData={aqiData}
                    onLocationSelect={handleLocationSelect} 
                />
            );
        }

        if (currentView === 'dashboard' && selectedLocation) {
            return (
                <Dashboard 
                    selectedLocation={selectedLocation}
                    locations={locations}
                    aqiData={aqiData}
                />
            );
        }
        
        // Fallback or error view if something goes wrong
        return <HomePage locations={locations} aqiData={aqiData} onLocationSelect={handleLocationSelect} />;
    };

    return (
        <main className={styles.main}>
            <Header currentView={currentView} onBack={handleBack} />
            {renderContent()}
        </main>
    );
};

export default App;

