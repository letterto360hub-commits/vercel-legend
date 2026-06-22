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

export default function () {
  return (
    <main className={`${roboto.className}`}>
      <Head>
        <title>About Us - Legendary Builders | Media </title>
      </Head>
      <Header />
      <section className="w-full pb-4 pt-20 relative text-custom">
        <Image src={"/images/platina-banner.jpg"} fill className="object-cover -z-0 brightness-50" alt="Breadcrumbs BG" />
        <div className="container mx-auto px-4 relative flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Media</h1>
          <ul className="flex gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>&gt;&gt;</li>
            <li>Press Coverage</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-12 bg-gray-100">
        <div className="container px-4 mx-auto grid lg:grid-cols-3 gap-8">
          <Link
            href={
              "https://helloentrepreneurs.com/uncategorized/legendary-builders-unveils-super60-a-grand-residential-project-in-the-heart-of-city-35014/"
            }
            target="_blank"
          >
            <div className="flex flex-col gap-0 w-full h-[350px] rounded shadow overflow-hidden animate-grow">
              <div className="relative w-full min-h-[250px] overflow-hidden">
                <Image className="object-cover object-top" src={"/images/media/he.png"} fill />
              </div>
              <div className="h-full flex justify-between items-center bg-primary/10 px-2">
                <p className="text-2xl text-primary">Hello Entrepreneurs</p>
                <p className="text-2xl text-primary">12th Feb 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href={"https://news9network.com/legendary-builders-unveils-super60-a-grand-residential-project-in-the-heart-of-city/"}
            target="_blank"
          >
            <div className="flex flex-col gap-0 w-full h-[350px] rounded shadow overflow-hidden animate-grow">
              <div className="relative w-full min-h-[250px] overflow-hidden">
                <Image className="object-cover object-top" src={"/images/media/n9.png"} fill />
              </div>
              <div className="h-full flex justify-between items-center bg-primary/10 px-2">
                <p className="text-2xl text-primary">News 9 Network</p>
                <p className="text-2xl text-primary">12th Feb 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href={"https://www.mid-day.com/brand-media/article/legendary-builders-unveils-super60--a-grand-residential-project-in-the-heart-23334363"}
            target="_blank"
          >
            <div className="flex flex-col gap-0 w-full h-[350px] rounded shadow overflow-hidden animate-grow">
              <div className="relative w-full min-h-[250px] overflow-hidden">
                <Image className="object-cover object-top" src={"/images/media/midday.png"} fill />
              </div>
              <div className="h-full flex justify-between items-center bg-primary/10 px-2">
                <p className="text-2xl text-primary">mid-day</p>
                <p className="text-2xl text-primary">9th Feb 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href={
              "https://nationalinsight.in/index.php/2024/02/12/legendary-builders-unveils-super60-a-grand-residential-project-in-the-heart-of-city/"
            }
            target="_blank"
          >
            <div className="flex flex-col gap-0 w-full h-[350px] rounded shadow overflow-hidden animate-grow">
              <div className="relative w-full min-h-[250px] overflow-hidden">
                <Image className="object-cover object-top" src={"/images/media/ni.png"} fill />
              </div>
              <div className="h-full flex justify-between items-center bg-primary/10 px-2">
                <p className="text-2xl text-primary">National Insight</p>
                <p className="text-2xl text-primary">12th Feb 2024</p>
              </div>
            </div>
          </Link>
          <Link
            href={
              "https://theeveningpost.in/index.php/2024/02/12/legendary-builders-unveils-super60-a-grand-residential-project-in-the-heart-of-city/"
            }
            target="_blank"
          >
            <div className="flex flex-col gap-0 w-full h-[350px] rounded shadow overflow-hidden animate-grow">
              <div className="relative w-full min-h-[250px] overflow-hidden">
                <Image className="object-cover object-center" src={"/images/media/TEP.png"} fill />
              </div>
              <div className="h-full flex justify-between items-center bg-primary/10 px-2">
                <p className="text-2xl text-primary">The Evening Post</p>
                <p className="text-2xl text-primary">12th Feb 2024</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </main>
  );
}
