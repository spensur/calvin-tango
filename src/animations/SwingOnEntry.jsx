import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export function SwingOnEntry({ children, delay = 0, className = "", unlocked }) {
  const controls = useAnimation();

  useEffect(() => {
    if (!unlocked) return;

    async function sequence() {
      // Entry: swing in from a tilted position, anchor at top
      await controls.start({
        opacity: 1,
        rotate: 0,
        transition: {
          opacity: { duration: 0.3, delay },
          rotate: {
            type: "spring",
            stiffness: 120,
            damping: 6,        // low damping = lots of natural oscillation
            mass: 1.2,
            delay,
          },
        },
      });

      // Idle sway: gentle wind effect after settling
      controls.start({
        rotate: [0, 3, -2, 3, -1, 0],
        transition: {
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
          repeatDelay: 2,
        },
      });
    }

    sequence();
  }, [controls, delay, unlocked]);

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "top center" }}
      initial={{ opacity: 0, rotate: -25 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}