"use client"
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import MapClick from "./mapClickHandler";
import PlotMarker from "./marker";
import { useRef, useState } from "react";

export default function Map() {

    const [position, setPosition] = useState<[number, number] | null>(null);
    const mapRef = useRef<L.Map | null>(null);

    function getBestResult(results: any[]) {
        const priority = [
            "city",
            "town",
            "village",
            "hamlet",
            "farm",
        ];

        for (const type of priority) {
            const result = results.find(
                r => r.addresstype === type
            );

            if (result) return result;
        }

        return results[0];
    }

    async function searchLocation(query: string) {
        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=jsonv2`
        );

        const results = await response.json();

        if (!results.length) return;

        const location = getBestResult(results);

        const lat = Number(location.lat);
        const lng = Number(location.lon);

        setPosition([lat, lng]);

        mapRef.current?.setView([lat, lng], 15);
    }

    return (
        <MapContainer
            center={[21.52, -78.15]}
            zoom={7}
            style={{ width: "100%", height: "100vh" }}
            ref={mapRef}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick
                onSelectLocation={(lat, lng) => {
                    setPosition([lat, lng]);
                }}
            />
            <PlotMarker
                position={position}
            />
        </MapContainer>
    )
}