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
import datasuper from "@/data/bliss.json";
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
      {/* <Head>
        <title>
          Legendary Bliss| Building Aspirations Enriching Lives Since 25
          years.
        </title>
      </Head> */}
      <Head>
          <title>{datasuper.seo.title}</title>

          <meta
            name="description"
            content={datasuper.seo.description}
          />

          {/* Open Graph */}
          <meta property="og:title" content={datasuper.seo.title} />
          <meta property="og:description" content={datasuper.seo.description} />
          <meta property="og:image" content={datasuper.seo.image} />
          <meta property="og:url" content={datasuper.seo.url} />
          <meta property="og:type" content="website" />

          {/* SEO basics */}
          <link rel="canonical" href={datasuper.seo.url} />
          <meta name="robots" content="index, follow" />
      </Head>

      <Header />
      {/* {projectData.map((project)=>(
        <div key={project.id}>
          <ProjectBanner title={project?.title} imageURL={project?.image}/>
        </div>
      ))} */}
      <ProjectBanner data={datasuper} />
      <ProjectOtherFeatures data={datasuper} />
       <ProjectGallary data={datasuper} />
       <section className="bliss-two-col-section">
  <div className="bliss-two-col-wrapper">

    <h2 className="bliss-heading">Legendary Bliss</h2>

    <div className="bliss-two-col-grid">

      {/* LEFT SIDE – KEYWORDS */}
      <div className="bliss-left">
        <h3>Project Overview</h3>
        <ul>
          <li>Bliss by Legendary Builders offers an exceptional opportunity to own a premium 3 BHK home in the heart of T Nagar, one of Chennai’s most well-established and desirable residential neighborhoods. 
            These homes are thoughtfully envisioned as  Modern Flats, blending elegant architecture with functional layouts to suit contemporary urban lifestyles in one of Chennai’s most sought-after locations.</li>
          <li>Featuring well‑planned 3 BHK homes ranging from approximately 1667 to 1872 sq.ft with premium finishes, 
            each apartment is designed to maximize space, comfort, and natural light, providing a refined living experience for families, professionals, and investors in a prime city location. </li>
        </ul>
      </div>

      {/* RIGHT SIDE – CONTENT */}
      <div className="bliss-right">
       

        <p>
          With the strong rental demand for 3 BHK flats rising, Bliss in T Nagar 
          also offers excellent resale and rental potential, making it an ideal choice for homeowners and investors seeking steady rental income and long-term value growth.
        </p>

        <p>
          Backed by Trusted Construction by Legendary Builders and featuring modern amenities like lifts, a gymnasium, landscaped terrace gardens, 24×7 water and power backup, CCTV surveillance,
           and rainwater harvesting, the project reflects a commitment to quality, reliability, and attention to detail, delivering both peace of mind and a prestigious address in Chennai.
        </p>

      </div>

    </div>
  </div>

  
</section>
<section className="floor-table-section">
  <div className="floor-table-wrapper">

    <h2 className="floor-heading">
      Floor Plan & Area Details – Legendary Bliss, T. Nagar
    </h2>

    <div className="floor-table-container">
      <table className="floor-table">
        <thead>
          <tr>
            <th>Flat Type</th>
            <th>RERA Carpet Area</th>
            <th>Balcony Area</th>
            <th>Plinth Area</th>
            <th>Saleable Area</th>
            <th>UDS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Flat A</strong></td>
            <td>1324 sq.ft</td>
            <td>96 sq.ft</td>
            <td>1516 sq.ft</td>
            <td>1872 sq.ft</td>
            <td>756 sq.ft</td>
          </tr>
          <tr>
            <td><strong>Flat B</strong></td>
            <td>1192 sq.ft</td>
            <td>62 sq.ft</td>
            <td>1350 sq.ft</td>
            <td>1667 sq.ft</td>
            <td>672 sq.ft</td>
          </tr>
          <tr>
            <td><strong>Flat C</strong></td>
            <td>1258 sq.ft</td>
            <td>88 sq.ft</td>
            <td>1452 sq.ft</td>
            <td>1793 sq.ft</td>
            <td>724 sq.ft</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>


       <PriceTable data={datasuper}/>
       <section className="edu-table-section">
  <div className="edu-table-wrapper">

    <div className="edu-table-header">
      <h2>Educational Institutions Near Legendary Bliss</h2>
      <p>T. Nagar, Chennai</p>
    </div>

    <div className="edu-table-container">
      <table className="edu-table">
        <thead>
          <tr>
            <th>School Name</th>
            <th>Location</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PSBB Senior Secondary School</td>
            <td>T. Nagar</td>
            <td><span className="distance-badge">850 mts</span></td>
          </tr>
          <tr>
            <td>Holy Angels Anglo Indian HSS</td>
            <td>T. Nagar</td>
            <td><span className="distance-badge">1.7 km</span></td>
          </tr>
          <tr>
            <td>Vidyodaya School</td>
            <td>T. Nagar</td>
            <td><span className="distance-badge">3.1 km</span></td>
          </tr>
          <tr>
            <td>Dakshina Bharat Hindi Prachar Sabha</td>
            <td>T. Nagar</td>
            <td><span className="distance-badge">700 mts</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

{/* Colleges Table Section */}

<section className="edu-table-section">
  <div className="edu-table-wrapper">

    <div className="edu-table-header">
      <h2>Colleges Near Bliss – T. Nagar, Chennai</h2>
    </div>

    <div className="edu-table-container">
      <table className="edu-table">
        <thead>
          <tr>
            <th>College Name</th>
            <th>Approx. Distance from Legendary Bliss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shri Shankarlal Sundarbai Shasun Jain College for Women</td>
            <td><span className="distance-badge">750 mts</span></td>
          </tr>
          <tr>
            <td>Anna University</td>
            <td><span className="distance-badge">4.7 km</span></td>
          </tr>
          <tr>
            <td>Meenakshi College</td>
            <td><span className="distance-badge">4.4 km</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>

{/* Hospitals Table Section */}

<section className="edu-table-section">
  <div className="edu-table-wrapper">

    <div className="edu-table-header">
      <h2>Hospitals  Near Bliss – T. Nagar, Chennai</h2>
    </div>

    <div className="edu-table-container">
      <table className="edu-table">
        <thead>
          <tr>
            <th>Hospital Name</th>
            <th>Approx. Distance from Legendary Bliss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Geri Care Hospital</td>
            <td><span className="distance-badge">2.0 km</span></td>
          </tr>
          <tr>
            <td>Be Well Hospitals</td>
            <td><span className="distance-badge">2.1 km</span></td>
          </tr>
          <tr>
            <td>Cloudnine Hospital</td>
            <td><span className="distance-badge">2.2 km</span></td>
          </tr>
          <tr>
            <td>Bharathi Rajaa Hospital & Research Centre Pvt. Ltd.</td>
            <td><span className="distance-badge">2.5 km</span></td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>

{/* Entertainment & Lifestyle Table Section */}

<section className="edu-table-section">
  <div className="edu-table-wrapper">

    <div className="edu-table-header">
      <h2>Entertainment & Lifestyle  Near Bliss – T. Nagar, Chennai</h2>
    </div>

    <div className="edu-table-container">
      <table className="edu-table">
        <thead>
          <tr>
            <th>Location Name</th>
            <th>Approx. Distance from Legendary Bliss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Natesan Park</td>
            <td><span className="distance-badge">550 mts</span></td>
          </tr>
          <tr>
            <td>Pondy Bazaar</td>
            <td><span className="distance-badge">850 mts</span></td>
          </tr>
          <tr>
            <td>Ramee Mall</td>
            <td><span className="distance-badge">2.9 km</span></td>
          </tr>
          <tr>
            <td>Nexus Vijaya Mall</td>
            <td><span className="distance-badge">4.4 km</span></td>
          </tr>
          <tr>
            <td>Phoenix Marketcity</td>
            <td><span className="distance-badge">7.5 km</span></td>
          </tr>
          <tr>
            <td>Express Avenue</td>
            <td><span className="distance-badge">5.1 km</span></td>
          </tr>

        </tbody>
      </table>
    </div>

  </div>
</section>
{/* Transit & Connectivity Table Section */}

<section className="edu-table-section">
  <div className="edu-table-wrapper">

    <div className="edu-table-header">
      <h2>Transit & Connectivity  Near Bliss – T. Nagar, Chennai</h2>
    </div>

    <div className="edu-table-container">
      <table className="edu-table">
        <thead>
          <tr>
            <th> Transit Point</th>
            <th>Approx. Distance from Legendary Bliss</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T. Nagar Metro</td>
            <td><span className="distance-badge">450 mts</span></td>
          </tr>
          <tr>
            <td>T. Nagar Bus Depot</td>
            <td><span className="distance-badge">700 mts</span></td>
          </tr>
          <tr>
            <td>Panagal Park Metro</td>
            <td><span className="distance-badge">1.1 km</span></td>
          </tr>
          <tr>
            <td>Nandanam Metro</td>
            <td><span className="distance-badge">1.2 km</span></td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</section>
<section className="rera-section">
  <div className="rera-wrapper">
    <h2>RERA Registration Details for Legendary Bliss, T. Nagar</h2>
    <p>
      <strong>RERA Registration Number:</strong> TNRERA/29/BLG/0423/2025
    </p>
  </div>
</section>
  
</section>

        <section className="w-full relative">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.028517438232!2d80.23449149999999!3d13.0352278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52676ffddd99a9%3A0x91b0ebb9f2e2db1a!2sLegendary%20Bliss!5e1!3m2!1sen!2sin!4v1761897473278!5m2!1sen!2sin" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
