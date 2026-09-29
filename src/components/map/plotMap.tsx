"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import PlotMarker from "./marker";

type Props = {
    latitude: number;
    longitude: number;
};

export default function PlotMap({ latitude, longitude }: Props) {
    return (
        <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            style={{ width: "100%", height: "300px", borderRadius: "0.75rem" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <PlotMarker position={[latitude, longitude]} />
        </MapContainer>
    )
}