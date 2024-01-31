import { useState } from "react";
import logo1 from "../../assets/images/logo/logo1.png";
import logo2 from "../../assets/images/logo/logo2.svg";
import logo3 from "../../assets/images/logo/logo3.webp";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-navbar d-flex">
            <div className="header-logo">
              <a href="#">
                <img src={logo1} alt="" className="light-version-logo" />
              </a>
              <a href="#">
                <img src={logo2} alt="" className="dark-version-logo" />
              </a>
              <a href="#">
                <img src={logo3} alt="" className="sticky-logo" />
              </a>
            </div>

            <div className="header-action">
              <ul className="d-flex">
                <li className="header--link">
                  <ul className="nav--links">
                    <li>
                      <a href="#">Acceuil</a>
                    </li>
                    <li>
                      <a href="#">A propos</a>
                    </li>
                    <li>
                      <a href="#">Offre</a>
                    </li>
                    <li>
                      <a href="#">Temoignages</a>
                    </li>
                    <li>
                      <a href="#">Soft</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">
                        <button className="btn work--space">
                          Espace de travail
                        </button>
                      </a>
                    </li>
                  </ul>
                </li>
                <ul className="social-icon-list">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                  </li>
                </ul>
                <ul className="toggle--button">
                  <li className="sidemenu-btn">
                    <button className="btn-wrap">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                </ul>
                <li className="my_switcher menu">
                  <ul>
                    <li title="Dark Mode">
                      <a href="javascript:void(0)" className="setColor">
                        <i
                          onClick={isDarkMode}
                          className="fa-solid fa-moon"
                        ></i>
                      </a>
                      <div
                        className={`body ${
                          isDarkMode ? "active-dark-mode" : ""
                        }`}
                      >
                        <a
                          href="javascript:void(0)"
                          className="setColor"
                          onClick={() => setIsDarkMode(!isDarkMode)}
                        >
                          {isDarkMode ? (
                            <i className="fa-solid fa-lightbulb" />
                          ) : (
                            <i className="fa-solid fa-moon" />
                          )}
                        </a>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
