"use client";

import { deletePlot } from "@/actions/plot";
import { useRouter } from "next/navigation";

export default function DeletePlotButton({ id }: { id: string }) {
    const router = useRouter();

    async function handleDelete() {
        const result = await deletePlot(id);

        if (result.success) {
            router.refresh();
        }
    }

    return (
        <button className="text-white" onClick={handleDelete}>
            Eliminar
        </button>
    );
}