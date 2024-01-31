import React from "react";
import brand1 from "../../assets/images/clients/brand1.png";
import brand2 from "../../assets/images/clients/brand2.png";
import brand3 from "../../assets/images/clients/brand3.png";
import brand4 from "../../assets/images/clients/brand4.png";
import brand5 from "../../assets/images/clients/brand5.png";
import brand6 from "../../assets/images/clients/brand6.png";
import brand7 from "../../assets/images/clients/brand7.png";
import brand8 from "../../assets/images/clients/brand8.png";
import line2 from "../../assets/images/clients/line2.png";

export default function aboutMe() {
  return (
    // CLIENTS SECTION START
    <section className="projects brands">
      <div className="container">
        <div className="section-heading">
          <span className="subtitle">A propos</span>
          <h2 className="title">Nous travaillons avec ...</h2>
          <p>
            Une bonne éducation de l'enfant découle aussi de son environnement
            scholaire et parascholaire.{" "}
          </p>
        </div>
        <div className="projects-wrapper d-flex brands-wrapper">
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
          >
            <img src={brand1} alt="Brand" />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <img src={brand2} />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="200"
          >
            <img src={brand3} alt="Brand" />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="300"
          >
            <img src={brand4} alt="Brand" />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="400"
          >
            <img src={brand5} alt="Brand" />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="500"
          >
            <img src={brand6} alt="Brand" />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="600"
          >
            <img src={brand7} alt="Brand" />
          </div>
          <div
            className="brand-grid"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="700"
          >
            <img src={brand8} alt="Brand" />
          </div>
        </div>
      </div>
    </section>
  );
}
