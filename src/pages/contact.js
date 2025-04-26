import React from "react";
import { Helmet } from "react-helmet";
function Contact() {
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="text-center mb-4">Formulaire de contact</h2>

              <form>
                <div className="mb-3">
                  <label htmlFor="nom" className="form-label">
                    Nom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nom"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="prenom" className="form-label">
                    Prénom
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="prenom"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Courriel
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="telephone" className="form-label">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="telephone"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="sujet" className="form-label">
                    Sujet
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="sujet"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card p-4">
              <h2 className="text-center mb-4">Mes coordonnées</h2>
              <address className="text-center">
                <p>
                  <i className="bi bi-envelope"></i> Email :{" "}
                  <a href="mailto:mattaqb@gmail.com">mattaqb@gmail.com</a>
                </p>
                <p>
                  <i className="bi bi-telephone"></i> Téléphone :{" "}
                  <a href="tel:+33612345678">06 12 34 56 78</a>
                </p>
                <p>
                  <i className="bi bi-geo-alt"></i> Adresse :{" "}
                  <a
                    href="https://www.google.com/maps/dir/123+Rue+de+Reuilly,+Paris//@48.840703,2.3124768,12z/data=!4m9!4m8!1m5!1m1!1s0x47e6726ea3c8cb23:0x8310ebac7f54a449!2m2!1d2.3948777!2d48.8406194!1m0!3e0?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    123 Rue de Reuilly, 75012 Paris
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
