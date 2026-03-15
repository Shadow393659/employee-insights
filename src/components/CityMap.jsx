import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import cityCoordinates from "../utils/cityCoordinates";

function CityMap({ data }) {
  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={4}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((emp) => {
        const coord = cityCoordinates[emp.city];

        if (!coord) return null;

        return <Marker key={emp.id} position={[coord.lat, coord.lng]} />;
      })}
    </MapContainer>
  );
}

export default CityMap;
