import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Popup from "reactjs-popup";

export default function ({data}) {
  const [windowWidth, setWindowWidth] = useState();
  const [openPopUp, setOpenPopUp] = useState(false);
  const prevArrow = (onClickHandler, hasPrev, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="flex z-10 absolute top-1/2 bg-primary p-2 left-0 rounded-full w-12 h-12 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <circle cx="24.5" cy="24.5" r="24.5" fill="white" />
          <path
            d="M27 31.92L20.48 25.4C19.71 24.63 19.71 23.37 20.48 22.6L27 16.08"
            fill="white"
          />
          <path
            d="M27 31.92L20.48 25.4C19.71 24.63 19.71 23.37 20.48 22.6L27 16.08"
            stroke="#44465B"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  };
  const nextArrow = (onClickHandler, hasNext, label) => {
    return (
      <button
        type="button"
        onClick={onClickHandler}
        className="flex z-10 absolute top-1/2 bg-primary right-0 p-2 rounded-full w-12 h-12 items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
        >
          <circle
            cx="24.5"
            cy="24.5"
            r="24.5"
            transform="rotate(-180 24.5 24.5)"
            fill="white"
          />
          <path
            d="M22 17.08L28.52 23.6C29.29 24.37 29.29 25.63 28.52 26.4L22 32.92"
            fill="white"
          />
          <path
            d="M22 17.08L28.52 23.6C29.29 24.37 29.29 25.63 28.52 26.4L22 32.92"
            stroke="#CCA557"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    );
  };
  useEffect(() => {
    setWindowWidth(window.screen.width);
  });
  const indicator = (onClickHandler, isSelected, index, label) => {
    if (isSelected) {
      return <li className="w-12 h-1 inline-block ml-2 bg-primary"></li>;
    }

    return (
      <li
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        value={index}
        key={index}
        role="button"
        tabIndex={0}
        className="w-12 h-1 inline-block ml-2 bg-[#B6B6B6]"
      ></li>
    );
  };

  return (
    <section className="container relative mx-auto px-4 w-full pb-12">
      {/* <Carousel
        renderIndicator={indicator}
        showArrows={true}
        className=""
        width={"100%"}
        autoPlay={false}
        verticalSwipe="standard"
        swipeable={true}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        showIndicators={true}
        showThumbs={false}
        infiniteLoop={true}
        showStatus={false}
        selectedItem={0}
        interval={5000}
        centerMode={windowWidth > 1024 ? true : false}
        centerSlidePercentage={40}
      > */}

      <div className="grid lg:grid-cols-3 gap-8">
       {
        data.floorPlan.map((item,idx)=>(
          <Popup key={idx}
          trigger={
            <div className="relative w-full min-h-[400px] cursor-pointer box-shadow rounded">
              <Image
                src={item}
                fill
                className="object-contain lg:object-fill cursor-pointer py-4"
                alt="Platina Floor Plan"
              />
            </div>
          }
          modal
          overlayStyle={{ background: "rgba(0,0,0,0.8" }}
          position={"center center"}
        >
          <div className="w-[100vw] lg:w-[70vw] h-[50vh] lg:h-screen">
            <Image
              src={item}
              fill
              className="object-contain lg:object-scale-down  py-4"
              alt="Platina Floor Plan"
            />
          </div>
        </Popup>
        ))
       }

        {/* <Popup
          trigger={
            <div className="relative w-full min-h-[400px] cursor-pointer box-shadow rounded">
              <Image
                src={"/images/platina-vaastu-floor-plan.jpg"}
                fill
                className="object-contain lg:object-cover py-4 cursor-pointer"
                alt="Platina Floor Plan"
              />
            </div>
          }
          modal
          overlayStyle={{ background: "rgba(0,0,0,0.8" }}
          lockScroll
          position={"center center"}
        >
          <div className="w-[100vw] lg:w-[70vw] h-[50vh] lg:h-screen">
            <Image
              src={"/images/platina-vaastu-floor-plan.jpg"}
              fill
              className="object-cover py-4 cursor-pointer"
              alt="Platina Floor Plan"
            />
          </div>
        </Popup>

        <Popup
          trigger={
            <div className="relative w-full min-h-[400px] cursor-pointer box-shadow rounded">
              <Image
                src={"/images/platina-location.jpg"}
                fill
                className="object-contain lg:object-cover py-4 cursor-pointer"
                alt="Platina Floor Plan"
              />
            </div>
          }
          modal
          overlayStyle={{ background: "rgba(0,0,0,0.8" }}
          lockScroll
          position={"center center"}
        >
          <div className="w-[100vw] lg:w-[70vw] h-[50vh] lg:h-screen">
            <Image
              src={"/images/platina-location.jpg"}
              fill
              className="object-cover py-4 cursor-pointer"
              alt="Platina Floor Plan"
            />
          </div>
        </Popup> */}
      </div>
      {/* </Carousel> */}
    </section>
  );
}
