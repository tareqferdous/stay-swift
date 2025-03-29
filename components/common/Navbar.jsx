import Link from "next/link";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { TbAirBalloon } from "react-icons/tb";

const Navbar = ({ handleShowNav }) => {
  return (
    <div className="transition-all duration-200 h-[12vh] z-[1000] fixed w-full">
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
            <TbAirBalloon className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl md:text-2xl text-white uppercase font-bold">
            Tripi
          </h1>
        </Link>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          <Link href="">
            <p className="relative text-white text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Home
            </p>
          </Link>

          <Link href="">
            <p className="relative text-white text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Home
            </p>
          </Link>

          <Link href="">
            <p className="relative text-white text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Home
            </p>
          </Link>

          <Link href="">
            <p className="relative text-white text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Home
            </p>
          </Link>

          <Link href="">
            <p className="relative text-white text-base font-medium w-fit block after:block after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right">
              Home
            </p>
          </Link>
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg">
            Login
          </button>
          {/* Burger Menu */}
          <HiBars3BottomLeft
            onClick={handleShowNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
