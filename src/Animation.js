import "./Boxes.css";
import { motion } from "framer-motion";
const Animation = () => {
  return (
    <div>
      <motion.div animate={{ scale: 2 }} className="boxes"></motion.div>
      <motion.h1
        animate={{ color: "yellow", fontSize: "100px", rotate: "360deg" }}
      >
        dinesh
      </motion.h1>
    </div>
  );
};

export default Animation;
