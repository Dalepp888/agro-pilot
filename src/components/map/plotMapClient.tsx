"use client";

import dynamic from "next/dynamic";

const PlotMap = dynamic(() => import("@/components/map/plotMap"), {
    loading: () => <p>Cargando mapa...</p>,
    ssr: false,
});

type Props = {
    latitude: number;
    longitude: number;
};

export default function PlotMapClient({ latitude, longitude }: Props) {
    return <PlotMap latitude={latitude} longitude={longitude} />;
}