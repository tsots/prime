import React from "react";

const ServicesHome = ({ icon, title, text, Url }) => {
  return (
    <div className="card">
      <div className="card-heading">
        {/* <div className="card-heading__icon">
          
        </div> */}
        <div className="card-heading__title">
          <span>
            <img src={icon} alt="" />
          </span>
          {title}
        </div>
      </div>
      <div className="card__text">{text}</div>

      <a href={Url} className="button card__text">
        Learn more
      </a>
    </div>
  );
};

export default ServicesHome;

export const Solar = () => {
  return (
    <ServicesHome
      icon="/icon/solar-icon.svg"
      title="Solar Power Solutions"
      text="Embrace the power of the sun with our customized solar solutions that cater to residential, commercial, and industrial needs."
      Url="/services/solar"
    />
  );
};

export const Wind = () => {
  return (
    <ServicesHome
      icon="/icon/turbine-icon.svg"
      title="Wind Energy Systems"
      text="Tap into the wind's potential to generate clean and reliable energy, contributing to a cleaner and more sustainable future."
      Url="/services/wind"
    />
  );
};
