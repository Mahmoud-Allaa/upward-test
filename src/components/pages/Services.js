import React, { useState } from "react";
import "../styles/services.css";
import services1 from "../images/services/1.png";
import services2 from "../images/services/2.png";
import services3 from "../images/services/3.png";
import services4 from "../images/services/4.png";
import services5 from "../images/services/5.png";
import services6 from "../images/services/6.png";
import services7 from "../images/services/7.png";
import services8 from "../images/services/8.png";
import services9 from "../images/services/9.png";
import servicesImg from "../images/services-img.png";
import servicesImg1 from "../images/services-img1.png";
import servicesImg2 from "../images/services-img2.png";
import servicesImg3 from "../images/services-img3.png";
import servicesMobImg from "../images/services-mob-img.png";

import { useTranslation } from "react-i18next";

import leftIcon from "../images/clients/left.png";
import rightIcon from "../images/clients/right.png";
import leftIcon1 from "../images/clients/left-1.png";
import rightIcon1 from "../images/clients/right-1.png";

export default function Services() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const [loading, setLoading] = useState(1);
  setTimeout(function () {
    if (loading != 3) {
      setLoading(loading + 1);
    } else {
      setLoading(1);
    }
  }, 1000);

  let services = [
    {
      img: services1,
      title: t("services.2"),
      subtitle: t("services.3"),
    },
    {
      img: services2,
      title: t("services.4"),
      subtitle: t("services.5"),
    },
    {
      img: services3,
      title: t("services.6"),
      subtitle: t("services.7"),
    },
    {
      img: services4,
      title: t("services.8"),
      subtitle: t("services.9"),
    },
    {
      img: services5,
      title: t("services.10"),
      subtitle: t("services.11"),
    },
    {
      img: services6,
      title: t("services.12"),
      subtitle: t("services.13"),
    },
    {
      img: services7,
      title: t("services.14"),
      subtitle: t("services.15"),
    },
    {
      img: services8,
      title: t("services.16"),
      subtitle: t("services.17"),
    },
    {
      img: services9,
      title: t("services.18"),
      subtitle: t("services.19"),
    },
  ];

  const sliderLeft = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider2");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div
      style={{
        direction: language === "ar" ? "rtl" : "ltr",
      }}
      id="services"
      className="sec-services"
    >
      {loading == 1 && <img className="services-img desk" src={servicesImg1} />}
      {loading == 2 && <img className="services-img desk" src={servicesImg2} />}
      {loading == 3 && <img className="services-img desk" src={servicesImg3} />}
      <img className="services-img mob" src={servicesMobImg} />
      <h2>{t("services.1")}</h2>

      <div id="slider2" className="services-container">
        {services.map((service, index) => {
          return (
            <div
              style={{
                textAlign: language === "ar" ? "right" : "left",
              }}
              key={index}
              className="service"
            >
              <div className="img">
                <img src={service.img} alt="Consultation-img" />
              </div>
              <div className="titles">
                <div className="title">{service.title}</div>
                <div className="subtitle">{service.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="scroller">
        <button className="scroll-btn" onClick={sliderLeft}>
          <div className="arrow">
            <img src={leftIcon1} />
          </div>
          <div className="arrow active">
            <img src={leftIcon} />
          </div>
        </button>
        <button className="scroll-btn" onClick={sliderRight}>
          <div className="arrow">
            <img src={rightIcon1} />
          </div>
          <div className="arrow active">
            <img src={rightIcon} />
          </div>
        </button>
      </div>
    </div>
  );
}
