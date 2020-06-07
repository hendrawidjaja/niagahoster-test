import React from "react";
import modulesJSON from "../json/module.json";
import _ from "lodash";

const RenderModule = () => {
  return (
    <>
      <div className="modules__row">
        <div className="modules__container">
          <h4>Modul Lengkap untuk Menjalankan Aplikasi PHP Anda.</h4>
        </div>
      </div>
      <div className="modules__row">
        <div className="modules__container">
          {_.map(modulesJSON, (value, index) => {
            let chunks = _.chunk(value, 15);
            return (
              <React.Fragment key={index}>
                <div className="modules__wrapper">
                  {chunks[0].map((value, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p>{value.text}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="modules__wrapper">
                  {chunks[1].map((value, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p>{value.text}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="modules__wrapper">
                  {chunks[2].map((value, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p>{value.text}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
                <div className="modules__wrapper">
                  {chunks[3].map((value, index) => {
                    return (
                      <React.Fragment key={index}>
                        <p>{value.text}</p>
                      </React.Fragment>
                    );
                  })}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="button-wrapper">
        <button className="btn btn-round btn-light"> Selengkapnya</button>
      </div>
    </>
  );
};

export default RenderModule;
