import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Boxes.css";
const Pricing = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <h1>Pricing</h1>
      <div className="grids">
        <div className="boxes" data-aos="fade-down">
          1
        </div>
        <div className="boxes" data-aos="fade-left">
          2
        </div>
      </div>
    </div>
  );
};

export default Pricing;
