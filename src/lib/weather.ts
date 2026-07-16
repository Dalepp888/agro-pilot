const BASE_URL = "https://api.open-meteo.com/v1/forecast";

export async function getWeather(lat: number, lon: number) {
    const params = new URLSearchParams({
        latitude: lat.toString(),
        longitude: lon.toString(),
        current: [
            "temperature_2m",
            "relative_humidity_2m",
            "precipitation",
            "rain",
            "wind_speed_10m",
        ].join(","),
        daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "precipitation_probability_max",
        ].join(","),
        timezone: "auto",
        forecast_days: "7",
    });

    const response = await fetch(`${BASE_URL}?${params.toString()}`, {
        next: {
            revalidate: 60 * 30, // cache durante 30 minutos
        },
    });

    if (!response.ok) {
        throw new Error("No se pudo obtener el clima");
    }

    return response.json();
}