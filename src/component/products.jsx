import React from "react";
import productsJSON from "../json/products.json";

const products = productsJSON.block;
const RenderProducts = () => {
  return (
    <>
      <div className="teaser__row">
        <div className="teaser__container">
          <h2 className="align-center">Paket Hosting Singapura yang Tepat</h2>
          <h3 className="align-center">
            Diskon 40% + Domain dan SSL Gratis untuk Anda
          </h3>
        </div>
      </div>
      <div className="teaser__row">
        <div className="teaser__container teaser__container--card">
          {products.map((value, index) => {
            return (
              value.show && (
                <div
                  key={index}
                  className={value.highlight ? "card highlight" : "card"}>
                  <div className="card__row">
                    <h4 className="bold">{value.title}</h4>
                  </div>

                  <div className="card__row">
                    <div className="card__row--block">
                      {value.prices &&
                        value.prices.map((value, index) => {
                          return value.pretext ? (
                            <div
                              key={index}
                              className="price__row price__row--now">
                              <span className="price__row--symbol">Rp. </span>
                              <span className="price__row--pretext bold">
                                {value.pretext}
                              </span>
                              <span className="bold">.{value.text}</span>
                              <span>/ bln</span>
                            </div>
                          ) : (
                            <div key={index} className="price__row">
                              <span className="strikethrough">
                                Rp. {value.text}
                              </span>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className="card__row">
                    {value.user && (
                      <div className="card__row--block card__row--block--user">
                        <span className="bold">{value.user} &nbsp;</span>
                        <span>Pengguna Terdaftar</span>
                      </div>
                    )}
                  </div>
                  <div className="card__row">
                    {value.points &&
                      value.points.map((value, index2) => {
                        return (
                          <div key={index2} className="points__row">
                            {value.pretext && (
                              <div className="points__row--block">
                                <span className="bold">
                                  {value.pretext} &nbsp;
                                </span>
                                <span>{value.text}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    <div className="button-wrapper">
                      <button className="btn-round">Pilih Sekarang</button>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RenderProducts;
