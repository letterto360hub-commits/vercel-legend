import Header from "@/components/header";
import Footer from "@/components/footer";
import ProjectBanner from "@/components/project-banner";
import ProjectFloorPlan from "@/components/project-floor-plan";
import Amenities from "@/components/amenities";
import About from "@/components/about";
import { Roboto } from "next/font/google";
import ContactForm from "@/components/contact-form";
import Head from "next/head";
import ProjectAmenities from "@/components/project-amenities";
import ProjectSpecification from "@/components/project-specification";
import ProjectFeatures from "@/components/project-features";
import ProjectOtherFeatures from "@/components/project-other-features";
// import projectData from "@/data/projects-data";
import data from "@/data/platina.json"
import PriceTable from "@/components/price-table";
import ProjectGallary from "@/components/project-gallary";

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
          Legendary Platina | Building Aspirations Enriching Lives Since 25
          years.
        </title>
      </Head>
      <Header />
      <ProjectBanner data={data} />
      <ProjectOtherFeatures data={data} />
      <ProjectFeatures data={data} />
      <ProjectAmenities data={data} />
      <PriceTable data={data}/>
      <ProjectSpecification data={data}/>
      <ProjectGallary data={data} />
      <ProjectFloorPlan data={data}/>
      <ContactForm />
      <section className="w-full relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.839720494019!2d80.2615232!3d13.0483532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526703748e1f87%3A0x5ab42536d0b738bc!2sLegendary%20Platina!5e1!3m2!1sen!2sin!4v1761897835044!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <Footer />
    </main>
  );
}
