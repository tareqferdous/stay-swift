import Link from "next/link";
import { CgClose } from "react-icons/cg";

const MobileNav = ({ showNav, handleShowNav }) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed ${navOpen} top-0 left-0 right-0 inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* Navlinks */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-700 space-y-6 z-[1050]`}
      >
        <Link href="">
          <p className="  text-base ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Recommended Places
          </p>
        </Link>

        <Link href="">
          <p className="  text-base ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            About Us
          </p>
        </Link>

        <Link href="">
          <p className="  text-base ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Contact Us
          </p>
        </Link>

        <Link href="">
          <p className="  text-base ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] font-medium w-fit block ">
            Bookings
          </p>
        </Link>

        {/* Close Button */}
        <CgClose
          onClick={handleShowNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
        />

        <Link
          href="/login"
          className="md:px-10 w-11/12 mx-auto fixed bottom-5 left-3 md:py-2.5 px-5 py-2 text-black  font-semibold text-base bg-gray-100 hover:bg-rose-700 transition-all duration-200 rounded-lg"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
