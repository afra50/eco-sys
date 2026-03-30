import React from "react";
import { Navigate } from "react-router-dom";

// --- Importy stron publicznych ---
import Home from "./pages/Home";
import HeatPumps from "./pages/HeatPumps";
import AirConditioning from "./pages/AirConditioning";
import Photovoltaics from "./pages/Photovoltaics";
import FloorHeating from "./pages/FloorHeating";
// import NotFound from "./pages/NotFound";

// --- Importy Admina ---
import Login from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const routes = [
	// ==========================================
	// 🌍 CZĘŚĆ PUBLICZNA
	// ==========================================
	{ path: "/", element: <Home /> },
	{ path: "/pompy-ciepla", element: <HeatPumps /> },
	{ path: "/klimatyzacja", element: <AirConditioning /> },
	{ path: "/fotowoltaika", element: <Photovoltaics /> },
	{ path: "/dla-klienta/ogrzewanie-podlogowe", element: <FloorHeating /> },

	// ==========================================
	// 🔐 CZĘŚĆ ADMINA
	// ==========================================
	{ path: "/admin/login", element: <Login /> },

	{
		path: "/admin",
		element: (
			<ProtectedRoute>
				{/* Tu w przyszłości będzie Twój AdminLayout */}
				<div>
					<h1>Panel Admina - jesteś zalogowana!</h1>
				</div>
			</ProtectedRoute>
		),
		children: [
			// { index: true, element: <AdminGallery /> },
			// ❌ 404 DLA ADMINA (Wewnątrz panelu)
			// { path: "*", element: <NotFound /> },
		],
	},

	// ==========================================
	// ❌ 404 GLOBALNE (Dla części publicznej)
	// ==========================================
	// { path: "*", element: <NotFound /> },
];

export default routes;
