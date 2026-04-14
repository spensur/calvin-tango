import BorderBlueFlowerL from "../assets/section-1/border-blue-flower-l.webp";
import BorderWhiteFlowerR from "../assets/section-1/border-white-flower-r.webp";
import FrameL from "../assets/section-1/frame-l.webp";
import FrameR from "../assets/section-1/frame-r.webp";
import FrameT from "../assets/section-1/frame-t.webp";

import BackgroundBuildings from "../assets/section-1/background-buildings.webp";

export function Section1() {
  return (
    <section className="relative w-full overflow-visible section-1-bg" style={{ aspectRatio: '9/16' }}>
      <img src={FrameT} className="absolute" style={{ left: '13%', top: '0%',  width: '100%' }} />
      <img src={FrameL} className="absolute" style={{ left: '-10.5%', top: '5%',  width: '50%' }} />
      <img src={FrameR} className="absolute" style={{ right: '-12%', top: '5%',  width: '50%' }} />

      <img src={BorderBlueFlowerL} className="absolute" style={{ left: '-24%', top: '-9%', width: '75%' }} />
      <img src={BorderWhiteFlowerR} className="absolute" style={{ right: '-25%', top: '-8%',  width: '75%' }} />


      <h1 
        className="
          w-64 text-center top-42 left-1/2 -translate-x-1/2
          font-caudex absolute text-xs font-bold"
      >
        YOU ARE CORDIALLY INVITED TO
          CELEBRATE THE TINGHUN OF
      </h1>
    </section>
  )
}