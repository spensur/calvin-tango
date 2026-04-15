import FlowerArch from "../assets/section-2/flower-arch.webp";
import CurtainBlueT from "../assets/section-2/curtain-blue-t.webp";
import CurtainBlueL from "../assets/section-2/curtain-blue-l.webp";
import CurtainBlueR from "../assets/section-2/curtain-blue-r.webp";

import FrameFlower from "../assets/section-2/frame-flower.webp";
import Vase from "../assets/section-2/vase-1.webp";
import Sun from "../assets/section-2/sun-1.webp";

import BackgroundWallpaper from "../assets/background-wallpaper.webp";


export function Section2() {
  return (
    <section className="relative w-full min-h-208 overflow-visible">
      {/* --- BACKGROUND --- */}
      <img src={BackgroundWallpaper} className="absolute inset-0 w-full h-full object-cover" />
      
      {/* --- CURTAIN FRAME --- */}
      <img src={FlowerArch} className="absolute -top-4 scale-125"/>
    </section>
  );
}
