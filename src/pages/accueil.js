function Accueil() {
  return (
    <>
      <header className="header-hero mb-5">
        <h1 className="display-4">Matthieu Anquibou</h1>
        <p className="lead">Développeur Web et Mobile</p>
      </header>

      <div className="row">
        {/* Section À propos */}
        <section className="col-md-6 mb-4">
          <h2>À propos</h2>
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

        {/* Section Mes compétences */}
        <section className="col-md-6 mb-4">
          <h2>Mes compétences</h2>

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

      <footer className="text-center mt-5">
        <a href="/contact">
          <button className="btn btn-primary">En savoir plus</button>
        </a>
      </footer>
    </>
  );
}

export default Accueil;
