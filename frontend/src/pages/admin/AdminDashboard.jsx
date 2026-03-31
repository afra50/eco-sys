import React from "react";
import { Link } from "react-router-dom";
import { Images, MessageSquare, Settings } from "lucide-react";
import "../../styles/pages/admin/admindashboard.scss";

const AdminDashboard = () => {
  const sections = [
    {
      id: "gallery",
      title: "Galeria realizacji",
      desc: "Dodawaj i usuwaj zdjęcia z wykonanych instalacji (pompy ciepła, fotowoltaika, itp.).",
      icon: <Images size={32} />,
      link: "/admin/galeria",
    },
  ];

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard__intro">
        <h1>Witaj w systemie ECO-SYS</h1>
        <p>Wybierz moduł, którym chcesz dzisiaj zarządzać.</p>
      </header>

      <div className="admin-dashboard__grid">
        {sections.map((section) => (
          <Link to={section.link} key={section.id} className="admin-card">
            <div className="admin-card__icon">{section.icon}</div>
            <div className="admin-card__info">
              <h2>{section.title}</h2>
              <p>{section.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
