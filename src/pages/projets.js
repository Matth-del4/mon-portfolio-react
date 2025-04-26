import React from "react";
import { Helmet } from "react-helmet";
function Projets() {
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
        <h1 className="text-center mb-4">Mes Réalisations</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h2 className="card-title text-center fw-bold">Projet 1</h2>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  dapibus ornare elit quis interdum. Morbi sed est pharetra,
                  maximus leo et, interdum orci. Aliquam pretium mauris quis
                  ipsum efficitur mollis. Suspendisse scelerisque sapien vitae
                  est porta varius. Aliquam porta eget nisl vel pellentesque.
                  Nulla maximus euismod feugiat.
                </p>
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h2 className="card-title text-center fw-bold">Projet 2</h2>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  dapibus ornare elit quis interdum. Morbi sed est pharetra,
                  maximus leo et, interdum orci. Aliquam pretium mauris quis
                  ipsum efficitur mollis. Suspendisse scelerisque sapien vitae
                  est porta varius. Aliquam porta eget nisl vel pellentesque.
                  Nulla maximus euismod feugiat.
                </p>
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h2 className="card-title text-center fw-bold">Projet 3</h2>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  dapibus ornare elit quis interdum. Morbi sed est pharetra,
                  maximus leo et, interdum orci. Aliquam pretium mauris quis
                  ipsum efficitur mollis. Suspendisse scelerisque sapien vitae
                  est porta varius. Aliquam porta eget nisl vel pellentesque.
                  Nulla maximus euismod feugiat.
                </p>
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h2 className="card-title text-center fw-bold">Projet 4</h2>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  dapibus ornare elit quis interdum. Morbi sed est pharetra,
                  maximus leo et, interdum orci. Aliquam pretium mauris quis
                  ipsum efficitur mollis. Suspendisse scelerisque sapien vitae
                  est porta varius. Aliquam porta eget nisl vel pellentesque.
                  Nulla maximus euismod feugiat.
                </p>
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h2 className="card-title text-center fw-bold">Projet 5</h2>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  dapibus ornare elit quis interdum. Morbi sed est pharetra,
                  maximus leo et, interdum orci. Aliquam pretium mauris quis
                  ipsum efficitur mollis. Suspendisse scelerisque sapien vitae
                  est porta varius. Aliquam porta eget nisl vel pellentesque.
                  Nulla maximus euismod feugiat.
                </p>
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <h2 className="card-title text-center fw-bold">Projet 6</h2>
                <p className="card-text text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  dapibus ornare elit quis interdum. Morbi sed est pharetra,
                  maximus leo et, interdum orci. Aliquam pretium mauris quis
                  ipsum efficitur mollis. Suspendisse scelerisque sapien vitae
                  est porta varius. Aliquam porta eget nisl vel pellentesque.
                  Nulla maximus euismod feugiat.
                </p>
                <button className="btn btn-primary">Voir plus</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projets;
