import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Providers from "./Providers";
import TopRated from "./TopRated";

function Home() {
	return (
		<div
			style={{
				background: "linear-gradient(to bottom, #caf0f8, #ade8f4)",
			}}>
			<Hero />
			<Categories />
			<Providers />
			<TopRated />
		</div>
	);
}

export default Home;
