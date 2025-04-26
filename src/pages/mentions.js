import React from "react";
import { Helmet } from "react-helmet";

function Mentions() {
  return (
    <div className="container mt-5">
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Mentions légales</title>
      </Helmet>

      <h1 className="mb-4">Mentions légales</h1>

      <div className="accordion" id="mentionsAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              Matthieu AQB - Développeur Web Junior
              <br />
              Adresse : 123 Rue de Reuilly, 75012 Paris
              <br />
              Téléphone : 06 12 34 56 78
              <br />
              Email : mattaqb@gmail.com
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Hébergeur du site
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              Hébergeur : CEF
              <br />
              Adresse : 123 Rue de Reuilly, 75012 Paris
              <br />
              Téléphone : 06 12 34 56 78
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#mentionsAccordion"
          >
            <div className="accordion-body">
              Images libres de droits provenant de{" "}
              <a
                href="https://pixabay.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pixabay
              </a>
              .
              <br />
              Icônes provenant de{" "}
              <a
                href="https://www.flaticon.com/fr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Flaticon
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mentions;
