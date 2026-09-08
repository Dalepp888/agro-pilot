export type WeatherKind = "clear" | "cloudy" | "fog" | "rain" | "snow" | "storm";

export function getWeatherKind(code: number): WeatherKind {
    if (code === 0 || code === 1) return "clear";
    if (code === 2 || code === 3) return "cloudy";
    if (code === 45 || code === 48) return "fog";
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "snow";
    if (code >= 95) return "storm";
    return "rain";
}

export function getWeatherDescription(code: number): string {
    if (code === 0) return "Despejado";
    if (code === 1) return "Mayormente despejado";
    if (code === 2) return "Parcialmente nublado";
    if (code === 3) return "Nublado";
    if (code === 45 || code === 48) return "Niebla";
    if (code >= 51 && code <= 57) return "Llovizna";
    if (code >= 61 && code <= 67) return "Lluvia";
    if ((code >= 71 && code <= 77) || code === 85 || code === 86) return "Nieve";
    if (code >= 80 && code <= 82) return "Chubascos";
    if (code === 95) return "Tormenta";
    if (code === 96 || code === 99) return "Tormenta con granizo";
    return "Despejado";
}