import React from "react";
import Image from "next/image";

const OurSolutions = () => {
  return (
    <section id="ContactUs" className="bg-[#F3F5F7] ">
      <div className="flex container mx-auto px-4 items-center justify-between space-x-2">
        <div className="space-y-6 py-4">
          <h1 className="text-3xl font-titleFont font-bold text-slate-800">
            We Provide the Right Real Estate Solutions
          </h1>
          <p className="text-slate-800 font-medium lg:max-w-[65%]">
            Trust us to provide the right solutions for your real estate
            journey.
          </p>
          <div className="bg-white p-1 max-w-[500px] rounded-full flex text-[12px] md:text-[16px] items-center justify-between">
            <input
              type="text"
              className="pl-4 border-none"
              placeholder="Enter your email..."
            />
            <button className="border px-4 py-3 font-semibold text-white bg-standardBlue rounded-full">
              Send Email
            </button>
          </div>
        </div>
        <div className="hidden lg:flex space-x-4 min-w-[50%] overflow-hidden max-h-[710px] relative">
          <div className="space-y-4">
            <Image
              src="/asstes/images/img1.jpg"
              alt="image estate"
              className="object-cover rounded-xl"
              quality={100}
              width={300}
              height={300}
            />
            <Image
              src="/asstes/images/img13.jpg"
              alt="image estate"
              className="object-cover rounded-xl"
              quality={100}
              width={300}
              height={500}
            />
            <Image
              src="/asstes/images/img10.jpg"
              alt="image estate"
              className="object-cover rounded-xl"
              quality={100}
              width={300}
              height={200}
            />
          </div>
          <div className="space-y-4">
            <Image
              src="/asstes/images/img4.jpg"
              alt="image estate"
              className="object-cover rounded-b-xl"
              quality={100}
              width={300}
              height={300}
            />
            <Image
              src="/asstes/images/img11.jpg"
              alt="image estate"
              className="object-cover rounded-xl"
              quality={100}
              width={300}
              height={200}
            />
            <Image
              src="/asstes/images/img12.jpg"
              alt="image estate"
              className="object-cover rounded-xl"
              quality={100}
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
