import { motion } from "framer-motion";

import BorderBlueFlowerL from "../assets/section-1/border-blue-flower-l.webp";
import BorderWhiteFlowerR from "../assets/section-1/border-white-flower-r.webp";
import FrameL from "../assets/section-1/frame-l.webp";
import FrameR from "../assets/section-1/frame-r.webp";
import FrameT from "../assets/section-1/frame-t.webp";

import Lantern from "../assets/section-1/lantern.webp";
import TasselJade from "../assets/section-1/tassel-jade.webp";
import TasselTinghun from "../assets/section-1/tassel-tinghun.webp";

import BackgroundBuildings from "../assets/section-1/background-buildings.webp";
import Cammy from "../assets/section-1/cammy.webp";
import Melbird from "../assets/section-1/melbird.webp";
import RockPlatform from "../assets/section-1/rock-platform.webp";
import { fromBottom, fromLeft, fromRight, fromTop, fadeIn } from "../animations/variants";
import { SwingOnEntry } from "../animations/SwingOnEntry";
import { Sway } from "../animations/Sway";


export function Section1({ unlocked }) {
  return (
    <motion.section
      className="relative w-full min-h-208 overflow-visible section-1-bg"
      initial="hidden"
      animate={unlocked ? "show" : "hidden"}
    >
      {/* --- MELBIRD & CAMMY --- */}
      <div className="w-full absolute bottom-0">
        <div className="relative size-full">
          <motion.img src={BackgroundBuildings} className="absolute bottom-5" variants={fromBottom(0.5)} />
          <motion.img src={RockPlatform} className="absolute -bottom-9 scale-110" variants={fromBottom(0.7)} />

          <div className="absolute left-1/2 -translate-x-1/2 w-65 h-100 -bottom-2">
            <div className="relative size-full">
              <motion.img src={Melbird} className="absolute -left-7 bottom-0 w-51" variants={fromLeft(1.9)} />
              <motion.img src={Cammy} className="absolute right-1 bottom-1 w-25" variants={fromRight(1.9)} />
            </div>
          </div>
        </div>
      </div>

      {/* --- GOLD FRAME --- */}
      <motion.img src={FrameT} className="absolute" variants={fromTop(0.1)} />
      <motion.img src={FrameL} className="absolute -left-11 top-20 w-55" variants={fromLeft(0.2)} />
      <motion.img src={FrameR} className="absolute -right-13 top-23 w-54" variants={fromRight(0.2)} />

      {/* --- TOP LEFT GRAPHICS --- */}
      <div className="relative left-0 -top-20">
        <SwingOnEntry delay={1} unlocked={unlocked} className="absolute left-0 top-60 w-24">
          <img src={Lantern} className="w-full" />
        </SwingOnEntry>
        <Sway delay={0.2} amplitude={1.8} duration={5} origin="left" unlocked={unlocked} className="absolute -left-19 w-75">
          <motion.img src={BorderBlueFlowerL} className="w-full" variants={fromLeft(0.15)} />
        </Sway>
      </div>

      {/* --- TOP RIGHT GRAPHICS --- */}
      <div className="relative right-0 -top-15">
        <SwingOnEntry delay={1.1} unlocked={unlocked} className="absolute right-11 top-43 w-13">
          <img src={TasselJade} className="w-full" />
        </SwingOnEntry>
        <SwingOnEntry delay={1.3} unlocked={unlocked} className="absolute right-0 top-67 w-18">
          <img src={TasselTinghun} className="w-full" />
        </SwingOnEntry>

        <Sway delay={0.2} amplitude={1.8} duration={5} origin="right" unlocked={unlocked} className="absolute -right-23 w-75">
          <motion.img src={BorderWhiteFlowerR} className="w-full" variants={fromRight(0.15)}/>
        </Sway>
      </div>

      {/* --- TEXT --- */}
      <motion.h3
        className="w-64 text-center top-42 left-1/2 -translate-x-1/2 font-caudex absolute text-xs font-bold
          bg-linear-to-t from-[#E1BF6A] to-[#C28C2A] bg-clip-text text-transparent drop-shadow-sm"
        variants={fadeIn(0.5)}
      >
        YOU ARE CORDIALLY INVITED TO
        CELEBRATE THE TINGHUN OF
      </motion.h3>

      <motion.div
        className="text-center top-56 left-1/2 -translate-x-1/2 font-corinthia absolute font-bold overflow-visible p-1.5
          bg-linear-to-t from-[#E1BF6A] to-[#C28C2A] bg-clip-text text-transparent drop-shadow-sm"
        variants={fadeIn(1.3)}
      >
        <h1 className="text-7xl">Melvin</h1>
        <h1 className="text-5xl -mt-4">&</h1>
        <h1 className="text-7xl -mt-8">Camille</h1>
      </motion.div>
    </motion.section>
  );
}