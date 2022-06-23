import React, { useState } from "react";
import "./styles/mob-navbar.css";
import { HashLink as Link } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

import menuIcon from "./images/menu.png";
import menuIcon2 from "./images/menu2.png";
import closeIcon from "./images/close.png";
import logo from "./images/mob-logo.png";
import blackLogo from "./images/black-mob-logo.png";
import earthIconMob from "./images/footer/8-2.png";

export default function MobNavbar({ color }) {
  const { t, i18n } = useTranslation();
  const [menu, setMenu] = useState(false);

  function handleClick(lang) {
    i18n.changeLanguage(lang);
    setMenu(false);
  }
  const language = i18n.language;

  return (
    <div className="mob-navbar">
      <div className="mob-logo">
        <img src={color == "black" ? blackLogo : logo} alt="logo" />
        <div onClick={() => setMenu(true)} className="menu">
          <img src={color == "black" ? menuIcon2 : menuIcon} alt="logo" />
        </div>

        {menu && <div onClick={() => setMenu(false)} className="layout"></div>}
        <div className={menu ? "active-menu active" : "active-menu"}>
          <ul onClick={() => setMenu(false)}>
            <li>
              <Link smooth to="/#">
                {t("navbar.1")}
              </Link>
            </li>
            <li>
              <Link smooth to="/#services">
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
            <li>
              <Link smooth to="/contact">
                {t("navbar.6")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
