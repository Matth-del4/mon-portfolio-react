import React from "react";
import { Helmet } from "react-helmet";
function Services() {
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
      <div>
        <div className="header-banner"></div>

        <div className="container mt-5">
          <h1 className="display-4 text-center mb-5">Mon offre de service</h1>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <i
                    className="bi bi-brush"
                    style={{
                      fontSize: "2rem",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  ></i>
                  <h2 className="card-title text-center fw-bold">UX Design</h2>
                  <p className="card-text text-center">
                    L'UX Design est une discipline qui consiste à concevoir des
                    produits (site web, applications mobiles, logiciels, objets
                    connectés etc.) en plaçant l'utilisateur au centre des
                    préoccupations. L'objectif est de rendre l'expérience
                    utilisateur la plus fluide et agréable possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <i
                    class="bi bi-code-slash"
                    style={{
                      fontSize: "2rem",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  ></i>
                  <h2 className="card-title text-center fw-bold">
                    Développement web
                  </h2>
                  <p className="card-text text-center">
                    Me développement de site web consiste à créer des sites
                    internet en utilisant des langages de programmation (HTML,
                    CSS, PHP, etc.) et des frameworks (Boostraps, React,
                    Angular, etc.).
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body d-flex flex-column align-items-center">
                  <i
                    class="bi bi-search"
                    style={{
                      fontSize: "2rem",
                      marginBottom: "15px",
                      marginTop: "15px",
                    }}
                  ></i>
                  <h2 className="card-title text-center fw-bold">
                    Référencement
                  </h2>
                  <p className="card-text text-center">
                    Le référencement naturel (SEO) est une technique qui
                    consiste à optimiser un site web pour le faire remonter dans
                    les résultats des moteurs de recherche (Google, Bing, Yahoo,
                    etc.). L'objectif est d'attirer un maximum de visiteurs
                    qualifiés sur le site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
