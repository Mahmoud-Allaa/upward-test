import React, { useState } from "react";
import "../styles/footer.css";
import logo from "../images/footer-logo.png";
import logoMob from "../images/footer-logo-mob.png";
import faceIcon from "../images/footer/1.png";
import instaIcon from "../images/footer/2.png";
import linkedIcon from "../images/footer/3.png";
import twittIcon from "../images/footer/4.png";
import phoneIcon from "../images/footer/5.png";
import mailIcon from "../images/footer/6.png";
import locationIcon from "../images/footer/7.png";
import earthIcon from "../images/footer/8.png";
import {} from "react-icons/fa";

import faceIconMob from "../images/footer/mob-1.png";
import instaIconMob from "../images/footer/mob-2.png";
import linkedIconMob from "../images/footer/mob-3.png";
import twittIconMob from "../images/footer/mob-4.png";
import phoneIconMob from "../images/footer/mob-5.png";
import mailIconMob from "../images/footer/mob-6.png";
import locationIconMob from "../images/footer/mob-7.png";
import earthIconMob from "../images/footer/mob-8.png";

import { HashLink as Link } from "react-router-hash-link";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  const language = i18n.language;
  console.log(language);

  return (
    <div id="footer" className="sec-footer">
      <div className="top-part">
        <div className="widgets-1-2">
          <div className="widget1">
            <div className="logo">
              <img className="desk" src={logo} alt="logo" />
              <img className="mob" src={logoMob} alt="logo" />
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/upwardgroups">
                <img className="desk" src={faceIcon} alt="" />
                <img className="mob" src={faceIconMob} alt="" />
              </a>
              <a href="https://www.instagram.com/upwardgroups/">
                <img className="desk" src={instaIcon} alt="" />
                <img className="mob" src={instaIconMob} alt="" />
              </a>
              <a href="https://www.linkedin.com/company/upwardgroups/">
                <img className="desk" src={linkedIcon} alt="" />
                <img className="mob" src={linkedIconMob} alt="" />
              </a>
              <a href="https://twitter.com/Upwardgroups">
                <img className="desk" src={twittIcon} alt="" />
                <img className="mob" src={twittIconMob} alt="" />
              </a>
            </div>
          </div>
          <div className="widget2">
            <h4>Get to Know Us</h4>
            <ul>
              <li>
                <Link smooth to="#">
                  About us
                </Link>
              </li>
              <li>
                <Link smooth to="#services">
                  What we provide
                </Link>
              </li>
              <li>
                <Link smooth to="#whyus">
                  Why us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="widget3">
          <div className="parent">
            <div className="img">
              <img className="desk" src={phoneIcon} alt="" />
              <img className="mob" src={phoneIconMob} alt="" />
            </div>
            <div className="child">
              <span>+20 110 3004120</span>
              <span>+966595690766</span>
            </div>
          </div>

          <div className="parent">
            <div className="img">
              <img className="desk" src={mailIcon} alt="" />
              <img className="mob" src={mailIconMob} alt="" />
            </div>
            <div className="child">
              <span>info@upward-eg.com</span>
              <span>info@upward-sa.com</span>
            </div>
          </div>

          <div className="parent">
            <div className="img">
              <img className="desk" src={locationIcon} alt="" />
              <img className="mob" src={locationIconMob} alt="" />
            </div>
            <div className="child">
              <span>Cairo </span>
              <span>Jeddah</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part">
        <button
          onClick={() =>
            language === "ar" ? handleClick("en") : handleClick("ar")
          }
          className="language"
        >
          <img className="desk" src={earthIcon} alt="" />
          <img className="mob" src={earthIconMob} alt="" />
          <span>{t("footer.1")}</span>
        </button>
        <ul>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>&copy; Copyrights 2022</li>
        </ul>
      </div>
    </div>
  );
}
