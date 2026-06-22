import Cctv from "./icons/cctv";
import Garden from "./icons/garden";
import Gym from "./icons/gym";
import PlayArea from "./icons/play-area";
import PowerBackup from "./icons/power-backup";
import React from "react";



export default function ({ data }) {


  return (
    <section className={`container px-4 mx-auto grid lg:grid-cols-4 py-12 gap-6`}>
      <h2 className={`text-3xl lg:col-span-6 text-center`}>Amenities</h2>
      {data.amitiF.amenities.map((item, idx) => (
        <div className="flex flex-col items-center gap-4" key={idx}>
          <div className="w-20 h-20 rounded-full bg-primaryText p-4 flex items-center justify-center text-white">
              <div dangerouslySetInnerHTML={{__html:item.icon}}/>
          </div>
          <p className="text-lg">{item.text}</p>
        </div>
      ))}
      {/* <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primaryText p-4 flex items-center justify-center text-white">
          <Garden className="w-20 h-20" />
        </div>
        <p className="text-lg text-center">Landscaped Terrace Garden</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primaryText p-4 flex items-center justify-center text-white">
          <PlayArea className="w-20 h-20" />
        </div>
        <p className="text-lg">Kid's Play Area</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primaryText p-4 flex items-center justify-center text-white">
          <PowerBackup className="w-20 h-20" />
        </div>
        <p className="text-lg">100% Power Backup</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-primaryText p-4 flex items-center justify-center text-white">
          <Cctv className="w-20 h-20" />
        </div>
        <p className="text-lg">24x7 CCTV & Security</p>
      </div> */}
    </section>
  );
}
