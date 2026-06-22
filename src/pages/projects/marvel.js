import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectBanner from "@/components/project-banner";
import ProjectFloorPlan from "@/components/project-floor-plan";
import Amenities from "@/components/amenities";
import About from "@/components/about";
import { Roboto } from "next/font/google";
import ContactForm from "@/components/contact-form";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProjectAmenities from "@/components/project-amenities";
import ProjectSpecification from "@/components/project-specification";
import ProjectFeatures from "@/components/project-features";
import ProjectOtherFeatures from "@/components/project-other-features";
// import projectData from "@/data/projects-data";
import datasuper from "@/data/marvel.json";
import ProjectGallary from "@/components/project-gallary";
import ProjectVideo from "@/components/project-video";
import SiteProgress from "@/components/site-progress";
import PriceTable from "@/components/price-table";

//page data import

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function () {
  return (
    <main className={`${roboto.className}`}>
      <Head>
        <title>
          Legendary Marvel | Building Aspirations Enriching Lives Since 25
          years.
        </title>
      </Head>
      <Header />
      <ProjectBanner data={datasuper} />
         <section className="py-12 px-4 sm:px-6 md:px-16 bg-[#061224] text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#B68B4C]">
   Coming Soon
  </h2>
  </section>
  <ProjectOtherFeatures data={datasuper} />
  <PriceTable data={datasuper}/>
  <section className="w-full relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.5231213143124!2d80.2384307!3d13.0703345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673808f9784d%3A0x85a6539b35ce3169!2sLegendary%20Marvel!5e1!3m2!1sen!2sin!4v1761897781624!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
