"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    desktop: "/images/gallery/banner1.jpg",
    mobile: "/images/gallery/banmobile1.jpg",
  },
  {
    desktop: "/images/gallery/banner2.jpg",
    mobile: "/images/gallery/banmobile2.jpg",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full mt-16 bg-[#0a1630] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        speed={900}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">

              {/* ✅ Tablet + Desktop (FIXED) */}
              <div
                className="hidden sm:block w-full bg-no-repeat bg-center"
                style={{
                  aspectRatio: "1930 / 871",
                  backgroundImage: `url(${slide.desktop})`,
                  backgroundSize: "contain",
                }}
              />

              {/* ✅ Mobile (UNCHANGED – already correct) */}
              <div
                className="block sm:hidden w-full h-[581px] bg-no-repeat bg-center"
                style={{
                  backgroundImage: `url(${slide.mobile})`,
                  backgroundSize: "contain",
                }}
              />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
