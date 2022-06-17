import React from "react";
import "../styles/our-partners.css";
import partner1 from "../images/Partners/1.png";
import partner2 from "../images/Partners/2.png";
import partner3 from "../images/Partners/3.png";
import partner4 from "../images/Partners/4.png";
import partner5 from "../images/Partners/5.png";
import partner6 from "../images/Partners/6.png";
import partner7 from "../images/Partners/7.png";
import partner8 from "../images/Partners/8.png";
import partner9 from "../images/Partners/9.png";
import partner10 from "../images/Partners/10.png";
import partner11 from "../images/Partners/11.png";
import partner12 from "../images/Partners/12.png";
import partner13 from "../images/Partners/13.png";

import partner1Mob from "../images/Partners/mob-1.png";
import partner2Mob from "../images/Partners/mob-2.png";
import partner3Mob from "../images/Partners/mob-3.png";
import partner4Mob from "../images/Partners/mob-4.png";
import partner5Mob from "../images/Partners/mob-5.png";
import partner6Mob from "../images/Partners/mob-6.png";
import partner7Mob from "../images/Partners/mob-7.png";
import partner8Mob from "../images/Partners/mob-8.png";
import partner9Mob from "../images/Partners/mob-9.png";
import partner10Mob from "../images/Partners/mob-10-1.png";
import partner11Mob from "../images/Partners/mob-11.png";
import partner12Mob from "../images/Partners/mob-12.png";
import partner13Mob from "../images/Partners/mob-13.png";

import { useTranslation } from "react-i18next";

export default function OurPartners() {
  const { t, i18n } = useTranslation();

  return (
    <div id="ourpartners" className="sec-our-partners">
      <h2>{t("ourPartners.1")}</h2>
      <div className="row">
        <img className="desk" src={partner1} alt="" />
        <img className="desk" src={partner2} alt="" />
        <img className="desk" src={partner3} alt="" />
        <img className="desk" src={partner4} alt="" />
        <img className="desk" src={partner5} alt="" />
        <img className="desk" src={partner6} alt="" />
        <img className="desk" src={partner7} alt="" />

        <img className="mob" src={partner1Mob} alt="" />
        <img className="mob" src={partner2Mob} alt="" />
        <img className="mob" src={partner3Mob} alt="" />
        <img className="mob" src={partner4Mob} alt="" />
        <img className="mob" src={partner5Mob} alt="" />
        <img className="mob" src={partner6Mob} alt="" />
        <img className="mob" src={partner7Mob} alt="" />
      </div>
      <div className="row">
        <img className="desk" src={partner8} alt="" />
        <img className="desk" src={partner9} alt="" />
        <img className="desk" src={partner10} alt="" />
        <img className="desk" src={partner11} alt="" />
        <img className="desk" src={partner12} alt="" />
        <img className="desk" src={partner13} alt="" />

        <img className="mob" src={partner8Mob} alt="" />
        <img className="mob r" src={partner9Mob} alt="" />
        <img className="mob" src={partner10Mob} alt="" />
        <img className="mob l" src={partner11Mob} alt="" />
        <img className="mob" src={partner12Mob} alt="" />
        <img className="mob" src={partner13Mob} alt="" />
      </div>
    </div>
  );
}
