// src/components/SourceContribution.js
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import styles from '../styles/Home.module.css';

const COLORS = {
    'Dust': '#FFBB28', // Yellow
    'Industrial Emissions': '#FF8042', // Orange
    'Stubble Burning': '#DC3545', // Red
    'Vehicular Emissions': '#0088FE', // Blue
};

const SourceContribution = ({ latestAqiData, selectedLocation }) => {
    // This check ensures the component doesn't crash if props are temporarily missing during a fast re-render.
    if (!latestAqiData || !selectedLocation) {
        return (
            <>
                <h2>Source Contribution</h2>
                <div className={styles.chartContainer}>
                    <p>Loading data...</p>
                </div>
            </>
        );
    }

    const pieData = Object.entries(latestAqiData.source_contribution).map(([name, value]) => ({
        name: name.replace(/_/g, ' '), // Replace underscores with spaces for display
        value,
    }));

    return (
        <>
            <h2>Source Contribution</h2>
            <h4>{selectedLocation.name}</h4>
            <div className={styles.chartContainer}>
                <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                        <Legend />
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            innerRadius={60} // This creates the donut chart effect
                            outerRadius={120}
                            fill="#8884d8"
                            dataKey="value"
                            nameKey="name"
                            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                        >
                            {pieData.map((entry) => (
                                <Cell key={`cell-${entry.name}`} fill={COLORS[entry.name]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default SourceContribution;

