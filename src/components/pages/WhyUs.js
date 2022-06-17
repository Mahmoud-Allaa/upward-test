import React from "react";
import "../styles/why-us.css";
import culture4 from "../images/04.png";
import culture5 from "../images/05.png";
import culture4Mob from "../images/04-mob.png";
import culture5Mob from "../images/05-mob.png";

import { useTranslation } from "react-i18next";

export default function WhyUs() {
  const { t, i18n } = useTranslation();

  return (
    <div id="whyus" className="sec-why-us">
      <h2> {t("whyUs.1")}</h2>
      <div className="cultures">
        <div className="culture">
          <span className="img">{t("whyUs.2")}</span>
          <p>{t("whyUs.3")}</p>
        </div>

        <div className="culture mg">
          <span className="img">{t("whyUs.4")}</span>
          <p>{t("whyUs.5")}</p>
        </div>

        <div className="culture">
          <span className="img">{t("whyUs.6")}</span>
          <p>{t("whyUs.7")}</p>
        </div>
        <img className="culture4 desk" src={culture4} />
        <img className="culture5 desk" src={culture5} />
        <img className="culture4 mob" src={culture4Mob} />
        <img className="culture5 mob" src={culture5Mob} />
      </div>
    </div>
  );
}
