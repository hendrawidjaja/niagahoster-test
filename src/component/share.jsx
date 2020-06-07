import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const RenderShare = () => {
  return (
    <>
      <div className="container__share">
        <div className="share__row">
          <div className="share__wrapper">
            <p>Bagikan jika Anda menyukai halaman ini.</p>
          </div>
        </div>
        <div className="share__row">
          <div className="share__wrapper">
            <p>
              Perlu <span className="bold bold__font">BANTUAN?</span> Hubungi
              Kami: <span className="bold bold__font">0274-5305505</span>
            </p>
            <div className="button-wrapper">
              <FontAwesomeIcon icon={faComments} />
              <button className="btn-round">
                <span>Live Chat</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RenderShare;
