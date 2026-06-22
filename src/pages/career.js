// src/pages/career.js
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Roboto } from "next/font/google";
import { useCallback, useState } from "react";
import axios from "axios";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Careers() {
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileSizeKb, setFileSizeKb] = useState(0);

  const MAX_FILE_SIZE_MB = 8;

  const onFileChange = (e) => {
    setError("");
    setSuccess("");
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const sizeMb = f.size / (1024 * 1024);
    if (sizeMb > MAX_FILE_SIZE_MB) {
      setError(`File too large. Max ${MAX_FILE_SIZE_MB}MB allowed.`);
      return;
    }
    setFile(f);
    setFileName(f.name);
    setFileSizeKb(Math.round(f.size / 1024));
  };

  const submitForm = useCallback(
    async (event) => {
      if (event && event.preventDefault) event.preventDefault();
      setError("");
      setSuccess("");

      if (!file) {
        setError("Please select a CV to upload.");
        return;
      }

      setIsSubmitting(true);
      const body = new FormData();
      body.append("file", file);

      try {
        const response = await axios({
          method: "post",
          url: "/api/careers",
          data: body,
          headers: { "Content-Type": "multipart/form-data" },
        });
        setSuccess(response?.data?.message || "CV submitted successfully!");
        setFile(null);
        setFileName("");
        setFileSizeKb(0);
      } catch (e) {
        setError("Upload failed. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [file]
  );

  return (
    <main className={`${roboto.className} bg-[#000d1e] text-white`}>
      <Head>
        <title>Careers - Legendary Builders | Join Our Team</title>
      </Head>

      <Header />

      {/* HERO
          NOTE: padding-top increased to avoid header overlap.
          pt-[96px] ensures the "Careers" heading sits below a fixed header.
          If your header is taller, increase this value slightly.
      */}
      <section className="relative w-full h-52 md:h-64 lg:h-72 pt-[96px]">
        <Image
          src={"/images/platina-banner.jpg"}
          alt="Careers banner"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start container mx-auto px-6">
          <br></br>
          <br></br>
          <h1 className="text-4xl md:text-5xl font-bold text-[#cfa34e] mb-2">
            Careers
          </h1>
          <nav className="text-sm">
            <Link href="/" className="text-[#cfa34e] hover:underline">
              Home
            </Link>{" "}
            <span className="mx-1 text-white">&gt;</span>{" "}
            <span className="text-white/80">Career with Legendary Builders</span>
          </nav>
        </div>
      </section>

      {/* MAIN SECTION */}
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="bg-[#0b1b2a] rounded-lg p-8 shadow-lg border border-[#cfa34e]/30">
            <h2 className="text-2xl font-semibold text-[#cfa34e] mb-3">
              Openings & Drop Your CV
            </h2>
            <p className="text-white/90 leading-relaxed mb-6">
              We don’t always have open positions, but we are always on the
              lookout for talented people. Share your CV and if we find a match,
              we’ll reach out. Legendary Builders values integrity, excellence,
              and teamwork — join us to build meaningful projects.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#12253d] p-5 rounded border border-[#cfa34e]/20">
                <h4 className="text-lg font-medium text-[#cfa34e]">
                  What we look for
                </h4>
                <ul className="mt-2 list-disc list-inside text-white/80 text-sm">
                  <li>Professionalism & ownership</li>
                  <li>Strong communication & teamwork</li>
                  <li>Relevant domain experience</li>
                </ul>
              </div>
              <div className="bg-[#12253d] p-5 rounded border border-[#cfa34e]/20">
                <h4 className="text-lg font-medium text-[#cfa34e]">
                  Hiring process
                </h4>
                <ol className="mt-2 list-decimal list-inside text-white/80 text-sm">
                  <li>Resume screening</li>
                  <li>Technical / HR interview</li>
                  <li>Offer & onboarding</li>
                </ol>
              </div>
            </div>
          </div>

          {/* PERKS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              [
                "Competitive Salary",
                "Market aligned compensation and periodic reviews.",
              ],
              ["Health Benefits", "Medical coverage for you and your dependents."],
              [
                "Growth & Learning",
                "Training, certifications and mentorship programs.",
              ],
              [
                "Work-life Balance",
                "Generous leave policy and flexible hours where possible.",
              ],
              [
                "Team Culture",
                "Collaborative teams and transparent leadership.",
              ],
              [
                "Recognition",
                "Employee awards and spot recognitions for impact.",
              ],
            ].map(([title, desc], idx) => (
              <div
                key={idx}
                className="bg-[#0b1b2a] p-5 rounded-lg border border-[#cfa34e]/20 hover:border-[#cfa34e]/50 transition"
              >
                <h5 className="font-semibold text-[#cfa34e]">{title}</h5>
                <p className="text-sm text-white/80 mt-2">{desc}</p>
              </div>
            ))}
          </div>

          {/* VALUES */}
          <div className="bg-[#0b1b2a] rounded-lg border border-[#cfa34e]/20 p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-[#cfa34e] mb-4">
              Our Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h6 className="font-medium text-[#cfa34e]">Integrity</h6>
                <p className="text-sm text-white/80">
                  We do the right thing, even when no one is watching.
                </p>
              </div>
              <div>
                <h6 className="font-medium text-[#cfa34e]">Craftsmanship</h6>
                <p className="text-sm text-white/80">
                  We take pride in building quality projects.
                </p>
              </div>
              <div>
                <h6 className="font-medium text-[#cfa34e]">Customer Focus</h6>
                <p className="text-sm text-white/80">
                  Delivering value and delight to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-[#0b1b2a] rounded-lg p-6 shadow-lg border border-[#cfa34e]/30">
              <h3 className="text-xl font-semibold text-[#cfa34e] mb-3">
                Drop Your CV
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Upload your resume (PDF or DOC). We’ll review and contact you if
                there’s a relevant opening.
              </p>

              <label
                htmlFor="resumeUpload"
                className="block mb-2 text-sm font-medium text-[#cfa34e]"
              >
                Upload CV (max {MAX_FILE_SIZE_MB} MB)
              </label>
              <input
                id="resumeUpload"
                accept=".pdf,.doc,.docx"
                onChange={onFileChange}
                type="file"
                className="block w-full text-sm text-white bg-[#12253d] border border-[#cfa34e]/30 rounded-md cursor-pointer p-2"
              />

              {fileName && (
                <div className="mt-3 text-sm text-white/80 bg-[#12253d] p-3 rounded border border-[#cfa34e]/20">
                  <div className="font-medium text-[#cfa34e]">{fileName}</div>
                  <div className="text-xs">{fileSizeKb} KB</div>
                </div>
              )}

              {error && <p className="mt-3 text-sm text-red-400">{error}</p>}
              {success && <p className="mt-3 text-sm text-green-400">{success}</p>}

              <button
                onClick={submitForm}
                disabled={isSubmitting}
                className={`mt-5 w-full py-3 rounded-md font-medium transition ${
                  isSubmitting
                    ? "bg-[#cfa34e]/50 cursor-not-allowed"
                    : "bg-[#cfa34e] text-[#000d1e] hover:bg-[#d9b55f]"
                }`}
              >
                {isSubmitting ? "Submitting..." : "Submit CV"}
              </button>
            </div>

            <div className="mt-6 p-5 rounded-lg bg-[#cfa34e] text-[#000d1e]">
              <h4 className="font-semibold">Need help?</h4>
              <p className="text-sm mt-2">
                Email us at{" "}
                <a className="underline font-medium" href="mailto:info@legendary.in">
                  info@legendary.in
                </a>{" "}
                for queries about hiring.
              </p>
              <Link
                href="/contact"
                className="inline-block mt-4 text-sm bg-[#000d1e] text-[#cfa34e] px-3 py-2 rounded hover:bg-[#12253d]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </aside>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
