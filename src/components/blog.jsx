import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function () {
  const [windowWidth,setWindowWidth] = useState()
    useEffect(()=>{
        setWindowWidth(window.screen.width)
    })
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
    <section className="w-full lg:pb-6 bg-secondary pt-12">
      <div className="flex flex-col gap-4 justify-center items-center container mx-auto px-4">
        <h1 className="text-3xl uppercase">BLOGS</h1>
      <Carousel
        swipeable={true}
        infiniteLoop={false}
        centerSlidePercentage={40}
        showStatus={false}
        selectedItem={0}
        preventMovementUntilSwipeScrollTolerance={true}
        swipeScrollTolerance={50}
        renderIndicator={indicator}
        verticalSwipe="standard"
        centerMode={windowWidth>1024?true:false}
      >
        <div className="flex flex-col gap-0 card overflow-hidden bg-[#fff] rounded-lg shadow-lg relative mx-4 mb-12 lg:mb-12">
          <div className="relative min-h-[300px]">
            <Image
              src={"/images/blog-cover.jpeg"}
              fill
              quality={100}
              alt="Legendary Logo"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <p className="bg-[#EDE8DC] lg:text-base text-xs px-2 rounded-md">
                11 May 2023
              </p>
              <p className="lg:font-medium lg:text-base uppercase lg:pr-8">
                the hindu
              </p>
            </div>
            <p className="capitalize lg:leading-6 lg:text-base text-xs text-left">
              The gracious entry foyer leads to an open kitchen with custom
              stained walnut cabinetry, granite countertops, and a built-in
              dining banquette
            </p>
            <div className="flex flex-row items-center gap-1">
              <p className="text-primary lg:font-medium lg:text-lg lg:px-2 capitalize">
                Read More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 28 24"
                fill="none"
                className="h-3"
              >
                <path
                  d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM0 13.5H26V10.5H0V13.5Z"
                  fill="#DBB268"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0 card overflow-hidden bg-[#fff] rounded-lg shadow-lg relative mx-4 mb-12 lg:mb-12">
          <div className="relative min-h-[300px]">
            <Image
              src={"/images/blog-cover.jpeg"}
              fill
              quality={100}
              alt="Legendary Logo"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <p className="bg-[#EDE8DC] lg:text-base text-xs px-2 rounded-md">
                11 May 2023
              </p>
              <p className="lg:font-medium lg:text-base uppercase lg:pr-8">
                the hindu
              </p>
            </div>
            <p className="capitalize lg:leading-6 lg:text-base text-xs text-left">
              The gracious entry foyer leads to an open kitchen with custom
              stained walnut cabinetry, granite countertops, and a built-in
              dining banquette
            </p>
            <div className="flex flex-row items-center gap-1">
              <p className="text-primary lg:font-medium lg:text-lg lg:px-2 capitalize">
                Read More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 28 24"
                fill="none"
                className="h-3"
              >
                <path
                  d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM0 13.5H26V10.5H0V13.5Z"
                  fill="#DBB268"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-0 card overflow-hidden bg-[#fff] rounded-lg shadow-lg relative mx-4 mb-12 lg:mb-12">
          <div className="relative min-h-[300px]">
            <Image
              src={"/images/blog-cover.jpeg"}
              fill
              quality={100}
              alt="Legendary Logo"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 p-4">
            <div className="flex lg:flex-row flex-col items-start gap-4">
              <p className="bg-[#EDE8DC] lg:text-base text-xs px-2 rounded-md">
                11 May 2023
              </p>
              <p className="lg:font-medium lg:text-base uppercase lg:pr-8">
                the hindu
              </p>
            </div>
            <p className="capitalize lg:leading-6 lg:text-base text-xs text-left">
              The gracious entry foyer leads to an open kitchen with custom
              stained walnut cabinetry, granite countertops, and a built-in
              dining banquette
            </p>
            <div className="flex flex-row items-center gap-1">
              <p className="text-primary lg:font-medium lg:text-lg lg:px-2 capitalize">
                Read More
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="20"
                viewBox="0 0 28 24"
                fill="none"
                className="h-3"
              >
                <path
                  d="M27.0607 13.0607C27.6464 12.4749 27.6464 11.5251 27.0607 10.9393L17.5147 1.3934C16.9289 0.807611 15.9792 0.807611 15.3934 1.3934C14.8076 1.97919 14.8076 2.92893 15.3934 3.51472L23.8787 12L15.3934 20.4853C14.8076 21.0711 14.8076 22.0208 15.3934 22.6066C15.9792 23.1924 16.9289 23.1924 17.5147 22.6066L27.0607 13.0607ZM0 13.5H26V10.5H0V13.5Z"
                  fill="#DBB268"
                />
              </svg>
            </div>
          </div>
        </div>

        

          
      </Carousel>
      </div>
    </section>
  );
}
