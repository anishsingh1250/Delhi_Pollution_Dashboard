// src/lib/demoData.js
// This file centralizes all the static demo data for the application.

export const demoLocations = [
    { id: 1, name: 'Anand Vihar', lat: 28.6473, lng: 77.3209 },
    { id: 2, name: 'Mandir Marg', lat: 28.6367, lng: 77.2033 },
    { id: 3, name: 'R.K. Puram', lat: 28.5638, lng: 77.1738 },
    { id: 4, name: 'Punjabi Bagh', lat: 28.6692, lng: 77.1338 },
    { id: 5, name: 'Dwarka', lat: 28.5921, lng: 77.0460 },
    { id: 6, name: 'ITO', lat: 28.6315, lng: 77.2480 },
];

export const demoAqiData = [
    // Anand Vihar
    { 
        location_id: 1, 
        aqi: 283, 
        source_contribution: { 'Vehicular Emissions': 45, 'Industrial Emissions': 25, 'Dust': 15, 'Stubble Burning': 15 }, 
        forecast: [290, 305, 295], 
        historical: { "Pre-Diwali (2024)": 260, "Odd-Even (Jan 2025)": 240 } 
    },
    // Mandir Marg
    { 
        location_id: 2, 
        aqi: 197, 
        source_contribution: { 'Vehicular Emissions': 50, 'Industrial Emissions': 15, 'Dust': 25, 'Stubble Burning': 10 }, 
        forecast: [205, 210, 200], 
        historical: { "Pre-Diwali (2024)": 180, "Odd-Even (Jan 2025)": 165 } 
    },
    // R.K. Puram
    { 
        location_id: 3, 
        aqi: 206, 
        source_contribution: { 'Vehicular Emissions': 40, 'Industrial Emissions': 20, 'Dust': 30, 'Stubble Burning': 10 }, 
        forecast: [215, 220, 210], 
        historical: { "Pre-Diwali (2024)": 190, "Odd-Even (Jan 2025)": 175 } 
    },
    // Punjabi Bagh
    { 
        location_id: 4, 
        aqi: 216, 
        source_contribution: { 'Vehicular Emissions': 35, 'Industrial Emissions': 30, 'Dust': 20, 'Stubble Burning': 15 }, 
        forecast: [225, 230, 220], 
        historical: { "Pre-Diwali (2024)": 200, "Odd-Even (Jan 2025)": 185 } 
    },
    // Dwarka
    { 
        location_id: 5, 
        aqi: 262, 
        source_contribution: { 'Vehicular Emissions': 30, 'Industrial Emissions': 25, 'Dust': 35, 'Stubble Burning': 10 }, 
        forecast: [270, 275, 265], 
        historical: { "Pre-Diwali (2024)": 245, "Odd-Even (Jan 2025)": 230 } 
    },
    // ITO
    { 
        location_id: 6, 
        aqi: 156, 
        source_contribution: { 'Vehicular Emissions': 60, 'Industrial Emissions': 10, 'Dust': 20, 'Stubble Burning': 10 }, 
        forecast: [165, 170, 160], 
        historical: { "Pre-Diwali (2024)": 140, "Odd-Even (Jan 2025)": 125 } 
    },
];

