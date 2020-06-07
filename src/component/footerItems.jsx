import React from "react";

const RenderFooterItems = (props) => (
  <div className="footer__items__container">
    {props.data.title && <h5 className="standard__font">{props.data.title}</h5>}

    <div className="footer__items__wrapper standard__font">
      <ul className="footer__items--list">
        {props.data.block.map((value, index) => {
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

export default RenderFooterItems;
