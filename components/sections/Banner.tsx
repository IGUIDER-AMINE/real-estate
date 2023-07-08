import React from "react";
import { motion } from "framer-motion";
import { estates_data } from "@/util/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const Banner = () => {
  return (
    <div id="Banner" className="space-y-8 px-4 lg:px-0">
      <div className="container mx-auto lg:px-24">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="font-titleFont text-[#27292D] text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-medium"
        >
          Get your <span className="font-bold">dream home</span> online,
          hassle-free browsing with our expert guidance.
        </motion.h1>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Swiper
          slidesPerView={"auto"}
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
          {estates_data?.map((estate, index) => {
            return (
              <SwiperSlide key={index} className="space-y-2">
                <div>
                  <Image
                    src={estate?.image}
                    alt={estate?.title}
                    className="object-cover rounded-2xl"
                    quality={100}
                    priority
                    width={450}
                    height={450}
                  />
                </div>
                <div>
                  <h2 className="font-bold">{estate?.title}</h2>
                  <div className="text-standardcolor space-x-2 font-medium text-[14px]">
                    <span>$ {estate?.price}</span>
                    <span> or </span>
                    <span>$ {estate?.rent} /mo</span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Banner;
