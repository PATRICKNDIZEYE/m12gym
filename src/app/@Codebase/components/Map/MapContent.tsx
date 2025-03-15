'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

const MapContent = () => {
  const position: [number, number] = [-1.959285264620231, 30.109777717192063]

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer 
        center={position} 
        zoom={16} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            MU12 Fitness Gym <br /> Your premier fitness destination in Kigali
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapContent 