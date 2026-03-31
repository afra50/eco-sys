import React, { useState } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import api from "../../utils/api";
import {
  LayoutDashboard,
  Images,
  MessageSquare,
  Settings,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import "../../styles/components/admin/adminlayout.scss";

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await api.post("/auth/logout");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout failed", error);
      setIsLoggingOut(false);
    }
  };

  const navItems = [
    { path: "/admin", Icon: LayoutDashboard, label: "Dashboard", end: true },
    { path: "/admin/galeria", Icon: Images, label: "Galeria" },
  ];

  const isDashboard = location.pathname === "/admin";

  return (
    <div className="admin-layout">
      {isLoggingOut && (
        <div className="admin-layout__loader">
          <p>Trwa wylogowywanie...</p>
        </div>
      )}

      <aside className="admin-sidebar">
        <div className="admin-sidebar__header">
          <h2>
            ECO-SYS <span>Admin</span>
          </h2>
        </div>

        <nav className="admin-sidebar__nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  <item.Icon size={20} className="nav-icon" />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="admin-sidebar__footer">
          {!isDashboard ? (
            <button
              onClick={() => navigate("/admin")}
              className="mobile-back-btn"
              title="Wróć do Dashboardu"
            >
              <ArrowLeft size={20} />
              <span className="btn-text">Wstecz</span>
            </button>
          ) : (
            <div className="mobile-placeholder"></div>
          )}

          <button
            onClick={handleLogout}
            className="logout-btn"
            disabled={isLoggingOut}
          >
            <LogOut size={20} className="nav-icon" />
            <span className="btn-text">Wyloguj</span>
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <div className="admin-page-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
