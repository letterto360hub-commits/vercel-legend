import { Roboto } from "next/font/google";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import OurTeam from "@/components/our-team";
import MissionVision from "@/components/mission-vision";
import ContactForm from "@/components/contact-form";
import data from "@/data/platina.json"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function AboutUs() {
  return (
    <main className={`${roboto.className}`}>
      <Head>
        <title>
          About Us - Legendary Builders | Building Aspirations Enriching Lives
          Since 25 years.
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
          <h1 className="text-2xl font-bold">About Us</h1>
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>&gt;&gt;</li>
            <li>About Us</li>
          </ul>
        </div>
      </section>

      <section className="w-full py-12 bg-gray-100">
        <div className="container px-4 mx-auto grid lg:grid-cols-2">
          <div className="flex relative min-h-[400px]">
            <Image
              src={"/images/building-bg.jpeg"}
              fill
              className="object-cover object-bottom"
            />
          </div>
          <div className="flex flex-col gap-4 items-start justify-center p-4 text-custom3">
            <p className="text-base">Welcome to Legendary Builders</p>
            <h2 className="text-4xl text-primary">We build Communities</h2>
            <p className="text-base">
              Founded by a passionate group of individuals with a track record
              of delivering multiple large scale projects, “Legendary” was
              incorporated to redefine how aesthetic design, industry expertise
              and a vision can come together to transform everyday living.
            </p>
            <div className="flex flex-col gap-0">
              <p className="text-base italic">
                "Buying real estate is not only the best way, the quickest way,
                the safest way, but the only way to become wealthy."
              </p>
              <p className="text-base self-end"> – Marshall Field</p>
            </div>
          </div>
        </div>
      </section>
      <MissionVision />
      <OurTeam />
      <ContactForm data={data}/>
      <Footer />
    </main>
  );
}
