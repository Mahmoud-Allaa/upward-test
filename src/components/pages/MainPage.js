import Home from "./Home";
import React from "react";
import Services from "./Services";
import WhyUs from "./WhyUs";
import OurPartners from "./OurPartners";
import OurClients from "./OurClients";
import Footer from "./Footer";
import Contact from "./Contact";

export default function MainPage() {
  return (
    <div className="main-page" style={{ width: "100vw", overflow: "hidden" }}>
      <Home />
      <Services />
      <WhyUs />
      <OurPartners />
      <OurClients />
      <Footer />
    </div>
  );
}
