import BorderBlueFlowerL from "../assets/section-1/border-blue-flower-l.webp";
import BorderWhiteFlowerR from "../assets/section-1/border-white-flower-r.webp";
import FrameL from "../assets/section-1/frame-l.webp";
import FrameR from "../assets/section-1/frame-r.webp";
import FrameT from "../assets/section-1/frame-t.webp";

import Lantern from "../assets/section-1/lantern.webp";
import TasselJade from "../assets/section-1/tassel-jade.webp";
import TasselTinghun from "../assets/section-1/tassel-tinghun.webp";

import BackgroundBuildings from "../assets/section-1/background-buildings.webp";

export function Section1() {
  return (
    <section className="relative w-full min-h-228 overflow-visible section-1-bg">
      {/* --- FRAME --- */}
      <img src={FrameT} className="absolute" style={{ left: '13%', top: '0%',  width: '100%' }} />
      <img src={FrameL} className="absolute" style={{ left: '-10%', top: '3%',  width: '50%' }} />
      <img src={FrameR} className="absolute" style={{ right: '-12.1%', top: '3%',  width: '50%' }} />

      {/* --- TOP LEFT GRAPHICS --- */}
      <div className="relative left-0 -top-20">
        <img src={Lantern} className="absolute left-0 top-60 w-24" />
        <img src={BorderBlueFlowerL} className="absolute -left-19 w-75" />
      </div>

      {/* --- TOP RIGHT GRAPHICS --- */}
      <div className="relative right-0 -top-15">
        <img src={TasselJade} className="absolute right-13 top-46 w-13" />
        <img src={TasselTinghun} className="absolute right-2 top-67 w-18" />
        <img src={BorderWhiteFlowerR} className="absolute -right-21 w-75" />
      </div>


      {/* --- TEXT --- */}
      <h3 className="w-64 text-center top-34 left-1/2 -translate-x-1/2 font-caudex absolute text-xs font-bold 
        bg-linear-to-t from-[#E1BF6A] to-[#C28C2A] bg-clip-text text-transparent drop-shadow-sm">
        YOU ARE CORDIALLY INVITED TO 
        CELEBRATE THE TINGHUN OF
      </h3>

      <div className="text-center top-50 left-1/2 -translate-x-1/2 font-corinthia absolute font-bold overflow-visible p-1.5
        bg-linear-to-t from-[#E1BF6A] to-[#C28C2A] bg-clip-text text-transparent drop-shadow-sm">
        <h1 className="text-7xl">Melvin</h1>
        <h1 className="text-5xl -mt-4">&</h1>
        <h1 className="text-7xl -mt-8">Camille</h1>
      </div>


      {/* --- MELBIRD & CAMMY --- */}
      <img src={BackgroundBuildings} className="absolute" style={{ left: '0%', bottom: '0%',  width: '100%' }} />
    </section>
  )
}