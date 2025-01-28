import { TiWeatherSunny } from "react-icons/ti";
import { IoMoonOutline } from "react-icons/io5";
import { useContext } from "react";
import { GlobalContext } from "../App";

const NavBar = () => {
	const { isDay } = useContext(GlobalContext);
	return (
		<div className="nav">
			{isDay === 1 ? <TiWeatherSunny size={25} /> : <IoMoonOutline size={25} />}
			<span style={{ marginLeft: "2px" }}>Weather Forecast</span>
		</div>
	);
};

export default NavBar;
