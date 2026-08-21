"use client";

import { useEffect, useState } from "react";
import { Plot } from "@/generated/prisma/client";
import { getPlots } from "@/actions/plot";

export function usePlotsList() {
    const [plots, setPlots] = useState<Plot[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadPlots() {
            try {
                const data = await getPlots();
                setPlots(data);
            } finally {
                setLoading(false);
            }
        }

        loadPlots();
    }, []);

    return {
        plots,
        loading,
    };
}