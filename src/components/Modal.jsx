import { motion } from "framer-motion";
import "./Modal.css";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <motion.div 
        className="modal-box"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="modal-header">
          <h3>{title}</h3>
          <button className="close-btn" onClick={onClose}>✖</button>
        </div>

        <div>{children}</div>
      </motion.div>
    </div>
  );
}
