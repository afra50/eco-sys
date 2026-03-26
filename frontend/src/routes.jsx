import React from "react";
import Home from "./pages/Home";

const routes = [
	// --- CZĘŚĆ PUBLICZNA ---
	{ path: "/", element: <Home /> },
	// { path: "/o-nas", element: <AboutUs /> },
	// { path: "kontakt", element: <Contact /> },
	// --- ROUTY ADMINA ---
	// // --- 404 ---
	// { path: "*", element: <NotFound /> },
];

export default routes;
