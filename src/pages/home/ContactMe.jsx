import React from "react";

export default function contactMe() {
  return (
    <section className="projects contact">
      <div className="container">
        <div className="projects-wrapper d-flex contact-wrapper">
          <div className="contact-top">
            <div className="section-heading">
              <span className="subtitle">Devenir partenaire</span>
              <h2 className="title">Travaillons ensemble</h2>
            </div>
            <div className="address-list">
              <div className="address">
                <h6 className="title">Mail</h6>
                <p>
                  <a href="mailto:example@gmail.com">iseliteschool@gmail.com</a>
                </p>
              </div>
              <div className="address">
                <h6 className="title">Address</h6>
                <p>Goma, DR Congo</p>
              </div>
              <div className="address">
                <h6 className="title">Phone</h6>
                <p>
                  <a href="tel:+0123456789">+243 99 12 60 718</a>
                </p>
              </div>
            </div>
          </div>
          <div className="contact-form-box">
            <h3 className="title">Décrire votre avis</h3>
            <form action="#" className="contact-form">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="contact-name"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="contact-email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form-group">
                <label>Comment pouvons-nous vous aider?</label>
                <textarea
                  name="contact-message"
                  id="message"
                  cols="30"
                  rows="6"
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <button
                  className="btn btn-primary btn-contact"
                  name="contact-submit"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
