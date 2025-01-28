import axios from "axios";

export async function getWeatherData(latitude = 17.4, longitude = 78.47) {
	try {
		const params = {
			latitude,
			longitude,
			current:
				"temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m",
			daily:
				"weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset",
			timezone: "auto",
			forecast_days: 3,
		};

		const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
			params,
		});

		const timezone = res.data.timezone;

		const weather_code = res.data.current.weather_code;

		const is_day = res.data.current.is_day;

		const weather_data = {
			current: res.data.current,
			forecast: res.data.daily,
		};

		return {
			success: true,
			timezone,
			weather_data,
			weather_code,
			is_day,
		};
	} catch (error) {
		return {
			success: false,
			message: error.message || "Error in fetching data",
		};
	}
}
