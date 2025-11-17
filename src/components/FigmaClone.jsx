import { motion } from "framer-motion";
import "./FigmaClone.css";

export default function FigmaClone() {
  return (
    <motion.div 
      className="figma-panel"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="figma-header">Properties</div>

      <div className="figma-row">
        <label>Width</label>
        <input type="number" value="120" />
      </div>

      <div className="figma-row">
        <label>Height</label>
        <input type="number" value="80" />
      </div>

      <div className="figma-row">
        <label>Color</label>
        <input type="color" />
      </div>
    </motion.div>
  );
}
