import { useState } from "react";

import NavItem from "./NavItem.jsx";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Contant", id: "contact" },
];

const Nav = (props) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(null);

  const toggleHamburger = () => {
    setHamburgerOpen(hamburgerOpen === null ? true : !hamburgerOpen);
  };

  const OpenedHamburgerMenu = () => {
    return (
      <div
        className={`fixed w-full h-screen flex flex-col top-0 left-0 bg-bgDark 
        ${hamburgerOpen !== true ? "translate-x-full" : ""} ${
          hamburgerOpen === true
            ? "translate-x-0 animate-menuSlideIn"
            : hamburgerOpen === false
            ? "translate-x-full animate-menuSlideOut"
            : ""
        }`}
      >
        <div className="h-20 flex items-center self-end mr-16">
          <button onClick={toggleHamburger}>
            <img src="../../src/assets/icons/close-icon.svg" alt="Close" />
          </button>
        </div>
        <ul className="flex-auto flex flex-col justify-center items-center gap-4 text-white text-2xl font-semibold">
          {navItems.map((navItem, index) => (
            <NavItem
              name={navItem.name}
              id={navItem.id}
              fontSize={"2xl"}
              closeHamburger={toggleHamburger}
              key={index}
            />
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className={`hidden md:block`}>
        <ul className="flex gap-4">
          {navItems.map((navItem, index) => (
            <NavItem
              name={navItem.name}
              id={navItem.id}
              fontSize={"lg"}
              key={index}
            />
          ))}
        </ul>
      </div>
      <div className="md:hidden" onClick={toggleHamburger}>
        {props.hamburgerMenu}
      </div>
      <OpenedHamburgerMenu />
    </>
  );
};

export default Nav;
