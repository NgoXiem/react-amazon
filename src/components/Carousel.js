import React from "react";
import Image from "next/dist/client/image";
export default function Carousel() {
  return (
    <div className="w-full h-full relative">
      <div className="w-full h-full absolute top-0 right-0 left-0">
        <Image
          src="/images/carousel/carousel_2.jpg"
          width={1600}
          height={700}
          className="object-cover "
          alt=""
        ></Image>
      </div>
      <div className="w-full h-full absolute top-0 right-0 left-0">
        <Image
          src="/images/carousel/carousel_3.jpg"
          width={1600}
          height={700}
          className="object-cover  "
          alt=""
        ></Image>
      </div>

      <div className="w-full h-full absolute top-0 right-0 left-0">
        <Image
          src="/images/carousel/carousel_4.jpg"
          width={1600}
          height={700}
          className="object-cover "
          alt=""
        ></Image>
      </div>
      <div className="w-full h-full absolute top-0 right-0 left-0">
        <Image
          src="/images/carousel/carousel_5.jpg"
          width={1600}
          height={700}
          className="object-cover "
          alt=""
        ></Image>
      </div>
      <div className="w-full h-full absolute top-0 right-0 left-0">
        <Image
          src="/images/carousel/carousel_6.jpg"
          width={1600}
          height={700}
          className="object-cover "
          alt=""
        ></Image>
      </div>
      <div className="w-full h-full absolute top-0 right-0 left-0">
        <Image
          src="/images/carousel/carousel_7.jpg"
          width={1600}
          height={700}
          className="object-cover "
          alt=""
        ></Image>
      </div>
    </div>
  );
}
