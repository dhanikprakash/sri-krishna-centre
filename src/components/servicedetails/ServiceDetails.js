import React from "react";
import "./ServiceDetails.css";
import hti from "../../images/hair-transplant.png";
import ava1 from "../../images/img_avatar.png";
import ava2 from "../../images/img_avatar2.png";
import ServiceCard from "./ServiceCard";

function ServiceDetails() {
  return (
    <div className="service__details">
      <div className="service__title">
        <h1>Services We Offer</h1>
      </div>
      <div className="service__cards">
        <ServiceCard
          imgSrc={hti}
          title="Hair Transplant"
          desc="Landing Pages, User Flow, Wireframing, Prototyping, Mobile App"
        />
        <ServiceCard
          imgSrc={ava1}
          title="Clients"
          desc="Character Design, Icon Set, Illustration Guide, Illustration Set Landing Pages, User Flow, Wireframing, Prototyping, Mobile App"
        />
        <ServiceCard
          imgSrc={ava2}
          title="surgeries"
          desc="Visual Identity, Stationary Kit, Marketing Materials"
        />
        <ServiceCard
          imgSrc={ava2}
          title="surgeries"
          desc="Visual Identity, Stationary Kit, Marketing Materials"
        />
        <ServiceCard
          imgSrc={hti}
          title="Hair Transplant"
          desc="Landing Pages, User Flow, Wireframing, Prototyping, Mobile App"
        />
        <ServiceCard
          imgSrc={ava1}
          title="Clients"
          desc="Character Design, Icon Set, Illustration Guide, Illustration Set"
        />
      </div>
    </div>
  );
}
export default ServiceDetails;
