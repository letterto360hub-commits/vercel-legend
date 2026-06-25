import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function AboutUs() {
  return (
    <main className={`${roboto.className}`}>
      <Head>
        <title>
          Contact Us - Legendary Builders | Building Aspirations Enriching Lives
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
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>&gt;&gt;</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </section>

      <ContactForm isContactPage />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.60216631371!2d80.2516273!3d13.0609763!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266404ac91561%3A0x309b704b5a3533f3!2s3762%2B9JJ%2C%20Thousand%20Lights%20West%2C%20Thousand%20Lights%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1704263991402!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </main>
  );
}
