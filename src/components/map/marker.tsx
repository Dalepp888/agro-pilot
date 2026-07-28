"use client";

import { Marker } from "react-leaflet";
import L from "leaflet";

type Props = {
    position: [number, number] | null;
};

const markerIcon = L.divIcon({
    html: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="42"
      height="42"
      viewBox="0 0 384 512"
      fill="#22c55e">
      <path d="M172.3 501.7C26.97 291 0 269.4 0 192C0 85.96 85.96 0 192 0S384 85.96 384 192c0 77.4-26.97 99-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0z"/>
    </svg>
  `,
    className: "",
    iconSize: [42, 42],
    iconAnchor: [21, 42],
});

export default function PlotMarker({ position }: Props) {

    if (!position) return null;

    return (
        <Marker
            position={position}
            icon={markerIcon}
        />
    );
}