import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form-2";

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
          <h1 className="text-2xl font-bold">Coming soon</h1>
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>&gt;&gt;</li>
            <li>Coming soon</li>
          </ul>
        </div>
      </section>

      <ContactForm isContactPage />
      <Footer />
    </main>
  );
}
