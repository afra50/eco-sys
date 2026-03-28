import React from "react";
import Home from "./pages/Home";
import HeatPumps from "./pages/HeatPumps";
import AirConditioning from "./pages/AirConditioning";

const routes = [
	// --- CZĘŚĆ PUBLICZNA ---
	{ path: "/", element: <Home /> },
	{ path: "/pompy-ciepla", element: <HeatPumps /> },
	{ path: "/klimatyzacja", element: <AirConditioning /> },
	// { path: "/o-nas", element: <AboutUs /> },
	// { path: "kontakt", element: <Contact /> },
	// --- ROUTY ADMINA ---
	// // --- 404 ---
	// { path: "*", element: <NotFound /> },
];

export default routes;
