import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "800", "400", "500", "700", "900"],
});

export default function ProjectBanner({ data }) {
  const [showModal, setShowModal] = useState(false);
  const [brochureUrlAbsolute, setBrochureUrlAbsolute] = useState("");

  // ✅ Build absolute brochure URL (from JSON)
  useEffect(() => {
    const path = data?.banner_strip?.cta_link || "";
    if (!path) return;

    if (/^https?:\/\//i.test(path)) {
      // already absolute
      setBrochureUrlAbsolute(path);
    } else if (typeof window !== "undefined") {
      // build absolute from origin + path
      setBrochureUrlAbsolute(window.location.origin + path);
    }
  }, [data]);

  // ✅ Helper arrows for carousel
  const prevArrow = (onClickHandler) => (
    <>
      {data && data.arrow === "true" && (
        <button
          type="button"
          onClick={onClickHandler}
          className="lg:flex hidden z-10 absolute top-1/2 p-2 left-[100px] rounded-full w-12 h-12 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <circle cx="24.5" cy="24.5" r="24.5" fill="white" />
            <path d="M27 31.92L20.48 25.4C19.71 24.63 19.71 23.37 20.48 22.6L27 16.08" fill="white" />
            <path d="M27 31.92L20.48 25.4C19.71 24.63 19.71 23.37 20.48 22.6L27 16.08" stroke="#44465B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );

  const nextArrow = (onClickHandler) => (
    <>
      {data && data.arrow === "true" && (
        <button
          type="button"
          onClick={onClickHandler}
          className="lg:flex hidden z-10 absolute top-1/2 right-[100px] p-2 rounded-full w-12 h-12 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="49" viewBox="0 0 49 49" fill="none">
            <circle cx="24.5" cy="24.5" r="24.5" transform="rotate(-180 24.5 24.5)" fill="white" />
            <path d="M22 17.08L28.52 23.6C29.29 24.37 29.29 25.63 28.52 26.4L22 32.92" fill="white" />
            <path d="M22 17.08L28.52 23.6C29.29 24.37 29.29 25.63 28.52 26.4L22 32.92" stroke="#CCA557" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </>
  );

  return (
    <section className="w-full relative">
      <Carousel
        renderArrowNext={nextArrow}
        renderArrowPrev={prevArrow}
        infiniteLoop={true}
        showArrows={true}
        swipeable={true}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        className="w-full -z-0"
        autoPlay={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
      >
  {data?.banners?.map((ban, i) => (
  <div key={i} className="relative w-full">
    <div className="relative w-full max-h-[800px] overflow-hidden">
      <Image
        src={ban}
        alt={`Banner ${i}`}
        width={2560}
        height={1440}
        quality={100}
       className="w-full h-auto object-contain"
        priority
      />
    </div>
  </div>
))}

      </Carousel>

      {/* Project info section */}
      <div className="container p-4 mx-auto flex flex-col lg:flex-row gap-6 items-center justify-between bg-white shadow z-10 rounded lg:-translate-y-1/2">
        {data?.banner_strip && (
          <>
            <Image src={data.banner_strip.image} height={120} width={130} alt={data.banner_strip.alt} />

            <div className="grid grid-cols-2 gap-6">
              {data.banner_strip.icons?.map((item, idx) => (
                <div className="flex gap-2 items-center" key={idx}>
                  <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                  <div className="flex flex-col gap-px">
                    <span className="text-custom3 text-xs">{item.head}</span>
                    {item.text?.includes("<br/>") ? (
                      <div
                        className="text-custom2 text-sm"
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      />
                    ) : (
                      <span className="text-custom2 text-sm">{item.text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Download button opens modal */}
            <button
              onClick={() => setShowModal(true)}
              className="primary-btn px-4 py-2 whitespace-nowrap text-gray-50 animate-grow"
            >
              Download Brochure
            </button>
          </>
        )}
      </div>

      {/* ✅ Modal for form */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-black opacity-60" onClick={() => setShowModal(false)} />

          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full mx-4 z-10 overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">Please fill the form to download brochure</h3>
              <button className="text-gray-700" onClick={() => setShowModal(false)}>✕</button>
            </div>

            <div className="p-6">
              {/* ✅ Salesforce WebToLead Form */}
              <form
                action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                method="POST"
                target="_blank"
              >
                {/* hidden Salesforce inputs */}
                <input type="hidden" name="oid" value="00DWd000007gXpx" />
                <input type="hidden" name="retURL" value={brochureUrlAbsolute} />
                <input type="hidden" name="lead_source" value="Website" />

                {/* Form fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                </div>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone"
                  maxLength={40}
                  className="px-4 py-2 border border-gray-300 rounded-md w-full mt-4"
                />

                <div className="flex justify-end gap-2 mt-6">
                  <button
                    type="button"
                    className="px-4 py-2 rounded border"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md cursor-pointer transition"
                    // ✅ Delay closing modal (fixes "form not connected")
                    onClick={() => {
                      setTimeout(() => setShowModal(false), 600);
                    }}
                  >
                    Submit & Download
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
