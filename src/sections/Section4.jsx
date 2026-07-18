import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import CurtainFooterT from "../assets/section-4/curtain-footer-t.webp";
import FrameT from "../assets/section-1/frame-t.webp";
import Venue from "../assets/section-4/venue.webp";
import LanternFlower from "../assets/section-4/lantern-flower.webp";
import NativityStarPatchRating from "../assets/section-4/nativity-star-patch-rating.webp";

import Footer from "../assets/section-4/footer.webp";
import { GoogleMapsButton } from "../components/GoogleMapsButton";
import { fadeIn } from "../animations/variants";


export function Section4() {
  return (
    <section className="relative w-full min-h-243 overflow-visible mt-10">
      {/* --- FOOTER --- */}
      <img src={Footer} className="absolute left-0 bottom-0 scale-100"/>

      {/* --- VENUE DETAILS --- */}
      <div className="absolute w-75 left-1/2 -translate-x-1/2 top-78 font-caudex flex flex-col items-center">
        <h1 className="text-3xl font-bold">East Ocean Palace</h1>
        <p className="text-sm text-slate-600 -mt-1">Parañaque, Metro Manila</p>
        <div className="text-sm -mt-1 flex text-slate-600 items-center gap-1">
          4.6
          <img src={NativityStarPatchRating} className="h-5"/>
        </div>

        <GoogleMapsButton />

        
      </div>
      
      {/* --- VENUE PIC --- */}
      <div className="absolute w-full h-75 top-0">
        <div className="relative size-full">
          <img src={Venue} className="absolute inset-0 w-full h-full object-cover"/>
          <img src={CurtainFooterT} className="absolute left-0 -top-15 scale-100"/>

          <img src={FrameT} className="absolute left-0 -bottom-2 scale-90"/>

          <img src={LanternFlower} className="absolute -left-15 -bottom-11 -scale-x-80 scale-80"/>
          <img src={LanternFlower} className="absolute -right-15 -bottom-11 scale-80"/>
        </div>
      </div>

      {/* --- DATE REMINDER --- */}
      <motion.div
        className="w-full bottom-100 text-center left-1/2 -translate-x-1/2 absolute overflow-visible font-caudex font-bold 
          bg-linear-to-r from-[#3E5041] to-[#518655] bg-clip-text text-transparent drop-shadow-sm"
        variants={fadeIn(2.3)}
      >
        <p className="text-lg">We will tie the knot on</p>
        <b className="text-xl">June 12, 2027 (SAT) </b>


        <div className="text-sm pt-5">
          <p>Please save the date 🩷</p>
        </div>
      </motion.div>
    </section>
  );
}
