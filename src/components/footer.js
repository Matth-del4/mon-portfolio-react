import React from "react";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-5 footer">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <strong className="footer-title d-block mb-3">Matthieu AQB</strong>
            <a
              href="https://www.google.com/maps/dir/123+Rue+de+Reuilly,+Paris//@48.840703,2.3124768,12z/data=!4m9!4m8!1m5!1m1!1s0x47e6726ea3c8cb23:0x8310ebac7f54a449!2m2!1d2.3948777!2d48.8406194!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              123 Rue de Reuilly, 75012 Paris
            </a>
            <p>
              <a href="tel:+33612345678">06 12 34 56 78</a>
            </p>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a
                href="https://github.com/Matth-del4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i
                  className="bi bi-github footer-icon"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i
                  className="bi bi-twitter footer-icon"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light"
              >
                <i
                  className="bi bi-linkedin footer-icon"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </a>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <strong className="footer-title d-block mb-3">Liens utiles</strong>
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
            <strong className="footer-title d-block mb-3">
              Derniers projets
            </strong>
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

        <div className="row mt-4">
          <div className="col-12 text-center">
            <small>© 2025 Matthieu AQB - Tous droits réservés.</small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
