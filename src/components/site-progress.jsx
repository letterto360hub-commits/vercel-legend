import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import { Roboto } from "next/font/google";
import Link from "next/link";
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function ({ data }) {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.screen.width);
  });
  const prevArrow = (onClickHandler, hasPrev, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={`z-10 absolute bg-primary text-white top-1/2 -translate-y-1/2 ${
          hasPrev ? "" : "disabled"
        } left-1 p-2 rounded-full w-10 h-10 flex items-center justify-center`}
      >
        <svg
          className="w-8 h-8"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="right-arrow (1) 1">
            <g id="Group">
              <path
                id="Vector"
                d="M19.9377 11C19.9377 10.6203 19.6299 10.3125 19.2502 10.3125H2.75024C2.37056 10.3125 2.06274 10.6203 2.06274 11C2.06274 11.3797 2.37056 11.6875 2.75024 11.6875H19.2502C19.6299 11.6875 19.9377 11.3797 19.9377 11Z"
                fill="currentcolor"
              />
              <path
                id="Vector_2"
                d="M8.73638 5.01386C8.46788 4.74538 8.03256 4.74538 7.76407 5.01386L2.26407 10.5139C1.99558 10.7824 1.99558 11.2176 2.26407 11.4861L7.76407 16.9861C8.03256 17.2546 8.46788 17.2546 8.73638 16.9861C9.00487 16.7176 9.00487 16.2824 8.73638 16.0139L3.72248 11L8.73638 5.98613C9.00487 5.71765 9.00487 5.28234 8.73638 5.01386Z"
                fill="currentcolor"
              />
            </g>
          </g>
        </svg>
      </button>
    );
  };
  const nextArrow = (onClickHandler, hasNext, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        className={`z-10 absolute bg-primary text-white top-1/2 -translate-y-1/2 ${
          hasNext ? "" : "disabled"
        } right-1 p-2 rounded-full w-10 h-10 flex items-center justify-center`}
      >
        <svg
          className="w-8 h-8 rotate-180"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="right-arrow (1) 1">
            <g id="Group">
              <path
                id="Vector"
                d="M19.9377 11C19.9377 10.6203 19.6299 10.3125 19.2502 10.3125H2.75024C2.37056 10.3125 2.06274 10.6203 2.06274 11C2.06274 11.3797 2.37056 11.6875 2.75024 11.6875H19.2502C19.6299 11.6875 19.9377 11.3797 19.9377 11Z"
                fill="currentcolor"
              />
              <path
                id="Vector_2"
                d="M8.73638 5.01386C8.46788 4.74538 8.03256 4.74538 7.76407 5.01386L2.26407 10.5139C1.99558 10.7824 1.99558 11.2176 2.26407 11.4861L7.76407 16.9861C8.03256 17.2546 8.46788 17.2546 8.73638 16.9861C9.00487 16.7176 9.00487 16.2824 8.73638 16.0139L3.72248 11L8.73638 5.98613C9.00487 5.71765 9.00487 5.28234 8.73638 5.01386Z"
                fill="currentcolor"
              />
            </g>
          </g>
        </svg>
      </button>
    );
  };
  return (
    <section className="py-12 w-full bg-white relative">
      <div className="container mx-auto px-4 flex flex-col gap-4">
        <h2 className="text-3xl py-4 text-center">Site Progress</h2>
        <Carousel
          renderArrowNext={nextArrow}
          renderArrowPrev={prevArrow}
          showArrows={true}
          className="w-full"
          autoPlay={false}
          verticalSwipe="standard"
          swipeable={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={false}
          showStatus={false}
          centerMode={windowWidth > 1024}
          centerSlidePercentage={30}
          selectedItem={0}
        >
          {data.site_progress_images.map((gal, i) => {
            return (
              <div
                onClick={() => {
                  setOpen(true);
                  setSelected(i);
                }}
                className="w-full h-[450px] relative"
              >
                {gal.title && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 shadow shadow-stone-700 bg-white px-4 py-2 z-10 w-auto">
                    {gal.title}
                  </div>
                )}
                <Image
                  src={gal.image}
                  fill
                  className="object-cover w-full px-4"
                  alt="Site-Progress"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <Popup
        modal
        overlayStyle={{ background: "rgba(0,0,0,0.8)" }}
        lockScroll
        open={open}
        onClose={() => setOpen(false)}
      >
        <div className="w-[80vw] h-[80vh] relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute z-10 right-2 top-2 w-6 h-6 rounded-full bg-primary text-white text-xs"
          >
            X
          </button>
          <Carousel
            renderArrowNext={nextArrow}
            renderArrowPrev={prevArrow}
            showArrows={true}
            className="w-full h-full"
            autoPlay={false}
            verticalSwipe="standard"
            swipeable={true}
            preventMovementUntilSwipeScrollTolerance={true}
            swipeScrollTolerance={50}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            selectedItem={selected}
          >
            {data.site_progress_images.map((gal, i) => {
              return (
                <div className="w-full h-[80vh] relative">
                  {gal.title && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 shadow shadow-stone-700 bg-white px-4 py-2 z-10 w-auto">
                      {gal.title}
                    </div>
                  )}
                  <Image
                    src={gal.image}
                    fill
                    className="object-contain w-full"
                    alt="Site-Progress"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </Popup>
    </section>
  );
}
