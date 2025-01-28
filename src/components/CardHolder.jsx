import Card from "./Card";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../App";
import { getWeatherData } from "../services";

import { weatherCodeIcons } from "./weatherCodes";
import { FaLocationDot, FaTemperatureLow } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";
import { RiDrizzleLine } from "react-icons/ri";

const CardHolder = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [timeZone, setTimeZone] = useState(null);
	const [weatherCode, setWeatherCode] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const { setIsDay } = useContext(GlobalContext);

	const fetchWeatherData = async () => {
		setLoading(true);
		setError("");

		try {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					async (position) => {
						const userLocation = {
							latitude: position.coords.latitude.toFixed(2),
							longitude: position.coords.longitude.toFixed(2),
						};

						try {
							const res = await getWeatherData(
								userLocation.latitude,
								userLocation.longitude
							);

							if (res.success) {
								setTimeZone(res.timezone);
								setWeatherCode(res.weather_code);
								setIsDay(res.is_day);
								setWeatherData(res.weather_data);
							} else {
								setError(res.message);
							}
						} catch (apiError) {
							setError("Failed to fetch weather data. Please try again.");
						}
					},
					(err) => {
						setError(err.message + " Please enable location services.");
					}
				);
			} else {
				setError("Geolocation is not supported by your browser.");
			}
		} catch (err) {
			setError("An unexpected error occurred. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchWeatherData();
	}, []);

	if (loading) {
		return <div style={{ color: "white" }}>Loading...</div>;
	}

	if (error) {
		return <div style={{ color: "white" }}>An error occured: {error}</div>;
	}

	return (
		<>
			<div className="card-holder">
				<Card
					icon={FaLocationDot}
					heading={"Location"}
					desc={timeZone || "..."}
				/>

				<Card
					icon={FaTemperatureLow}
					heading={"Current Temperature"}
					desc={`${weatherData?.current.temperature_2m} °C` || "..."}
				/>

				<Card
					icon={weatherCodeIcons[weatherCode]?.icon || BsThreeDots}
					heading={"Weather"}
					desc={weatherCodeIcons[weatherCode]?.description || "Unkown"}
				/>

				<Card
					icon={WiHumidity}
					heading={"Relative Humidity"}
					desc={`${weatherData?.current.relative_humidity_2m}%` || "..."}
				/>

				<Card
					icon={FiWind}
					heading={"Wind Speed"}
					desc={`${weatherData?.current.wind_speed_10m} km/h` || "..."}
				/>

				<Card
					icon={RiDrizzleLine}
					heading={"Precipitation"}
					desc={`${weatherData?.current.precipitation} mm` || "..."}
				/>

				{weatherData?.forecast.time.map((date, index) => (
					<Card
						key={index}
						icon={
							weatherCodeIcons[weatherData?.forecast.weather_code[index]]
								?.icon || BsThreeDots
						}
						heading={date}
						desc={
							`Max : ${weatherData.forecast.temperature_2m_max[index]} °C Min : ${weatherData.forecast.temperature_2m_min[index]} °C` ||
							"..."
						}
					/>
				))}
			</div>
		</>
	);
};

export default CardHolder;
