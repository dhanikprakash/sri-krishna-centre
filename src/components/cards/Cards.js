import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img9 from "../../images/img-9.jpg";
import img2 from "../../images/img-2.jpg";
import img3 from "../../images/img-3.jpg";
import img4 from "../../images/img-4.jpg";
import img8 from "../../images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Centre for Plastic Faciomaxillary and Hair Transplant</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img9}
              text="Nam ullamcorper erat vel ligula porta tristique. Proin vestibulum dui a mattis maximus. Morbi hendrerit dui non auctor auctor. Duis molestie massa in tellus faucibus, a accumsan purus pulvinar. Quisque luctus ante vel risus sollicitudin molestie a nec neque. Donec neque arcu, condimentum id arcu ut, fringilla pharetra ligula."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend tincidunt massa, vel ultrices dui rhoncus in. Suspendisse dictum leo a quam ultricies sagittis. Nam pharetra tristique justo at luctus. Sed convallis est non elit pellentesque, vitae fermentum augue lacinia. Vivamus gravida sed ante a vehicula."
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={img8}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
