import React from "react";

const Footer = () => {
  return (
    <section className="container mx-auto p-4">
      <div className="flex flex-col xl:flex-row gap-2 justify-between">
        <div className="flex flex-col md:flex-row gap-4 md:items-end">
          <div>
            <div className="text-standardcolor font-medium">EMAIL</div>
            <div className="text-slate-800 font-bold">
              Hello@propertymaxestate.com
            </div>
          </div>
          <div>
            <div className="text-standardcolor font-medium">Instagram</div>
            <div className="text-slate-800 font-bold">@propertymax_estate</div>
          </div>
          <div>
            <div className="text-slate-800 font-bold">
              Pinterest: @propertymax
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-end">
          <div>
            <div className="text-standardcolor font-medium">LEGAL</div>
            <div className="text-slate-800 font-bold">Privacy Policy</div>
          </div>
          <div>
            <div className="text-slate-800 font-bold">Term of Use</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
