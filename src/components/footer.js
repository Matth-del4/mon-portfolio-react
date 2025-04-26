import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Infos de contact */}
          <div className="col-md-4 mb-4">
            <strong>Matthieu AQB</strong>
            <p>
              <i className="bi bi-geo-alt"></i> Adresse :{" "}
              <a
                href="https://www.google.com/maps/dir/123+Rue+de+Reuilly,+Paris//@48.840703,2.3124768,12z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light text-decoration-underline"
              >
                123 Rue de Reuilly, 75012 Paris
              </a>
            </p>
            <p>
              <i className="bi bi-telephone"></i> Téléphone :{" "}
              <a href="tel:+33612345678" className="text-light">
                06 12 34 56 78
              </a>
            </p>
            <div className="d-flex gap-3 mt-3">
              <a
                href="https://github.com/Matth-del4/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bi bi-github" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i className="bi bi-twitter" style={{ fontSize: "1.5rem" }}></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i
                  className="bi bi-linkedin"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="col-md-4 mb-4">
            <strong>Navigation</strong>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/service" className="text-light text-decoration-none">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-light text-decoration-none">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/mentions"
                  className="text-light text-decoration-none"
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Derniers projets */}
          <div className="col-md-4 mb-4">
            <strong>Derniers projets</strong>
            <ul className="list-unstyled">
              <li>
                <Link to="/projets" className="text-light text-decoration-none">
                  Projet 4
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-light text-decoration-none">
                  Projet 5
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-light text-decoration-none">
                  Projet 6
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4">
          <small>© 2025 Matthieu AQB - Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
