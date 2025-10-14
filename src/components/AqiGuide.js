// src/components/AqiGuide.js
import styles from '../styles/Home.module.css';

// Data for each AQI level for easier management
const aqiLevels = [
    { level: 'Good', range: '0-50', className: styles.good, advice: 'Air quality is excellent. Enjoy outdoor activities.' },
    { level: 'Moderate', range: '51-100', className: styles.moderate, advice: 'Acceptable, but some risk for sensitive individuals.' },
    { level: 'Unhealthy (Sensitive)', range: '101-200', className: styles.unhealthySensitive, advice: 'High risk for sensitive groups. Limit outdoor exertion.' },
    { level: 'Unhealthy', range: '201-300', className: styles.unhealthy, advice: 'Increased health risks for everyone. Avoid outdoors.' },
    { level: 'Very Unhealthy', range: '301-400', className: styles.veryUnhealthy, advice: 'Serious health risks. Stay indoors.' },
    { level: 'Hazardous', range: '401-500+', className: styles.hazardous, advice: 'Emergency conditions. Everyone is at risk.' },
];

const AqiGuide = () => (
    <div className={styles.aqiGuide}>
        <h3>AQI Level Guide</h3>
        <div className={styles.aqiGuideGrid}>
            {aqiLevels.map(({ level, range, className, advice }) => (
                <div key={level} className={`${styles.aqiGuideCard} ${className}`}>
                    <h4>{level}</h4>
                    <p className={styles.aqiRange}>{range}</p>
                    <p className={styles.aqiAdvice}>{advice}</p>
                </div>
            ))}
        </div>
    </div>
);

export default AqiGuide;

