import { Roboto } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function ComingSoon() {
  return (
    <main className={`${roboto.className}`}>
      <Head>
        <title>
          Coming Soon - Legendary Builders | Building Aspirations Enriching
          Lives Since 25 years.
        </title>
      </Head>

      <Header />

      {/*
        ✅ SINGLE BANNER
        - mt-[116px] pushes below the fixed header
        - aspect-[1885/865] makes the section grow to exactly match the
          adonia image ratio, so the full image is always visible
        - No min-h / fixed px height that was cutting the image short
      */}
      <section
        className="w-full relative mt-[116px]"
        style={{ aspectRatio: "1885 / 865" }}
      >
        {/* Full background image — object-contain so nothing is cropped */}
        <Image
          src="/images/adonia/adonia_true_1.jpg"
          fill
          className="object-cover object-center -z-0 brightness-50"
          alt="Legendary Adonia Coming Soon"
          priority
        />

        {/* Content overlay */}
        <div className="relative z-10 w-full h-full flex flex-col px-6 lg:px-12 py-4">
          {/* TOP — Breadcrumb */}
          <ul className="flex gap-2 items-center text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:underline text-gray-300">
                Home
              </Link>
            </li>
            <li className="text-gray-300">&gt;&gt;</li>
            <li className="text-gray-300">Coming soon</li>
          </ul>

          {/* MIDDLE — Text left, Form right — vertically + horizontally centered in remaining space */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 flex-1">
            {/* Left — "We are Coming soon" */}
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl font-bold leading-snug ">
                Under <br />
                <span className="leading-tight">Construction</span>
              </h1>
            </div>

            {/* Right — Contact form card */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-sm text-gray-800">
              <h2 className="text-xl font-semibold mb-4 text-center">
                Express your Interest
              </h2>
              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWd000007gXpx"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="oid" value="00DWd000007gXpx" />
                <input
                  type="hidden"
                  name="retURL"
                  value="https://legendary.in/"
                />
                <input type="hidden" name="lead_source" value="Website" />

                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  placeholder="Your Name"
                  maxLength={80}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  maxLength={80}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  maxLength={40}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full"
                />
                <input
                  type="submit"
                  value="Submit"
                  className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 rounded-md cursor-pointer transition"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
