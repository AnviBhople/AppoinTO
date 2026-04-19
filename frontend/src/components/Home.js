import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Providers from "./Providers";
import TopRated from "./TopRated";
import HomeInfoSection from "./HomeInfoSection";
function Home() {
	return (
		<div
			style={{
				backgroundColor: "#f5f3f4",
			}}>
			<Hero />
			<br />
			<br />
			<HomeInfoSection />
			<br />
			<br />
			<Categories />
			<br />
			<br />
			<Providers />
			<br />
			<br />
			<TopRated />
		</div>
	);
}

export default Home;
