import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faCommentAlt,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import navMenuJSON from "../json/navmenu.json";
import svgLogo from "../assets/svg/niagahoster-logo.png";

const RenderNav = () => {
  const menus = navMenuJSON?.block;
  const [isOpen, setIsOpen] = useState(false);
  const [isCloseClicked, setCloseClicked] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav__row">
      <div className="nav__container">
        <Navbar light expand="md" className="nav__teaser">
          {!isCloseClicked && (
            <p>
              Gratis Ebook 9 Cara Cerdas Menggunakan Domain
              <span onClick={() => setCloseClicked(true)}> [x]</span>
            </p>
          )}
          <Nav navbar>
            <NavItem>
              <FontAwesomeIcon icon={faPhone} />
              <NavLink to="/#">0274-5305505</NavLink>
            </NavItem>
            <NavItem>
              <FontAwesomeIcon icon={faCommentAlt} />
              <NavLink to="/#">Live Chat</NavLink>
            </NavItem>
            <NavItem>
              <FontAwesomeIcon icon={faSignInAlt} />
              <NavLink to="/#">Member Area</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>

      <div className="nav__container">
        <Navbar light expand="md">
          <NavbarBrand href="/">
            <img src={svgLogo} alt="Niaga Hoster" />
          </NavbarBrand>

          <button className="show-mobile">Login</button>

          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              {menus.map(
                (value, index) =>
                  value.show && (
                    <React.Fragment key={index}>
                      <NavItem>
                        <NavLink className={value.className} href={value.href}>
                          {value.text}
                        </NavLink>
                      </NavItem>
                    </React.Fragment>
                  )
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default RenderNav;
