"use client";

import { MenuIcon } from "lucide-react";
import React, { useState } from "react";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div className="sm:hidden ">
      <MenuIcon
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-zinc-700"
      />
      {isOpen ? (
        <div className="fixed animate-in slide-in-from-to-5 fade-in-20 inset-0 z-0 w-full">
          <ul className=""></ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
