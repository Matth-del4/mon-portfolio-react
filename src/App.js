import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container mt-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Matthieu Anquibou</h1>
        <p className="lead">Développeur Web Junior</p>
      </header>

      <section className="mb-4">
        <h2>À propos</h2>
        <p>
          Je suis actuellement une formation au CEF en développement web.
          J'apprends React, Bootstrap, etc.
        </p>
      </section>

      <section className="mb-4">
        <h2>Projets</h2>
        <ul>
          <li>Portfolio personnel</li>
          <li>Calculatrice en JavaScript</li>
          <li>Mini-jeu HTML/CSS</li>
        </ul>
      </section>

      <footer className="text-center mt-5">
        <button className="btn btn-primary">Me contacter</button>
      </footer>
    </div>
  );
}

export default App;
