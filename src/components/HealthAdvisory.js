// src/components/HealthAdvisory.js
import styles from '../styles/Home.module.css';

const HealthAdvisory = ({ latestAqiData }) => {
    
    const getAdvisory = (aqi) => {
        if (aqi <= 50) {
            return { level: 'Good', message: 'Air quality is excellent. It\'s a great day for outdoor activities!', color: '#28a745', borderColor: '#28a745' };
        }
        if (aqi <= 100) {
            return { level: 'Moderate', message: 'Air quality is acceptable. Unusually sensitive individuals should consider reducing prolonged or heavy exertion.', color: '#343a40', backgroundColor: '#ffc107', borderColor: '#ffc107' };
        }
        if (aqi <= 200) {
            return { level: 'Unhealthy (Sensitive)', message: 'Sensitive groups may experience health effects. The general public is less likely to be affected.', color: '#ffffff', backgroundColor: '#fd7e14', borderColor: '#fd7e14' };
        }
        if (aqi <= 300) {
            return { level: 'Unhealthy', message: 'Everyone may begin to experience health effects. Members of sensitive groups may experience more serious health effects.', color: '#ffffff', backgroundColor: '#dc3545', borderColor: '#dc3545' };
        }
        if (aqi <= 400) {
            return { level: 'Very Unhealthy', message: 'Health alert: everyone may experience more serious health effects. Avoid all outdoor exertion.', color: '#ffffff', backgroundColor: '#842029', borderColor: '#842029' };
        }
        return { level: 'Hazardous', message: 'Health warning of emergency conditions. The entire population is more likely to be affected.', color: '#ffffff', backgroundColor: '#212529', borderColor: '#212529' };
    };

    const advisory = getAdvisory(latestAqiData.aqi);

    return (
        <>
            <h2>Health Advisory</h2>
            <div 
                className={styles.healthAdvisoryContent} 
                style={{ 
                    backgroundColor: advisory.backgroundColor || 'transparent', 
                    color: advisory.color,
                    borderColor: advisory.borderColor
                }}
            >
                <h3>{advisory.level} ({latestAqiData.aqi} AQI)</h3>
                <p>{advisory.message}</p>
            </div>
            <div style={{marginTop: '1.5rem'}}>
                <h4>Recommendations:</h4>
                <ul style={{paddingLeft: '20px', color: '#6c757d'}}>
                    <li><strong>Sensitive Groups:</strong> Includes children, older adults, and people with heart or lung disease.</li>
                    <li><strong>Outdoors:</strong> Limit prolonged outdoor activity, especially during peak pollution hours.</li>
                    <li><strong>Indoors:</strong> Keep windows closed and use air purifiers if available.</li>
                </ul>
            </div>
        </>
    );
};

export default HealthAdvisory;

