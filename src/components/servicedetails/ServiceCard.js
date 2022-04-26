import React from "react";

function ServiceCard({ imgSrc, title, desc }) {
  return (
    <article className="service__card">
      <img className="service__icon" src={imgSrc} alt="" />
      <h5>{title}</h5>
      <small>{desc}</small>
    </article>
  );
}

export default ServiceCard;
