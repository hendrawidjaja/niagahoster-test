import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import svgBannerSupport from "../assets/svg/illustration_banner_support_laravel_hosting.svg";

const RenderFramework = () => {
  return (
    <>
      <h4>Mendukung Penuh Framework Laravel</h4>
      <div className="row__framework">
        <div className="wrapper__framework">
          <p>
            Tak perlu menggunakan dedicated server ataupun VPS yang mahal.
            Layanan PHP hosting murah kami mendukung penuh framework favorit
            Anda
          </p>

          <div className="grouping__framework">
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>
              Install Laravel <span className="bold">1 klik</span> dengan
              Softaculous Installer.
            </p>
          </div>
          <div className="grouping__framework">
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>
              Mendukung ekstensi <span className="bold">PHP MCrypt</span>,{" "}
              <span className="bold">phar</span>,{" "}
              <span className="bold">mbstring</span>,{" "}
              <span className="bold">json</span>, dan{" "}
              <span className="bold">fileinfo</span>.
            </p>
          </div>
          <div className="grouping__framework">
            <FontAwesomeIcon icon={faCheckCircle} />
            <p>
              Tersedia <span className="bold">Composer</span> dan{" "}
              <span className="bold">SSH</span> untuk menginstal packages
              pilihan Anda.
            </p>
          </div>

          <span className="row__framework--text">
            Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis
          </span>

          <div className="button-wrapper">
            <button className="btn-round btn-primary">
              Pilih Hosting Anda
            </button>
          </div>
        </div>

        <div className="wrapper__framework">
          <img src={svgBannerSupport} alt="Banner Laravel" />
        </div>
      </div>
    </>
  );
};

export default RenderFramework;

/*


Nb. Composer dan SSH hanya tersedia pada paket Personal dan Bisnis

Pilih Hosting Anda */
