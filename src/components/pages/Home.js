import React, { useState } from "react";
import "../styles/home2.css";
import { useTranslation } from "react-i18next";
import SocialsBar from "../SocialsBar";
import MobNavbar from "../MobNavbar";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";

export default function Home() {
  const { t, i18n } = useTranslation();

  const [activeBtn, setActiveBtn] = useState(1);
  setTimeout(function () {
    if (activeBtn != 3) {
      setActiveBtn(activeBtn + 1);
    } else {
      setActiveBtn(1);
    }
  }, 10000);

  return (
    <div id="home" className="sec-home">
      <div className="hero">
        <div className="hero-container">
          <MobNavbar />
          {activeBtn == 1 && (
            <div className="text-prop text">
              <h1>{t("home.1")}</h1>
              <p>{t("home.2")}</p>
            </div>
          )}
          {activeBtn == 2 && (
            <div className="text-prop text2">
              <h3>{t("home.3")}</h3>
              <p>{t("home.4")}</p>
              <h3>{t("home.5")}</h3>
              <p>{t("home.6")}</p>
            </div>
          )}
          {activeBtn == 3 && (
            <div className="text-prop text3">
              <h3>{t("home.7")}</h3>
              <div className="titles-container">
                <div className="titles titles1">
                  <h4>{t("home.8")}</h4>
                  <p>{t("home.9")}</p>
                </div>
                <div className="titles titles2">
                  <h4>{t("home.10")}</h4>
                  <p>{t("home.11")}</p>
                </div>
                <div className="titles titles3">
                  <h4>{t("home.12")}</h4>
                  <p>{t("home.13")}</p>
                </div>
              </div>
            </div>
          )}
          <SocialsBar />
        </div>
        <div className="buttons">
          {activeBtn == 1 ? (
            <FiberManualRecordOutlinedIcon
              onClick={() => setActiveBtn(1)}
              sx={{ color: "#fff", margin: "0 6px", cursor: "pointer" }}
            />
          ) : (
            <FiberManualRecordIcon
              onClick={() => setActiveBtn(1)}
              sx={{ color: "#fff", margin: "0 6px", cursor: "pointer" }}
            />
          )}
          {activeBtn == 2 ? (
            <FiberManualRecordOutlinedIcon
              onClick={() => setActiveBtn(2)}
              sx={{ color: "#fff", margin: "0 6px", cursor: "pointer" }}
            />
          ) : (
            <FiberManualRecordIcon
              onClick={() => setActiveBtn(2)}
              sx={{ color: "#fff", margin: "0 6px", cursor: "pointer" }}
            />
          )}
          {activeBtn == 3 ? (
            <FiberManualRecordOutlinedIcon
              onClick={() => setActiveBtn(3)}
              sx={{ color: "#fff", margin: "0 6px", cursor: "pointer" }}
            />
          ) : (
            <FiberManualRecordIcon
              onClick={() => setActiveBtn(3)}
              sx={{ color: "#fff", margin: "0 6px", cursor: "pointer" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
