export const fromLeft  = (delay = 0) => ({
  hidden: { x: -160, opacity: 0 },
  show:   { x: 0,    opacity: 1, transition: { type: "spring", stiffness: 60, damping: 18, delay } },
});

export const fromRight = (delay = 0) => ({
  hidden: { x: 160,  opacity: 0 },
  show:   { x: 0,    opacity: 1, transition: { type: "spring", stiffness: 60, damping: 18, delay } },
});

export const fromTop = (delay = 0) => ({
  hidden: { y: -120, opacity: 0 },
  show:   { y: 0,    opacity: 1, transition: { type: "spring", stiffness: 60, damping: 18, delay } },
});

export const fromBottom = (delay = 0) => ({
  hidden: { y: 120,  opacity: 0 },
  show:   { y: 0,    opacity: 1, transition: { type: "spring", stiffness: 55, damping: 20, delay } },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.92 },
  show:   { opacity: 1, scale: 1,    transition: { duration: 0.7, ease: "easeOut", delay } },
});