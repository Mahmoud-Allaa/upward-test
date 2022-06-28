import React, { useState } from "react";
import "../styles/contact.css";
import img from "../images/contact-img.png";
import MobNavbar from "../MobNavbar";
import { HashLink as Link } from "react-router-hash-link";

import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [modal, setModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_38vs905",
        "template_45w2gmd",
        e.target,
        "d_w_LbEzVYERRyRM2"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setModal(true);
  };

  return (
    <div id="contact" className="sec-contact">
      <MobNavbar color="black" />
      <div className="text">
        <span>{t("contact.1")}</span>
        <h2>{t("contact.2")}</h2>
        <img src={img} alt="" />
      </div>
      <form onSubmit={sendEmail}>
        <label htmlFor="">{t("contact.3")}</label>
        <input name="name" type="text" placeholder={t("contact.3")} required />
        <label htmlFor="">{t("contact.4")}</label>
        <input
          name="phone"
          type="numeric"
          placeholder={t("contact.4")}
          required
        />
        <label htmlFor="">{t("contact.5")}</label>
        <input
          name="email"
          type="email"
          placeholder={t("contact.5")}
          required
        />
        <label htmlFor="">{t("contact.6")}</label>
        <input name="company" type="text" placeholder={t("contact.6")} />
        <label htmlFor="reason">{t("contact.7")}</label>
        <select id="reason" name="reason">
          <option hidden>{t("contact.7-1")}</option>
          <option value="Project">{t("contact.7-2")}</option>
          <option value="Job vacancy">{t("contact.7-3")}</option>
          <option value="Partnership">{t("contact.7-4")}</option>
          <option value="Other">{t("contact.7-5")}</option>
        </select>
        <label htmlFor="">{t("contact.8")}</label>
        <textarea
          name="message"
          rows="4"
          cols="50"
          placeholder={t("contact.8")}
        />
        <button type="submit">{t("contact.9")}</button>
      </form>

      {modal && (
        <div className="contact-modal">
          <div onClick={() => setModal(false)} className="overlay">
            <div className="modal-content">
              <span>{t("contact.10")}</span>
              <Link smooth to="/#">
                {t("contact.11")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
