import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import useScratch from "../hooks/useScratch"
import FlowerArch from "../assets/section-2/flower-arch.webp";
import CurtainBlueT from "../assets/section-2/curtain-blue-t.webp";
import CurtainBlueL from "../assets/section-2/curtain-blue-l.webp";
import CurtainBlueR from "../assets/section-2/curtain-blue-r.webp";

import ScratchTheDate from "../assets/section-2/scratch-the-date.webp";
import FrameFlower from "../assets/section-2/frame-flower.webp";
import SaveTheDate from "../assets/section-2/save-the-date.webp";

import Vase from "../assets/section-2/vase-1.webp";
import Sun from "../assets/section-2/sun-1.webp";
import { fromLeft, fromRight, fromTop, fadeIn, fromBottom } from "../animations/variants";
import { Sway } from "../animations/Sway";


export function Section2() {
  const { canvasRef, isRevealed } = useScratch(0.40);

  // --- FLOWER ARC TOP trigger: fires when top+5px is exposed ---
  const flowerArchRef = useRef(null);
  const flowerArchInView = useInView(flowerArchRef, { once: true, margin: "-5px 0px 0px 0px" });
  const section2Controls = useAnimation();

  useEffect(() => {
    if (flowerArchInView) section2Controls.start("show");
  }, [flowerArchInView]);

  // --- SCRATCH section trigger: fires when ScratchTheDate top is exposed ---
  const scratchRef = useRef(null);
  const scratchInView = useInView(scratchRef, { once: true, margin: "50px 0px 0px 0px" });
  const scratchControls = useAnimation();

  useEffect(() => {
    if (scratchInView) scratchControls.start("show");
  }, [scratchInView]);

  // --- FOOTER trigger: fires when FrameFlower center is reached ---
  const frameFlowerRef = useRef(null);
  const frameFlowerInView = useInView(frameFlowerRef, { once: true, margin: "-50% 0px -50% 0px" });

  return (
    <section className="relative w-full min-h-220 overflow-visible">
      {/* --- TOP FRAME --- */}
      <div className="absolute w-full top-17.5">
        <div className="relative size-full">
          <motion.img src={CurtainBlueL} className="absolute -left-17.5 -top-25 scale-75" initial="hidden" animate={section2Controls} variants={fromLeft(0.35)} />
          <motion.img src={CurtainBlueR} className="absolute -right-15 -top-25 scale-75" initial="hidden" animate={section2Controls} variants={fromRight(0.35)} />
          
          {/* ANIMATION TRIGGER */}
          <motion.img ref={flowerArchRef} src={FlowerArch} className="absolute -top-20 scale-125" initial="hidden" animate={section2Controls} variants={fromBottom(0)} />
          <motion.img src={CurtainBlueT} className="absolute scale-118" initial="hidden" animate={section2Controls} variants={fromBottom(0.1)} />
          
        </div>
      </div>

      {/* --- SCRATCH THE DATE --- */}
      <div className="absolute w-100 h-113 left-1/2 -translate-x-1/2 top-67">
        <div className="relative size-full">

          {/* ANIMATION TRIGGER */}
          <motion.img ref={scratchRef} src={ScratchTheDate} className="absolute left-1/2 -translate-x-1/2 scale-67" initial="hidden" animate={scratchControls} variants={fadeIn(0)} />
          <motion.img src={SaveTheDate} className="absolute left-1/2 -translate-x-1/2 bottom-0 scale-59" initial="hidden" animate={scratchControls} variants={fadeIn(0.15)} />

          <motion.div
            className="absolute w-60 h-26 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 
              font-caudex font-bold text-center bg-linear-to-r from-[#3E5041] to-[#518655] bg-clip-text text-transparent"
            initial="hidden"
            animate={scratchControls}
            variants={fadeIn(2)}
          >
            <h2 className="text-2xl">SATURDAY</h2>
            <h1 className="text-4xl">SEP 26, 2026</h1>
            <h3 className="text-xl">09:30 PM</h3>
          </motion.div>

          {/* SCRATCH AREA */}
          <canvas
            ref={canvasRef}
            width={290}
            height={250}
            className="absolute w-72.5 h-62.5 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 cursor-crosshair touch-none rounded-full"
            initial="hidden"
            animate={scratchControls}
            variants={fadeIn(0.4)}
          />

          <motion.img ref={frameFlowerRef} src={FrameFlower} 
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 scale-90 pointer-events-none" 
            initial="hidden" animate={scratchControls} variants={fadeIn(0.2)} 
          />
        </div>
      </div>

      {/* --- FOOTER --- */}
      <Sway amplitude={2} duration={5} origin="left" className="absolute -left-6 bottom-0 scale-89" unlocked={frameFlowerInView} animate={scratchControls}>
        <motion.img src={Vase} className="w-full" variants={fromLeft(0.35)} delay={3} />
      </Sway>

      <Sway amplitude={2} duration={4.5} origin="right" className="absolute right-0 bottom-8 scale-78" unlocked={frameFlowerInView} animate={scratchControls}>
        <motion.img src={Sun} className="w-full" variants={fromRight(0.35)} delay={3} />
      </Sway>

    </section>
  );
}