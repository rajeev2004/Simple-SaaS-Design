import { motion } from "framer-motion";
import "./Card.css";

export default function Card({ title, children }) {
  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {title && <h2 className="card-title">{title}</h2>}
      {children}
    </motion.div>
  );
}
