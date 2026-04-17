import React from "react";
import { Link } from "react-router-dom";
function Footer() {
	const footerStyle={
		backgroundColor:"#0096c7",
	};
	const textStyle={
		fontFamily:"Times New Roman",
		color:"#fff",
		fontWeight:"30px"
	};
	const favIcon={
		color:"#fff",
		fontSize:"26px",
		fontWeight: "bold",
	};
	const textBold={
		fontWeight:"bold",
		
	};
	return (
		<footer className="p-4 mt-5" style={footerStyle}>
			<div className="container text-center" style={textStyle}>
				<p style={textBold}>Contact Us:</p>
				<p> appoinTO@email.com | +91 1234567890</p>
				<p style={textBold}>Follow us:</p>
				<p> 
					<Link to="/facebook" style={favIcon}><i className="fa-brands fa-facebook"></i></Link>
					&ensp;&ensp;
					<Link to="/twitter" style={favIcon}><i className="fa-brands fa-x-twitter"></i></Link> 
					&ensp;&ensp;
					<Link to="/instagram" style={favIcon}><i className="fa-brands fa-instagram"></i></Link></p>
				<p style={textBold}>© 2026 AppoinTO</p>
			</div>
		</footer>
	);
}

export default Footer;
