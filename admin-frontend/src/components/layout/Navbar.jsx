const Navbar = () => {
  return (
    <nav className="h-16 md:h-20 bg-white border-b shadow-sm flex items-center px-4 md:px-8">
      <div className="max-w-7xl w-full mx-auto pl-12 sm:pl-14 md:pl-0">
        <h3
          className="
            text-lg 
            sm:text-xl 
            md:text-2xl 
            font-bold 
            text-gray-800
            truncate
          "
        >
          Content Management System
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;