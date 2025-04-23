import React from "react";

function Services() {
  return (
    <div className="container mt-5">
      <header className="header-banner text-center mb-5">
        <h1 className="display-4">Mes offres de service</h1>
        <p className="lead">Voici ce que je propose</p>
      </header>

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

        {/* Service 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300x150"
              className="card-img-top"
              alt="Applications React"
            />
            <div className="card-body">
              <h5 className="card-title">Applications React</h5>
              <p className="card-text">
                Développement d'applications dynamiques avec React JS.
              </p>
              <a href="#" className="btn btn-primary">
                Voir plus
              </a>
            </div>
          </div>
        </div>

        {/* Service 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <img
              src="https://via.placeholder.com/300x150"
              className="card-img-top"
              alt="SEO"
            />
            <div className="card-body">
              <h5 className="card-title">SEO & Référencement</h5>
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
  );
}

export default Services;
