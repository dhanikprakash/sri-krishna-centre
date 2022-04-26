import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import "./ContactDetails.css";

function ContactDetails() {
  return (
    <>
      <div className="contact__details_title">
        <h5>Get in touch</h5>
        <h1>Contact us</h1>
      </div>
      <div className="contact__details">
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <BsWhatsapp className="contact__option-icon" />
              <h4>WhatsApp</h4>
              <h5>+9112345678</h5>
              <a
                href="https://api.whatsapp.com/send?phone+9112345678"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>srikrishnacentre@gmail.com</h5>
              <a
                href="mailto:dummyemail@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <FaFacebookMessenger className="contact__option-icon" />
              <h4>Messenger</h4>
              <h5>FacebookMessenger</h5>
              <a
                href="http://m.me/messengerUserID"
                target="_blank"
                rel="noreferrer"
              >
                Send a message
              </a>
            </article>
          </div>
          <div className="email__form">
            <form action="">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
              <textarea
                name="message"
                cols="30"
                rows="9"
                placeholder="your message"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
