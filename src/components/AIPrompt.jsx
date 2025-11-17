import { motion } from "framer-motion";
import { useState } from "react";
import "./AIPrompt.css";

export default function AIPrompt() {
  const [loading, setLoading] = useState(false);
  const [reply, setReply] = useState("");

  function handleSubmit() {
    setLoading(true);
    setReply("");

    setTimeout(() => {
      setLoading(false);
      setReply("AI Response: This is a simulated response for the demo.");
    }, 2000);
  }

  return (
    <div className="ai-container">
      <textarea
        className="ai-textarea"
        placeholder="Ask something to AI..."
      ></textarea>

      <button className="ai-btn" onClick={handleSubmit}>
        Generate
      </button>

      {loading && (
        <motion.div 
          className="dots"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ● ● ●
        </motion.div>
      )}

      {reply && (
        <motion.div
          className="ai-reply"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {reply}
        </motion.div>
      )}
    </div>
  );
}
