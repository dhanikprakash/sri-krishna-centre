import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Sri Krishna Centre © 2022</small>
          <div className="social-icons">
            <a href="#123" target="_blank" rel="noreferrer">
              <i className="social-icon-link fab fa-facebook-f" />
            </a>
            <a href="#123" target="_blank" rel="noreferrer">
              <i className="social-icon-link fab fa-instagram" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone+9112345678"
              target="_blank"
              rel="noreferrer"
            >
              <i className="social-icon-link fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
