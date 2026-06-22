import Star from "./icons/star";

export default function ({data}) {
  return (
    <section className="container px-4 mx-auto grid lg:grid-cols-5 items-start py-12 gap-6">
      <h2 className="text-3xl lg:col-span-5 text-center">Features</h2>
      {data.features.map((item,idx)=>(
        <div className="flex flex-col items-center gap-4" key={idx}>
        <Star />
        <p className="text-lg text-center content-center">
          {item.text1}<br />{item.text2}
        </p>
      </div>
      ))}
      {/* <div className="flex flex-col items-center gap-4">
        <Star />
        <p className="text-lg text-center">
          Stilt + <br />5 Floors Building
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Star />
        <p className="text-lg text-center">
          10 Luxury <br /> 4BHK Apartments{" "}
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Star />
        <p className="text-lg text-center">
          Two Apartments <br /> in Each Floor
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Star />
        <p className="text-lg text-center">
          Super Built Up Area - <br />
          2,691 Sq.Ft
        </p>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Star />
        <p className="text-lg ">UDS - 925 Sq.Ft</p>
      </div> */}
    </section>
  );
}
