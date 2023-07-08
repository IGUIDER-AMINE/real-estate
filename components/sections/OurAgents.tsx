import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { agents_data } from "@/util/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";

const OurAgents = () => {
  return (
    <section id="OurAgents" className="space-y-14 container mx-auto px-4">
      <div className="flex flex-col sm:flex-row gap-2 justify-between">
        <div className="flex flex-1 space-x-6 items-center font-titleFont">
          <h1 className="font-bold text-2xl xl:text-3xl md:max-w-[50%] ">
            Our agent
          </h1>
          <div className="border py-2 px-4 font-semibold text-slate-800  border-standardcolor/30 rounded-full">
            17
          </div>
        </div>
        <button className="font-semibold flex items-center gap-x-2">
          Our team <BsArrowRight />
        </button>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 4,
            },
          }}
        >
          {agents_data?.map((estate, index) => {
            return (
              <SwiperSlide key={index} className="space-y-2">
                <div>
                  <Image
                    src={estate?.image}
                    alt={estate?.name}
                    className="object-cover rounded-2xl max-h-[250px]"
                    quality={100}
                    priority
                    width={250}
                    height={250}
                  />
                </div>
                <div>
                  <h2 className="font-bold">{estate?.name}</h2>
                  <div className="text-standardcolor font-medium text-[14px]">
                    <span>{estate?.phone_number}</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default OurAgents;
