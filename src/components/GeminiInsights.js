// src/components/GeminiInsights.js
import { useState } from 'react';
import styles from '../styles/Home.module.css';

// A new component to safely parse and render the AI's text response
const InsightRenderer = ({ text }) => {
    const lines = text.trim().split('\n');
    return (
        <div>
            {lines.map((line, index) => {
                // Render bold text
                if (line.startsWith('**') && line.endsWith('**')) {
                    return <h3 key={index}>{line.substring(2, line.length - 2)}</h3>;
                }
                // Render regular paragraphs
                return <p key={index}>{line}</p>;
            })}
        </div>
    );
};

const GeminiInsights = ({ latestAqiData }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [insights, setInsights] = useState('');
    const [error, setError] = useState('');

    const getInsights = () => {
        setIsLoading(true);
        setError('');
        
        // Simulate a call to the Gemini API for a stable demo
        setTimeout(() => {
            const demoResponse = `
**Analysis of Current AQI (${latestAqiData.aqi})**

The current air quality is classified as **Unhealthy**. At this level, sensitive groups are at high risk, and even healthy individuals may experience breathing difficulties and throat irritation with prolonged exposure.

**Primary Contributing Factors:**

Based on the source contribution data, **Vehicular Emissions** are the dominant factor, which is typical for a weekday. The significant contribution from **Dust** suggests that recent construction or dry weather conditions are exacerbating the issue.

**Actionable Recommendations:**

1.  **For Citizens:** It is strongly advised to limit outdoor activities, especially strenuous exercise. If going outside is necessary, wearing an N95 mask is recommended. Using air purifiers indoors can significantly reduce exposure.
2.  **For Policymakers:** Consider implementing immediate short-term measures such as stricter enforcement of emission standards for heavy traffic and deploying water sprinklers on major roads to suppress dust. For a long-term strategy, enhancing public transportation and promoting electric vehicles remain critical.
            `;
            setInsights(demoResponse);
            setIsLoading(false);
        }, 1200); // Simulate a 1.2-second network delay
    };

    return (
        <>
            <h2>AI-Powered Insights</h2>
            <div className={styles.geminiContent}>
                <p style={{ margin: '0 0 1rem 0', color: '#6c757d' }}>
                    Get a summary and recommendations from an AI model based on the latest data.
                </p>
                <button onClick={getInsights} disabled={isLoading}>
                    {isLoading ? 'Generating...' : 'Get AI Insights'}
                </button>
                {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
                {insights && (
                    <div className={styles.geminiResponse}>
                        {/* Using the new renderer component to ensure text is visible */}
                        <InsightRenderer text={insights} />
                    </div>
                )}
            </div>
        </>
    );
};

export default GeminiInsights;

