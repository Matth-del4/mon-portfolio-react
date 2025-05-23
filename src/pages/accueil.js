import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Titre from "../components/titre";

function Accueil() {
  const [message, setMessage] = useState("Bienvenue sur mon portfolio !");
  const [showModal, setShowModal] = useState(false); // Hook pour la modale

  const changerMessage = () => {
    setMessage("Merci pour votre visite !");
  };

  const ouvrirModal = () => {
    setShowModal(true);
  };

  const fermerModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Matthieu AQB - Développeur Web</title>
          <meta
            name="description"
            content="Bienvenue sur le portfolio de Matthieu AQB."
          />
          <meta name="robots" content="index, follow" />
          <meta
            name="keywords"
            content="portfolio, développeur web, React, HTML, CSS, Bootstrap, projets"
          />
        </Helmet>
      </div>

      <header className="header-hero">
        <h1 className="display-4">Matthieu AQB</h1>
        <p className="lead">Développeur Web et Mobile</p>
      </header>

      <div className="row mt-5">
        <section className="col-md-6 mb-4">
          <Titre texte="À propos" />
          <div className="text-center">
            <img
              src="/images/john-doe-about.jpg"
              alt="Portrait de développeur web"
              className="img-fluid rounded mb-3"
              style={{ maxWidth: "300px" }}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </section>

        <section className="col-md-6 mb-4">
          <Titre texte="Mes compétences" />

          <p>HTML</p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>

          <p>CSS</p>
          <div className="progress mb-3">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              50%
            </div>
          </div>

          <p>JavaScript</p>
          <div className="progress mb-3">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "40%" }}
              aria-valuenow="40"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              40%
            </div>
          </div>

          <p>React</p>
          <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "30%" }}
              aria-valuenow="30"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              30%
            </div>
          </div>
        </section>
      </div>

      <div className="text-center mt-5">
        <h4>{message}</h4>
        <button onClick={changerMessage} className="btn btn-primary mt-3">
          Changer le message
        </button>
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-success" onClick={ouvrirModal}>
          Voir mon profil GitHub
        </button>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Mon profil GitHub</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={fermerModal}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src="/images/john-doe-about.jpg"
                  alt="Profil GitHub"
                  className="img-fluid rounded-circle mb-3"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
                <h5>
                  <a
                    href="https://github.com/Matth-del4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Matthieu AQB
                  </a>
                </h5>
                <p className="text-muted">
                  Apprentissage en développement web et mobile
                </p>
                <ul className="list-unstyled">
                  <li> Repositories : 1</li>
                  <li> Followers : 16</li>
                  <li> Following : 0</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={fermerModal}>
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="text-center mt-5">
        <Link to="/service" className="btn btn-primary">
          En savoir plus
        </Link>
      </footer>
    </>
  );
}

export default Accueil;
