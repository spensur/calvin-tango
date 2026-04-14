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
    <section className="relative w-full overflow-visible section-1-bg" style={{ aspectRatio: '9/16' }}>
      <img src={FrameT} className="absolute" style={{ left: '13%', top: '0%',  width: '100%' }} />
      <img src={FrameL} className="absolute" style={{ left: '-10.5%', top: '5%',  width: '50%' }} />
      <img src={FrameR} className="absolute" style={{ right: '-12%', top: '5%',  width: '50%' }} />

      <img src={Lantern} className="absolute" style={{ left: '-1%', top: '25.5%',  width: '23%' }} />
      <img src={TasselJade} className="absolute" style={{ right: '9%', top: '18%',  width: '13%' }} />
      <img src={TasselTinghun} className="absolute" style={{ right: '-1%', top: '28%',  width: '18%' }} />

      <img src={BorderBlueFlowerL} className="absolute" style={{ left: '-24%', top: '-9%', width: '75%' }} />
      <img src={BorderWhiteFlowerR} className="absolute" style={{ right: '-25%', top: '-8%',  width: '75%' }} />


      <h3 className="w-64 text-center top-42 left-1/2 -translate-x-1/2 font-caudex absolute text-xs font-bold">
        YOU ARE CORDIALLY INVITED TO 
        CELEBRATE THE TINGHUN OF
      </h3>

      <div className="text-center top-56 left-1/2 -translate-x-1/2 font-corinthia absolute font-bold">
        <h1 className="text-7xl">Melvin</h1>
        <h1 className="text-5xl -mt-4">&</h1>
        <h1 className="text-7xl -mt-8">Camille</h1>
      </div>


    </section>
  )
}