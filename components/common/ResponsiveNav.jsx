"use client";
import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(!showNav);
  return (
    <div>
      <Navbar handleShowNav={handleShowNav} />
      <MobileNav showNav={showNav} handleShowNav={handleShowNav} />
    </div>
  );
};

export default ResponsiveNav;
