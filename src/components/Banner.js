import React, { lazy } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Banner() {
  return (
    <div className="w-full h-full relative">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        stopOnHover={false}
        interval={5000}
      >
        <div className="w-full h-full">
          <img
            loading="lazy"
            src="/images/carousel/carousel_2.jpg"
            width={1600}
            height={700}
            className="object-cover"
            alt=""
          ></img>
        </div>
        <div className="w-full h-full">
          <img
            loading="lazy"
            src="/images/carousel/carousel_3.jpg"
            width={1600}
            height={700}
            className="object-cover"
            alt=""
          ></img>
        </div>

        <div className="w-full h-full ">
          <img
            loading="lazy"
            src="/images/carousel/carousel_4.jpg"
            width={1600}
            height={700}
            className="object-cover"
            alt=""
          ></img>
        </div>
        <div className="w-full h-full ">
          <img
            loading="lazy"
            src="/images/carousel/carousel_5.jpg"
            width={1600}
            height={700}
            className="object-cover"
            alt=""
          ></img>
        </div>
        <div className="w-full h-full ">
          <img
            loading="lazy"
            src="/images/carousel/carousel_6.jpg"
            width={1600}
            height={700}
            className="object-cover"
            alt=""
          ></img>
        </div>
        <div className="w-full h-full">
          <img
            loading="lazy"
            src="/images/carousel/carousel_7.jpg"
            width={1600}
            height={700}
            className="object-cover"
            alt=""
          ></img>
        </div>
      </Carousel>
    </div>
  );
}
