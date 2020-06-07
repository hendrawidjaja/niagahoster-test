import React from "react";
import techJSON from "../json/tech.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const tech = techJSON.block;

const RenderTech = () => {
  return (
    <>
      <div className="tech__row">
        <div className="tech__container">
          <h4>Powerful dengan Limit PHP yang lebih besar</h4>
        </div>
      </div>

      <div className="tech__row">
        <div className="tech__container">
          {tech.map((value, index) => {
            return (
              index < 3 && (
                <div key={index} className="tech__wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>{value.text}</p>
                </div>
              )
            );
          })}
        </div>

        <div className="tech__container">
          {tech.map((value, index) => {
            return (
              index >= 3 && (
                <div key={index} className="tech__wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>{value.text}</p>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RenderTech;
