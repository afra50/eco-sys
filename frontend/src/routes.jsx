import React from "react";
import { Navigate } from "react-router-dom";

// --- Importy stron publicznych ---
import Home from "./pages/Home";
import HeatPumps from "./pages/HeatPumps";
import AirConditioning from "./pages/AirConditioning";
import Photovoltaics from "./pages/Photovoltaics";
import FloorHeating from "./pages/FloorHeating";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
// import NotFound from "./pages/NotFound";

// --- Importy Admina ---
import Login from "./pages/admin/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";

const routes = [
	// ==========================================
	// 🌍 CZĘŚĆ PUBLICZNA
	// ==========================================
	{ path: "/", element: <Home /> },
	{ path: "/pompy-ciepla", element: <HeatPumps /> },
	{ path: "/klimatyzacja", element: <AirConditioning /> },
	{ path: "/fotowoltaika", element: <Photovoltaics /> },
	{ path: "/ogrzewanie-podlogowe", element: <FloorHeating /> },
	{ path: "/galeria", element: <Gallery /> },
	{ path: "*", element: <NotFound /> },

	// ==========================================
	// 🔐 CZĘŚĆ ADMINA
	// ==========================================
	{ path: "/admin/login", element: <Login /> },

	{
		path: "/admin",
		element: (
			<ProtectedRoute>
				<AdminLayout />
			</ProtectedRoute>
		),
		children: [
			{ index: true, element: <AdminDashboard /> },
			// Tu w przyszłości dodasz kolejne podstrony, np:
			// { path: "galeria", element: <AdminGallery /> },
		],
	},

	// ==========================================
	// ❌ 404 GLOBALNE (Dla części publicznej)
	// ==========================================
	// { path: "*", element: <NotFound /> },
];

export default routes;
