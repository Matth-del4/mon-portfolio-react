import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <strong className="footer-title">Matthieu AQB</strong>
            <p>123 Rue de Reuilly, 75012 Paris</p>
            <p>06 12 34 56 78</p>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a
                href="https://github.com/Matth-del4"
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

          <div className="col-md-4 mb-4">
            <strong className="footer-title">Liens utiles</strong>
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

          <div className="col-md-4 mb-4">
            <strong className="footer-title">Derniers projets</strong>
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
