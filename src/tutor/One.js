import Aos from "aos";
import { useEffect } from "react";
import "../Boxes.css";
const One = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="boxes" data-aos="fade-up"></div>
      <div className="boxes" data-aos="fade-down"></div>
    </div>
  );
};

export default One;
