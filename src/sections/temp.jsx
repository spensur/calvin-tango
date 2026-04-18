import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

import CurtainPurple from "../assets/section-3/curtain-purple-t.webp";
import NativityStarPatch from "../assets/section-3/nativity-star-patch.webp";
import RibbonBlue from "../assets/section-3/ribbon-blue.webp";

import CheongsamPink from "../assets/section-3/cheongsam-pink.webp";
import Dove1 from "../assets/section-3/dove-1.webp";
import Dove2 from "../assets/section-3/dove-2.webp";

import { fromTop, fromBottom, fadeIn } from "../animations/variants";
import { Sway } from "../animations/Sway";

export function Section3() {
  // --- NATIVITY STAR TRIGGER (0px from top) ---
  const starRef = useRef(null);
  const starInView = useInView(starRef, { once: true, margin: "0px 0px 0px 0px" });
  const starControls = useAnimation();

  useEffect(() => {
    if (starInView) starControls.start("show");
  }, [starInView]);

  // --- CHEONGSAM TRIGGER (20px from top) ---
  const cheongsamRef = useRef(null);
  const cheongsamInView = useInView(cheongsamRef, { once: true, margin: "-20px 0px 0px 0px" });
  const cheongsamControls = useAnimation();

  useEffect(() => {
    if (cheongsamInView) cheongsamControls.start("show");
  }, [cheongsamInView]);

  return (
    <section className="relative w-full min-h-320 overflow-visible">
      
      {/* --- CURTAIN --- */}
      <motion.img 
        src={CurtainPurple} 
        className="absolute left-1/2 -translate-x-1/2 w-145 max-w-none"
        initial="hidden"
        animate={starControls}
        variants={fadeIn(0)}
      />

      {/* --- NATIVITY STAR (TRIGGER) --- */}
      <motion.img 
        ref={starRef}
        src={NativityStarPatch} 
        className="absolute left-1/2 -translate-x-1/2 top-85 scale-65"
        initial="hidden"
        animate={starControls}
        variants={fromTop(0)}
      />

      {/* --- ATTIRE DETAILS --- */}
      <div className="absolute w-60 h-60 left-1/2 -translate-x-1/2 top-1/2 -translate-y-31 flex flex-col items-center
        font-caudex font-bold text-center bg-linear-to-r from-[#3E5041] to-[#518655] bg-clip-text text-transparent">

        <motion.h1 
          className="text-[2.50rem] tracking-[0.2em]"
          initial="hidden"
          animate={starControls}
          variants={fromBottom(0.2)}
        >
          ATTIRE
        </motion.h1>

        <motion.h2 
          className="text-2xl"
          initial="hidden"
          animate={starControls}
          variants={fromBottom(0.4)}
        >
          Semi Formal
        </motion.h2>

        <motion.p 
          className="text-sm bg-linear-to-r from-[#E73A3F] to-[#E6646D] bg-clip-text text-transparent -mt-1"
          initial="hidden"
          animate={starControls}
          variants={fromBottom(0.6)}
        >
          NO Black, White, Red Attire
        </motion.p>

        <motion.div 
          className="size-3 bg-linear-to-r from-[#3E5041] to-[#518655] rounded-full my-4"
          initial="hidden"
          animate={starControls}
          variants={fromBottom(0.8)}
        />

        <motion.p 
          className="text-sm w-32 text-center"
          initial="hidden"
          animate={starControls}
          variants={fromBottom(1.0)}
        >
          Women can wear cheongsam
        </motion.p>
      </div>

      {/* --- CHEONGSAM GROUP --- */}
      <div className="absolute w-100 h-135 left-1/2 -translate-x-1/2 bottom-30">
        <div className="relative size-full">

          {/* DOVE LEFT */}
          <Sway
            amplitude={2}
            duration={4.5}
            origin="left"
            unlocked={cheongsamInView}
            animate={cheongsamControls}
            className="absolute -left-4 top-35 scale-80"
          >
            <motion.img 
              src={Dove1}
              className="w-full"
              variants={fromBottom(0.2)}
            />
          </Sway>

          {/* DOVE RIGHT */}
          <Sway
            amplitude={2}
            duration={5}
            origin="right"
            unlocked={cheongsamInView}
            animate={cheongsamControls}
            className="absolute -right-5 top-52 scale-80"
          >
            <motion.img 
              src={Dove2}
              className="w-full"
              variants={fromBottom(0.3)}
            />
          </Sway>

          {/* CHEONGSAM (TRIGGER) */}
          <Sway
            amplitude={2}
            duration={5}
            origin="center"
            unlocked={cheongsamInView}
            animate={cheongsamControls}
            className="absolute left-1/2 -translate-x-1/2 top-0 scale-75"
          >
            <motion.img 
              ref={cheongsamRef}
              src={CheongsamPink}
              className="w-full"
              initial="hidden"
              animate={cheongsamControls}
              variants={fromBottom(0)}
            />
          </Sway>

        </div>
      </div>
      
    </section>
  );
}