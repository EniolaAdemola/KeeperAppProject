import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
	return (
		<footer>
			<p>
				Copyright <a href="https://eniola-ademola.vercel.app">Eniola Ademola</a>{" "}
				&copy; {year}
			</p>
		</footer>
	);
};

export default Footer;
