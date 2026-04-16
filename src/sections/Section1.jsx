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


export function Section1() {
  return (
    <section className="relative w-full min-h-208 overflow-visible section-1-bg">
      {/* --- MELBIRD & CAMMY --- */}
      <div className="w-full absolute bottom-0">
        <div className="relative size-full">
          <img src={BackgroundBuildings} className="absolute bottom-5" />
          <img src={RockPlatform} className="absolute -bottom-9 scale-110" />
          
          <div className="absolute left-1/2 -translate-x-1/2 w-65 h-100 -bottom-2">
            <div className="relative size-full">
              <img src={Melbird} className="absolute -left-5 bottom-0 w-51 " />
              <img src={Cammy} className="absolute right-0 bottom-1 w-25" />
            </div>
          </div>
        </div>
      </div>


      {/* --- GOLD FRAME --- */}
      <img src={FrameT} className="absolute" />
      <img src={FrameL} className="absolute -left-11 top-20 w-55"  />
      <img src={FrameR} className="absolute -right-13 top-23 w-54" />

      {/* --- TOP LEFT GRAPHICS --- */}
      <div className="relative left-0 -top-20">
        <img src={Lantern} className="absolute left-0 top-60 w-24" />
        <img src={BorderBlueFlowerL} className="absolute -left-19 w-75" />
      </div>

      {/* --- TOP RIGHT GRAPHICS --- */}
      <div className="relative right-0 -top-15">
        <img src={TasselJade} className="absolute right-11 top-46 w-13" />
        <img src={TasselTinghun} className="absolute right-0 top-67 w-18" />
        <img src={BorderWhiteFlowerR} className="absolute -right-23 w-75" />
      </div>


      {/* --- TEXT --- */}
      <h3 className="w-64 text-center top-42 left-1/2 -translate-x-1/2 font-caudex absolute text-xs font-bold 
        bg-linear-to-t from-[#E1BF6A] to-[#C28C2A] bg-clip-text text-transparent drop-shadow-sm">
        YOU ARE CORDIALLY INVITED TO 
        CELEBRATE THE TINGHUN OF
      </h3>

      <div className="text-center top-56 left-1/2 -translate-x-1/2 font-corinthia absolute font-bold overflow-visible p-1.5
        bg-linear-to-t from-[#E1BF6A] to-[#C28C2A] bg-clip-text text-transparent drop-shadow-sm">
        <h1 className="text-7xl">Melvin</h1>
        <h1 className="text-5xl -mt-4">&</h1>
        <h1 className="text-7xl -mt-8">Camille</h1>
      </div>


      
    </section>
  )
}