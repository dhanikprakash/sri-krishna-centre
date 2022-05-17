import React from "react";
import "../../App.css";
import { Button, ButtonV2 } from "../button/Button";
import { useHistory } from "react-router-dom";
import "./HeroSection.css";
import video from "../../videos/Video-1.mp4";

function HeroSection() {
  const history = useHistory();
  return (
    <div className="hero-container">
      <video SRC={video} autoPlay loop muted />
      <h1>Sri Krishna</h1>
      <p>Centre for Plastic Faciomaxillary and Hair Transplant</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => history.push("/team")}
        >
          Team
        </Button>
        <ButtonV2
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={() => history.push("/contact")}
        >
          Contact Us
        </ButtonV2>
      </div>
    </div>
  );
}
export default HeroSection;
