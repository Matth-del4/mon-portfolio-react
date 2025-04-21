function Accueil() {
  return (
    <>
      <header className="text-center mb-5">
        <h1 className="display-4">Matthieu Anquibou</h1>
        <p className="lead">Développeur Web et Mobile</p>
      </header>

      <div className="container">
        <div className="propos1">
          <section className="mb-4">
            <h2>À propos</h2>
            <p>
              Je suis actuellement une formation au CEF en développement web.
              J'apprends React, Bootstrap, etc.
            </p>
          </section>
        </div>

        <div className="projet1">
          <section className="mb-4">
            <h2>Projets</h2>
            <ul>
              <li>Portfolio personnel</li>
              <li>Calculatrice en JavaScript</li>
              <li>Mini-jeu HTML/CSS</li>
            </ul>
          </section>
        </div>
      </div>

      <footer className="text-center mt-5">
        <a href="/contact">
          <button className="btn btn-primary">Me contacter</button>
        </a>
      </footer>
    </>
  );
}

export default Accueil;
