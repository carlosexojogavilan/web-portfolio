const HamburgerMenu = () => {
  return (
    <div className="w-6 h-6 flex flex-col justify-around">
      <div className="w-6 h-[2px] rounded-[10px] origin-center transition-all bg-white"></div>
      <div className="w-6 h-[2px] rounded-[10px] origin-center transition-all bg-white"></div>
      <div className="w-6 h-[2px] rounded-[10px] origin-center transition-all bg-white"></div>
    </div>
  );
};

export default HamburgerMenu;
