import React, { useState } from "react";
import "./styles/navbar.css";
import logo from "./images/logo.png";
import menu from "./images/menu.png";
import { FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { NavHashLink as Link } from "react-router-hash-link";

import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useEffect } from "react";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [navArrow, setNavArrow] = useState("home");

  return (
    <div
      style={{ fontFamily: language == "ar" && "SF Arabic" }}
      className="navbar"
    >
      <Link
        onClick={() => setNavArrow("home")}
        smooth
        to="/#home"
        className="logo"
      >
        <img src={logo} alt="logo" />
      </Link>

      <div className="nav-conainer">
        <ul
          style={{ direction: language === "ar" ? "rtl" : "ltr" }}
          className="nav"
        >
          <li
            onMouseOver={() => setNavArrow("home")}
            onMouseOut={() => setNavArrow("null")}
          >
            <Link smooth to="/#home">
              {t("navbar.1")}
            </Link>
            {navArrow == "home" && <KeyboardArrowDownIcon />}
          </li>
          <li
            onMouseOver={() => setNavArrow("services")}
            onMouseOut={() => setNavArrow("null")}
          >
            <Link smooth to="/#services">
              {t("navbar.2")}
            </Link>
            {navArrow == "services" && <KeyboardArrowDownIcon />}
          </li>
          <li
            onMouseOver={() => setNavArrow("whyus")}
            onMouseOut={() => setNavArrow("null")}
          >
            <Link smooth to="/#whyus">
              {t("navbar.3")}
            </Link>
            {navArrow == "whyus" && <KeyboardArrowDownIcon />}
          </li>
          <li
            onMouseOver={() => setNavArrow("ourpartners")}
            onMouseOut={() => setNavArrow("null")}
          >
            <Link smooth to="/#ourpartners">
              {t("navbar.4")}
            </Link>
            {navArrow == "ourpartners" && <KeyboardArrowDownIcon />}
          </li>
          <li
            onMouseOver={() => setNavArrow("ourclients")}
            onMouseOut={() => setNavArrow("null")}
          >
            <Link smooth to="/#ourclients">
              {t("navbar.5")}
            </Link>
            {navArrow == "ourclients" && <KeyboardArrowDownIcon />}
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
