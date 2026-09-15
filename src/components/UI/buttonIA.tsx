import Link from "next/link";
import { TiWeatherCloudy } from "react-icons/ti";

interface ButtonIAProps {
    plotId: string;
}

export default function ButtonIA({ plotId }: ButtonIAProps) {
    return (
        <Link href={`/weather?plotId=${plotId}`}
            className="fixed bottom-10 right-10 flex items-center gap-3 bg-primary text-on-primary px-6 py-4 rounded-full font-bold text-body-md hover:scale-105 active:scale-95 transition-all z-50 group">
            <span className="material-symbols-outlined group-hover:rotate-12 transition-transform"
                style={{ fontVariationSettings: "'FILL' 1" }}><TiWeatherCloudy /></span>
            <span>Ver el clima de esta parcela</span>
        </Link>
    )
}