import { MapContainer, TileLayer, Popup, CircleMarker } from "react-leaflet";

interface TableRow {
    no: number;
    Time: string;
    Lat: number;
    Lng: number;
}

interface props {
    data: TableRow[];
}
const Map = (properties: props) => {
    const position: [number, number] = [properties.data[0].Lat, properties.data[0].Lng];
    return (
        <MapContainer center={position} zoom={20} scrollWheelZoom={true} style={{
            height: "1080px", marginTop: "20px"
        }} className="z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {properties.data.map((data, index) => (
                <CircleMarker key={index} center={[data.Lat, data.Lng]}>
                    <Popup>
                        Detected in {data.Time}
                    </Popup>
                </CircleMarker>
            ))}
        </MapContainer>
    )
}

export default Map;