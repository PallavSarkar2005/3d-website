import React from "react";
import "./App.css";
import gradient from "./assets/gradient.png";

function App() {
  return (
    <>
      <img className="image-gradient" src={gradient} alt="gradient" />
      <div className="layer-blur" />

      <div className="container">
        <header>
          <h1 className="logo">MCODE</h1>

          <nav>
            <a href="#">COMPANY</a>
            <a href="#">FEATURES</a>
            <a href="#">RESOURCES</a>
            <a href="#">DOCS</a>
          </nav>

          <button className="btn-signing">SIGN IN</button>
        </header>

        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">INTRODUCING • 2025</div>
            </div>

            <h1>
              EMAIL FOR
              <br />
              DEVELOPERS
            </h1>

            <p className="description">
              The best way to reach humans instead of spam folders — deliver
              transactional and marketing emails at scale.
            </p>

            <div className="buttons">
              <a href="#" className="btn-get-started">
                Documentation &gt;
              </a>

              <a href="#" className="btn-signing-main">
                Get started &gt;
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
