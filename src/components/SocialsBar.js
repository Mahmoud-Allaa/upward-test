import React from "react";
import "./styles/socials-bar.css";
import faceIcon from "./images/footer/1.png";
import instaIcon from "./images/footer/2.png";
import linkedIcon from "./images/footer/3.png";
import twittIcon from "./images/footer/4.png";

export default function SocialsBar() {
  return (
    <div className="socials-bar">
      <div className="vertical-line" />
      <div className="content">
        <a href="https://www.facebook.com/upwardgroups">
          <img src={faceIcon} />
        </a>
        <a href="https://www.instagram.com/upwardgroups/">
          <img src={instaIcon} />
        </a>
        <a href="https://www.linkedin.com/company/upwardgroups/">
          <img src={linkedIcon} />
        </a>
        <a href="https://twitter.com/Upwardgroups">
          <img src={twittIcon} />
        </a>
      </div>
      <div className="vertical-line" />
    </div>
  );
}
