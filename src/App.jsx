import { Routes, Route } from "react-router";
import { createContext, useState } from "react";

import NavBar from "./components/NavBar";
import CardHolder from "./components/CardHolder";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
	const [isDay, setIsDay] = useState(1);

	return (
		<GlobalContext.Provider value={{ isDay, setIsDay }}>
			{children}
		</GlobalContext.Provider>
	);
};

function App() {
	return (
		<GlobalContextProvider>
			<div className="main">
				<NavBar />
				<Routes>
					<Route path="/" element={<CardHolder />}></Route>
				</Routes>
				<div className="footer">Weather Forecast v1.0.0</div>
			</div>
		</GlobalContextProvider>
	);
}

export default App;
