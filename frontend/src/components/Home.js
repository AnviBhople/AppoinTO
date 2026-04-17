// import React from "react";
// import Hero from "./Hero";
// import Categories from "./Categories";
// import Providers from "./Providers";
// import TopRated from "./TopRated";

// function Home() {
// 	const styleHome = {
// 		backgroundColor: "#caf0f8",
// 	};
// 	return (
// 		<div style={styleHome}>
// 			<Hero />
// 			<Categories />
// 			<Providers />
// 			<TopRated />
// 		</div>
// 	);
// }

// export default Home;
import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Providers from "./Providers";
import TopRated from "./TopRated";

function Home() {
	return (
		<div style={{ backgroundColor: "#caf0f8" }}>
			<Hero />
			<Categories />
			<Providers />
			<TopRated />
		</div>
	);
}

export default Home;
