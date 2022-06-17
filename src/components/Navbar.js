import React from "react";
import "./styles/navbar.css";
import logo from "./images/logo.png";
import menu from "./images/menu.png";
import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  return (
    <div
      style={{ fontFamily: language == "ar" && "SF Arabic" }}
      className="navbar"
    >
      <Link smooth to="/#home" className="logo">
        <img src={logo} alt="logo" />
      </Link>

      <div className="nav-conainer">
        <ul
          style={{ direction: language === "ar" ? "rtl" : "ltr" }}
          className="nav"
        >
          <li>
            <Link smooth to="/#home">
              {t("navbar.1")}
            </Link>
          </li>
          <li>
            <Link
              smooth
              to="/#services"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
            >
              {t("navbar.2")}
            </Link>
          </li>
          <li>
            <Link smooth to="/#whyus">
              {t("navbar.3")}
            </Link>
          </li>
          <li>
            <Link smooth to="/#ourpartners">
              {t("navbar.4")}
            </Link>
          </li>
          <li>
            <Link smooth to="/#ourclients">
              {t("navbar.5")}
            </Link>
          </li>
        </ul>
        <li className="contact-btn">
          <Link to="/contact">
            {t("navbar.6")}
            <FaChevronRight />
          </Link>
        </li>
      </div>
    </div>
  );
}
