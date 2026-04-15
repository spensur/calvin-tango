import FlowerArch from "../assets/section-2/flower-arch.webp";
import CurtainBlueT from "../assets/section-2/curtain-blue-t.webp";
import CurtainBlueL from "../assets/section-2/curtain-blue-l.webp";
import CurtainBlueR from "../assets/section-2/curtain-blue-r.webp";

import ScratchTheDate from "../assets/section-2/scratch-the-date.webp";
import FrameFlower from "../assets/section-2/frame-flower.webp";
import SaveTheDate from "../assets/section-2/save-the-date.webp";

import Vase from "../assets/section-2/vase-1.webp";
import Sun from "../assets/section-2/sun-1.webp";
import BackgroundWallpaper from "../assets/background-wallpaper.webp";


export function Section2() {
  return (
    <section className="relative w-full min-h-208 overflow-visible">
      {/* --- BACKGROUND --- */}
      <img src={BackgroundWallpaper} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* --- TOP FRAME --- */}
      <div className="absolute w-full top-17.5">
        <div className="relative size-full">
          <img src={CurtainBlueL} className="absolute -left-17.5 -top-25 scale-75"/>
          <img src={CurtainBlueR} className="absolute -right-15 -top-25 scale-75"/>
          <img src={FlowerArch} className="absolute -top-20 scale-125"/>
          <img src={CurtainBlueT} className="absolute scale-118"/>
        </div>
      </div>

      {/* --- SCRATCH THE DATE --- */}
      <div className="absolute w-full h-113 top-67 ">
        <div className="relative size-full">
          <img src={ScratchTheDate} className="absolute left-1/2 -translate-x-1/2 scale-67"/>
          <img src={FrameFlower} className="absolute left-1/2 -translate-x-1/2 top-3 scale-90"/>
          <img src={SaveTheDate} className="absolute  left-1/2 bottom-0 -translate-x-1/2 scale-59"/>
        </div>
      </div>
    </section>
  );
}
