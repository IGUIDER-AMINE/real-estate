import React from "react";
import { PiNotePencilBold } from "react-icons/pi";
import { IoRocketSharp } from "react-icons/io5";
import { BiHomeSmile } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const Advantages = () => {
  return (
    <section id="HowItWorks" className="space-y-14 container mx-auto px-4">
      <div className="flex flex-col md:flex-row gap-2 justify-between">
        <h1 className="font-bold font-titleFont text-2xl xl:text-3xl md:max-w-[50%] ">
          Unlock access to 500+ cites with our membership
        </h1>
        <button className="font-semibold flex items-center gap-x-2">
          View member preks <BsArrowRight />
        </button>
      </div>
      <div
        className="flex flex-col flex-wrap md:flex-nowrap md:flex-row gap-x-8
       lg:gap-x-24 gap-y-4 justify-between"
      >
        <div className="space-y-3 ">
          <div className="rounded-full flex items-center justify-center w-16 h-16 bg-[#C2F4FF]">
            <PiNotePencilBold className="w-7 h-7 text-[#72AACB]" />
          </div>
          <h2 className="font-titleFont font-semibold text-[20px]">
            Release rental limitations
          </h2>
          <p className="text-slate-800 font-medium">
            Choose flexible stays: from a month to years. Move homes easily
            within Landing network with 2 weeks&apos;notice.
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-full flex items-center justify-center w-16 h-16 bg-[#C2F4FF]">
            <IoRocketSharp className="w-7 h-7 text-[#72AACB]" />
          </div>
          <h2 className="font-titleFont font-semibold text-[20px]">
            Quick, simple, full online
          </h2>
          <p className="text-slate-800 font-medium">
            Experience seamless online bookings for your next home. Skip the
            paperwork nightmares and move in minutes.
          </p>
        </div>
        <div className="space-y-3">
          <div className="rounded-full flex items-center justify-center w-16 h-16 bg-[#C2F4FF]">
            <BiHomeSmile className="w-7 h-7 text-[#72AACB]" />
          </div>
          <h2 className="font-titleFont font-semibold text-[20px]">
            Find comfort everywhere
          </h2>
          <p className="text-slate-800 font-medium">
            Enjoy fully-equipped homes for effortless settling. Discover
            meticulous spaces that leave no detail unattended..
          </p>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
