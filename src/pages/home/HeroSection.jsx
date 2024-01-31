import React, { useState } from "react";
import paralax from "../../assets/images/header/paralax.png";
import bubble39 from "../../assets/images/shape6/bubble39.png";
import bubble33 from "../../assets/images/header/bubble33.png";
import bubble14 from "../../assets/images/header/bubble14.png";
import bubble4 from "../../assets/images/header/bubble4.png";
import bubble30 from "../../assets/images/header/bubble30.png";
import bubble31 from "../../assets/images/header/bubble31.png";
function HeroSection() {
  const [image, setImage] = useState("./analysis.svg");

  return (
    <div>
      <div className="my_switcher">
        <ul>
          <li title="Dark Mode">
            <a href="javascript:void(0)" className="setColor">
              <i className="fa-solid fa-moon"></i>
            </a>
          </li>
        </ul>
      </div>
      <section className="banner">
        <div className="container">
          <div className="banner-box d-flex">
            <div className="banner-content">
              <span
                className="subtitle"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="100"
              >
                Elite School
              </span>
              <h3
                className="title"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="200"
              >
                Une meilleure gestion numérique de votre école par les nouvelles
                technologies de l'information.
              </h3>
              <div
                className="btn-grp d-flex"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="300"
              >
                <a href="#" className="btn btn-primary">
                  {" "}
                  Get In Touch
                </a>
              </div>
            </div>
            <div className="banner-thumbnail">
              <div
                className="large-thumb"
                data-sal="slide-up"
                data-sal-duration="800"
                data-sal-delay="200"
              >
                <img
                  src={paralax}
                  alt="Paralax"
                  className="paralax-image"
                  data-tilt
                />
              </div>
            </div>
          </div>
          <ul className="shape-group">
            <li
              className="shape shape-1"
              data-sal="slide-down"
              data-sal-duration="500"
              data-sal-delay="100"
            >
              <img src={bubble39} className="bg--logo" alt="" />
            </li>

            <li
              className="shape shape-2"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="200"
            >
              <img src={bubble33} alt="" />
            </li>

            <li
              className="shape shape-3"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="700"
            ></li>

            <li
              className="shape shape-4"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="700"
            >
              <img src={bubble14} alt="" />
            </li>

            <li
              className="shape shape-5"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="700"
            >
              <img src={bubble4} alt="" />
            </li>

            <li
              className="shape shape-6"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="700"
            >
              <img src={bubble30} alt="" />
            </li>

            <li
              className="shape shape-7"
              data-sal="slide-left"
              data-sal-duration="500"
              data-sal-delay="700"
            >
              <img src={bubble31} alt="" />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
