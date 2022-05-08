import React, { useEffect } from "react";
import "./ServiceDetails.css";
import hti from "../../images/hair-transplant.png";
import Cosmetic from "../../images/Cosmetic.png";
import HandSurgery from "../../images/HandSurgery.png";
import Microvascular from "../../images/Microvascular.png";
import ReconstructiveSurgery from "../../images/ReconstructiveSurgery.png";
import Maxillofacial from "../../images/Maxillofacial.png";

import ServiceCard from "./ServiceCard";

function ServiceDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="service__details">
      <div className="service__title">
        <h1>Services We Offer</h1>
      </div>
      <div className="service__cards">
        <ServiceCard
          imgSrc={HandSurgery}
          title="Hand Surgery"
          desc="Reimplantation of fingers, Tendon repairs, Nerve repairs, Tendon transfer, Fixation of fracture of small bones, CTS release and DCR."
        />
        <ServiceCard
          imgSrc={Microvascular}
          title="Vascular & Microvascular Surgery"
          desc="AV fistula creation, Vascular repairs, Femorotibial bypass, Repair of Vascular malformation, Finger and hand Reimplant surgeries."
        />
        <ServiceCard
          imgSrc={Cosmetic}
          title="Cosmetic Surgeries"
          desc=" Cosmetic plastic surgery enhances or reshapes parts of the body which includes Abdominoplasty, Body contouring and liposuction, Rhinoplasty, Lip augmentation, Breast reduction & augmentation etc."
        />
        <ServiceCard
          imgSrc={ReconstructiveSurgery}
          title="Reconstructive Surgery"
          desc="Mainly done in three categories; in congenetial anomalies, in trauma and in malignancies."
        />
        <ServiceCard
          imgSrc={hti}
          title="Hair Transplantation"
          desc="Regularly doing hair transplant for more than 10 years, focusing in micro fue in its refined form. For Male pattern baldness, mustache, beard, eyebrows and for female pattern hair loss."
        />
        <ServiceCard
          imgSrc={Maxillofacial}
          title="Oral & Maxillofacial Surgeries"
          desc=" Repair of all facial bone fractures, dentoalveolar injuries , oral cancer evaluation and biopsy, TMJ problems, orthognathic surgeries, Pathology of upper and lower jaw, oral cavity etc"
        />
      </div>
    </div>
  );
}
export default ServiceDetails;
