import React, { useEffect } from "react";
import "./App.css";
import gradient from "./assets/gradient.png";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <img className="image-gradient" src={gradient} alt="gradient" />
      <div className="layer-blur" />

      <div className="container">
        <header>
          <h1 className="logo" data-aos="fade-down">MCODE</h1>

          <nav data-aos="fade-down" data-aos-delay="150">
            <a href="#">COMPANY</a>
            <a href="#">FEATURES</a>
            <a href="#">RESOURCES</a>
            <a href="#">DOCS</a>
          </nav>

          <button className="btn-signing" data-aos="fade-down" data-aos-delay="300">
            SIGN IN
          </button>
        </header>

        <main>
          <div className="content">
            <div className="tag-box" data-aos="fade-right">
              <div className="tag">INTRODUCING • 2025</div>
            </div>

            <h1 data-aos="fade-up">
              EMAIL FOR <br /> DEVELOPERS
            </h1>

            <p className="description" data-aos="fade-up" data-aos-delay="150">
              The best way to reach humans instead of spam folders — deliver
              transactional and marketing emails at scale.
            </p>

            <div className="buttons" data-aos="fade-up" data-aos-delay="250">
              <a href="#" className="btn-get-started">Documentation &gt;</a>
              <a href="#" className="btn-signing-main">Get started &gt;</a>
            </div>
          </div>

          <spline-viewer
            className="robot-3d"
            data-aos="zoom-in"
            data-aos-delay="350"
            url="https://prod.spline.design/VkUjuyI1wSVNox0y/scene.splinecode"
          ></spline-viewer>
        </main>
      </div>
    </>
  );
}

export default App;
