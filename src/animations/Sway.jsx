import { motion } from "framer-motion";

/**
 * SwayInWind – gentle continuous rotation to simulate wind sway.
 * @param {number} delay       - entry animation delay (seconds)
 * @param {number} amplitude   - max rotation degrees (default 2.5)
 * @param {number} duration    - one sway cycle duration (default 4)
 * @param {"left"|"right"} origin - transform-origin side (default "center")
 * @param {string} className   - passed to the wrapper div
 */
export function Sway({
  children,
  delay = 0,
  amplitude = 0.3,
  duration = 8,
  origin = "center",
  className = "",
  unlocked = false,
}) {
  const originMap = {
    left: "top left",
    right: "top right",
    center: "top center",
  };

  const variance = 0.1 + Math.random() * 0.2;

  const swayKeyframes = [
    0,
    amplitude,
    -amplitude * (0.6 + Math.random() * 0.1),
    amplitude * (0.7 + Math.random() * 0.1),
    0,
  ];

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: originMap[origin] }}
      initial={{ rotate: 0 }}
      animate={unlocked ? { rotate: swayKeyframes } : { rotate: 0 }}
      transition={
        unlocked
          ? {
              duration,
              delay,
              repeat: Infinity,
              repeatType: "mirror", // 👈 KEY FIX (no snapping back)
              ease: "easeInOut",
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}
