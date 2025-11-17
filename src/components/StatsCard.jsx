import { motion } from "framer-motion";
import "./StatsCard.css";

export default function StatsCard({ title, value, trend }) {
  const isPositive = trend >= 0;

  return (
    <motion.div 
      className="stats-card"
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h3 className="stats-title">{title}</h3>

      <div className="stats-row">
        <span className="stats-value">{value}</span>

        <span className={`stats-badge ${isPositive ? "up" : "down"}`}>
          {isPositive ? "▲" : "▼"} {Math.abs(trend)}%
        </span>
      </div>
    </motion.div>
  );
}
