// src/components/Header.js
import styles from '../styles/Home.module.css';

const Header = ({ currentView, onBack }) => (
    <header className={styles.header}>
        {/* The back button is only rendered if the currentView is 'dashboard' */}
        {currentView === 'dashboard' ? (
            <button onClick={onBack} className={styles.backButton}>← Back to Locations</button>
        ) : (
            // An empty div as a placeholder to keep the title perfectly centered on the home page
            <div style={{ width: '150px' }}></div> 
        )}
        
        <h1>Delhi-NCR Air Quality Dashboard</h1>
        
        {/* A spacer div to balance the header layout and ensure the title remains centered */}
        <div style={{ width: '150px' }}></div>
    </header>
);

export default Header;

