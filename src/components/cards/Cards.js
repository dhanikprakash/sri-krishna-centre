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
              text="Higly skilled surgens, Dr Sarath T S completed MBBS and MS (General Surgery) from Thiruvananthapuram Medical college, MCh (Plastic Surgery) from Kottayam Medical College, Dr Dhanya Prakash completed BDS from RMDCH, Annamalai University, MDS from Azeezia Dental College and PGCE from Annamalai University, Dr sreelal sreedharan completed M.B.B.S and M.S General Surgery from Trivandrum Medical College and MCh plastic surgery from Kottayam Medical College."
              label="Hair Transplantation"
              path="/services"
            />
            <CardItem
              src={img3}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend tincidunt massa, vel ultrices dui rhoncus in. Suspendisse dictum leo a quam ultricies sagittis. Nam pharetra tristique justo at luctus. Sed convallis est non elit pellentesque, vitae fermentum augue lacinia. Vivamus gravida sed ante a vehicula."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img4}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Sri Krishna"
              path="/services"
            />
            <CardItem
              src={img5}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Cosmetic Surgeries"
              path="/products"
            />
            <CardItem
              src={img1}
              text="Ride through the Sahara Desert on a guided camel tour"
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
