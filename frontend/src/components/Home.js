import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Providers from "./Providers";
import TopRated from "./TopRated";

function Home() {
	return (
		<div style={{ backgroundColor: "#caf0f8" }}>
			<Hero /> <br />
			<Categories />
			<br />
			<Providers />
			<br />
			<TopRated />
		</div>
	);
}

export default Home;
