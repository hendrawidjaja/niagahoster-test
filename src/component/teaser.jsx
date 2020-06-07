import React from "react";
import teaserJSON from "../json/teaser.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import svgBanner from "../assets/svg/illustration banner PHP hosting-01.svg";
import svgZenGuard from "../assets/svg/icon_PHP_Hosting_zendguard.svg";
import svgComposer from "../assets/svg/icon_PHP_Hosting_composer.svg";
import svgIonCube from "../assets/svg/icon_PHP_Hosting_ioncube.svg";

const RenderTeaser = () => {
  const teaser = teaserJSON.block;
  return (
    <>
      <div className="teaser__row">
        <div className="teaser__container">
          {teaser.map((value, index) => (
            <React.Fragment key={index}>
              {value.title && <h1>{value.title}</h1>}
              {value.teaser && <h2>{value.teaser}</h2>}
              {value.text && (
                <div className="text__wrapper">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <p>{value.text}</p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="teaser__container">
          <img src={svgBanner} alt="Banner PHP" />
        </div>
      </div>

      <div className="teaser__row teaser__row--small">
        <div className="teaser__container img-icon">
          <img className="" src={svgZenGuard} alt="Zen Guard" />
          <p className="align-center">PHP Zend Guard Loader</p>
        </div>
        <div className="teaser__container img-icon">
          <img className="" src={svgComposer} alt="Composer" />
          <p className="align-center">PHP Composer</p>
        </div>
        <div className="teaser__container img-icon">
          <img className="" src={svgIonCube} alt="Ion Cube" />
          <p className="align-center">PHP ionCube Loader</p>
        </div>
      </div>
    </>
  );
};

export default RenderTeaser;
