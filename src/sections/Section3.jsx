import CurtainPurple from "../assets/section-3/curtain-purple-t.webp";
import NativityStarPatch from "../assets/section-3/nativity-star-patch.webp";
import RibbonBlue from "../assets/section-3/ribbon-blue.webp";

import CheongsamPink from "../assets/section-3/cheongsam-pink.webp";
import Dove1 from "../assets/section-3/dove-1.webp";
import Dove2 from "../assets/section-3/dove-2.webp";


export function Section3() {
  return (
    <section className="relative w-full min-h-320 overflow-visible">
      {/* --- CURTAIN --- */}
      <img src={CurtainPurple} className="absolute left-1/2 -translate-x-1/2 w-145 max-w-none"/>
      <img src={NativityStarPatch} className="absolute left-1/2 -translate-x-1/2 top-85 scale-65"/>
      {/* <img src={RibbonBlue} className="absolute -right-10 top-100 scale-90"/> */}

      {/* --- ATTIRE DETAILS --- */}
      <div className="absolute w-60 h-60 left-1/2 -translate-x-1/2 top-1/2 -translate-y-31 flex flex-col items-center
        font-caudex font-bold text-center bg-linear-to-r from-[#3E5041] to-[#518655] bg-clip-text text-transparent">
        <h1 className="text-[2.50rem] tracking-[0.2em]">ATTIRE</h1>
        <h2 className="text-2xl">Semi Formal</h2>
        <p className="text-sm bg-linear-to-r from-[#E73A3F] to-[#E6646D] bg-clip-text text-transparent -mt-1">
          NO Black, White, Red Attire
        </p>

        <div className="size-3 bg-linear-to-r from-[#3E5041] to-[#518655] rounded-full my-4" />

        <p className="text-sm w-32 text-center">Women can wear cheongsam</p>
      </div>

      {/* --- CHEONGSAM GROUP --- */}
      <div className="absolute w-100 h-135 left-1/2 -translate-x-1/2 bottom-30 ">
        <div className="relative size-full">
          <img src={Dove1} className="absolute -left-4 top-35 scale-80"/>
          <img src={Dove2} className="absolute -right-5 top-52 scale-80"/>
          <img src={CheongsamPink} className="absolute left-1/2 -translate-x-1/2 top-0 scale-75 "/>
        </div>
      </div>
      
    </section>
  );
}
