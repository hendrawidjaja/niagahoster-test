import React from "react";
import imgSupport from "../assets/images/Image support.png";

const RenderSupport = () => {
  return (
    <div className="support__row">
      <div className="support__container">
        <h3>Linux Hosting yang Stabil dengan Teknologi LVE</h3>

        <div className="support__row">
          <p>
            SuperMicro <span className="bold">Intel Xeon 24-Cores</span> server
            dengan RAM <span className="bold">128 GB</span> dan teknologi{" "}
            <span className="bold">LVE CloudLinux</span> untuk stabilitas server
            Anda. Dilengkapi dengan <span className="bold">SSD</span> untuk
            kecepatan <span className="bold">MySQL</span> dan caching. Apache
            load balancer berbasis LiteSpeed Technologies,
            <span className="bold"> CageFS</span> security,{" "}
            <span className="bold">Raid-10</span> protection dan auto backup
            untuk kemananan website PHP Anda.
          </p>
        </div>

        <div className="support__row">
          <div className="button-wrapper">
            <button type="button" className="btn-round btn-primary">
              Pilih Hosting Anda
            </button>
          </div>
        </div>
      </div>

      <div className="support__container">
        <img src={imgSupport} alt="Support" />
      </div>
    </div>
  );
};

export default RenderSupport;
