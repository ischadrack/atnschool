import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div
            className="footer-bottom d-flex"
            data-sal="slide-up"
            data-sal-duration="500"
            data-sal-delay="100"
          >
            <div className="left">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © 2022. All rights reserved by <a href="#">Axilthemes</a>.
                </span>
              </div>
            </div>
            <div className="right">
              <div className="footer-bottom-link">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Services</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
