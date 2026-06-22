import Image from "next/image";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function () {
  const [windowWidth,setWindowWidth] = useState()
    useEffect(()=>{
        setWindowWidth(window.screen.width)
    })
  const prevArrow = (onClickHandler, hasPrev, label)=>{
    return (
        <button type="button" onClick={onClickHandler} title={label} className={`z-10 absolute ${hasPrev?'':'hidden'} top-1/2 -translate-y-1/2 left-0 my-auto p-4 rounded-full w-[80px] h-[80px] flex items-center justify-center`}>
          <Image src={"/images/slider-arrow-right.png"} width={150} height={150} className="w-full h-auto -scale-x-100" />
         </button>
    )
}
const nextArrow = (onClickHandler, hasNext, label)=>{
    return (
         <button type="button" onClick={onClickHandler} title={label} className={`z-10 absolute ${hasNext?'':'hidden'} top-1/2 -translate-y-1/2 right-0 m-auto p-4 rounded-full w-[80px] h-[80px] flex items-center justify-center`}>
            <Image src={"/images/slider-arrow-right.png"} width={150} height={150} className="w-full h-auto" />
        </button>
    )
}
  return (
    <section className="w-full py-12 bg-[url('/images/about-bg.jpeg')] bg-repeat">
        <div className="flex flex-col gap-8 container px-4 mx-auto">
        <h3 className="text-3xl text-center">OUR NEWS & UPDATE</h3>
        <Carousel
          renderArrowNext={nextArrow}
          renderArrowPrev={prevArrow}
          infiniteLoop={true}
          showArrows={true}
          swipeable={true}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
          className="w-full p-0 m-0"
          autoPlay={true}
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={50}
          centerMode={windowWidth>1024?true:false}
          centerSlidePercentage={34}
        >
          <div className="flex flex-col gap-0 rounded shadow bg-white lg:ml-4 items-start justify-start overflow-hidden my-6">
            <div className="relative min-h-[300px] w-full">
              <Image src={"/images/news.jpg"} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 items-start justify-start bg-white">
              <span className="text-custom2 text-sm tracking-[20px]">TIPS</span>
              <h4 className="text-left lg:text-xl">Buying House in Chennai - Just got Easier</h4>
              <div className="text-xs flex flex-col gap-px items-start">
                <p>Emily Smith</p>
                <p>May 15, 2023</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-0 rounded shadow bg-white lg:ml-4 items-start justify-start overflow-hidden my-6">
            <div className="relative min-h-[300px] w-full">
              <Image src={"/images/news.jpg"} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 items-start justify-start bg-white">
              <span className="text-custom2 text-sm tracking-[20px]">TIPS</span>
              <h4 className="text-left lg:text-xl">Buying House in Chennai - Just got Easier</h4>
              <div className="text-xs flex flex-col gap-px items-start">
                <p>Emily Smith</p>
                <p>May 15, 2023</p>
              </div>
            </div>
          </div> 
          <div className="flex flex-col gap-0 rounded shadow bg-white lg:ml-4 items-start justify-start overflow-hidden my-6">
            <div className="relative min-h-[300px] w-full">
              <Image src={"/images/news.jpg"} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 items-start justify-start bg-white">
              <span className="text-custom2 text-sm tracking-[20px]">TIPS</span>
              <h4 className="text-left lg:text-xl">Buying House in Chennai - Just got Easier</h4>
              <div className="text-xs flex flex-col gap-px items-start">
                <p>Emily Smith</p>
                <p>May 15, 2023</p>
              </div>
            </div>
          </div> 
          <div className="flex flex-col gap-0 rounded shadow bg-white lg:ml-4 items-start justify-start overflow-hidden my-6">
            <div className="relative min-h-[300px] w-full">
              <Image src={"/images/news.jpg"} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 items-start justify-start bg-white">
              <span className="text-custom2 text-sm tracking-[20px]">TIPS</span>
              <h4 className="text-left lg:text-xl">Buying House in Chennai - Just got Easier</h4>
              <div className="text-xs flex flex-col gap-px items-start">
                <p>Emily Smith</p>
                <p>May 15, 2023</p>
              </div>
            </div>
          </div> 
          <div className="flex flex-col gap-0 rounded shadow bg-white lg:ml-4 items-start justify-start overflow-hidden my-6">
            <div className="relative min-h-[300px] w-full">
              <Image src={"/images/news.jpg"} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 items-start justify-start bg-white">
              <span className="text-custom2 text-sm tracking-[20px]">TIPS</span>
              <h4 className="text-left lg:text-xl">Buying House in Chennai - Just got Easier</h4>
              <div className="text-xs flex flex-col gap-px items-start">
                <p>Emily Smith</p>
                <p>May 15, 2023</p>
              </div>
            </div>
          </div> 
          <div className="flex flex-col gap-0 rounded shadow bg-white lg:ml-4 items-start justify-start overflow-hidden my-6">
            <div className="relative min-h-[300px] w-full">
              <Image src={"/images/news.jpg"} fill className="object-cover" />
            </div>
            <div className="flex flex-col gap-4 px-2 py-4 items-start justify-start bg-white">
              <span className="text-custom2 text-sm tracking-[20px]">TIPS</span>
              <h4 className="text-left lg:text-xl">Buying House in Chennai - Just got Easier</h4>
              <div className="text-xs flex flex-col gap-px items-start">
                <p>Emily Smith</p>
                <p>May 15, 2023</p>
              </div>
            </div>
          </div>  
          

          
        </Carousel>
      </div>
    </section>
  );
}
