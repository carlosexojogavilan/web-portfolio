const NavItem = ({ name, id, fontSize, closeHamburger }) => {
  return (
    <li
      className={`text-white text-${fontSize} font-medium hover:text-primary cursor-pointer transition-all duration-300`}
      onClick={closeHamburger}
    >
      <a href={`#${id}`}>{name}</a>
    </li>
  );
};

export default NavItem;
