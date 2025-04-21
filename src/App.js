import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Accueil from "./pages/accueil";
import Projets from "./pages/projet";
import Contact from "./pages/contact";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <nav className="mb-5">
          <ul className="nav nav-pills justify-content-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/projets" className="nav-link">
                Projets
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
