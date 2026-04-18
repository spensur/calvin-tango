import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

import CurtainPurple from "../assets/section-3/curtain-purple-t.webp";
import NativityStarPatch from "../assets/section-3/nativity-star-patch.webp";
import RibbonBlue from "../assets/section-3/ribbon-blue.webp";

import CheongsamPink from "../assets/section-3/cheongsam-pink.webp";
import Dove1 from "../assets/section-3/dove-1.webp";
import Dove2 from "../assets/section-3/dove-2.webp";

import { fromTop, fromBottom, fadeIn, fromLeft, fromRight } from "../animations/variants";
import { Sway } from "../animations/Sway";

export function Section3(unlocked) {
  // --- NATIVITY STAR TRIGGER (0px from top) ---
  const starRef = useRef(null);
  const starInView = useInView(starRef, { once: true, margin: "0px 0px 0px 0px" });
  const starControls = useAnimation();

  useEffect(() => {
    if (starInView && unlocked) starControls.start("show");
  }, [starInView, unlocked]);

  // --- CHEONGSAM TRIGGER (20px from top) ---
  const cheongsamRef = useRef(null);
  const cheongsamInView = useInView(cheongsamRef, { once: true, margin: "0px 0px 0px 0px" });
  const cheongsamControls = useAnimation();

  useEffect(() => {
    if (cheongsamInView && unlocked) cheongsamControls.start("show");
  }, [cheongsamInView, unlocked]);

  
  return (
    <section className="relative w-full min-h-320 overflow-visible">
      {/* --- CURTAIN --- */}
      <img src={CurtainPurple} className="absolute left-1/2 -translate-x-1/2 w-145 max-w-none"/>
      {/* ANIMATION TRIGGER */}
      <motion.img ref={starRef} src={NativityStarPatch} className="absolute left-1/2 -translate-x-1/2 top-85 scale-65" initial="hidden" animate={starControls} variants={fromTop(0.5)}/>

      {/* --- ATTIRE DETAILS --- */}
      <div className="absolute w-60 h-60 left-1/2 -translate-x-1/2 top-1/2 -translate-y-31 flex flex-col items-center
        font-caudex font-bold text-center bg-linear-to-r from-[#3E5041] to-[#518655] bg-clip-text text-transparent">
        <h1 initial="hidden" animate={starControls} className="text-[2.50rem] tracking-[0.2em]" variants={fromBottom(0.2)}>
          ATTIRE
        </h1>
        <h2 
          className="text-2xl"
          initial="hidden"
          animate={starControls}
          variants={fromBottom(0.4)}
        >
          Semi Formal
        </h2>
        <p className="text-sm bg-linear-to-r from-[#E73A3F] to-[#E6646D] bg-clip-text text-transparent -mt-1">
          NO Black, White, Red Attire
        </p>

        <div className="size-3 bg-linear-to-r from-[#3E5041] to-[#518655] rounded-full my-4" />

        <p className="text-sm w-32 text-center">Women can wear cheongsam</p>
      </div>

      {/* --- CHEONGSAM GROUP --- */}
      <div className="absolute w-100 h-135 left-1/2 -translate-x-1/2 bottom-30 ">
        <div className="relative size-full">
          <Sway amplitude={2} duration={6} origin="left" unlocked={true} animate={cheongsamControls} className="absolute -left-4 top-35 scale-80">
            <motion.img src={Dove1} className="w-full" animate={cheongsamControls} variants={fromLeft(2)} />
          </Sway>

          <Sway amplitude={2} duration={5} origin="right" unlocked={true} animate={cheongsamControls} className="absolute -right-5 top-52 scale-80">
            <motion.img src={Dove2} className="w-full" animate={cheongsamControls} variants={fromRight(2)} />
          </Sway>

          <motion.img src={CheongsamPink} className="absolute left-1/2 -translate-x-1/2 top-0 scale-75 " animate={cheongsamControls} variants={fromBottom(2)} />

          {/* <img src={CheongsamPink} className="absolute left-1/2 -translate-x-1/2 top-0 scale-75 "/> */}
          
          {/* <img src={Dove1} className="absolute -left-4 top-35 scale-80"/>
          <img src={Dove2} className="absolute -right-5 top-52 scale-80"/>
          <img src={CheongsamPink} className="absolute left-1/2 -translate-x-1/2 top-0 scale-75 "/> */}
        </div>
      </div>
      
    </section>
  );
}
