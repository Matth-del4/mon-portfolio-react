import React from "react";

function Services() {
  return (
    <div>
      <div className="header-banner"></div>

      <div className="container mt-5">
        <h1 className="display-4 text-center mb-5">Mon offres de service</h1>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">UX Design</h5>
                <p className="card-text">
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
              <img
                src="https://via.placeholder.com/300x150"
                className="card-img-top"
                alt="Applications React"
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">
                  Applications React
                </h5>
                <p className="card-text">
                  Développement d'applications dynamiques avec React JS.
                </p>
                <a href="#" className="btn btn-primary">
                  Voir plus
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <img
                src="https://via.placeholder.com/300x150"
                className="card-img-top"
                alt="SEO"
              />
              <div className="card-body">
                <h5 className="card-title text-center fw-bold">
                  SEO & Référencement
                </h5>
                <p className="card-text">
                  Optimisation du référencement naturel pour améliorer votre
                  visibilité.
                </p>
                <a href="#" className="btn btn-primary">
                  Voir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
