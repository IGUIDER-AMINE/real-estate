import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between bg-red-200 container mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-3xl font-titleFont">IGUIDER</span>
      </motion.div>
      <div className="inline-flex">
        <ul className="flex gap-x-5">
          <li>
            <Link legacyBehavior href="#home">
              home
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#home">
              home
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#home">
              home
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="#home">
              home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
