"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";

export const image = [
    {src : "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1710347339865_hp2.jpg"},
    {src : "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1710244285348_HOMEPAGE2.jpg"}
  ];
export default function Swipers() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {image.map((item, index) => (
          <SwiperSlide className="rounded-lg" key={index}>
            <Image width={2000} height={1000} alt="banner" src={item.src}
            />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
