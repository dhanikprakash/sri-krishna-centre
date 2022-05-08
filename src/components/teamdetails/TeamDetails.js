import React, { useEffect } from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFoldersLine } from "react-icons/ri";
import sarath from "../../images/sarath.jpg";
import dhanya from "../../images/dhanya_3.jpg";
import sreelal from "../../images/sreelal.jpg";
import "./TeamDetails.css";

function TeamDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="about__me__title">
        <h5>Get to know!</h5>
        <h1> Dr Sarath T S</h1>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <img src={sarath} alt="about"></img>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>13+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15000+</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>surgeries</h5>
              <small>15000+</small>
            </article>
          </div>
          <p>
            Completed MBBS and MS (General Surgery) from Thiruvananthapuram
            Medical college, MCh (Plastic Surgery) from Kottayam Medical College
            & Microvascular surgical training from Ganga hospital Coimbatore. He
            is practicing as Consultant Plastic, Hand and Microsurgeon in
            different hospitals at kollam since 2009. He has successfully
            completed more than 15000 surgeries over these years and more than
            1000 Microvascular surgeries including reimplants of fingers, hand
            and other body parts.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      {/* ---------------------------2------------------------------ */}
      <div className="about__me__title">
        <h5>Get to know!</h5>
        <h1>Dr Dhanya Prakash G</h1>
      </div>
      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>300+</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>surgeries</h5>
              <small>500+</small>
            </article>
          </div>
          <p>
            Completed BDS from RMDCH, Annamalai University, MDS from Azeezia
            Dental College and PGCE from Annamalai University. She is practicing
            as consultant Oral & Maxillofacial Surgeon at Sankers hospital,
            kollam and at Valiyath Hospital,karunagappally. Good in handling all
            types of faciomaxillary trauma involving both soft tissue and hard
            tissues,orthognathic surgeries,TMJ and Pathology.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="about__me">
          <img src={dhanya} alt="about"></img>
        </div>
      </div>
      {/* --------------------------------3------------------------------------------ */}
      <div className="about__me__title">
        <h5>Get to know!</h5>
        <h1>Dr sreelal sreedharan</h1>
      </div>
      <div className="container about__container">
        <div className="about__me">
          <img src={sreelal} alt="about"></img>
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
              <small>10000+</small>
            </article>
            <article className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>surgeries</h5>
              <small>10000+</small>
            </article>
          </div>
          <p>
            Dr.sreelal sreedharan completed M.B.B.S and M.S General Surgery from
            Trivandrum Medical College and MCh plastic surgery from Kottayam
            Medical College. Microvascular surgical training from Ganga Hospital
            Coimbatore. Worked as consultant in General Hospital Trivandrum
            since 2010, Assistant professor,pushpagiri Medical College,
            Thiruvalla and senior consultant in plastic surgery Sk hospital
            trivandrum.
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
