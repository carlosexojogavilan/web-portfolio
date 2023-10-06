import { useState } from "react";

import NavItem from "./NavItem.jsx";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Contact", id: "contact" },
];

const Nav = ({ hamburgerMenu, themeToggler }) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(null);

  const toggleHamburger = () => {
    setHamburgerOpen(hamburgerOpen === null ? true : !hamburgerOpen);
  };

  const OpenedHamburgerMenu = () => {
    return (
      <div
        className={`absolute w-full h-screen flex flex-col top-0 left-0 bg-bgLight dark:bg-bgDark
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
            <img src="./assets/icons/close-icon.svg" alt="Close" />
          </button>
        </div>
        <ul className="flex-auto flex flex-col justify-center items-center gap-4 text-black dark:text-white text-2xl font-semibold">
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
      <div className={`hidden md:flex md:gap-8`}>
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
        {hamburgerMenu}
      </div>
      {themeToggler}
      <OpenedHamburgerMenu />
    </>
  );
};

export default Nav;
