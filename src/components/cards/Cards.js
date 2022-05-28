import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img1 from "../../images/IMG_1.jpg";
import img2 from "../../images/IMG_2.jpg";
import img3 from "../../images/IMG_3.jpg";
import img4 from "../../images/IMG_4.jpg";
import img5 from "../../images/IMG_5.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Centre for Plastic Faciomaxillary and Hair Transplant</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img2}
              text="Higly skilled surgens, Dr Sarath T S MBBS and MS (General Surgery), MCh (Plastic Surgery),
               Dr Dhanya Prakash  BDS, MDS and PGCE, 
               Dr sreelal sreedharan  M.B.B.S, M.S (General Surgery) and MCh (plastic surgery)"
              label="Hair Transplantation"
              path="/services"
            />
            <CardItem
              src={img3}
              text="We provide General Plastic surgery, Hand and Microsurgery, Hair Transplantation, Cosmetic Surgery, Oral and Maxillofiacial Surgery in a peaceful, calm and pleasant environment for the patients."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img4}
              text="We are located at 2nd Milestone Kollam - 691004"
              label="Sri Krishna"
              path="/services"
            />
            <CardItem
              src={img5}
              text="Our surgens performing Reconstructive Surgery at Sri Krishna"
              label="Reconstructive Surgery"
              path="/products"
            />
            <CardItem
              src={img1}
              text="If you have any queries get in touch via contact us page"
              label="Sri Krishna"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
