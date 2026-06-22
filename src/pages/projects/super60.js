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
import datasuper from "@/data/super_60.json";
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
          Legendary Super60 | Building Aspirations Enriching Lives Since 25
          years.
        </title>
      </Head>
      <Header />
      {/* {projectData.map((project)=>(
        <div key={project.id}>
          <ProjectBanner title={project?.title} imageURL={project?.image}/>
        </div>
      ))} */}
      <ProjectBanner data={datasuper} />
       <ProjectOtherFeatures data={datasuper} />
      <ProjectFeatures data={datasuper} />
      <ProjectAmenities data={datasuper} />
      <PriceTable data={datasuper}/>
      <ProjectSpecification data={datasuper} />
      <ProjectGallary data={datasuper} />
      <SiteProgress data={datasuper}/>
      <ProjectVideo data={datasuper} />
      <ProjectFloorPlan data={datasuper} />
   
      <section className="w-full relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.2218584403054!2d80.2113934747626!3d13.021539187298446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52673a3911f7af%3A0xc3318e30c8543fff!2sLegendary%20Super%20Sixty!5e0!3m2!1sen!2sin!4v1715142302041!5m2!1sen!2sin"
          width="100%"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className=""
        ></iframe>
      </section>
        <ContactForm />
      <Footer />
    </main>
  );
}
