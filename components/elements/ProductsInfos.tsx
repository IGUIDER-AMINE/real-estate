import React from "react";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description: string;
  image: string;
}

const ProductsInfos = ({ id, title, description, image }: Props) => {
  return (
    <div className="space-y-16">
      <hr className="bg-[#F1F1F1] h-[2.5px]" />
      <div className="flex items-center justify-between space-x-2">
        <div className="space-y-6">
          <div className="text-2xl font-titleFont font-bold text-slate-800">
            {id}
          </div>
          <h1 className="text-3xl font-titleFont font-bold text-slate-800">
            {title}
          </h1>
          <p className="text-slate-800 font-medium lg:max-w-[65%]">
            {description}
          </p>
          <button className="border p-4 font-semibold text-slate-800  border-slate-800 rounded-full">
            Learn More
          </button>
        </div>
        <div className="hidden md:block min-h-[300px] lg:min-h-[500px] min-w-[50%] relative">
          <Image
            src={image}
            alt={title}
            className="object-cover rounded-2xl h-full"
            quality={100}
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsInfos;
