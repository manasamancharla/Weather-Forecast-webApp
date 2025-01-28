import { TiWeatherSunny } from "react-icons/ti";
import { RiSunCloudyLine, RiFoggyLine, RiDrizzleLine } from "react-icons/ri";
import { IoRainy, IoThunderstorm } from "react-icons/io5";
import { FiCloudSnow } from "react-icons/fi";
import { FaCloudShowersHeavy } from "react-icons/fa6";

// REFERENCE
// https://gist.github.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c

export const weatherCodeIcons = {
	0: {
		description: "Sunny",
		icon: TiWeatherSunny,
	},
	1: {
		description: "Mainly Sunny",
		icon: TiWeatherSunny,
	},
	2: {
		description: "Partly Cloudy",
		icon: RiSunCloudyLine,
	},
	3: {
		description: "Cloudy",
		icon: RiSunCloudyLine,
	},
	45: {
		description: "Foggy",
		icon: RiFoggyLine,
	},
	48: {
		description: "Rime Fog",
		icon: RiFoggyLine,
	},
	51: {
		description: "Light Drizzle",
		icon: RiDrizzleLine,
	},
	53: {
		description: "Drizzle",
		icon: RiDrizzleLine,
	},
	55: {
		description: "Heavy Drizzle",
		icon: RiDrizzleLine,
	},
	56: {
		description: "Light Freezing Drizzle",
		icon: RiDrizzleLine,
	},
	57: {
		description: "Freezing Drizzle",
		icon: RiDrizzleLine,
	},
	61: {
		description: "Light Rain",
		icon: RiDrizzleLine,
	},
	63: {
		description: "Rain",
		icon: IoRainy,
	},
	65: {
		description: "Heavy Rain",
		icon: IoRainy,
	},
	66: {
		description: "Light Freezing Rain",
		icon: IoRainy,
	},
	67: {
		description: "Freezing Rain",
		icon: IoRainy,
	},
	71: {
		description: "Light Snow",
		icon: FiCloudSnow,
	},
	73: {
		description: "Snow",
		icon: FiCloudSnow,
	},
	75: {
		description: "Heavy Snow",
		icon: FiCloudSnow,
	},
	77: {
		description: "Snow Grains",
		icon: FiCloudSnow,
	},
	80: {
		description: "Light Showers",
		icon: FaCloudShowersHeavy,
	},
	81: {
		description: "Showers",
		icon: FaCloudShowersHeavy,
	},
	82: {
		description: "Heavy Showers",
		icon: FaCloudShowersHeavy,
	},
	85: {
		description: "Light Snow Showers",
		icon: FaCloudShowersHeavy,
	},
	86: {
		description: "Snow Showers",
		icon: FaCloudShowersHeavy,
	},
	95: {
		description: "Thunderstorm",
		icon: IoThunderstorm,
	},
	96: {
		description: "Light Thunderstorms With Hail",
		icon: IoThunderstorm,
	},
	99: {
		description: "Thunderstorm With Hail",
		icon: IoThunderstorm,
	},
};
