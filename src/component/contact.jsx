import React from "react";
import contact1JSON from "../json/contact1.json";
import contact2JSON from "../json/contact2.json";

const contact1 = contact1JSON.block;
const contact2 = contact2JSON.block;

const RenderContact = () => {
  return (
    <div className="footer__items__container">
      {contact1JSON.title && (
        <h5 className="standard__font">{contact1JSON.title}</h5>
      )}

      <div className="footer__items__wrapper standard__font">
        <ul className="footer__items--list">
          {contact1.map(
            (value, index) =>
              value.show && (
                <React.Fragment key={index}>
                  {value.text && <li>{value.text}</li>}
                </React.Fragment>
              )
          )}
        </ul>
      </div>

      <div className="footer__items__wrapper--2 standard__font">
        <ul className="footer__items--list">
          {contact2.map(
            (value, index) =>
              value.show && (
                <React.Fragment key={index}>
                  {value.text && <li>{value.text}</li>}
                </React.Fragment>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RenderContact;
