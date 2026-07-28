"use client";

import { useMapEvents } from "react-leaflet";

type Props = {
    onSelectLocation: (lat: number, lng: number) => void;
};

export default function MapClick({ onSelectLocation }: Props) {
    useMapEvents({
        click(e) {
            onSelectLocation(e.latlng.lat, e.latlng.lng);
        },
    });

    return null;
}