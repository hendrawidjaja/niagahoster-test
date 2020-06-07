import React from "react";
import servicesJSON from "../json/services.json";

const services = servicesJSON.block;
const RenderServices = () => {
  return (
    <div className="footer__items__container">
      {servicesJSON.title && (
        <h5 className="standard__font">{servicesJSON.title}</h5>
      )}

      <div className="footer__items__wrapper standard__font">
        <ul className="footer__items--list">
          {services.map((value, index) => {
            return (
              value.show && (
                <React.Fragment key={index}>
                  {value.text && <a href="/#">{value.text}</a>}
                </React.Fragment>
              )
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RenderServices;
