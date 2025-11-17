import { motion } from "framer-motion";
import "./Button.css";

export default function Button({ children, variant = "primary", size = "md", onClick }) {
  return (
    <motion.button
      className={`btn ${variant} ${size}`}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
