import React from "react";
import RenderContact from "./contact";
import RenderFooterItems from "./footerItems";

import servicesJSON from "../json/services.json";
import servicesHostingJSON from "../json/servicesHosting.json";
import tutorialJSON from "../json/tutorial.json";
import aboutUsJSON from "../json/aboutUs.json";
import whyJSON from "../json/why.json";

import iconFB from "../assets/svg/icon-facebook.svg";
import iconG from "../assets/svg/icon-google-plus.svg";
import iconTwitter from "../assets/svg/icon-twitter.svg";

import paymentAlto from "../assets/svg/payment_alto.svg";
import paymentAtmBersama from "../assets/svg/payment_atm-bersama.svg";
import paymentBca from "../assets/svg/payment_bca.svg";
import paymentBni from "../assets/svg/payment_bni.svg";
import paymentMandiri from "../assets/svg/payment_mandiri.svg";
import paymentMaster from "../assets/svg/payment_master.svg";
import paymentVisa from "../assets/svg/payment_visa.svg";

const RenderFooter = () => {
  return (
    <div className="container__footer">
      <div className="footer__row">
        <div className="footer__wrapper">
          <RenderContact />
          <RenderFooterItems data={servicesJSON} />
          <RenderFooterItems data={servicesHostingJSON} />
          <RenderFooterItems data={tutorialJSON} />
          <RenderFooterItems data={aboutUsJSON} />
          <RenderFooterItems data={whyJSON} />

          <div className="footer__items__container newsletter">
            <h5 className="standard__font">NEWSLETTER</h5>

            <form>
              <input type="text" placeholder="Email" />
              <button className="btn btn-primary">Berlangganan</button>
            </form>

            <div className="footer__items__wrapper standard__font">
              <ul className="footer__items--list">
                <li>
                  Dapatkan promo dan konten menarik dari penyedia hosting
                  terbaik Anda
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__items__container social-media">
            <div className="footer__items__wrapper standard__font">
              <img src={iconFB} alt="" />
              <img src={iconTwitter} alt="" />
              <img src={iconG} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer__row">
        <div className="footer__wrapper">
          <div className="footer__items__container payment-icons">
            <h5 className="standard__font">PEMBAYARAN</h5>

            <div className="footer__items__wrapper standard__font">
              <img src={paymentBca} alt="Bca" />
              <img src={paymentMandiri} alt="Mandiri" />
              <img src={paymentBni} alt="Bni" />
              <img src={paymentVisa} alt="Visa" />
              <img src={paymentMaster} alt="Master" />
              <img src={paymentAtmBersama} alt="ATM Bersama" />
              <img src={paymentAlto} alt="Alto" />
            </div>

            <span>
              Aktivasi instan dengan e-Payment Hosting dan domain langsung
              aktif!
            </span>
          </div>
        </div>
      </div>

      <div className="footer__row">
        <div className="footer__items__container copyright">
          <span className="standard__font">
            Copyright @2016 Niagahoster | Hosting powerred by PHP7, CloudLinux,
            CloudFlare, BitNinja and DC Biznet Technovillage Jakarta
          </span>

          <div className="button-wrapper">
            <button className="standard__font">Syarat dan Ketentuan</button>
            <span> | </span>
            <button className="standard__font">Kebijakan Privasi</button>
          </div>
        </div>

        <div className="footer__items__container technology">
          <span className="standard__font">
            Cloud VPS Murah powered by Webuzo Softaculous, Intel SSD and cloud
            computing technology
          </span>
        </div>
      </div>
    </div>
  );
};

export default RenderFooter;
