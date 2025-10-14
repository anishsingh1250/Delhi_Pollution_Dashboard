import '@/styles/globals.css'
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'; // <-- ADD THIS LINE

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
