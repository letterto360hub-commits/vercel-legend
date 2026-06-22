import BathTub from "./icons/bath-tub";
import Construction from "./icons/construction";
import Door from "./icons/door";
import Electrical from "./icons/electrical";
import Home from "./icons/home";
import Structure from "./icons/structure";
import Wall from "./icons/wall";
import Window from "./icons/window";

export default function ({ data }) {
  console.log("tttt", data.specifications.spec1[2]);
  return (
    <section className="container px-4 mx-auto py-6 my-6 grid lg:grid-cols-2 gap-6 shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl lg:col-span-2 text-center">Specifications</h2>
      <div className="flex flex-col gap-4">
        {data.specifications.spec1.map((item, idx) => (
          <div className="flex flex-col gap-4 text-base">
            <h5 className="flex items-center gap-4 text-2xl text-primaryText">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
              <span className="uppercase">{item.title}</span>
            </h5>
            <ul style={{ listStyleType: "disc" }} className="px-2">
              {item.textW.map((item, idx) => (
                <li key={idx} className="py-2">
                  <strong>{item.tx}</strong> {item.px}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-12">
      {data.specifications.spec2.map((item, idx) => (
  <div className="flex flex-col gap-8 text-base" key={idx}>
    <h5 className="flex items-center gap-4 text-2xl text-primaryText">
      <div dangerouslySetInnerHTML={{ __html: item.icon }} />{" "}
      <span className="uppercase">{item.title}</span>
    </h5>
    <h5 className="flex items-center gap-4 text-xl text-primaryText">
      {item.title1}
    </h5>
    <ul style={{ listStyleType: "disc" }} className="px-2" >
      {item.textW.map((item, idx) => (
        <li key={idx} className="py-2">
          <strong>{item.tx}</strong> {item.px}
        </li>
      ))}
    </ul>
  </div>
))}


        {/* <div className="flex flex-col gap-8 text-base">
          <h5 className="flex items-center gap-4 text-xl text-primaryText">
            WINDOWS
          </h5>
          <p>
            <strong>Windows </strong>: Aluminium / UPVC windows with sliding
            shutter with see-through plain glass and MS grill on the inner side
            (wherever applicable)
          </p>
          <p>
            <strong>French doors </strong>: Aluminium / UPVC windows and doors
            with toughened glass without grill
          </p>
        </div>
        <div className="flex flex-col gap-8 text-base">
          <h5 className="flex items-center gap-4 text-2xl text-primaryText">
            <Electrical className="w-8 h-8 uppercase" /> 6. ELECTRICALS
          </h5>
          <p>
            <strong>Power Supply </strong>: 3 PHASE power supply connection
          </p>
          <p>
            <strong>Switches & sockets </strong>: Modular box & modular switches
            & sockets of Schneider or equivalent will be provided
          </p>
          <p>
            <strong>Back-up </strong>: 100% Power Backup for all the Units
          </p>
        </div> */}
      </div>
      <div className="lg:col-span-2">
        <hr />
      </div>
      {data.specifications.spec3.map((item, idx) => (
        <div className="flex flex-col gap-4" key={idx}>
          <div className="flex flex-col gap-4 text-base">
            <h5 className="flex items-center gap-4 text-2xl text-primaryText">
              {item.title}
            </h5>
            <p>
              <strong>{item.h1}</strong>
              {item.p1}
            </p>
            <p>
              <strong>{item.h2}</strong> {item.p2}
            </p>
            <p>
              <strong>{item.h3}</strong> {item.p3}
            </p>
            <p>
              <strong>{item.h4}</strong> {item.p4}
            </p>
            <p>
              <strong>{item.h5}</strong>
              {item.p5}
            </p>
            <p>
              <strong>{item.h6}</strong> {item.p6}
            </p>
            <p>
              <strong>{item.h7}</strong>
              {item.p7}
            </p>
            <p>
              <strong>{item.h8}</strong> {item.p8}
            </p>
            <p>
              <strong>{item.h9}</strong> {item.p9}
            </p>
            <p>
              <strong>{item.h10}</strong> {item.p10}
            </p>
          </div>
        </div>
      ))}
      {/* <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 text-base">
          <h5 className="flex items-center gap-4 text-2xl text-primaryText">
            <Home className="w-8 h-8" /> OUTDOOR FEATURES:
          </h5>
          <p>
            <strong>1. Water storage</strong> : UG Sump for Rain Water Storage.
            WTP Provision at Terrace and Treated water will be stored in OHT
          </p>
          <p>
            <strong>2. Rainwater harvest</strong> : Rainwater harvesting site
          </p>
          <p>
            <strong>3. Sewage Disposal</strong> : Public Sewer Connection
          </p>
          <p>
            <strong>4. Safety</strong> : CCTV surveillance cameras will be
            provided all-round the building at pivotal Locations in ground level
          </p>
          <p>
            <strong>5. Well-defined walkway</strong> : Walkway spaces well
            defined as per landscape design intent
          </p>
          <p>
            <strong>6. Security</strong> : Security booth will be provided at
            the entrance
          </p>
          <p>
            <strong>7. Compound wall</strong> : Site perimeter fenced by
            compound wall with entry gates for a height of 1500mm as per design
            intent
          </p>
          <p>
            <strong>8. Landscape</strong> : Suitable landscape at appropriate
            places in the project as per design intent
          </p>
          <p>
            <strong>9. Driveway</strong> : Convex mirror for safe turning in
            driveway in / out
          </p>
          <p>
            <strong>10. External Driveway flooring</strong> : Interlocking paver
            block/equivalent flooring with a demarcated driveway
          </p>
        </div>
      </div> */}
    </section>
  );
}
