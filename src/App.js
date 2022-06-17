import Home from "./components/pages/Home";
import "./App.css";
import Navbar from "./components/Navbar";
import Services from "./components/pages/Services";
import WhyUs from "./components/pages/WhyUs";
import OurPartners from "./components/pages/OurPartners";
import OurClients from "./components/pages/OurClients";
import Footer from "./components/pages/Footer";
import Contact from "./components/pages/Contact";

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import MobNavbar from "./components/MobNavbar";
import MainPage from "./components/pages/MainPage";
import { useEffect } from "react";

import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;

  useEffect(() => {
    document.body.style.direction = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return (
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
