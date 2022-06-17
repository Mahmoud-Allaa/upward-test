import React from "react";
import "../styles/contact.css";
import img from "../images/contact-img.png";
import MobNavbar from "../MobNavbar";

import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div id="contact" className="sec-contact">
      <MobNavbar color="black" />
      <div className="text">
        <span>{t("contact.1")}</span>
        <h2>{t("contact.2")}</h2>
        <img src={img} alt="" />
      </div>
      <form>
        <label htmlFor="">{t("contact.3")}</label>
        <input type="text" placeholder={t("contact.3")} />
        <label htmlFor="">{t("contact.4")}</label>
        <input type="numeric" placeholder={t("contact.4")} />
        <label htmlFor="">{t("contact.5")}</label>
        <input type="email" placeholder={t("contact.5")} />
        <label htmlFor="">{t("contact.6")}</label>
        <input type="text" placeholder={t("contact.6")} />
        <label htmlFor="reason">{t("contact.7")}</label>
        <select id="reason" name="reason">
          <option hidden>{t("contact.7-1")}</option>
          <option value="Project">{t("contact.7-2")}</option>
          <option value="Job vacancy">{t("contact.7-3")}</option>
          <option value="Partnership">{t("contact.7-4")}</option>
          <option value="Other">{t("contact.7-5")}</option>
        </select>
        <label htmlFor="">{t("contact.8")}</label>
        <textarea rows="4" cols="50" placeholder={t("contact.8")} />
        <button type="submit">{t("contact.9")}</button>
      </form>
    </div>
  );
}
