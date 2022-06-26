import React from "react";
import "../styles/our-partners.css";
import partner1 from "../images/Partners/1.png";
import partner2 from "../images/Partners/2.png";
import partner3 from "../images/Partners/3.png";
import partner4 from "../images/Partners/4.png";
import partner5 from "../images/Partners/5-1.png";
import partner6 from "../images/Partners/6.png";
import partner7 from "../images/Partners/7.png";
import partner8 from "../images/Partners/8.png";
import partner9 from "../images/Partners/9.png";
import partner10 from "../images/Partners/10.png";
import partner11 from "../images/Partners/11.png";
import partner12 from "../images/Partners/12.png";
import partner13 from "../images/Partners/13.png";

// import partner1Mob from "../images/Partners/mob-1.png";
// import partner2Mob from "../images/Partners/mob-2.png";
// import partner3Mob from "../images/Partners/mob-3.png";
// import partner4Mob from "../images/Partners/mob-4.png";
// import partner5Mob from "../images/Partners/mob-5-1.png";
// import partner6Mob from "../images/Partners/mob-6.png";
// import partner7Mob from "../images/Partners/mob-7.png";
// import partner8Mob from "../images/Partners/mob-8.png";
// import partner9Mob from "../images/Partners/mob-9.png";
// import partner10Mob from "../images/Partners/mob-10-1.png";
// import partner11Mob from "../images/Partners/mob-11.png";
// import partner12Mob from "../images/Partners/mob-12.png";
// import partner13Mob from "../images/Partners/mob-13.png";

import { useTranslation } from "react-i18next";

export default function OurPartners() {
  const { t, i18n } = useTranslation();

  return (
    <div id="ourpartners" className="sec-our-partners">
      <h2>{t("ourPartners.1")}</h2>
      <div className="row">
        <img className="desk" src={partner1} />
        <img className="desk" src={partner2} />
        <img className="desk" src={partner3} />
        <img className="desk" src={partner4} />
        <img style={{ width: 100 }} className="desk" src={partner5} />
        <img className="desk" src={partner6} />
        <img className="desk" src={partner7} />
      </div>
      <div className="row">
        <img className="desk" src={partner8} />
        <img className="desk" src={partner9} />
        <img className="desk" src={partner10} />
        <img className="desk" src={partner11} />
        <img className="desk" src={partner12} />
        <img className="desk" src={partner13} />
      </div>
    </div>
  );
}
