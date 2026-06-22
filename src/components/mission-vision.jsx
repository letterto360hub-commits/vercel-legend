import Image from "next/image";

export default function () {
  return (
    <section className="w-full py-12 relative">
      <Image
        src={"/images/building-bg-2.jpg"}
        fill
        alt="Building BG"
        className="object-cover -z-0 brightness-50"
      />
      <div className="container px-4 mx-auto grid lg:grid-cols-2 relative z-10 text-custom gap-4">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl text-primary uppercase font-bold">
            Our Vision
          </h3>
          <p className="text-base lg:w-1/2 text-justify">
            To be the catalyst for transformative change in the real estate
            industry. We aspire to create highly coveted products that elevate
            the quality of life for our Customers and revolutionize the very
            essence of the communities we touch.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center">
          <h3 className="text-xl text-primary uppercase font-bold">
            Our Mission
          </h3>
          <p className="text-base lg:w-1/2 text-justify">
            To build homes with uncompromised quality, deliver projects on time,
            ensure value for money, cultivate top talent, prioritize customer
            satisfaction and generate value for all stakeholders.
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-center flex-col gap-4 items-center">
          <h3 className="text-xl text-primary uppercase font-bold">
            What We Strive For
          </h3>
          <p className="text-base lg:w-1/2 text-justify">
            Our foundation rests upon unwavering honesty, integrity, and
            transparency, guiding us to always prioritize our customers, fulfill
            our commitments, and uphold ethical and moral principles for all
            stakeholders.
          </p>
          <p className="text-base lg:w-1/2 text-justify">
            We believe that exquisite and awe-inspiring homes can only be
            created by passionate individuals who are deeply attuned to the
            needs and aspirations of our homebuyers. This is why our team
            comprises industry-leading experts, and we are committed to
            nurturing emerging talents in every field.
          </p>
        </div>
      </div>
    </section>
  );
}
