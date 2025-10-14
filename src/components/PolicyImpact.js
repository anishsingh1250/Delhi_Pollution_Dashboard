// src/components/PolicyImpact.js
import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from '../styles/Home.module.css';

const PolicyImpact = ({ aqiData, selectedLocation }) => {
    const [compareEvent, setCompareEvent] = useState('');

    // useMemo will prevent this complex calculation from running on every single render
    const chartData = useMemo(() => {
        // Find the full data object for the selected location to get historical and forecast values
        const locationFullData = aqiData.find(d => d.location_id === selectedLocation.id);

        // If for some reason we don't have the data, return an empty array
        if (!locationFullData) return [];

        // We'll create a dummy 5-day array for the chart's x-axis
        return Array(5).fill(null).map((_, index) => {
            const dayAQI = locationFullData.aqi - (2 - index) * 10; // Simulate a 5-day trend around the current AQI
            return {
                name: `Day ${index + 1}`,
                'Current AQI': dayAQI,
                // The forecast is an array, we access it by index
                'Forecast': locationFullData.forecast ? locationFullData.forecast[index] : null,
                // The historical data is an object, we access it by the selected event key
                'Historical': compareEvent ? locationFullData.historical[compareEvent] + (index * 5) : null, // Simulate a trend for historical data too
            }
        });
    }, [aqiData, selectedLocation, compareEvent]); // Recalculate only when these change

    return (
        <>
            <h2>AQI Trend & Forecast</h2>
            <h4>{selectedLocation.name}</h4>
            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Current AQI" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Forecast" name="Forecast (Next 3 Days)" stroke="#ff7300" strokeWidth={2} strokeDasharray="5 5" />
                        {compareEvent && <Line type="monotone" dataKey="Historical" name={`Historical (${compareEvent})`} stroke="#28a745" strokeWidth={2} />}
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div style={{marginTop: '1.5rem'}}>
                <h4>Policy Impact Analysis</h4>
                <p style={{ margin: '0 0 1rem 0', color: '#6c757d' }}>
                    Compare current trend with historical policy events to gauge their effectiveness.
                </p>
                <select className={styles.policyDropdown} value={compareEvent} onChange={(e) => setCompareEvent(e.target.value)}>
                    <option value="">Select an event to compare...</option>
                    <option value="Pre-Diwali (2024)">Pre-Diwali (2024)</option>
                    <option value="Odd-Even (Jan 2025)">Odd-Even (Jan 2025)</option>
                </select>
            </div>
        </>
    );
};

export default PolicyImpact;

