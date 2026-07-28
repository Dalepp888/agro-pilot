"use client"
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('@/components/map/map'), {
    loading: () => <p>Cargando mapa...</p>,
    ssr: false
});

export default function MyPage() {
    return <Map />
}