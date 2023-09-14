import { useState } from "react";

import NavItem from "./NavItem";
import HamburgerMenu from "./HamburgerMenu.jsx";

const navItems = ["Home", "About", "Work", "Contact"];

const Nav = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    console.log("Hi");
    setHamburgerOpen(!hamburgerOpen);
  };

  const OpenedHamburgerMenu = () => {
    return (
      <div className="absolute z-10 min-h-screen top-0 left-0 right-0 bg-slate-800 flex flex-col">
        <button
          className="self-end py-8 px-10 text-5xl"
          onClick={toggleHamburger}
        >
          X
        </button>
        <ul className="flex-auto flex flex-col justify-center items-center gap-4 text-white font-semibold text-2xl">
          {navItems.map((navItem, index) => (
            <NavItem name={navItem} key={index} />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className={`hidden md:block`}>
        <ul className="flex gap-2">
          {navItems.map((navItem, index) => (
            <NavItem name={navItem} key={index} />
          ))}
        </ul>
      </div>
      <div className="md:hidden" onClick={toggleHamburger}>
        <HamburgerMenu />
      </div>
      {hamburgerOpen && <OpenedHamburgerMenu />}
    </>
  );
};

export default Nav;
