import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <small className="website-rights">Sri Krishna Centre © 2022</small>
          <div className="social-icons">
            <a href="#1" target="_blank" rel="noreferrer">
              <i className="social-icon-link fab fa-facebook-f" />
            </a>
            <a href="#1" target="_blank" rel="noreferrer">
              <i className="social-icon-link fab fa-instagram" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919447122369"
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
