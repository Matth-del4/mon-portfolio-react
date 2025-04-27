import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Accueil from "./pages/accueil";
import Projets from "./pages/projets";
import Contact from "./pages/contact";
import Services from "./pages/service";
import Mentions from "./pages/mentions";
import Header from "./components/header";
import headercomp from "./components/headercomp";
import Footer from "./components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/service" element={<Services />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions" element={<Mentions />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
