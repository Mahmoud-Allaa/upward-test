import React from "react";
import "../styles/our-clients.css";
import client1 from "../images/clients/1.png";
import client2 from "../images/clients/2.png";
import client3 from "../images/clients/3.png";
import client4 from "../images/clients/4.png";
import client5 from "../images/clients/5.png";
import client6 from "../images/clients/6.png";
import client7 from "../images/clients/7.png";
import client8 from "../images/clients/8.png";
import client9 from "../images/clients/9.png";
import client10 from "../images/clients/10.png";
import client11 from "../images/clients/11.png";
import client12 from "../images/clients/12.png";
import client13 from "../images/clients/13.png";

import leftIcon from "../images/clients/left.png";
import rightIcon from "../images/clients/right.png";
import leftIcon1 from "../images/clients/left-1.png";
import rightIcon1 from "../images/clients/right-1.png";

import client1Mob from "../images/clients/mob-1.png";
import client2Mob from "../images/clients/mob-2.png";
import client3Mob from "../images/clients/mob-3.png";
import client4Mob from "../images/clients/mob-4.png";
import client5Mob from "../images/clients/mob-5.png";
import client6Mob from "../images/clients/mob-6.png";
import client7Mob from "../images/clients/mob-7.png";
import client8Mob from "../images/clients/mob-8.png";
import client9Mob from "../images/clients/mob-9.png";
import client10Mob from "../images/clients/mob-10.png";
import client11Mob from "../images/clients/mob-11.png";
import client12Mob from "../images/clients/mob-12.png";
import client13Mob from "../images/clients/mob-13.png";

import { useTranslation } from "react-i18next";

export default function OurClients() {
  const { t, i18n } = useTranslation();

  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - scrolling;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + scrolling;
  };

  const width = window.innerWidth;
  const scrolling = width * 0.85;

  return (
    <div id="ourclients" className="sec-our-clients">
      <h2>{t("ourClients.1")}</h2>
      <div id="slider" className="clients-slider">
        <div className="client">
          <img src={client1} alt="" />
        </div>
        <div className="client">
          <img src={client2} alt="" />
        </div>
        <div className="client">
          <img src={client3} alt="" />
        </div>
        <div className="client">
          <img src={client4} alt="" />
        </div>
        <div className="client">
          <img src={client5} alt="" />
        </div>
        <div className="client">
          <img src={client6} alt="" />
        </div>
        <div className="client">
          <img src={client7} alt="" />
        </div>
        <div className="client">
          <img src={client8} alt="" />
        </div>
        <div className="client">
          <img src={client9} alt="" />
        </div>
        <div className="client">
          <img src={client10} alt="" />
        </div>
        <div className="client">
          <img src={client11} alt="" />
        </div>
        <div className="client">
          <img src={client12} alt="" />
        </div>
        <div className="client">
          <img src={client13} alt="" />
        </div>
      </div>
      <div className="scroller">
        <button
          className="scroll-btn"
          onClick={sliderLeft}
          onTouchStart={sliderLeft}
        >
          <div className="arrow">
            <img src={leftIcon1} />
          </div>
          <div className="arrow active">
            <img src={leftIcon} />
          </div>
        </button>
        <button
          className="scroll-btn"
          onClick={sliderRight}
          onTouchStart={sliderRight}
        >
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
