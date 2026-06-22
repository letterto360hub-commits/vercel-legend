import Link from "next/link";
import { Jost } from "next/font/google";
import Facebook from "./icons/facebook";
import Instagram from "./icons/instagram";
import Twitter from "./icons/twitter";
import Linkedin from "./icons/linkedin";
import Image from "next/image";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function () {
  return (
    <section className="py-16 container mx-auto px-4">
  <h2 className="text-3xl text-center font-semibold mb-12">OUR FOUNDER</h2>
  <h4 className="text-3xl text-center font-semibold mb-12">Meet the Visionary Behind Legendary</h4>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-5xl mx-auto">
    
    {/* Left: Image in square box with styling */}
    <div className="flex justify-center">
      <div className="w-[400px] h-[600px] rounded-lg overflow-hidden shadow-md border border-gray-200">
        <Image
          src="/images/Kuthupudin.jpg"
          alt="Syed G Kudhupudin"
          width={400}
          height={600}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>

    {/* Right: Content */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-1">Mr. Syed G Kudhupudin FCA, DISA</h3>
      <p className="text-sm font-semibold text-gray-600 mb-2">Founder & Managing Director, Legendary Builders</p>
      <p className="text-sm text-gray-700 leading-relaxed mb-4 text-justify">
       In the vibrant landscape of Chennai’s real estate, Mr. Kudhupudin stands tall as a symbol of grit, vision, and values. A Chartered Accountant by qualification (Batch of 2010) and an entrepreneur by spirit, he founded Legendary Builders in 2022 with a clear mission — to redefine what luxury means in urban living and make it more personal, purposeful, and lasting.<br></br>
       Before laying the foundation of his own brand, he held key leadership roles at one of South India’s most prominent real estate firms, where he sharpened his understanding of large-scale development, customer-centricity, and operational excellence. This hands-on experience in steering landmark projects gave him a strong edge when stepping out to build something of his own.<br></br>
       Raised in a humble background, Mr. Kudhupudin’s journey is powered by integrity, discipline, and relentless focus. “Whatever I take up, I give it my 100%,” he says — a belief that permeates every project Legendary Builders undertakes. His transition from finance to real estate was not just a career shift; it was a calling to create spaces that people are proud to call home.<br></br>
      Today, Legendary Builders is known for delivering ultra-luxury residences with an eye for detail and a heart for trust. Under Mr. Kudhupudin’s leadership, the brand is not only building homes — it’s building a legacy that will shape Chennai’s skyline for generations to come.
     <br></br> And this is just the beginning.
      </p>
      <Link
        href="https://www.linkedin.com/in/kudhupudin-syed-025a69259/"
        target="_blank"
        className="inline-block text-blue-600 font-medium hover:underline"
      >
        LinkedIn
      </Link>
    </div>
  </div>
</section>

  );
}
