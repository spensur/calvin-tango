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
  amplitude = 2.5,
  duration = 4,
  origin = "center",
  className = "",
  unlocked = false, // 👈 new prop
}) {
  const originMap = {
    left: "top left",
    right: "top right",
    center: "top center",
  };

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: originMap[origin] }}
      initial={{ rotate: 0 }}
      animate={
        unlocked
          ? { rotate: [0, amplitude, 0, -amplitude, 0] }
          : { rotate: 0 } 
      }
      transition={
        unlocked
          ? {
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
}