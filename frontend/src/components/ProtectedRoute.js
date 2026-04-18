import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ children }) {
	const user = JSON.parse(localStorage.getItem("user"));
	const location = useLocation();

	if (!user) {
		return (
			<Navigate
				to="/account"
				state={{ redirectTo: location.pathname + location.search }}
				replace
			/>
		);
	}

	return children;
}

export default ProtectedRoute;
