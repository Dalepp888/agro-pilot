export interface OpenMeteoCurrentWeather {
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation: number;
    rain: number;
    wind_speed_10m: number;
    weather_code?: number;
}

export interface OpenMeteoDailyWeather {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    weather_code?: number[];
}

export interface OpenMeteoWeather {
    current: OpenMeteoCurrentWeather;
    current_units?: Record<string, string>;
    daily: OpenMeteoDailyWeather;
    daily_units?: Record<string, string>;
}