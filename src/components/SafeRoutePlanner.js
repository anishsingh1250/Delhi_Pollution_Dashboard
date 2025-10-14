// src/components/SafeRoutePlanner.js
import styles from '../styles/Home.module.css';

const SafeRoutePlanner = () => (
    <div className={`${styles.card} ${styles.routeCard}`}>
        <h2>Safe Route Planner (Demo)</h2>
        <h4>Showing a suggested safer route from Anand Vihar to Dwarka based on lower pollution zones.</h4>
        <div className={styles.routeMapContainer}>
            <img 
                src="https://i.imgur.com/7UPQ4hC.png" 
                alt="Map showing a safe route in Delhi" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} 
            />
        </div>
    </div>
);

export default SafeRoutePlanner;

