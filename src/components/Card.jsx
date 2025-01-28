import React from "react";

const Card = ({ icon, heading, desc = "..." }) => {
	return (
		<div className="card">
			<div className="icon">
				{React.createElement(icon, {
					size: 28,
				})}
			</div>

			<div className="heading">
				<span>{heading}</span>
			</div>

			<div className="desc">
				<span>{desc}</span>
			</div>

			<div style={{ height: "25px", width: "100%" }}></div>
		</div>
	);
};

export default Card;
