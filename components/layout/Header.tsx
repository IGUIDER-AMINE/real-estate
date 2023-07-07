import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full text-[15px] py-4 flex items-center justify-between container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl font-titleFont">Propertymax</span>
      </motion.div>
      <div>
        <ul className="flex gap-x-5 text-[#7F7F80]">
          <li>
            <Link legacyBehavior href="#home">
              how it works
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#home">
              About Us
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#home">
              Our Agent
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#home">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <button className="border w-[170px] border-slate-600 p-2 rounded-full">
          Free Consultation
        </button>
        <button className="border w-[170px] bg-[#0397F9] text-white p-2 rounded-full">
          Configure now
        </button>
      </div>
    </div>
  );
};

export default Header;
