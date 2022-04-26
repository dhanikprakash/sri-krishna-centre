import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFoldersLine } from "react-icons/ri";
import user1 from "../../images/me-about.jpg";
import "./TeamDetails.css";

function TeamDetails() {
  return (
    <>
      <div className="about__me__title">
        <h5>Get to know!</h5>
        <h1>Dr Sarath</h1>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <img src={user1} alt="about"></img>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>15+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ years</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>surgeries</h5>
              <small>500+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            varius lectus, ac porta dui. Curabitur orci tortor, consequat vel
            fermentum ac, placerat at quam. Vivamus leo tellus, commodo eu augue
            ut, ullamcorper suscipit nisi. Nam fermentum dui at libero
            malesuada, a rhoncus nunc accumsan. Curabitur egestas nunc at
            convallis convallis. Suspendisse imperdiet gravida tristique.
            Praesent ac enim sed ligula ultricies dictum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      {/* ---------------------------2------------------------------ */}
      <div className="about__me__title">
        <h5>Get to know!</h5>
        <h1>Dr Dhanya</h1>
      </div>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>15+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ years</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>surgeries</h5>
              <small>500+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            varius lectus, ac porta dui. Curabitur orci tortor, consequat vel
            fermentum ac, placerat at quam. Vivamus leo tellus, commodo eu augue
            ut, ullamcorper suscipit nisi. Nam fermentum dui at libero
            malesuada, a rhoncus nunc accumsan. Curabitur egestas nunc at
            convallis convallis. Suspendisse imperdiet gravida tristique.
            Praesent ac enim sed ligula ultricies dictum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="about__me">
          <img src={user1} alt="about"></img>
        </div>
      </div>
      {/* --------------------------------3------------------------------------------ */}
      <div className="about__me__title">
        <h5>Get to know!</h5>
        <h1>Dr Sarath</h1>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <img src={user1} alt="about"></img>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>15+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ years</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>surgeries</h5>
              <small>500+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            varius lectus, ac porta dui. Curabitur orci tortor, consequat vel
            fermentum ac, placerat at quam. Vivamus leo tellus, commodo eu augue
            ut, ullamcorper suscipit nisi. Nam fermentum dui at libero
            malesuada, a rhoncus nunc accumsan. Curabitur egestas nunc at
            convallis convallis. Suspendisse imperdiet gravida tristique.
            Praesent ac enim sed ligula ultricies dictum.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </>
  );
}

export default TeamDetails;
