import Home from "./components/pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import WhyUs from "./components/pages/WhyUs";
import OurPartners from "./components/pages/OurPartners";
import OurClients from "./components/pages/OurClients";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";
import loadingImg from "./components/images/upward-loading-logo.png";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobNavbar from "./components/MobNavbar";
import MainPage from "./components/pages/MainPage";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useTranslation } from "react-i18next";

function App() {
  //preloader
  const [loading, setLoading] = useState(true);
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    demoAsyncCall().then(() => setLoading(false));
    AOS.init({
      duration: 800,
      delay: 300,
    });
  }, []);

  const demoAsyncCall = () => {
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
  };

  useEffect(() => {
    document.body.style.direction = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return loading ? (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#484848",
        width: "100vw",
        height: "100vh",
      }}
    >
      <img src={loadingImg} />
    </div>
  ) : (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
