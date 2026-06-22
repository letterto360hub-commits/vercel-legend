import { Roboto } from "next/font/google";
import Head from "next/head";
import Header from "@/components/header";
import HeroBanner from "@/components/hero-banner";
import About from "@/components/about";
import Amenities from "@/components/amenities";
import Services from "@/components/services";
import OurTeam from "@/components/our-team";
import NewsUpdate from "@/components/news-update";
import Blog from "@/components/blog";
import Footer from "@/components/footer";
import MissionVision from "@/components/mission-vision";
import ContactForm from "@/components/contact-form";
import Location from "@/components/location";
import Image from "next/image";
import Link from "next/link";
import Popup from "reactjs-popup";
import EnquiryForm from "@/components/enquiry-form";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <main className={`${roboto.className}`}>
      <Head>
        <title>
          Legendary Builders | Building Aspirations Enriching Lives Since 25
          years.
        </title>
      </Head>
      <Header />
      <section className="w-full pb-4 pt-20 relative text-custom">
        <Image
          src={"/images/platina-banner.jpg"}
          fill
          className="object-cover -z-0 brightness-50"
          alt="Breadcrumbs BG"
        />
        <div className="container mx-auto px-4 relative flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Residential Projects</h1>
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>&gt;&gt;</li>
            <li>Residential Projects</li>
          </ul>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 md:px-16 bg-[#061224] text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#B68B4C]">
          Completed Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              src: "/images/gallery/platina.jpg",
              link: "/projects/platina",
              alt: "Legendary Platina",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-300 bg-[#061224]"
              />

              {/* Project Name below image */}
              <div className="text-center bg-[#061224] text-white py-3 font-semibold text-lg">
                {item.alt}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 md:px-16 bg-[#061224] text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#B68B4C]">
          Ready To Occupy
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              src: "/images/gallery/super60-bg.jpg",
              link: "/projects/super60",
              alt: "Legendary Super 60 ",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-300 bg-[#061224]"
              />

              {/* Project Name below image */}
              <div className="text-center bg-[#061224] text-white py-3 font-semibold text-lg">
                {item.alt}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 md:px-16 bg-[#061224] text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#B68B4C]">
          On-going Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              src: "/images/gallery/bliss.jpg",
              link: "/projects/bliss",
              alt: "Legendary Bliss",
            },
            {
              src: "/images/gallery/pride.jpg",
              link: "/projects/pride",
              alt: "Legendary Pride",
            },
            {
              src: "/images/gallery/marvel.jpg",
              link: "/projects/marvel",
              alt: "Legendary Marvel",
            },
            {
              src: "/images/gallery/reva.jpg",
              link: "/projects/reva",
              alt: "Legendary Reva",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Project Image */}
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-300 bg-[#061224]"
              />

              {/* Project Name below image */}
              <div className="text-center bg-[#061224] text-white py-3 font-semibold text-lg">
                {item.alt}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 md:px-16 bg-[#061224] text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#B68B4C]">
          Upcoming Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              src: "/images/gallery/moon.jpg", // add this image to public/images/gallery/
              link: "/projects/moon",
              alt: "Legendary Moon",
            },
            {
              src: "/images/gallery/reva.jpg",
              link: "/projects/reva",
              alt: "Legendary Reva",
            },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative block overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto max-h-80 object-contain group-hover:scale-105 transition-transform duration-300 bg-[#061224]"
              />
              <div className="text-center bg-[#061224] text-white py-3 font-semibold text-lg">
                {item.alt}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
